import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { AiOutlineRadarChart } from "react-icons/ai";
const { Title, Text } = Typography;
const cardInfo: any = [
    { title: "Branches", icon: <AiOutlineRadarChart />, count: "30" },
    { title: "On-risk", icon: <AiOutlineRadarChart />, count: "20" },
    { title: "Perfect", icon: <AiOutlineRadarChart />, count: "10" },
];

function MajorDetails() {
    return (
        <div>
            <Row>
                {cardInfo.map((x: any) => (
                    <Col span={8}>
                        <div className="mini-card">
                            <Card
                                style={{
                                    width: "128px",
                                    borderRadius: "10px",
                                    margin: "5px",
                                }}
                            >
                                <Row>
                                    <Col>{x.count}</Col>
                                </Row>
                                <Row>
                                    <Col span={4}>{x.icon}</Col>
                                    <Col span={20}>
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
