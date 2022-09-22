import { ThunderboltTwoTone } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import { errHandler, userVerifiedSuccess } from "../../../helper/helper";
import { useState } from "react";
import { otpVerification } from "./ServiceOtpVerification";
const { Text, Title } = Typography;

function OTPVerification() {
  const [form] = Form.useForm();
  const [vcode, setVCode]: any[] = useState([]);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);
  const [disabled3, setDisabled3] = useState(true);
  const [disabled4, setDisabled4] = useState(true);
  const [disabled5, setDisabled5] = useState(true);

  const onChangeHandler1 = (e: any) => {
    vcode[0] = e.target.value;
    setVCode(vcode);
    setDisabled1(false);
  };
  const reSend = () => {};
  const onChangeHandler2 = (e: any) => {
    vcode[1] = e.target.value;
    setVCode(vcode);
    setDisabled2(false);
  };
  const onChangeHandler3 = (e: any) => {
    vcode[2] = e.target.value;
    setVCode(vcode);
    setDisabled3(false);
  };
  const onChangeHandler4 = (e: any) => {
    vcode[3] = e.target.value;
    setVCode(vcode);

    setDisabled4(false);
  };

  const onChangeHandler5 = (e: any) => {
    vcode[4] = e.target.value;
    setVCode(vcode);
    setDisabled5(false);
  };

  const onChangeHandler6 = (e: any) => {
    vcode[5] = e.target.value;
    setVCode(vcode);
  };
  const [verifyCode, setVerifyCode]: any = useState("");
  const confirmHandler = () => {
    setVerifyCode(vcode.join(""));
  };

  const onFinish = (values: any) => {
    let lodash = require("lodash");
    let otp = lodash.join(vcode, "");
    let data: object = {
      email: values.email,
      otp: otp,
    };
    otpVerification(data)
      .then((res: any) => {
        userVerifiedSuccess();
      })
      .catch((err: any) => {
        errHandler(err);
      });
  };
  const onFinishFailed = (errorInfo: any) => {};

  return (
    <div className="forgot-password-template">
      <Row className="forgot-password-content">
        <Col xs={24} xl={6} className="grid-1">
          <div></div>
        </Col>
        <Col xs={24} xl={12} className="grid-2" style={{ marginLeft: "10%" }}>
          <div>
            <Card className="login-card">
              <Row className="lock-logo">
                <Col span={4} offset={10} className="login-title">
                  <Row
                    justify="center"
                    align="middle"
                    style={{
                      borderRadius: "10px",
                      backgroundColor: "rgba(0, 136, 204, 0.123)",
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
                <Col className="Fleet-management-app" span={20} offset={2}>
                  <Title level={4} style={{ marginLeft: "20%" }}>
                    {" "}
                    OTP Verification
                  </Title>

                  <Text>{"Enter your E-mail & 6 digit code sent to you"}</Text>
                </Col>
              </Row>
              <br />
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
                      <Form.Item name="email" style={{ width: "120%" }}>
                        <Input placeholder="E-mail" />
                      </Form.Item>
                    </Row>
                    <Row>
                      <Form.Item name="otp">
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
                              onChange={onChangeHandler1}
                              // value={vcode[0]}
                            ></Input>

                            <Input
                              placeholder="*"
                              maxLength={1}
                              onChange={onChangeHandler2}
                              disabled={disabled1}
                            ></Input>
                            <Input
                              placeholder="*"
                              maxLength={1}
                              onChange={onChangeHandler3}
                              disabled={disabled2}
                            ></Input>

                            <Input
                              placeholder="*"
                              maxLength={1}
                              onChange={onChangeHandler4}
                              disabled={disabled3}
                            ></Input>

                            <Input
                              placeholder="*"
                              maxLength={1}
                              onChange={onChangeHandler5}
                              disabled={disabled4}
                            ></Input>

                            <Input
                              placeholder="*"
                              maxLength={1}
                              onChange={onChangeHandler6}
                              disabled={disabled5}
                            ></Input>
                          </div>
                        </Col>
                      </Form.Item>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Form.Item>
                          <Button
                            className="login-button"
                            type="primary"
                            // onClick={confirmHandler}
                            htmlType="submit"
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
                            I haven't recieved a code
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
