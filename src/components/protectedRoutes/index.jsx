import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";

const ProtectedRoutes = () => {
  const { logIn } = useGlobal();
  console.log(logIn);
  return logIn ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoutes;
