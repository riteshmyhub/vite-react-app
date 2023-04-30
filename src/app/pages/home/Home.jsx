import React from "react";
import useHome from "./useHome";
import Loading from "../../shared/components/Loading";
import { useNavigate } from "react-router-dom";

export default function Home() {
   const { loading, users } = useHome();
   const navigate = useNavigate();
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
                           <button onClick={() => navigate(`/user/${user?.id}`)}>User Detail</button>
                        </div>
                     </div>
                  </React.Fragment>
               ))}
            </div>
         )}
      </>
   );
}
