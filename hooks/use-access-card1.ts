import React, {useState, useEffect} from 'react'
import { usePortal } from '@ibnlanre/portal';
import axios from 'axios';

function useAccessCard1() {
  const [totalSp, setTotalSp] = usePortal<number>("total-sp");
 

    const [staffAccess, setStaffAccess] = usePortal<{ inactive_sps: number }>(
        "sp-access"
      );
      const [loading, setLoading] = useState(false)
      // console.log(totalSp)
    
      //  Function to get inactive sp's
      const getCount = async () => {
        const accessToken = JSON.parse(
          localStorage.getItem("login-user") as string
        )?.access;
    
        setLoading(true)
    
        try {
          const { data } = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}count/`,
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setLoading(false)
          setStaffAccess(data);
        } catch (error) {
          console.log(error);
          setLoading(false)
        }
      };
    
      useEffect(() => {
        getCount();
      }, []);

  return {staffAccess, loading, totalSp}
}

export default useAccessCard1