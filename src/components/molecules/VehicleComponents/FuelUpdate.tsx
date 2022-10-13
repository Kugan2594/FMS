import React from "react";
import { Col, Row, Typography } from "antd";
import FuelUp from "../../../assets/FuelUp.svg";

const { Title, Text } = Typography;

interface FuelUpdateType {
  fuelType: string;
  fuelOnClick: any;
  lastUpdate: any;
}

function FuelUpdate({ fuelType, fuelOnClick, lastUpdate }: FuelUpdateType) {
  return (
    <div onClick={(data) => fuelOnClick(data)} style={{ cursor: "pointer" }}>
      <Row>
        <Col span={20}>
      <Title level={5} style={{ lineHeight: 1 }}>
        {fuelType}
      </Title>
      <div>
        <Text type="secondary" style={{ display: "inline-block" }}>
          Last refilled:
        </Text>
        <br />
        <Text strong style={{ lineHeight: 2 }} type="secondary">
          {lastUpdate.date}
        </Text>{" "}
        <Text strong style={{ lineHeight: 2, marginLeft: "20px" }}>
          {lastUpdate.amount}
        </Text>
      </div>
      </Col>
      <Col span={4}>
      <img src={FuelUp} />
      </Col>
      </Row>
    </div>
  );
}

export default FuelUpdate;
