<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Services\OTPService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OTPVerificationController extends Controller
{
    protected $otpService;

    public function __construct(OTPService $otpService)
    {
        $this->otpService = $otpService;
    }

    public function show()
    {
        if (!Auth::user()) {
            return redirect()->route('login');
        }

        return Inertia::render('Auth/OTPVerification', [
            'phone' => substr(Auth::user()->phone, -4)
        ]);
    }

    public function verify(Request $request)
    {
        $request->validate([
            'otp' => 'required|digits:6'
        ]);

        $user = Auth::user();

        if ($this->otpService->verifyOTP($user->phone, $request->otp)) {
            $request->session()->put('otp_verified', true);
            return redirect()->intended('/dashboard');
        }

        return back()->withErrors([
            'otp' => 'The OTP code is invalid or expired.'
        ]);
    }

    public function resend()
    {

        $user = Auth::user();
        $result = $this->otpService->generateAndSendOTP($user);
        dd($result);
        if ($result['success']) {
            return back()->with('message', 'New OTP has been sent.');
        }


        return back()->withErrors([
            'error' => 'Failed to send new OTP. Please try again.'
        ]);
    }
}
