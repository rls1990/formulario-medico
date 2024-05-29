import { useContext } from "react";
import { UserContext } from "../../context/userContext/UserContext";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isAuth, loading } = useContext(UserContext);
  if (!loading && !isAuth) return <Navigate to="/login" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
