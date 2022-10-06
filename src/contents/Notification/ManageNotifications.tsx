import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import Notification from "./Notification";
import "./notification.style.less";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "Redux/store";
import {
  getAllNotificationsByUserId,
  readNotification,
} from "./ServiceNotification";
import { getUserDetails } from "../../contents/Login/LoginAuthentication";
import {
  NotificationDetailType,
  setNotification,
} from "../../features/notificationSlice";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

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

function ManageNotifications() {
  const notificationData = useSelector(
    (state: RootState) => state.notification.value
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const getAllNotification = (userId: number) => {
    getAllNotificationsByUserId(userId).then((res: any) => {
      let data: NotificationDetailType = createData(res.results.notification).sort((a: any, b: any) => b.id - a.id);
      dispatch(setNotification(data));
    });
  };

  const notificationClickHandler = (data: any) => {
    readNotification(data.id).then(() => {
      getAllNotification(getUserDetails().user_id);
    });
    
    {
      data.message == "vehicle allocation"
        ? navigate("/master/drivers")
        : data.message == "part expired"
        ? navigate("/master/parts")
        : navigate("/notification/notification");
    }
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
              cardOnClickHandler={() => notificationClickHandler(notification)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ManageNotifications;
