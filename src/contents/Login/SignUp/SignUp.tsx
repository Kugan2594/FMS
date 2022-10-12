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
function SignUp({ onClickCreate }: any) {
    const { Text, Title } = Typography;
    const { Option } = Select;
    const [form2, setForm2] = useState(false);
    const [form1, setForm1] = useState(true);
    const handleSubmit = () => {};
    const onCreateUser = () => {
        setForm2(true);
        setForm1(false);
    };
    const onClickBack = () => {
        setForm1(true);
        setForm2(false);
    };

    return (
        <div>
            <Row className="signup-container" justify="center">
                <Col xs={24} xl={1}></Col>
                <Col
                    xs={24}
                    xl={22}
                    className="main-grid"
                    style={{ textAlign: "left" }}
                >
                    <>
                        <Row justify="start" align="bottom">
                            <Col
                                className="Fleet-management-app"
                                style={{
                                    marginLeft: "0%",
                                    marginBottom: "1%",
                                }}
                            >
                                <Title level={4}> Create Company</Title>
                            </Col>
                        </Row>

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
                            <Row>
                                <Col span={11}>
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
                                </Col>
                                <Col span={1}></Col>
                                <Col span={11}>
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
                                </Col>
                            </Row>
                            <Row justify="end">
                                <Col></Col>
                                <Col
                                    style={{
                                        marginRight: "4%",
                                        marginBottom: "5%",
                                    }}
                                >
                                    <Form.Item>
                                        <Button
                                            htmlType="submit"
                                            className="signup-button"
                                            type="primary"
                                            onClick={onClickCreate}
                                        >
                                            Create
                                        </Button>
                                    </Form.Item>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Form>
                    </>
                </Col>
                <Col xs={24} xl={1}></Col>
            </Row>
        </div>
    );
}

export default SignUp;
