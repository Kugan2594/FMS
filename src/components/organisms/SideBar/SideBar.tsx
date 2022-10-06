import React, { useState, useEffect } from "react";
import { Layout, Modal } from "antd";
import HeaderLogo from "./HeaderLogo";
import UserProfile from "./UserProfile";
import MainMenuItem from "../../molecules/MainMenuItem";
import mainMenuItems from "./items";
import SubModule from "../SubModule/item";
import { useNavigate } from "react-router-dom";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Redux/store";
import Profile from "./Profile";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import { SYSTEM_CONFIG } from "../../../utils/StytemConfig";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import {
  NotificationDetailType,
  setNotification,
} from "../../../features/notificationSlice";
import { getAllNotificationsByUserId } from "../../../contents/Notification/ServiceNotification";
import moment from "moment";


const { Sider } = Layout;
const { confirm } = Modal;

const createData = (data: any) => {
  let convertData = data.map((post: any) => {
    return {
      id: post.id,
      image: "https://picsum.photos/200",
      description: post.description,
      time: moment(post.createdAt).format("DD-MM-YYYY hh:mm a"),
      isRead: post.read,
      message: post.message,
    };
  });

  return convertData;
};

function SideBar() {
  const [submenuItems, setSubmenuItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getAllNotification = (userId: number) => {
    getAllNotificationsByUserId(userId).then((res: any) => {
      let data: NotificationDetailType = createData(res.results.notification).sort((a: any, b: any) => b.id - a.id);

      dispatch(setNotification(data));
    });
  };

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
  useEffect(() => {
    WebSocketClient(
      `/user/${getUserDetails().user_name}/queue/corporate/vehicleAllocation`
    );
    getAllNotification(getUserDetails().user_id);
  }, []);

  const WebSocketClient = (url: any) => {
    var sock = new SockJS(SYSTEM_CONFIG.webSocketUrl);
    let stompClient = Stomp.over(sock);
    sock.onopen = function () {};
    return new Promise((resolve, reject) => {
      stompClient.connect({}, (frame: any) => {
        stompClient.subscribe(url, (data) => {
          resolve(data);
          let dataH = JSON.parse(data.body);
          console.log("conneted", dataH);
          getAllNotification(getUserDetails().user_id);
        });
      });
      stompClient.activate();
    });
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
              userProfile={"https://picsum.photos/200"}
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
          <Profile closeOnClickHandler={handleCancel} />
        </Modal>
      )}
    </Sider>
  );
}

export default SideBar;
