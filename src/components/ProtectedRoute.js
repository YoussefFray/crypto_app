import { Navigate } from "react-router-dom";
import React from "react";

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/*"></Navigate>;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
