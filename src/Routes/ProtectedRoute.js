import { Navigate } from "react-router-dom";

//This component protects routes for authenticated users
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("access_token");

  // Check if the user is authenticated
  if (!token) {
    return children;
  } else {
    // Redirect to home page if not authenticated
    return <Navigate to="/login" replace />;
  }
};
