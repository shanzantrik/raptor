import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'; // Adjust the path if needed

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/general-pages/signin" replace />
  );
};

export default ProtectedRoute;
