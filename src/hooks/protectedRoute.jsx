import { Navigate, Outlet,useLocation } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import Navbar from '../components/Navbar';

const ProtectedRoute = ({ allowedRoles }) => {
  const { hasRole,token } = useToken();
  const location = useLocation();
  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if(allowedRoles){
    const isAuthorized = allowedRoles.some((role) => hasRole(role));
    if (!isAuthorized) {
      return (
        <>
          <Navbar />
          <Navigate to="/unauthorized" />
        </>
      );
      //    return console.log("unauthorized");
  }
  }

  return <Outlet />;
};
export default ProtectedRoute;
