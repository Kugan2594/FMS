import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import CustomLayout from "./layout/CustomLayout";
import { SideBar } from "organisms";
import LoginTemplate from "./templates/LoginTemplate";
// import { SideBar } from "organisms";

function App() {
    return <LoginTemplate />;
}

export default App;
