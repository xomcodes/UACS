import LogoSmall from "@/shared/logo-small";
import Image from "next/image";
import React from "react";

export const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section
      className="bg-cover bg-[top_center] bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/sign-in/bg-sign-in.png')" }}
    >
      <div className="mx-auto w-[clamp(600px,90vw,1778px)] max-w-[1199px]  flex flex-col  flex-1 h-full">
        <header className="pt-12">
          <LogoSmall />
        </header>

        <div className="flex flex-1 items-center  ">
          <div className="flex items-center max-[600px]:justify-center w-full justify-between gap-10">
            <div className=" flex flex-col max-[600px]:hidden gap-10 items-center">
              <Image
                src="/sign-in/secure-login.png"
                width={309}
                height={309}
                alt="sign-in"
              />

              <div className="flex flex-col gap-4">
                <h2 className="text-[clamp(14px,2vw,28px)] text-center text-[#54565B] font-semibold">
                  Streamline your Login Experience with SSO{" "}
                </h2>
                <p className="text-[clamp(13px,1vw,16px)] text-center text-[#9FA19C] font-normal max-w-[534px]">
                  Welcome to our Single Sign-On login page! With just one set of
                  login credentials, you can now access all your favorite
                  applications and services without the need to enter multiple
                  usernames and passwords
                </p>
              </div>
            </div>

            <div className=" bg-white sign-in-shadow  rounded-[16px] min-w-[330px] w-[40%] p-10 max-[700px]:p-5 flex flex-col gap-[70px] items-center max-w-[450px]">
                <h2 className="text-[#C81107] text-xl font-semibold">AFEX SSO</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
