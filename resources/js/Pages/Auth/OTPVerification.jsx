// resources/js/Pages/Auth/OTPVerification.jsx
import { useEffect, useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function OTPVerification({ phone }) {
    const [countdown, setCountdown] = useState(30);
    const { data, setData, post, processing, errors, reset } = useForm({
        otp: "",
    });

    useEffect(() => {
        let timer;
        if (countdown > 0) {
            timer = setTimeout(() => setCountdown(countdown - 1), 1000);
        }
        return () => clearTimeout(timer);
    }, [countdown]);

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("otp.verify"));
    };

    const handleResend = () => {
        post(route("otp.resend"), {
            onSuccess: () => {
                setCountdown(30);
                reset("otp");
            },
        });
    };

    return (
        <GuestLayout>
            <Head title="OTP Verification" />
            <div className="mb-4 text-sm text-gray-600">
                Please enter the OTP code sent to your phone number ending in{" "}
                {phone}.
            </div>
            <form onSubmit={onSubmit}>
                <div className="mt-4">
                    <TextInput
                        id="otp"
                        type="text"
                        maxLength="6"
                        className="mt-1 block w-full"
                        value={data.otp}
                        onChange={(e) => setData("otp", e.target.value)}
                        required
                        autoFocus
                        inputMode="numeric"
                        pattern="[0-9]*"
                    />
                    <InputError message={errors.otp} className="mt-2" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button
                        type="button"
                        className={`text-sm ${
                            countdown > 0
                                ? "text-gray-400 cursor-not-allowed"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                        onClick={handleResend}
                        disabled={countdown > 0}
                    >
                        {countdown > 0
                            ? `Resend OTP in ${countdown}s`
                            : "Resend OTP"}
                    </button>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Verify OTP
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
