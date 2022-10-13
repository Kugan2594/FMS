import React from "react";
import { Progress, Typography } from "antd";
import { Button } from "../../../components/atoms/Button";
import { WarningFilled } from "@ant-design/icons";

const { Title, Text } = Typography;

interface VehicleDocumentChartType {
  label: string;
  percentage: number;
  dueDate: string;
  update: any;
  id: number;
}

function VehicleDocumentChart({
  label,
  percentage,
  dueDate,
  update,
  id,
}: VehicleDocumentChartType) {
  return (
    <div
    key={id}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        lineHeight: 0.5,
      }}
    >
      {percentage <= 0 ? (
        <div
          style={{
            backgroundColor: "#ff4d4f",
            width: 90,
            height: 90,
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <WarningFilled style={{ color: "#fff", fontSize: "30px" }} />
          <Text style={{color: "#fff", margin: "10px"}}>Overdue</Text>
        </div>
      ) : (
        <Progress
          type="circle"
          percent={percentage}
          format={(percent) => `${percent}%`}
          width={90}
          strokeColor={percentage >= 50
              ? "#52c41a"
              : percentage <= 25
              ? "#ff4d4f"
              : "orange"}
        />
      )}

      <div style={{ marginTop: "10px" }}>
        <Title level={5}>{label}</Title>
        <Text type="secondary">
          Due: {dueDate}
        </Text>
      </div>
      <div style={{ marginTop: "15px" }}>
        <Button title="Update" type="primary" size="small" onClick={update} />
      </div>
    </div>
  );
}

export default VehicleDocumentChart;
