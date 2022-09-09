import { Col, Grid, Row } from "antd";
import Login from "../contents/Login/Login";
import React from "react";

function LoginTemplate() {
    return (
        <div className="login-template-grid">
            <Row>
                <Col xs={24} xl={12} style={{ border: "1px solid red" }}></Col>
                <Col xs={24} xl={12}>
                    <Login />
                </Col>
            </Row>
        </div>
    );
}

export default LoginTemplate;
