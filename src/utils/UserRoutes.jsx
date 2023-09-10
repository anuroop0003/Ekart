import { Navigate, Outlet } from "react-router-dom";
import { getUserToken } from "./StorageServices";

function PrivateRoute() {
  const user = getUserToken();
  return user ? <Outlet /> : <Navigate to='/login' />;
}

function PublicRoute() {
  const user = getUserToken();
  return !user ? <Outlet /> : <Navigate to='/' />;
}

export { PrivateRoute, PublicRoute };
