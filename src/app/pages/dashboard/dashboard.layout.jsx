import { Outlet as RouterOutlet } from "react-router-dom";

export default function DashboardLayout() {
   return (
      <div>
         <RouterOutlet />
      </div>
   );
}
