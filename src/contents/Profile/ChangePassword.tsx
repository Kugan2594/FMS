import { LockFilled, LockTwoTone } from "@ant-design/icons";
import {
    Button,
    Card,
    Checkbox,
    Col,
    Form,
    Input,
    Row,
    Typography,
} from "antd";
import React from "react";
const { Title, Text } = Typography;

function ChangePassword() {
    const onFinish = (values: any) => {
        if (values.newPassword === values.confirmPassword)
            console.log("Password Change Success:", values);
        else console.log("Password Change Fail");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <>
            <Card style={changePasswordCard}>
                <Row>
                    <Col>
                        <LockTwoTone
                            style={{
                                fontSize: "40px",
                                color: "#08c",
                                marginLeft: "55%",
                                padding: "10px",
                                borderRadius: "10%",
                                backgroundColor: "rgba(0, 136, 204, 0.123)",
                            }}
                        />
                        <Title level={4} style={{ textAlign: "center" }}>
                            {" "}
                            Change Password?
                        </Title>

                        <Text style={{ textAlign: "center" }}>
                            {" "}
                            Enter your Old password and New password{<br />} to
                            change your password.
                        </Text>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ height: "30px" }}></Col>
                </Row>
                <Row>
                    <Form
                        name="basic"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 14 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Old Password"
                            name="oldPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Old Password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="New Password"
                            name="newPassword"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your New Password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Confirm Password"
                            name="confirmPassword"
                            rules={[
                                {
                                    required: true,
                                    message:
                                        "Please input your new password again to confirm!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{ offset: 8, span: 16 }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Row>
            </Card>
        </>
    );
}

export default ChangePassword;

const changePasswordCard: React.CSSProperties = {
    width: "30%",
    marginTop: "5%",
    marginLeft: "5%",
    borderRadius: "5px",
};
