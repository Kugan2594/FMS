import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import CustomLayout from "./layout/CustomLayout";
import { SideBar } from "organisms";
import LoginTemplate from "./templates/LoginTemplate";
import ForgotPassword from "./contents/Login/ForgotPassword";
import Login from "./contents/Login/Login";
// import { SideBar } from "organisms";

function App() {
    return <ForgotPassword />;
}

export default App;
