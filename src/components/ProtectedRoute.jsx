import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

// This component protects pages that require login
// If user is not logged in, it sends them to the login page
const ProtectedRoute = ({ children }) => {
  const userToken = Cookies.get("jwt_token");

  // No token means user is not logged in
  if (!userToken) {
    return <Navigate to="/login" replace />;
  }

  // User is logged in, show the requested page
  return children ? children : <Outlet />;
};

export default ProtectedRoute;
