import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useHome() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const _user_list = async () => {
      try {
         setLoading(true);
         const { data } = await axios.get("https://dummyjson.com/users", {
            params: {
               limit: 100,
            },
         });
         setUsers(data?.users);
         setLoading(false);
      } catch (error) {
         setLoading(false);
      }
   };

   useEffect(() => {
      _user_list();
      return () => {};
   }, []);

   return { loading, users };
}
