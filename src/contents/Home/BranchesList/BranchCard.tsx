import { Card, Col, Image, Progress, Row, Typography } from "antd";
import React from "react";
import "./branch.style.less";
const { Text, Title } = Typography;
const data = [1, 2, 3, 4, 5, 6];
function BranchCard() {
    return (
        <div>
            {data.map((x) => {
                return (
                    <div className="card-container">
                        <Card style={{ borderRadius: "10px" }}>
                            <Row justify="space-around" align="middle">
                                <Col xs={24} xl={3}>
                                    {" "}
                                    <Image
                                        // width={200}
                                        style={{
                                            borderRadius: "100%",
                                            border: "1px solid red",
                                            margin: "0px !important",
                                        }}
                                        height={50}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </Col>
                                <Col xs={24} xl={18}>
                                    <Text>Singapore</Text>
                                    <Progress />
                                </Col>
                                <Col xs={24} xl={3}>
                                    <Text>75%</Text>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                );
            })}
        </div>
    );
}

export default BranchCard;
