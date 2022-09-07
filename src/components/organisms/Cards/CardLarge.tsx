import React from "react";
import { Button, Card, Col, Progress, Row, Typography } from "antd";
import "./card.style.less";

interface CardLargeType {
    id?: string;
    name?: string;
    progressData?: number;
    vehicleNo?: string;
    vehicleModel?: string;
    branchName?: string;
    dueDate?: string;
    cardOnClick?: any;
    updateButton?: any;
    deleteButton?: any;
}

const { Title, Text } = Typography;

function CardLarge({
    id,
    name,
    progressData,
    vehicleNo,
    vehicleModel,
    branchName,
    dueDate,
    updateButton,
    deleteButton,
    cardOnClick,
}: CardLargeType) {
    return (
        <Card key={id} className="large-card">
            <Row
                className="large-card-row"
                gutter={{ xs: 12, xl: 8 }}
                align="middle"
                justify="space-between"
            >
                <Col xs={24} xl={6}>
                    <div
                        className="large-card-name"
                        onClick={() => cardOnClick(id)}
                    >
                        <Title style={{ margin: 0 }} level={5}>
                            {name}
                        </Title>
                        <Progress percent={progressData} size="small" />
                    </div>
                </Col>
                <Col xs={12} xl={4}>
                    <div>
                        <Title level={5}>{vehicleNo}</Title>
                        <Text>{vehicleModel}</Text>
                    </div>
                </Col>
                <Col xs={12} xl={5}>
                    <div className="large-card-data">
                        <Text strong>{branchName}</Text>
                    </div>
                </Col>
                <Col xs={12} xl={4}>
                    <div className="large-card-data">
                        <Text strong type="secondary">
                            Due on: {dueDate}
                        </Text>
                    </div>
                </Col>
                <Col xs={12} xl={5}>
                    <div className="large-card-button">
                        <Button onClick={() => updateButton(id)} type="primary">
                            Update
                        </Button>
                        <Button onClick={() => deleteButton(id)}>Delete</Button>
                    </div>
                </Col>
            </Row>
        </Card>
    );
}

export default CardLarge;
