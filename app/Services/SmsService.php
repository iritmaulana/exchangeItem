<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class SmsService
{
    protected $apiKey;
    protected $baseUrl;

    public function __construct()
    {
        $this->apiKey = config('services.smsto.key');
        $this->baseUrl = 'https://api.sms.to/sms/send';
    }

    public function sendOtp(string $phone, string $otp)
    {
        return Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
            'Content-Type' => 'application/json',
        ])->post($this->baseUrl, [
            'message' => "Your OTP code is: {$otp}",
            'to' => $phone,
            'bypass_optout' => true,
            'sender_id' => 'YourApp',
        ]);
    }
}
