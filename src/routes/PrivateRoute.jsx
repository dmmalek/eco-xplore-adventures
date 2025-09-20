import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider";
import Loading from "../component/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/auth/login"} state={location.pathname}></Navigate>;
};

export default PrivateRoute;
