import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
   const { user } = useSelector((state) => state.auth);
   return (
      <div>
         <h4>{JSON.stringify(user)}</h4>
      </div>
   );
}
