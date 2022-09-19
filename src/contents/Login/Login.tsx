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
import {
    getUserDetails,
    setAuthentication,
    setToken,
    setUserDetails,
    setUserName,
    setUserRolePermission,
} from "./LoginAuthentication";
import { signIn } from "./ServiceLogin";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const { Text, Title } = Typography;

function Login() {
    const [showPassword, setshowPassword] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const onChangeHandler = () => {};
    const ForgotPasswordHandler = () => {};
    const SignUpHandler = () => {};

    const handleError = (res: any) => {};

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let emailId: any = data.get("email");
        let body = {
            userName: data.get("email"),
            password: data.get("password"),
        };
        if (data.get("email") === "") {
            setEmailError("Email is required");
        } else if (
            data.get("email") !== "" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailId)
        ) {
            setEmailError("Email is not valid");
        } else {
            setLoading(true);
            signIn(body).then(
                (res: any) => {
                    let response = res.data;

                    var decoded_token: any = jwt_decode(response.access_token);
                    navigate("/home");
                    if (response.access_token) {
                        setAuthentication("true");
                        setToken(response.access_token);

                        let userdata = {
                            user_name: decoded_token.user_name,
                            user_id: decoded_token.userId,
                            firstName: decoded_token.firstName,
                            roleId: decoded_token.roleId,
                            roleName:
                                decoded_token.authorities &&
                                decoded_token.authorities[0],
                            company_id: decoded_token.companyId,
                            company_name: decoded_token.companyName,
                            company_branch_id: decoded_token.companyBranchId,
                            company_branch_name:
                                decoded_token.companyBranchName,
                        };
                        setUserName(userdata.firstName);
                        setUserDetails(JSON.stringify(userdata));
                    }
                },
                (error: any) => {
                    handleError(error.data);
                    setLoading(false);
                    setAuthentication("false");
                }
            );
        }
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
                            onSubmitCapture={handleSubmit}
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
                                    name="email"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Input.Password
                                    name="password"
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
                                    htmlType="submit"
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
                                        <Link to="/forgot-password">
                                            Forgot Password?
                                        </Link>
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
                        <div className="forgot-password">
                            <Text
                                strong
                                style={{
                                    color: "blue",
                                    cursor: "pointer",
                                }}
                            >
                                <Link to="/sign-up-split-screen">Sign Up</Link>
                            </Text>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default Login;
