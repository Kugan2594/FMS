import React from "react";
import { Col, Progress, Row, Typography } from "antd";
import { Button } from "../../../components/atoms/Button";

const { Title, Text } = Typography;

interface VehicleReminderType {
  percentage: number;
  title: string;
  lastChanged: string;
  dueDate: string;
  id: number;
  update: any;
}

function VehicleReminder({percentage, title, lastChanged, dueDate, id, update}: VehicleReminderType) {

  return (
    <div key={id} style={{margin: "0 15px 5px 0"}}>
      <Row style={{ height: "38px"}}>
        <Col span={20}>
        {percentage <= 0 ? (
            <div>
              <Text strong style={{ fontSize: "16px", color: "#ff4d4f" }}>
                {title}
              </Text>
              <Text style={{ color: "#ff4d4f" }}> Change Reminder</Text>
            </div>
          ) : (
            <div>
              <Text strong style={{ fontSize: "16px" }}>
                {title}
              </Text>
              <Text> Change Reminder</Text>
            </div>
          )}
          <Row>
            <Col span={15}>
              <Text type="secondary" style={{ fontSize: "12px", lineHeight: 0 }}>
                Last Changed: {lastChanged}
              </Text>
            </Col>
            <Col span={9}>
              <Text type="secondary" style={{ fontSize: "12px", lineHeight: 0 }}>
                Due: {dueDate}
              </Text>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <div style={{ marginTop: "5px" }}>
            <Button title="Update" type="primary" size="small" onClick={update} />
          </div>
        </Col>
      </Row>
      <div>
      <Progress percent={percentage} strokeColor={percentage >= 50
              ? "#52c41a"
              : percentage <= 25
              ? "#ff4d4f"
              : "orange"} size="small" strokeWidth={4} />
      </div>
    </div>
  );
}

export default VehicleReminder;
