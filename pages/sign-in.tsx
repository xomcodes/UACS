import Image from "next/image";
import { FormEvent, useContext, useState } from "react";
import { useRouter } from "next/router";

import { Button, Loader, PasswordInput, TextInput } from "@mantine/core";
import axios from "axios";
import { usePortal } from "@ibnlanre/portal";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import Link from "next/link";
import LogoSmall from "@/shared/logo-small";
import { AuthContext, UserType } from "@/context/auth-provider";
import Head from "next/head";
import { errorNotification } from "../utils/notification";
import { handleError } from "../utils/error-handler";



export interface IAuthUser {
  access: string;
  email:string
  first_name: string
  last_name: string
  profile_picture: string
  refresh: string
}



function SignIn() {
  const [logedUser, setLogedUser] = useState({ email: "", password: "" });
  const { push } = useRouter();
  const [loading, setLoading] = useState(false);
  const {setIsLoggedIn} = useContext(AuthContext) as UserType

  // state to save logged in user in  the browser 
  // if this was just normal usePortal(key, value), it will be saved in application state
  // which will be removed when a refresh happens but with usePortal.local(key, value), 
  // Once i set the state, it also saves in the localStorage
  const [, setAuthUser] = usePortal.local<IAuthUser | null>("login-user", null);


  // function to handle login
  const handleClick = async (e: FormEvent<HTMLFormElement>) => {
    // if (!logedUser.email) return alert("Please enter your Details");
    e.preventDefault();
    // set loading state to true before starting login request
    setLoading(true);
    try {
      // I could have used axios.post(url, data) but because I need to specify an header to my request
      // I need to remove the .post and make the argument to the axios function an object that takes the following properties
      // baseURL (my base url in my .env), url (the route i want to call), method of the request, headers (an object that takes properties like "Content-Type", Authorization etc)

      const { data } = await axios({
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        url: "login/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        data: { email: logedUser.email, password: logedUser.password },
      });
      // After a successful login request and I receive a response in the data variable,
      // I am setting my state below to the data i'm receiving and because it's using usePortal.local(),
      // It also saves this data in the localStorage
      toast.success("Success!!", {
        theme: 'colored'
      })
      setAuthUser(data);
      setIsLoggedIn(true)
      // Then I push to the dashboard page
      push("/dashboard");
      // And I empty my form
      setLogedUser({ email: "", password: "" });
    } catch (error: any) {
      handleError(error)
      setLoading(false)
      // If any error occured in the above process, it is logged to the console at this point
    

      toast.error("Ouch.... Wrong details", {
        theme: 'colored'
      })
    }
  };

  return (
    <>
<Head>
   <title>UACS | Sign In</title>
   </Head>
    <section
      className="bg-cover bg-[top_center] bg-no-repeat h-screen"
      style={{ backgroundImage: "url('/sign-in/bg-sign-in.png')" }}
    >
      <ToastContainer toastClassName={'CustomToast'}/>
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

            <div className=" bg-white sign-in-shadow  rounded-[16px] min-w-[330px] w-[40%] p-10 max-[700px]:p-5 flex flex-col gap-12 max-w-[450px]">
              <h2 className="text-[clamp(14px,2rem,24px)] font-semibold text-uacs-primary-90">
                Sign in with SS0
              </h2>
              <form onSubmit={handleClick} className="flex flex-col gap-6">
                <div className="flex flex-col gap-10">
                  <span className="">
                    <TextInput
                      onChange={(e) =>
                        setLogedUser({ ...logedUser, email: e.target.value })
                      }
                      label="Email Address"
                      placeholder="Enter email address"
                      value={logedUser.email}
                      classNames={{
                        root: "flex flex-col gap-5",
                        label: "text-uacs-primary-90 text-sm font-normal",
                        input:
                          "rounded-lg border h-[54px] text-black border-uacs-beerus-100 bg-[#F7F8F9] p-4 placeholder:text-uacs-primary-40 placeholder:font-normal placeholder:text-xs outline-none",
                      }}
                    />
                  </span>

                  <PasswordInput
                    onChange={(e) =>
                      setLogedUser({ ...logedUser, password: e.target.value })
                    }
                    label="Password"
                    placeholder="**********"
                    value={logedUser.password}
                    classNames={{
                      root: "flex flex-col gap-5",
                      label: "text-uacs-primary-90 text-sm font-normal",
                      input:
                        "border-y  text-[black] border-l rounded-lg h-[54px] border-uacs-beerus-100 bg-[#F7F8F9] placeholder:text-uacs-primary-40 placeholder:font-normal placeholder:text-xs outline-none",
                      innerInput: "h-[54px]",
                    }}
                  />
                </div>

                <div className="flex flex-col gap-[30px] justify-between ">
             
                   <Link href='/forgot-password' className=" self-end text-[#C81107] font-semibold text-sm">
                
                    Forgot Password?
                 
                  </Link>
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
                      "Sign In"
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
}

export default SignIn;
