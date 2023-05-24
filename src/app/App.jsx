import PageRoutes from "./routes/routes";
import "../assets/styles/style.css";
import Navbar from "./shared/components/navbar/Navbar";
import { useEffect } from "react";
import AuthService from "../redux/services/auth.service";
import { useSelector, useDispatch } from "react-redux";

function App() {
   const dispatch = useDispatch();
   const auth = useSelector((state) => state.authReducer);
   const { _user_on_load } = new AuthService();

   useEffect(() => {
      dispatch(_user_on_load());
      return () => {};
   }, []);

   return (
      <div>
         {auth.rootLoading ? (
            "loading..."
         ) : (
            <>
               <Navbar />
               <div style={{ height: "calc(100vh - 63px)", overflowY: "scroll" }}>
                  <PageRoutes />
               </div>
            </>
         )}
      </div>
   );
}

export default App;
