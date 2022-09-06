import { Col, Row, Typography } from "antd";
import React from "react";
import logo from "../../../assets/Logo.svg";

const {Title} = Typography;

export default function HeaderLogo() {
  return (
    <div className="sidebar-header-logo">
      <Row align="middle" gutter={8}>
        <Col>
      <img src={logo}/>
      </Col>
      <Col>
      <Title style={{margin: 0}} level={5}>Fleet<br/>Management</Title>
      </Col>
      </Row>
    </div>
  );
}
