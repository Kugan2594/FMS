import React, { useState } from "react";
import { Layout, Modal } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";
import MainMenuItem from "../../molecules/MainMenuItem";
import mainMenuItems from "./items";
import SubModule from "../SubModule/item";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";
import Profile from "./Profile";

const { Sider } = Layout;
const { confirm } = Modal;

function SideBar() {
  const [submenuItems, setSubmenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const userData = {
    companyName: "Invicta Innovations",
    address: "Thirunelveli, Jaffna, Sri Lanka",
    registrationNumber: "5645641",
    companyPhoneNumber: "22560564",
    companyEmail: "invicta@gmail.com",
    licenceType: "Platinum",
    image: "https://picsum.photos/200",
  };

  const navigate = useNavigate();

  const profileOnClickHandler = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const LogoutClickHandler = () => {
    confirm({
      title: "Do you want to Logout?",
      icon: <ExclamationCircleOutlined />,
      okText: "Logout",
      okType: "default",
      cancelButtonProps: { type: "primary" },
      onOk() {
        navigate("/");
      },
    });
  };

  const notificationData = useSelector(
    (state: RootState) => state.notification.value
  );

  const badgeCount = notificationData.filter((data) => data.isRead == false);

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
                key={item.id}
                icon={item.icon}
                label={item.name}
                onClick={() => ClickHandler(item)}
                badgeCount={badgeCount.length}
              />
            );
          })}
          <div className="user">
            <UserProfile
              onClickProfile={profileOnClickHandler}
              onClickLogout={LogoutClickHandler}
              userProfile={userData.image}
            />
          </div>
        </div>
        <div className="sub-menu">
          <SubModule data={submenuItems} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          title={false}
          onCancel={handleCancel}
          closable={false}
          width={"25%"}
          footer={false}
        >
          <Profile
            closeOnClickHandler={handleCancel}
          />
        </Modal>
      )}
    </Sider>
  );
}

export default SideBar;
