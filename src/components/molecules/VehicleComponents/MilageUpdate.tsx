import React from "react";
import { Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface MilageUpdateType {
  milage: any;
  milageOnClick: any;
}

function MilageUpdate({ milage, milageOnClick }: MilageUpdateType) {
  return (
    <div onClick={(data) => milageOnClick(data)} style={{ cursor: "pointer" }}>
      <Title level={5} style={{ lineHeight: 1 }}>
        Milage
      </Title>
      <div>
        <Title level={3} style={{ lineHeight: 1, display: "inline-block" }}>
          {milage} km
        </Title>{" "}
        <PlusCircleOutlined
          style={{ display: "inline-block", fontSize: "20px" }}
        />
      </div>
    </div>
  );
}

export default MilageUpdate;
