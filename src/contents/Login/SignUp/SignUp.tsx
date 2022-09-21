import {
    Button,
    Card,
    Col,
    Form,
    Image,
    Input,
    Row,
    Select,
    Typography,
} from "antd";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Logo.svg";
import "./signup.style.less";
import { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
function SignUp() {
    const { Text, Title } = Typography;
    const { Option } = Select;
    const [form2, setForm2] = useState(false);
    const [form1, setForm1] = useState(true);
    const handleSubmit = () => {};
    const onCreateUser = () => {
        setForm2(true);
        setForm1(false);
        console.log("form1" + form1);
        console.log("form2" + form2);
    };
    const onClickBack = () => {
        setForm1(true);
        setForm2(false);
        console.log("form1" + form1);
        console.log("form2" + form2);
    };

    return (
        <div>
            <Row className="signup-container">
                <Col xs={24} xl={8}></Col>
                <Col xs={24} xl={8} className="main-grid">
                    <Card className="signup-card">
                        {form1 ? (
                            <>
                                <Row>
                                    <Col
                                        span={4}
                                        offset={10}
                                        className="login-title"
                                    >
                                        <Image src={Logo} />
                                    </Col>
                                </Row>
                                <Row justify="space-around" align="middle">
                                    <Col className="Fleet-management-app">
                                        <Title level={4}>
                                            {" "}
                                            Fleet Mangement System
                                        </Title>
                                    </Col>
                                </Row>
                            </>
                        ) : (
                            <Row justify="start" align="bottom">
                                <Col
                                    className="Fleet-management-app"
                                    style={{
                                        marginLeft: "10%",
                                        marginBottom: "5%",
                                    }}
                                >
                                    <Title level={5} style={{ color: "blue" }}>
                                        {" "}
                                        Company Admin Details
                                    </Title>
                                </Col>
                            </Row>
                        )}
                        {form1 ? (
                            <Row>
                                <Col className="gap"></Col>
                            </Row>
                        ) : (
                            ""
                        )}
                        <Row>
                            <Col span={20} offset={2}>
                                <Form
                                    labelCol={{
                                        span: 24,
                                    }}
                                    wrapperCol={{
                                        span: 24,
                                    }}
                                    onSubmitCapture={handleSubmit}
                                    layout="horizontal"
                                    size="large"
                                >
                                    {form1 ? (
                                        <>
                                            {" "}
                                            <Form.Item>
                                                <Input
                                                    placeholder="Company Name"
                                                    maxLength={400}
                                                    name="Company Name"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="Registration Number"
                                                    maxLength={400}
                                                    name="Registration Number"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="Company E-mail"
                                                    maxLength={400}
                                                    name="Company E-mail"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="Company Address"
                                                    maxLength={400}
                                                    name="Company Address"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <div
                                                    className="next"
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                        justifyContent: "right",
                                                    }}
                                                    onClick={onCreateUser}
                                                >
                                                    <Text
                                                        strong
                                                        style={{
                                                            color: "blue",
                                                            cursor: "pointer",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        Next {<RightOutlined />}
                                                    </Text>
                                                </div>
                                            </Form.Item>
                                        </>
                                    ) : (
                                        <>
                                            <Form.Item>
                                                <Input
                                                    placeholder="First Name"
                                                    maxLength={400}
                                                    name="First Name"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="Last Name"
                                                    maxLength={400}
                                                    name="Last Name"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="NIC"
                                                    maxLength={400}
                                                    name="NIC"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="E-Mail"
                                                    maxLength={400}
                                                    name="E-Mail"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Input
                                                    placeholder="Mobile Number"
                                                    maxLength={400}
                                                    name="Mobile Number"
                                                />
                                            </Form.Item>
                                            <Form.Item>
                                                <Button
                                                    htmlType="submit"
                                                    className="signup-button"
                                                    type="primary"
                                                >
                                                    Sign Up
                                                </Button>
                                            </Form.Item>
                                            <Form.Item>
                                                <div
                                                    className="login"
                                                    onClick={onClickBack}
                                                    style={{
                                                        display: "flex",
                                                        flexDirection: "row",
                                                    }}
                                                >
                                                    <Text
                                                        strong
                                                        style={{
                                                            color: "blue",
                                                            cursor: "pointer",
                                                            fontSize: "18px",
                                                        }}
                                                    >
                                                        {<LeftOutlined />} Back
                                                    </Text>
                                                </div>
                                            </Form.Item>
                                        </>
                                    )}
                                </Form>
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xs={24} xl={8}></Col>
            </Row>
        </div>
    );
}

export default SignUp;
