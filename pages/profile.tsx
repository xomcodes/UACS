import { Wrapper } from "@/layout";
import { ProfilePage } from "@/profile";
import Head from "next/head";

import React from "react";

function Profile() {
  return (
    <>
     <Head>
   <title>UACS | Profile </title>
   </Head>
    <Wrapper text="Profile">
      <div className="pt-8 overflow-auto px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10">
        <ProfilePage />
      </div>
    </Wrapper>
    </>
  );
}

export default Profile;
