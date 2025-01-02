<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Twilio\Rest\Client;
use Exception;
use Illuminate\Support\Facades\Log;

class OTPService
{
    protected $twilioClient;
    const OTP_LENGTH = 6;
    const OTP_VALIDITY_MINUTES = 5;

    public function __construct()
    {
        $this->twilioClient = new Client(
            config('services.twilio.sid'),
            config('services.twilio.token')
        );
    }

    public function generateAndSendOTP(User $user): array
    {
        try {
            $otp = $this->generateOTP();
            $this->storeOTP($user->phone, $otp);
            $this->twilioClient->messages->create(
                $user->phone,
                array(
                    'from' => config('services.twilio.from'),
                    'body' => "Your login OTP is: {$otp}. Valid for " . self::OTP_VALIDITY_MINUTES . " minutes."
                )
            );

            return ['success' => true];
        } catch (Exception $e) {
            Log::error('OTP sending failed: ' . $e->getMessage());
            return ['success' => false, 'error' => $e->getMessage()];
        }
    }

    public function generateOTP(): string
    {
        return str_pad((string)random_int(0, 999999), self::OTP_LENGTH, '0', STR_PAD_LEFT);
    }

    public function storeOTP(string $phone, string $otp): void
    {
        Cache::put(
            $this->getCacheKey($phone),
            $otp,
            now()->addMinutes(self::OTP_VALIDITY_MINUTES)
        );
    }

    public function verifyOTP(string $phone, string $otp): bool
    {
        $storedOTP = Cache::get($this->getCacheKey($phone));

        if ($storedOTP && $storedOTP === $otp) {
            Cache::forget($this->getCacheKey($phone));
            return true;
        }
        return false;
    }

    private function getCacheKey(string $phone): string
    {
        return "otp_{$phone}";
    }
}
