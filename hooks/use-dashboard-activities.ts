import axios from 'axios';
import React, {useState, useEffect } from 'react'
import { errorNotification } from '../utils/notification';
import { handleError } from '../utils/error-handler';


interface iActivity { 
    activity: "string"; 
    actor_name: "string";
     id: number, time:Date, 
     action_time: Date
     }


function useDashboardActivities() {

    const [activity, setActivity] = useState<iActivity[]>([]);
    const [loading, setLoading] = useState(false)

    const getActivities = async () => {
        const accessToken = JSON.parse(
          localStorage.getItem("login-user") as string
        )?.access;
    
        try {
            setLoading(true)
          const { data } = await axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL}activity_log/`,
            method: "GET",
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          setLoading(false)
          setActivity(data.results);
        } catch (error: any) {
          handleError(error)
          setLoading(false)
          
        }
      };
    
      useEffect(() => {
        getActivities();
      }, []);


  return {activity, loading}
}

export default useDashboardActivities