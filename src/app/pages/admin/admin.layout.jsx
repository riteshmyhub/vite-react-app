import { Outlet as RouterOutlet } from "react-router-dom";

export default function AdminLayout(){
   return (
      <div>
         <RouterOutlet />
      </div>
   );
}
