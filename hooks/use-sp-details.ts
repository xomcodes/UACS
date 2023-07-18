import axios from "axios";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

import { handleError } from "../utils/error-handler";

 export interface ISPDetails {
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
  is_active: boolean
}

function useSpDetails() {
  const [spDetails, setSpDetails] = useState<ISPDetails | null>(null);
  const { query } = useRouter();
  const [loading, setLoading] = useState(false)
  const getSp = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      setLoading(true)

      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/${query?.id}/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoading(false)
      
      setSpDetails(data);
    } catch (error: any) {
      handleError(error)
      setLoading(false)
    }
  };

  useEffect(() => {
    if (query?.id) getSp();
  }, [query?.id]);

  return { spDetails, getSp, loading };
}

export default useSpDetails;
