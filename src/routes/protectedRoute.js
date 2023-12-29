import { Outlet, Navigate } from "react-router-dom";
import Dashboard from "../dashboardLayout/Dashboard";

const ProtectedRoute = () => {
  const user = localStorage.getItem("token");
  return user ? (
    <Dashboard>
      <Outlet />
    </Dashboard>
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
