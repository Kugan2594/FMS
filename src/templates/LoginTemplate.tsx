import { Col, Grid, Row } from "antd";
import Login from "../contents/Login/Login";
import React from "react";

function LoginTemplate() {
    return (
        <div className="login-template-grid">
            <Row>
                <Col xs={4} sm={6} xl={15}></Col>
                <Col xs={16} sm={12} xl={9}>
                    <Login />
                </Col>
                <Col xs={4} sm={6} xl={0}></Col>
            </Row>
        </div>
    );
}

export default LoginTemplate;
