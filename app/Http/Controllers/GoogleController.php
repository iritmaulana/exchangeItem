<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use App\Services\OTPService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class GoogleController extends Controller
{
    protected $otpService;

    public function __construct(OTPService $otpService)
    {
        $this->otpService = $otpService;
        $this->middleware('throttle:5,1')->only(['sendOTP', 'verifyOTP']);
    }
    public function redirectToGoogle()
    {

        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $user = Socialite::driver('google')->user();


            if (empty($user->email)) {
                Log::error('Google login failed: No email provided by Google.');
                return redirect('login')->with('error', 'Google login failed. Email is required.');
            }


            $findUser = User::where('google_id', $user->id)
                ->orWhere('email', $user->email)
                ->first();

            if ($findUser) {
                if ($user->phone_number) {
                    $this->otpService->sendOTP($user->phone_number);
                    return response()->json([
                        'requires_otp' => true,
                        'user_id' => $user->id,
                    ]);
                }
                Auth::login($findUser, true);
                return redirect()->intended('/dashboard');
            } else {
                $newUser = User::create([
                    'name' => $user->name ?? 'User',
                    'email' => $user->email,
                    'google_id' => $user->id,
                    'phone' => null,
                    'password' => Hash::make('123456dummy'),
                ]);


                $newUser->sendEmailVerificationNotification();


                Auth::login($newUser, true);
                Log::info('New user created and logged in via Google:', ['user_id' => $newUser->id]);

                return redirect('/dashboard');
            }
        } catch (\Exception $e) {
            Log::error('Error during Google Login:', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);

            return redirect('login')->with('error', 'An error occurred during Google login. Please try again later.');
        }
    }

    public function verifyOTP(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'otp' => 'required|string|size:6',
        ]);

        $user = User::findOrFail($request->user_id);

        if ($this->otpService->verifyOTP($user->phone_number, $request->otp)) {
            Auth::login($user);
            return response()->json([
                'token' => $user->createToken('auth_token')->plainTextToken,
            ]);
        }

        return response()->json(['error' => 'Invalid OTP'], 422);
    }
}
