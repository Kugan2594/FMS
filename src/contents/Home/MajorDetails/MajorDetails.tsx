import { Card, Col, Row, Typography } from "antd";
import React from "react";
import {
    AiOutlineAlibaba,
    AiOutlineRadarChart,
    AiOutlineRedEnvelope,
    AiOutlineRollback,
} from "react-icons/ai";
const { Title, Text } = Typography;
const cardInfo: any = [
    { title: "Branches", icon: <AiOutlineAlibaba size={30} />, count: "30" },
    { title: "On-risk", icon: <AiOutlineRedEnvelope size={30} />, count: "20" },
    { title: "Perfect", icon: <AiOutlineRadarChart size={30} />, count: "10" },
];

function MajorDetails() {
    return (
        <div>
            <Row justify="end">
                {cardInfo.map((x: any) => (
                    <Col span={8}>
                        <div className="mini-card">
                            <Card
                                style={{
                                    width: "128px",
                                    borderRadius: "5px",
                                    margin: "5px",
                                }}
                            >
                                <Row justify="end">
                                    <Col>
                                        <Title level={3}>{x.count}</Title>
                                    </Col>
                                </Row>
                                <Row
                                    justify="end"
                                    style={{ textAlign: "right" }}
                                >
                                    <Col span={8}>{x.icon}</Col>
                                    <Col span={16}>
                                        <Text>{x.title}</Text>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MajorDetails;
