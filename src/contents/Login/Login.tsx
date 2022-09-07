import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import {
    Button,
    Card,
    Col,
    Form,
    Image,
    Input,
    Row,
    Space,
    Typography,
} from "antd";
import Logo from "../../assets/Logo.svg";

import React, { useState } from "react";
import "./login.style.less";
import { loadOptions } from "@babel/core";

const { Text, Title } = Typography;

function Login() {
    const [loading, setLoading] = useState(false);
    const onChangeHandler = () => {};
    const ForgotPasswordHandler = () => {
        console.log("forgot password");
    };
    const SignUpHandler = () => {
        console.log("signUp");
    };
    return (
        <div className="login-Component">
            <Card className="login-card">
                <Row>
                    <Col span={4} offset={10} className="login-title">
                        <Image src={Logo} />
                    </Col>
                </Row>
                <Row justify="space-around" align="middle">
                    <Col className="Fleet-management-app">
                        <Title level={4}> Fleet Mangement System</Title>
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
                                <Input.Password
                                    placeholder="Password"
                                    iconRender={(visible) =>
                                        visible ? (
                                            <EyeTwoTone />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        )
                                    }
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    className="login-button"
                                    type="primary"
                                    loading={loading}
                                    onClick={() => {
                                        setLoading(!loading);
                                    }}
                                >
                                    Login
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <div className="forgot-password">
                                    <Text
                                        onClick={ForgotPasswordHandler}
                                        strong
                                        style={{
                                            color: "blue",
                                            cursor: "pointer",
                                        }}
                                    >
                                        Forgot Password?
                                    </Text>
                                </div>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Card>
            <Card className="signUp-option">
                <Row justify="center" align="middle">
                    <Col className="sign-up-column">
                        <Text style={{ fontSize: "16px" }}>
                            Don't have an account?{" "}
                        </Text>
                        <div
                            onClick={SignUpHandler}
                            className="sign-up-link"
                            style={{
                                color: "blue",
                                fontSize: "16px",
                                fontWeight: "bold",
                                marginLeft: "10px",
                                cursor: "pointer",
                            }}
                        >
                            SignUp
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Login;
