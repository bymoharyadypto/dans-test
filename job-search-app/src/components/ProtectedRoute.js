import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ redirectPath, children }) {
  if (!localStorage.getItem('access_token')) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
}
