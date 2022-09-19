import React from "react";
import { Typography } from "antd";
import Notification from "./Notification";
import "./notification.style.less";
import { useSelector } from "react-redux";
import { RootState } from "Redux/store";

const { Title, Text } = Typography;

function ManageNotifications() {
  const notificationData = useSelector(
    (state: RootState) => state.notification.value
  );

  const notificationClickHandler = (id: any) => {
    //Read API
    console.log(id);
  };

  return (
    <div className="notification-layout">
      <div className="notification-title-container">
        <Title className="notification-title" level={3}>
          Notifications
        </Title>
      </div>
      <div className="notification-content">
        {notificationData.map((notification) => {
          return (
            <Notification
              id={notification.id}
              image={notification.image}
              description={notification.description}
              isRead={notification.isRead}
              time={notification.time}
              cardOnClickHandler={() => notificationClickHandler(notification.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ManageNotifications;
