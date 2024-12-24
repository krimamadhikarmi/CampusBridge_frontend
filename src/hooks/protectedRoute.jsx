import { Navigate, Outlet } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import Navbar from '../components/Navbar';

const ProtectedRoute = ({ allowedRoles }) => {
  const { hasRole } = useToken();

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

  return <Outlet />;
};
export default ProtectedRoute;
