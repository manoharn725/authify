import { FunctionComponent } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import Loader from "../Loader";

// interface IProtectedRoutesProps {}<IProtectedRoutesProps>

const ProtectedRoutes: FunctionComponent = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoutes;
