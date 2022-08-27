import { Menu } from "antd";
import React from "react";
import mainMenuItems from "./items";

function CustomMenu() {
  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={mainMenuItems.map((item) => ({
        key: item.id,
        icon: React.createElement(item.icon),
      }))}
    />
  );
}

export default CustomMenu;
