/* eslint-disable no-undef */
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element, isAuthenticated }) => {
  return isAuthenticated ? element : <Navigate to="/Home" />,
  isAuthenticated ? element : <Navigate to="/Products" />;

};

export default ProtectedRoute;

