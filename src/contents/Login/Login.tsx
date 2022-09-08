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
import { useNavigate } from "react-router-dom";
const { Text, Title } = Typography;

function Login() {
    const [showPassword, setshowPassword] = React.useState(false);
    const [emailError, setEmailError] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const onChangeHandler = () => { };
    const ForgotPasswordHandler = () => {
        console.log("forgot password");
    };
    const SignUpHandler = () => {
        console.log("signUp");
    };


    const handleError = (res:any) => {
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let emailId:any = data.get("email");
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
                    var decoded_token: any = "";
                    navigate("/home"); 
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
                       onClick={handleSubmit}
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
                                name = "password"
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
                                <Button htmlType="submit"
                                    className="login-button"
                                    type="primary"
                                    loading={loading}
                                    // onClick={() => {
                                    //     setLoading(!loading);
                                    // }}   
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
