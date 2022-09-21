import { Card, Col, Image, Row, Typography } from "antd";
import React from "react";
import "./notification.style.less";
import User from "../../assets/User.svg";

const { Text } = Typography;

interface NotificationDetailType {
  id: string;
  image: any;
  description: string;
  time: string;
  isRead: boolean;
  cardOnClickHandler: any;
}

function Notification({
  id,
  image,
  description,
  time,
  isRead,
  cardOnClickHandler,
}: NotificationDetailType) {
  return (
    <div className="notification" key={id}>
      <Card
        className="notification-card"
        style={
          isRead
            ? { backgroundColor: "white" }
            : { backgroundColor: "rgba(170, 238, 255, 0.151)" }
        }
        onClick={() => cardOnClickHandler(id)}
      >
        <Row align="middle" gutter={15}>
          <Col span={3}>
            <div className="image-container">
              <div className="image">
                {image != null ? (
                  <Image preview={false} style={{ borderRadius: "50%" }} src={image} />
                ) : (
                  <Image
                    width="100%"
                    style={{ borderRadius: "50%" }}
                    preview={false}
                    src={User}
                  />
                )}
              </div>
            </div>
          </Col>
          <Col span={21}>
            <Text strong>{description}</Text>
            <br />
            <Text className="date" type="secondary">
              {time}
            </Text>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Notification;
