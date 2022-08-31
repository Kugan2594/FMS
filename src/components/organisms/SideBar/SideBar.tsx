import React from "react";
import CustomMenu from "./CustomMenu";
import { Divider, Layout } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";

const { Sider } = Layout;

function SideBar() {
    return (
        <Sider theme="light" width="110px" breakpoint="md" className="main-sidebar">
            <div>
                <HeaderLogo />
                <Divider />
            </div>

            <CustomMenu />
            <UserProfile />
        </Sider>
        
    );
}

export default SideBar;