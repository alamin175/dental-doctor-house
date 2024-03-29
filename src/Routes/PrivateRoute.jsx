import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg "></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
