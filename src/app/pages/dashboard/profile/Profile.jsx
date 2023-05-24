import { useEffect } from "react";
import { useSelector } from "react-redux";
import JsonViewer from "../../../shared/components/json-viewer/JsonViewer";

export default function Profile() {
   const authuser = useSelector((state) => state.authReducer);
   useEffect(() => {
      return () => {};
   }, []);

   return (
      <div>
         {authuser.loading ? (
            "loading..."
         ) : authuser.user ? (
            <div>
               <JsonViewer code={JSON.stringify(authuser.user)} />
            </div>
         ) : authuser.error ? (
            authuser.error
         ) : (
            "no user"
         )}
      </div>
   );
}
