import { Col, Image, Row } from "antd";
import React from "react";
import "./viewBranch.style.less";

interface ViewBranch {}
function ViewBranch() {
    return (
        <div>
            <div className="viewBranch-container">
                <Row>
                    <Col xs={24} xl={4}></Col>
                    <Col xs={24} xl={16}>
                        <Row>
                            <Col xs={24} xl={8}></Col>
                            <Col xs={24} xl={8}>
                                <Image
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    style={{
                                        borderRadius: "100px",
                                        border: "1px solid blue",
                                    }}
                                />
                            </Col>
                            <Col xs={24} xl={8}></Col>
                        </Row>
                    </Col>
                    <Col xs={24} xl={4}></Col>
                </Row>
                <Row style={{ marginTop: "5%" }}>
                    <Col xs={24} xl={4}></Col>
                    <Col xs={24} xl={16}>
                        kdmgdkkmdk
                    </Col>
                    <Col xs={24} xl={4}></Col>
                </Row>
            </div>
        </div>
    );
}

export default ViewBranch;
