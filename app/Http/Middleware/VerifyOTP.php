<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VerifyOTP
{
    public function handle(Request $request, Closure $next)
    {
        if (!Auth::check()) {
            return redirect()->route('login');
        }

        if (!$request->session()->has('otp_verified')) {
            return redirect()->route('otp.verify');
        }

        return $next($request);
    }
}
