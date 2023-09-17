import { Navigate, Outlet } from "react-router-dom";
import Layout from "../layout/Layout";
import { getUserToken } from "./StorageServices";

function PrivateRoute() {
  const user = getUserToken();
  return user ? <Layout><Outlet /></Layout> : <Navigate to='/login' />;
}

function PublicRoute() {
  const user = getUserToken();
  return !user ? <Outlet /> : <Navigate to='/' />;
}

export { PrivateRoute, PublicRoute };

