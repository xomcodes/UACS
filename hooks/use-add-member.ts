import axios from "axios";
import React, { useState, useEffect } from "react";
import { errorNotification } from "../utils/notification";
import { handleError } from "../utils/error-handler";

interface IAdd {
  id: number;
  url: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  tribe: string;
  squad: string;
  role: string;
  designation: string;
  full_designation: string;
  reset_url: string;
  revoke_url: string;
  permissions: string;
  profile_picture: string;
  permission_update_url: string;
}

function useAddMember() {
  const [add, setAdd] = useState([]);

  const getStaff = async () => {
    const accessToken = JSON.parse(
      localStorage.getItem("login-user") as string
    )?.access;

    try {
      const { data }: { data: { results: IAdd[] } } = await axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}staffs/all/`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAdd(
        data.results.reduce((acc: any, curr) => {
          acc.push({
            label: `${curr.first_name} ${curr.last_name}`,
            value: JSON.stringify({name: `${curr.first_name} ${curr.last_name}`, id: curr.id}),
          });
          return acc;
        }, [])
      );
    } catch (error: any) {
      handleError(error)
    }
  };

  useEffect(() => {
    getStaff();
  }, []);
  return { add };
}

export default useAddMember;
