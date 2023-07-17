import { AuthWrapper } from "@/layout";
import { Button, Loader, PasswordInput, TextInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import {toast} from "react-toastify"
import Head from "next/head";
import { errorNotification } from "../utils/notification";
import { handleError } from "../utils/error-handler";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  //  Function to handle forgotten password
  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}email_otp/`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email },
      });

      toast.success(data.message)
      setLoading(false)
      push(`/verify-email?email=${email}`)
    } catch (error: any) {
      handleError(error)
    }
  };

  return (
    <>
     <Head>
   <title>UACS | Forgot Password</title>
   </Head>
    <AuthWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h2 className=" text-uacs-primary-90 font-semibold text-clamp([16px,1.7vw, 24px]) text-center">
            Forgot password?
          </h2>
          <p className=" text-uacs-primary-40 text-clamp([13px, 1.1vw, 16px]) font-normal  max-w-[371px] text-center">
            Enter your email address below, and we’ll email you a 6-digit pin to
            reset your password.
          </p>
        </div>

        <div className="gap-[70px]  flex flex-col">
          <form onSubmit={handleClick} className="flex flex-col gap-6">
            <TextInput
              onChange={(e) => setEmail(e.target.value)}
              required
              value={email}
              placeholder="Enter email address"
              classNames={{
                root: "flex flex-col gap-5",
                label: "text-uacs-primary-90 text-sm font-normal",
                input:
                  "rounded-lg border h-[54px]  text-[black] border-uacs-beerus-100 bg-[#F7F8F9] p-4 placeholder:text-uacs-primary-40 placeholder:font-normal placeholder:text-xs outline-none",
              }}
            />
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
          </form>

          <div
            onClick={() => push("/sign-in")}
            className="flex gap-[13px] items-center  justify-center"
          >
            <ArrowLeft2 color="#54565B" size="24px" />
            <h4 className=" text-[#54565B] text-sm font-medium">
              Back to Sign In
            </h4>
          </div>
        </div>

        <div></div>
      </div>
    </AuthWrapper>
    </>
  );
}

export default ForgotPassword;
