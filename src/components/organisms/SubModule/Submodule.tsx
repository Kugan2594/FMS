import { Menu } from "antd";
import React from "react";
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { icons } from "antd/lib/image/PreviewGroup";
import SbModule from "./item";
import SubModuleHeaderLogo from "./SubModuleHeader";

function SubModuleBar() {
    return (
        <>
            <SbModule />
        </>
    );
    // return SubModuleItems.map((item:any) => {
    //     return <SubModuleItem label={item.key} key={item.label} />;
    // });
    // <Menu
    //     theme="light"
    //     mode="inline"
    //     defaultSelectedKeys={["4"]}
    //     items={SubModuleItems.map((item) => ({
    //         key: item.key,
    //         label: item.label,
    //     }))}
    // {[
    //     UserOutlined,
    //     VideoCameraOutlined,
    //     UploadOutlined,
    //     UserOutlined,
    // ].map((icon, index) => ({
    //     key: String(index + 1),
    //     icon: React.createElement(icon),
    //     label: `nav ${index + 1}`,
    // }))}
}

export default SubModuleBar;
