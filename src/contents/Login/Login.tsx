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
const { Text, Title } = Typography;

function Login() {
    const [showPassword, setshowPassword] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [loading, setLoading] = useState(false);

    const onChangeHandler = () => { };
    const ForgotPasswordHandler = () => {
        console.log("forgot password");
    };
    const SignUpHandler = () => {
        console.log("signUp");
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let emailId = "cude1995son@gmail.com";
        let body = {
            userName: data.get("email"),
            password: data.get("password"),
        };
        console.log(body);

        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
        if (data.get("email") === "") {
            setEmailError("Email is required");
        } else if (
            data.get("email") !== "" &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailId)
        ) {
            setEmailError("Email is not valid");
        } else {
            console.log({ body });
            setLoading(true);
            signIn(body).then(
                (res: any) => {
                    let response = res.data;
                    console.log({ response });
                    var decoded_token: any = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6IkN1ZGVzb24iLCJ1c2VyX25hbWUiOiJjdWRlMTk5NXNvbkBnbWFpbC5jb20iLCJyb2xlSWQiOjQsImNvbXBhbnlOYW1lIjoiU0dJQyIsImNvbXBhbnlCcmFuY2hOYW1lIjoiU0dJQyIsInVzZXJJZCI6NSwiYXV0aG9yaXRpZXMiOlsiQ09NUEFOWURSSVZFUiJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwiZmlyc3ROYW1lIjoiQ3VkZW1hcml5YW4iLCJhdWQiOlsicmVzb3VyY2Utc2VydmVyLXJlc3QtYXBpIl0sImNvbXBhbnlJZCI6MiwiY29tcGFueUJyYW5jaElkIjoyLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiZXhwIjoxNjYyODA0MzU2LCJqdGkiOiIzMGM4ZDI4Ny1hMTA5LTQ3MDEtYmM2OS01OTg5ZWRkZTM0ZTUifQ.A18AJVbIFPwCPxIlhyZpcj-GMHsCT86z1dE8qqwIT3g";
                    if (response.access_token) {
                        setAuthentication("true");
                        setToken(response.access_token);
                        console.log("decoded_token", decoded_token);
                        let userdata = {
                            user_name: decoded_token.user_name,
                            user_id: decoded_token.userId,
                            firstName: decoded_token.firstName,
                            roleId: decoded_token.roleId,
                            roleName:
                                decoded_token.authorities &&
                                decoded_token.authorities[0],
                        };
                        setUserName(userdata.firstName);
                        setUserDetails(JSON.stringify(userdata));
                    }
                    // console.log(getUserDetails());
                    console.log(res);
                },
                (error: any) => {
                    console.log(error.data);

                    // handleError(error.data);
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
                        onFinish={handleSubmit}
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
                                    // onClick={() => {
                                    //     setLoading(!loading);
                                    // }}
                                    onClick={handleSubmit}
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
