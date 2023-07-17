import { AuthWrapper } from "@/layout";
import { Button, Loader, PasswordInput } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Head from "next/head";

function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState({
    password: "",
    confirm_password: "",
  });
  const { push,query } = useRouter();

  // Function to handle Input
  const handleReset = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}reset_password`,
        method: "POST",
        data:{ password: password.password, confirm_password: password.confirm_password, email: query?.email }
      });
      setLoading(false)
      push("/sign-in");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (

    <>
    <Head>
   <title>UACS | Reset Password</title>
   </Head>
    <AuthWrapper>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-8">
          <h2 className=" text-uacs-primary-90 font-semibold text-clamp([16px,1.7vw, 24px]) text-center">
            Reset password
          </h2>
          <p className=" text-uacs-primary-40 text-clamp([13px, 1.1vw, 16px]) font-normal  max-w-[371px] text-center">
            Kindly provide a new password for your account.
          </p>
        </div>
        <form onSubmit={handleReset} className="flex flex-col gap-6">
          <div className="flex flex-col gap-10">
            <PasswordInput required
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
              value={password.password}
              label=" New Password"
              placeholder="Enter your new password"
              classNames={{
                root: "flex flex-col gap-5",
                label: "text-uacs-primary-90 text-sm font-normal",
                input:
                  "border-y text-[back] border-l rounded-lg h-[54px] border-uacs-beerus-100 bg-[#F7F8F9] placeholder:text-uacs-primary-40 placeholder:font-normal placeholder:text-xs outline-none",
                innerInput: "h-[54px]",
              }}
            />

            <PasswordInput required
              onChange={(element) =>
                setPassword({
                  ...password,
                  confirm_password: element.target.value,
                })
              }
              label=" Confirm Password"
              placeholder="Re-enter your new password "
              classNames={{
                root: "flex flex-col gap-5",
                label: "text-uacs-primary-90 text-sm font-normal",
                input:
                  "border-y  text-[black] border-l rounded-lg h-[54px] border-uacs-beerus-100 bg-[#F7F8F9] placeholder:text-uacs-primary-40 placeholder:font-normal placeholder:text-xs outline-none",
                innerInput: "h-[54px]",
              }}
            />
          </div>

          <div className="flex flex-col gap-[30px] justify-between">
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
          </div>
        </form>
        <div
          onClick={() => push("/sign-in")}
          // push(`/verify-email?email=${email}`)
          className="flex gap-[13px] items-center  justify-center cursor-pointer"
        >
          <ArrowLeft2 color="#54565B" size="24px" />
          <h4 className=" text-[#54565B] text-sm font-medium">
            Back to Sign In
          </h4>
        </div>
      </div>
    </AuthWrapper>
    </>
  );
}

export default ResetPassword;
