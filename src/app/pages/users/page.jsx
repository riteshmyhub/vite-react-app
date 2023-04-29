import React, { useEffect, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Loading from "../../shared/components/Loading";
import axios from "axios";

export default function Users() {
   const [users, setUsers] = useState([]);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();
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

   return (
      <>
         {loading ? (
            <Loading />
         ) : (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
               {/* products */}

               {users.map((user) => (
                  <React.Fragment key={`user-${user.id}`}>
                     <div
                        className="card"
                        style={{
                           flex: "0 0 33.333333333333336%",
                           maxWidth: "33.333333333333336%",
                        }}>
                        <img src={user?.image} alt="no user" className="d-block mx-auto" style={{ width: "150px" }} />
                        <h2 className="text-center">
                           {user?.firstName} {user?.maidenName} {user?.lastName}
                        </h2>
                        <h3>{user?.email}</h3>
                        <div className="text-center">
                           <button onClick={() => navigate(`/users/${user?.id}`)}>User Detail</button>
                        </div>
                     </div>
                  </React.Fragment>
               ))}
            </div>
         )}
      </>
   );
}
