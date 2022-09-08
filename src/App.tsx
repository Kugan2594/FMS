import React from "react";
import "./App.less";
import "antd/dist/antd.less";
import { useRoutes } from "react-router-dom";
import PublicRoute from "./router/PublicRoutes";
// import { SideBar } from "organisms";

function App() {
  const publiccontent = useRoutes(PublicRoute);
  return <div>{publiccontent}</div>;
}

export default App;
