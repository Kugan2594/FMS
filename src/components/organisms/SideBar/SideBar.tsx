import React from "react";
import CustomMenu from "./CustomMenu";
import { Layout, Menu } from "antd";
const { Sider } = Layout;

function SideBar() {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo" />
            <CustomMenu />
        </Sider>
    );
}

export default SideBar;
