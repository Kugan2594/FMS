import React from "react";
import { Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface FuelUpdateType {
  fuelType: string;
  fuelOnClick: any;
  lastUpdate: any;
}

function FuelUpdate({ fuelType, fuelOnClick, lastUpdate }: FuelUpdateType) {
  return (
    <div onClick={(data) => fuelOnClick(data)} style={{ cursor: "pointer" }}>
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
    </div>
  );
}

export default FuelUpdate;
