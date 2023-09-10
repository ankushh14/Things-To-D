import {Navigate,Outlet} from "react-router-dom";
import {useCookies} from "react-cookie";
import React from 'react';

const AdminRoute = () => {
    const [cookies,setCookies] = useCookies(["admin_token"]);
  return (
    cookies.admin_token?<Outlet/>:<Navigate to="/"/>
    )
};

export default AdminRoute
