import {
    EyeInvisibleOutlined,
    EyeTwoTone,
    SmileTwoTone,
    ThunderboltTwoTone,
} from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Text, Title } = Typography;

function OTPVerification() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const onFinish = (values: any) => {};
    const onFinishFailed = (errorInfo: any) => {};

    const [vcode, setVCode]: any[] = useState([]);

    const [disabled1, setDisabled1] = useState(true);
    const [disabled2, setDisabled2] = useState(true);
    const [disabled3, setDisabled3] = useState(true);
    const [disabled4, setDisabled4] = useState(true);
    const [disabled5, setDisabled5] = useState(true);

    const onChangeHandler1 = (e: any) => {
        vcode[0] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
        setDisabled1(false);
    };
    const reSend = () => {
        console.log("resend password");
    };
    const onChangeHandler2 = (e: any) => {
        vcode[1] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
        setDisabled2(false);
    };
    const onChangeHandler3 = (e: any) => {
        vcode[2] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
        setDisabled3(false);
    };
    const onChangeHandler4 = (e: any) => {
        vcode[3] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
        setDisabled4(false);
    };

    const onChangeHandler5 = (e: any) => {
        vcode[4] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
        setDisabled5(false);
    };

    const onChangeHandler6 = (e: any) => {
        vcode[5] = e.target.value;
        setVCode(vcode);
        console.log(vcode);
    };
    const [verifyCode, setVerifyCode]: any = useState("");
    const confirmHandler = () => {
        setVerifyCode(vcode.join(""));
        // let code = vcode.join(" ");
        console.log(verifyCode);
    };
    return (
        <div className="forgot-password-template">
            <Row className="forgot-password-content">
                <Col xs={24} xl={6} className="grid-1">
                    <div></div>
                </Col>
                <Col
                    xs={24}
                    xl={12}
                    className="grid-2"
                    style={{ marginLeft: "10%" }}
                >
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
                                            <ThunderboltTwoTone
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
                            <Row justify="space-evenly">
                                <Col
                                    className="Fleet-management-app"
                                    span={20}
                                    offset={2}
                                >
                                    <Title
                                        level={4}
                                        style={{ marginLeft: "20%" }}
                                    >
                                        {" "}
                                        OTP Verification
                                    </Title>

                                    <Text>
                                        {" "}
                                        Enter your 6 digit code sent to you
                                    </Text>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="gap"></Col>
                            </Row>
                            <Row
                                style={{
                                    marginBottom: "20px",
                                }}
                            >
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
                                        {" "}
                                        <Row>
                                            <Col>
                                                <div
                                                    className="input-container"
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        gap: "6px",
                                                        marginBottom: "10%",
                                                    }}
                                                >
                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler1
                                                        }
                                                        // value={vcode[0]}
                                                    ></Input>

                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler2
                                                        }
                                                        disabled={disabled1}
                                                    ></Input>
                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler3
                                                        }
                                                        disabled={disabled2}
                                                    ></Input>

                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler4
                                                        }
                                                        disabled={disabled3}
                                                    ></Input>

                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler5
                                                        }
                                                        disabled={disabled4}
                                                    ></Input>

                                                    <Input
                                                        placeholder="*"
                                                        maxLength={1}
                                                        onChange={
                                                            onChangeHandler6
                                                        }
                                                        disabled={disabled5}
                                                    ></Input>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col span={24}>
                                                <Form.Item>
                                                    <Button
                                                        className="login-button"
                                                        type="primary"
                                                        onClick={confirmHandler}
                                                        htmlType="reset"
                                                    >
                                                        Confirm
                                                    </Button>
                                                </Form.Item>
                                                <Form.Item>
                                                    <Text
                                                        onClick={reSend}
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        I haven't recieved a
                                                        code
                                                    </Text>
                                                </Form.Item>
                                            </Col>
                                        </Row>
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
export default OTPVerification;
