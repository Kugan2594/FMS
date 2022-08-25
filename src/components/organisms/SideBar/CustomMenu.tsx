import { Menu } from "antd";
import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import mainMenuItems from "./items";
import { icons } from "antd/lib/image/PreviewGroup";
import Item from "./Item";

function CustomMenu() {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={mainMenuItems.map((item) => ({
        key: item.id,
        icon: React.createElement(item.icon),
        label: item.name,
      }))}
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
    />
  );
}

export default CustomMenu;
