import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import CustomLayout from "./layout/CustomLayout";
import { SideBar } from "organisms";
import LoginTemplate from "./templates/LoginTemplate";
import ForgotPassword from "./contents/Login/ForgotPassword";
import Login from "./contents/Login/Login";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import PublicRoute from "./router/PublicRoutes";
// import { SideBar } from "organisms";

function App() {
    const privatecontent = useRoutes(routes);
    const publiccontent = useRoutes(PublicRoute);
    const auth = true;
    return <div> {auth ? privatecontent : publiccontent}</div>;
}

export default App;
