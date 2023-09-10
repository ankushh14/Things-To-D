import React from "react";
import {Navigate,Outlet} from "react-router-dom";
import {useCookies} from "react-cookie";

const ProtectedRoute = () => {
  const [cookies,setCookies] = useCookies(["things_token","admin_token"]);
  return (
    cookies.things_token || cookies.admin_token?
    <Outlet/>
    :<Navigate to="/auth/login"/>
  )
}

export default ProtectedRoute
