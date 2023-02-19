/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.FC;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, ...props }) => {
  const  isAuthenticated  = localStorage.getItem('token');

  return (
    <Route {...props} element={isAuthenticated ? <Component /> : <Navigate to="/login" />} />
  );
};

export default ProtectedRoute;