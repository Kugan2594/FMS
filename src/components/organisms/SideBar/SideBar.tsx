import React, { useState } from "react";
import { Layout, Modal } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";
import MainMenuItem from "../../molecules/MainMenuItem";
import mainMenuItems from "./items";
import SubModule from "../SubModule/item";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { confirm } = Modal;

function SideBar() {

  const [submenuItems, setSubmenuItems] = useState([]);

  const navigate = useNavigate();

  const LogoutClickHandler = () => {
    confirm({
      title: "Do you want to Logout?",
      icon: <ExclamationCircleOutlined />,
      okText: "Logout",
      okType: "default",
      cancelButtonProps: {type: "primary"},
      onOk() {
        navigate("/")
      },
    });
  };

  const homeItems: any = [
    { id: "1", name: "a" },
    { id: "2", name: "b" },
    { id: "3", name: "c" },
    { id: "4", name: "d" },
  ];

  const home: any = [{ id: "allBranches", name: "All Branches" }, ...homeItems];

  const ClickHandler = (item: any) => {
    if (item.id === "home") {
      setSubmenuItems(home);
    } else {
      setSubmenuItems(item.children);
    }
    console.log(submenuItems);
    navigate(item.link);
  };

  return (
    <Sider theme="light" breakpoint="lg" className="main-sidebar">
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
            <UserProfile
              onClickProfile={() => console.log("PROFILE")}
              onClickLogout={LogoutClickHandler}
            />
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
