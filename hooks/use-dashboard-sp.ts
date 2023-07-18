import { usePortal } from "@ibnlanre/portal";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { handleError } from "../utils/error-handler";

function useDashboardSp() {
  const [sp, setSp] = useState<{ name: string; url: string }[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalSp, setTotalSp] = usePortal("total-sp", 0);

  // Created this function as to not pass in async function to useEffect directly
  const getServiceProviders = async () => {
    // Got access tokon from my local storage at this point
    // The tokon comes as json, had to make it a javascript object, thus i used json.parse to wrap the token
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      setLoading(true);
      // Getting my data from backend with axios at this point
      const { data } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}service_providers/all/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // Setting my state to the data i received
      //
      setLoading(false);
      setSp(data.results);
      setTotalSp(data.count);
    } catch (error: any) {
      handleError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getServiceProviders();
  }, []);

  return { sp, loading };
}

export default useDashboardSp;
