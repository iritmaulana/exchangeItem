import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";

export default function VerifyOtp() {
    const { data, setData, post, processing, errors } = useForm({
        otp: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("verify.otp"));
    };

    return (
        <GuestLayout>
            <Head title="Verify OTP" />

            <form onSubmit={submit} className="mt-4">
                <div>
                    <InputLabel htmlFor="otp" value="Enter OTP Code" />
                    <TextInput
                        id="otp"
                        type="text"
                        name="otp"
                        value={data.otp}
                        className="mt-1 block w-full"
                        onChange={(e) => setData("otp", e.target.value)}
                    />
                    <InputError message={errors.otp} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Verify OTP
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
