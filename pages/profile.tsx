import { Wrapper } from "@/layout";
import { ProfilePage } from "@/profile";

import React from "react";

function Profile() {
  return (
    <Wrapper text="Profile">
      <div className="pt-8 overflow-auto px-[clamp(0.75rem,1.6vw,1.5rem)] flex flex-col gap-10">
        <ProfilePage />
      </div>
    </Wrapper>
  );
}

export default Profile;
