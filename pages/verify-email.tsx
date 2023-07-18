import { Button, Group, Loader, PinInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

import { AuthWrapper } from "@/layout";
import { successNotification } from "../utils/notification";
import { handleError } from "../utils/error-handler";

function VerifyEmail() {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();
  const [pin, setPin] = useState("");
  const { query } = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}verify_otp/`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { otp_code: pin, email: query?.email },
      });
      successNotification("Successful");
      setLoading(false);
      push(`/reset-password?email=${query?.email}`);
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>UACS | Verify Email</title>
      </Head>
      <AuthWrapper>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <h2 className=" text-uacs-primary-90 font-semibold text-clamp([16px,1.7vw, 24px]) text-center">
              Forgot password?
            </h2>
            <p className=" text-uacs-primary-40 text-clamp([13px, 1.1vw, 16px]) font-normal  max-w-[371px] text-center">
              Kindly enter the 6-digit pin sent to your email address provided.
            </p>
          </div>

          <div className="gap-[70px]  flex flex-col">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <Group position="center">
                  <PinInput
                    value={pin}
                    onChange={(value) => setPin(value)}
                    type={/^[0-9]+/}
                    inputType="tel"
                    inputMode="numeric"
                    length={6}
                    placeholder="0"
                    className=" placeholder: text-[32px] text-[#000] font-medium "
                  />
                </Group>
                <Button
                  type="submit"
                  disabled={loading ? true : false}
                  className="bg-uacs-ared-7 hover:bg-red-800 h-[54px] text-sm font-medium text-white  rounded-lg"
                >
                  {loading ? (
                    <span className="flex gap-2 items-center">
                      Signing in <Loader size="sm" />
                    </span>
                  ) : (
                    "Submit"
                  )}
                </Button>

                <p className="text-[#696B6F] text-xs font-normal text-right">
                  Can&apos;t find 6-digit pin?
                  <span className="text-[#C81107] text-xs font-semibold cursor-pointer">
                    Resend Pin
                  </span>
                </p>
              </div>
            </form>

            <div
              onClick={() => push("/sign-in")}
              // push(`/verify-email?email=${email}`)
              className="flex gap-[13px] items-center  justify-center cursor-pointer"
            >
              <ArrowLeft2 color="#54565B" size="24px" />
              <h3 className=" text-[#54565B] text-sm font-medium">
                Back to Sign In
              </h3>
            </div>
          </div>

          <div></div>
        </div>
      </AuthWrapper>
    </>
  );
}

export default VerifyEmail;
