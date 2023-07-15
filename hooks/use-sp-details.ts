import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
interface ISPDetails {
  id: number;
  url: string;
  picture: string;
  test_picture_url: string;
  name: string;
  date: string;
  website_url: string;
  slug: string;
  toggle_status_url: string;
  staffs_with_permission: any[];
}

function useSpDetails() {
  const [spDetails, setSpDetails] = useState<ISPDetails | null>(null);
  const { query } = useRouter();
  const getSp = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/${query?.id}/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(data);
      setSpDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (query?.id) getSp();
  }, [query?.id]);

  return { spDetails, getSp };
}

export default useSpDetails;
