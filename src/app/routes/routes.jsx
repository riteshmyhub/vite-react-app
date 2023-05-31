import { Navigate, Route, Routes, Outlet as RouterOutlet, useParams } from "react-router-dom";
import AuthGuard from "../guards/AuthGuard";

export default function PageRoutes() {
   return (
      <Routes>
         {/* auth */}
         <Route path="auth" element={<RouterOutlet />} caseSensitive>
            <Route index element={<Navigate to="login" replace />} caseSensitive />
            <Route path="login" element={<p>login</p>} caseSensitive />
            <Route path="register" element={<p>register</p>} caseSensitive />
         </Route>

         {/* home */}
         <Route path="/" element={<p>Home</p>} caseSensitive />

         {/* dashboard: (user) and also (user) */}
         <Route element={<AuthGuard clientRoles={["user", "admin"]} />}>
            <Route path="dashboard" element={<RouterOutlet />} caseSensitive>
               <Route index element={<Navigate to="users" replace />} caseSensitive />
               <Route path="users" element={<p>users</p>} caseSensitive />
               <Route path="users/:id" element={<UsersInfo />} caseSensitive />
            </Route>
         </Route>

         {/* only for (admin) */}
         <Route element={<AuthGuard clientRoles={["admin"]} />}>
            <Route path="admin" element={<p>admin page</p>} caseSensitive />
         </Route>

         {/* 404 */}
         <Route path="*" element={<p>404</p>} caseSensitive />
      </Routes>
   );
}

function UsersInfo() {
   const { id } = useParams();
   return <p>User {id}</p>;
}
