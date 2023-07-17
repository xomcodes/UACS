import axios from "axios";
import React, { useState, useEffect } from "react";

interface IServiceP {
  name: string;
  website_url: string;
  staffs_with_permission: [];
  date: string;
  test_picture_url: string
  id: number;
  is_active: boolean
  picture: string
}

function useServiceProviders() {
  const [sp, setSp] = useState<IServiceP[]>([]);
  const [loading, setLoading] = useState(false)

  // Send a Get Request to get list of Sps

  const getSp = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      setLoading(true)
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/all/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setLoading(false)
      setSp(data.results);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
    getSp();
  }, []);
  return { sp, getSp,loading };
}

export default useServiceProviders;
