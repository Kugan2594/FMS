import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { Button, Card, Col, Image, Progress, Row, Typography } from "antd";
import Title from "antd/lib/skeleton/Title";
import { number } from "prop-types";
import React from "react";
import "./card.style.less";
interface CardLargeType {
    id?: string;
    numberOfVehicles?: number;
    progressData?: number;
    itemName?: string;
    branchLocation?: string;
    branchName?: string;
    adminName?: string;
    cardOnClick?: any;
    onClickUpdate?: any;
    onClickDelete?: any;
    image?: any;
}

function SmallCard({
    id,
    numberOfVehicles,
    progressData,
    itemName,
    branchLocation,
    branchName,
    adminName,
    cardOnClick,
    onClickUpdate,
    onClickDelete,
    image,
}: CardLargeType) {
    const { Title, Text } = Typography;
    return (
        <Card className="small-card" onClick={cardOnClick}>
            <Row className="main-row" justify="center" align="top" gutter={8}>
                <Col xs={24} xl={4}>
                    <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{ borderRadius: 10 }}
                    />
                    <Progress percent={progressData} size="small" />
                </Col>
                <Col xs={24} xl={9} className="content-2">
                    <div className="content-2-item">
                        <Title level={5}> {branchName}</Title>
                        <div className="sub-content">
                            <Text>{branchLocation}</Text>
                            <div className="admin-name">
                                <Text strong type="secondary">
                                    {adminName}
                                </Text>
                            </div>
                        </div>
                    </div>
                </Col>

                <Col xs={24} xl={11}>
                    <Row justify="end" className="content-3" align="bottom">
                        <div
                            className="vehicles"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div className="number-of-vehicles">
                                <div
                                    className="number"
                                    style={{
                                        fontSize: "24px",
                                        padding: "0px",
                                    }}
                                >
                                    {numberOfVehicles}
                                </div>{" "}
                                <div className="item-name">
                                    <Text strong type="secondary">
                                        {itemName}
                                    </Text>{" "}
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <Button
                                style={{ borderRadius: 5 }}
                                onClick={() => {
                                    onClickDelete(id);
                                }}
                            >
                                Delete
                            </Button>
                            <Button
                                style={{ borderRadius: 5 }}
                                type="primary"
                                onClick={() => {
                                    onClickUpdate(id);
                                }}
                            >
                                Update
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default SmallCard;
