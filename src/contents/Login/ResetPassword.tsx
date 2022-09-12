import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    SmileTwoTone,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import "./login.style.less";
import { resetPasswordApi } from "./ServiceForgotPassword";

const { Title, Text } = Typography;

function ResetPassword() {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        resetPasswordApi(values)
            .then((res) => {})
            .then(() => {
                navigate("/");
            })
            .catch((err) => {});

        form.resetFields();
    };

    const onFinishFailed = (errorInfo: any) => {};
    const ResetHandler = () => {};
    return (
        <div className="forgot-password-template">
            <Row className="forgot-password-content">
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
                                            <SmileTwoTone
                                                style={{
                                                    fontSize: "28px",
                                                    color: "#08c",
                                                    margin: "20%",
                                                }}
                                            />
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
                                    <Title level={4}> Reset Password?</Title>

                                    <Text> Enter your OTP and Password</Text>
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
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        size="large"
                                    >
                                        <Form.Item
                                            name="token"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your Token!",
                                                },
                                            ]}
                                        >
                                            <Input
                                                placeholder="Token"
                                                maxLength={400}
                                            />
                                        </Form.Item>
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your New Password!",
                                                },
                                            ]}
                                        >
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
                                                className="login-button"
                                                type="primary"
                                                onClick={ResetHandler}
                                                htmlType="submit"
                                            >
                                                Reset Password
                                            </Button>
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

export default ResetPassword;
