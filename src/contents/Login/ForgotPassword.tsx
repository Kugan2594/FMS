import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    LockFilled,
    LockOutlined,
    LockTwoTone,
    MessageOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Image, Input, Row, Typography } from "antd";
import React from "react";
import Logo from "../../assets/Logo.svg";
import "./login.style.less";
const { Title, Text } = Typography;

function ForgotPassword() {
    const onClickBack = () => {};
    const OTPhandler = () => {
        console.log("send OTP");
    };
    const onChangeHandler = () => {};
    return (
        <div className="forgot-password-template">
            <Row
                className="forgot-password-content"
                // justify="space-around"
                // align="middle"
            >
                <Col xs={24} xl={6} className="grid-1">
                    <div></div>
                </Col>
                <Col xs={24} xl={12} className="grid-2">
                    <div>
                        <Card className="login-card">
                            <Row className="lock-logo">
                                <Col
                                    span={4}
                                    offset={10}
                                    className="login-title"
                                >
                                    <Row
                                        justify="center"
                                        align="middle"
                                        style={{
                                            borderRadius: "10px",
                                            backgroundColor:
                                                "rgba(0, 136, 204, 0.123)",
                                        }}
                                    >
                                        <Col span={22} offset={2}>
                                            {/* <div className="logo"> */}
                                            <LockTwoTone
                                                style={{
                                                    fontSize: "28px",
                                                    color: "#08c",
                                                    margin: "20%",
                                                }}
                                            />
                                            {/* </div> */}
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row justify="center">
                                <Col
                                    className="Fleet-management-app"
                                    span={20}
                                    offset={2}
                                >
                                    <Title level={4}> Forgot Password?</Title>

                                    <Text>
                                        {" "}
                                        Enter your email, phone, or username and
                                        we'll send you a link to get back into
                                        your account.
                                    </Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gap"></Col>
                            </Row>
                            <Row>
                                <Col span={20} offset={2}>
                                    <Form
                                        labelCol={{
                                            span: 24,
                                        }}
                                        wrapperCol={{
                                            span: 24,
                                        }}
                                        layout="horizontal"
                                        // onValuesChange={onFormLayoutChange}
                                        // disabled={componentDisabled}
                                        size="large"
                                    >
                                        <Form.Item>
                                            <Input
                                                placeholder="Email ,Mobile number"
                                                maxLength={400}
                                                onChange={onChangeHandler}
                                            />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button
                                                className="login-button"
                                                type="primary"
                                                // loading={loading}
                                                onClick={OTPhandler}
                                                htmlType="submit"
                                            >
                                                Send OTP
                                            </Button>
                                        </Form.Item>
                                        <Form.Item>
                                            <div className="forgot-password">
                                                <Text
                                                    onClick={onClickBack}
                                                    strong
                                                    style={{
                                                        color: "blue",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Back to Login
                                                </Text>
                                            </div>
                                        </Form.Item>
                                    </Form>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </Col>
                <Col xs={24} xl={6} className="grid-2">
                    <div></div>
                </Col>
            </Row>
        </div>
    );
}

export default ForgotPassword;
