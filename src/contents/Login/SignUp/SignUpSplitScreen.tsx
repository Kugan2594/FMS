import React from "react";
import "./signup.style.less";
import Logo from "../../../assets/Logo.svg";
import Standalone from "../../../assets/Standalone.svg";
import Corporate from "../../../assets/Corporate.svg";
import { Image, Row, Col, Typography, Card } from "antd";
import { Link, useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

function SignUpSplitScreen() {
    const navigate = useNavigate();

    const standaloneOnClick = () => {
        navigate("");
    };

    const corporateOnClick = () => {
        navigate("/sign-up");
    };

    return (
        <div className="signUp-split-screen">
            <div className="signUp-split-screen-image-container">
                <Image preview={false} src={Logo} />
            </div>
            <div className="signUp-split-screen-title">
                <Title level={4}> Fleet Mangement System</Title>
            </div>
            <div>
                <Text className="signUp-split-screen-subtitle" strong>
                    Select account type
                </Text>
            </div>
            <div className="signUp-split-screen-content">
                <Row gutter={0}>
                    <Col span={12}>
                        <div className="signUp-split-screen-card-container">
                            <Card
                                className="signUp-split-screen-card"
                                onClick={standaloneOnClick}
                            >
                                <div className="card-image-container">
                                    <Image preview={false} src={Standalone} />
                                </div>
                                <div className="card-text">
                                    <Title level={5}>Standalone</Title>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div className="signUp-split-screen-card-container">
                            <Card
                                className="signUp-split-screen-card"
                                onClick={corporateOnClick}
                            >
                                <div className="card-image-container">
                                    <Image preview={false} src={Corporate} />
                                </div>
                                <div className="card-text">
                                    <Title level={5}>Corporate</Title>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="signUp-split-screen-login-container">
                <Text style={{ fontSize: "16px" }}>
                    Already have an account?
                </Text>
                <Text
                    strong
                    style={{
                        fontSize: "16px",
                        color: "blue",
                        cursor: "pointer",
                        marginLeft: "5px",
                    }}
                >
                    <Link to="/">Login</Link>
                </Text>
            </div>
        </div>
    );
}

export default SignUpSplitScreen;
