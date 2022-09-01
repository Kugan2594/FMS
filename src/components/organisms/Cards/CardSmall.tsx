import { Button, Card, Col, Grid, Image, Progress, Row } from "antd";
import "./card.style.less";
import PropTypes from "prop-types";
import React, { FC } from "react";
type carType = "small" | "medium" | "large";

interface SmallCardProps {
    width: string;
    height: string;
    type: carType;
}

const CardSmall: FC<SmallCardProps> = ({ width, height, type }) => {
    return (
        <Card className={"small-card"}>
            <Row>
                <Col span={6} className="image">
                    <Image
                        width={100}
                        height={80}
                        style={{
                            borderRadius: 10,
                            backgroundColor: "#eee",
                            objectFit: "fill",
                        }}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <Progress
                        style={{ width: 100 }}
                        percent={50}
                        size="small"
                        status="active"
                    />
                </Col>
                <Col span={8} className="content-one">
                    <div style={{ fontSize: 18 }}>Colombo Branch</div>
                    <div>la plaza Location</div>
                    <div style={{ height: 35 }}></div>
                    <div>Michael Clarke</div>
                </Col>
                <Col span={6} className="content-two">
                    <Row>
                        <Col span={24} style={{ height: 70 }}></Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button type="default">Add</Button>
                        </Col>
                    </Row>
                </Col>
                <Col span={4} className="content-three">
                    <Row>
                        <Col
                            span={24}
                            style={{
                                height: 70,
                                textAlign: "right",
                            }}
                        >
                            <div style={{ fontSize: 22 }}>200</div>
                            <div>Vehicles</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Button style={{ borderRadius: 5 }} type="primary">
                                Update
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default CardSmall;
// type carType= 'small'|'medium'|'large'
// CardSmall.propTypes = {
//     width: PropTypes.string,
//     heigth: PropTypes.string,
//     type: PropTypes.string,
// };
