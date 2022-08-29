import { Menu } from "antd";
import React from "react";
import { useLinkClickHandler } from "react-router-dom";
import mainMenuItems from "./items";

function CustomMenu() {

  const ClickHandler = (e:any) => {
      console.log(e);
  };

  return (
    <Menu
      theme="light"
      mode="inline"
      defaultSelectedKeys={["4"]}
      items={mainMenuItems.map((item) => ({
        key: item.id,
        icon: React.createElement(item.icon),
        onClick: () => ClickHandler(item.name),
      }))}
    />
  );
}

export default CustomMenu;
