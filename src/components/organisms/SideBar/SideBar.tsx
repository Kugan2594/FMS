import React, { useState } from "react";
import CustomMenu from "./CustomMenu";
import { Divider, Layout } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";
import MainMenuItem from "../../molecules/MainMenuItem";
import mainMenuItems from "./items";
import SubModule from "../SubModule/item";

const { Sider } = Layout;

function SideBar() {
  const [submenuItems, setSubmenuItems] = useState([]);

  const homeItems: any = [
    { id: "1", name: "a" },
    { id: "2", name: "b" },
    { id: "3", name: "c" },
    { id: "4", name: "d" },
  ];

  const home: any = [{ id: "allBranches", name: "All Branches" }, ...homeItems];

  const ClickHandler = (item: any) => {
    if (item.id === "home") {
      console.log("This is home");
      setSubmenuItems(home);
    } else {
      setSubmenuItems(item.children);
    }
    console.log(submenuItems);
  };

  return (
    <Sider  theme="light" breakpoint="lg" className="main-sidebar">
      <HeaderLogo />
      <div className="menu">
        <div className="main-menu">
          {mainMenuItems.map((item) => {
            return (
              <MainMenuItem
                icon={item.icon}
                label={item.name}
                onClick={() => ClickHandler(item)}
              />
            );
          })}
          <div className="user">
          <UserProfile onClickProfile={() => console.log("PROFILE")} onClickLogout={() => console.log("LOGOUT")} />
          </div>
        </div>
        <div className="sub-menu">
          <SubModule data={submenuItems} />
        </div>
      </div>
    </Sider>
  );
}

export default SideBar;
