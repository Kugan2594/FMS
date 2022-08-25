import React from "react";
import CustomMenu from "./CustomMenu";
import { Divider, Layout } from "antd";
import HeaderLogo from "./HeaderLogo";
const { Sider } = Layout;

function SideBar() {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={true}
      theme="light"
      collapsedWidth="7%"
      breakpoint="md"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div>
        <HeaderLogo />
        <Divider />
      </div>

      <CustomMenu />
    </Sider>
  );
}

export default SideBar;
