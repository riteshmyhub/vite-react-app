import Loading from "../../shared/components/Loading";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function UserInfo() {
   const [userInfo, setUserInfo] = useState({});
   const [loading, setLoading] = useState(true);
   const { id } = useParams();
   const _get_user_info = async (id) => {
      try {
         setLoading(true);
         const { data } = await axios.get(`https://dummyjson.com/users/${id}`);
         setUserInfo(data);
         setLoading(false);
      } catch (error) {
         setLoading(false);
      }
   };
   useEffect(() => {
      if (id) {
         _get_user_info(id);
      }
      return () => {};
   }, [id]);

   return loading ? (
      <Loading />
   ) : (
      <div style={{ padding: "10px" }}>
         <div className="card">
            <img src={userInfo?.image} alt="no image" style={{ width: "200px", display: "block", margin: "auto" }} />
            <h1 className="text-center">
               {userInfo?.firstName} {userInfo?.maidenName} {userInfo?.lastName}
            </h1>
         </div>
         <br />
         <div className="card">
            <p>username : {userInfo?.username}</p>
            <p>id : {userInfo?.id}</p>
            <p>age : {userInfo?.age}</p>
            <p>gender : {userInfo?.gender}</p>
            <p>email : {userInfo?.email}</p>
            <p>phone : {userInfo?.phone}</p>
            <p>birthDate : {userInfo?.birthDate}</p>
            <p>bloodGroup : {userInfo?.bloodGroup}</p>
            <p>height : {userInfo?.height}</p>
            <p>weight : {userInfo?.weight}</p>
            <p>eyeColor : {userInfo?.eyeColor}</p>
            <p>
               domain :
               <a href={`https://${userInfo?.domain}`} target="_blank" rel="noopener noreferrer">
                  {userInfo?.domain}
               </a>
            </p>
         </div>
         <br />
         <div className="card">
            <p>bank details</p>
            <p> cardExpire : {userInfo?.bank?.cardExpire} </p>
            <p> cardNumber :{userInfo?.bank?.cardNumber} </p>
            <p> cardType : {userInfo?.bank?.cardType} </p>
            <p> currency : {userInfo?.bank?.currency} </p>
            <p> iban :{userInfo?.bank?.iban} </p>
         </div>
         <br />
         <div className="card">
            <p>Address</p>
            <p>
               {userInfo?.address?.address} {userInfo?.address?.city} {userInfo?.address?.postalCode} {userInfo?.address?.state}
            </p>
         </div>
      </div>
   );
}
