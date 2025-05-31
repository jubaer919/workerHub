import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = !!token;

  return isAuthenticated ? <Outlet /> : <Navigate to="/auth/login" />;
}
