import { Button, Card, Col, Row } from "antd";
import React from "react";

const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

function CardLarge() {
  return (
    <Card className="large-card">
      <Row gutter={8}>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={4}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col span={4}>
          <div style={style} className="large-card-button">
            <Button type="primary">Update</Button>
            <Button>Delete</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardLarge;
