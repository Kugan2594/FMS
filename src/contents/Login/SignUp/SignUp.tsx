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
function SignUp() {
    const { Text, Title } = Typography;
    const { Option } = Select;

    const onChange = (value: string) => {};

    const onSearch = (value: string) => {};
    const handleSubmit = () => {};
    return (
        <div>
            <Row className="signup-container">
                <Col xs={24} xl={8}></Col>
                <Col xs={24} xl={8} className="main-grid">
                    <Card className="signup-card">
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
                                    onSubmitCapture={handleSubmit}
                                    layout="horizontal"
                                    size="large"
                                >
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
                                            placeholder="Company Address"
                                            maxLength={400}
                                            name="Company Address"
                                        />
                                    </Form.Item>
                                    <Form.Item>
                                        <Select
                                            showSearch
                                            placeholder="Select A Country"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            bordered={false}
                                            style={{ width: "150px" }}
                                            filterOption={(input, option) =>
                                                (
                                                    option!
                                                        .children as unknown as string
                                                )
                                                    .toLowerCase()
                                                    .includes(
                                                        input.toLowerCase()
                                                    )
                                            }
                                        >
                                            <Option value="Srilanka">
                                                Srilanka
                                            </Option>
                                            <Option value="Singapore">
                                                Singapore
                                            </Option>
                                            <Option value="United States">
                                                United States
                                            </Option>
                                            <Option value="United States">
                                                United Kingdom
                                            </Option>
                                        </Select>
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
                                        <div className="login">
                                            <Text
                                                strong
                                                style={{
                                                    color: "blue",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <Link to="/">Login</Link>
                                            </Text>
                                        </div>
                                    </Form.Item>
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
