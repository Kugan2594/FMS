import { Col, Image, Row, Space } from "antd";
import React from "react";
interface ViewBranch {
    branchData?: any;
}

function ViewBranchAdmin({ branchData }: ViewBranch) {
    return (
        <div>
            <div className="ViewBranch-Container">
                <Row>
                    <Col xs={24} xl={4}></Col>
                    <Col xs={24} xl={16}>
                        <Row style={{ marginTop: "5%" }}>
                            <Col xs={24} xl={8}></Col>
                            <Col xs={24} xl={8} style={{ marginBottom: "5%" }}>
                                <Image
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    style={{
                                        borderRadius: "100px",
                                        border: "2px solid blue",
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
                    <Col xs={24} xl={16} style={{ marginBottom: "10px" }}>
                        <div className="Admin-Name">
                            <Space
                                style={{
                                    paddingBottom: "20px",
                                    fontSize: "16px",
                                }}
                            >
                                {branchData.adminFirstName}
                            </Space>
                            <Space
                                style={{
                                    paddingBottom: "20px",
                                    paddingLeft: "16px",
                                    fontSize: "16px",
                                }}
                            >
                                {branchData.adminLastName}
                            </Space>
                        </div>
                        <div className="E-mail-id">
                            <Space style={{ paddingBottom: "20px" }}>
                                {branchData.email}
                            </Space>
                        </div>
                        <div className="Address">
                            <Space style={{ paddingBottom: "20px" }}>
                                {branchData.branchLocation}
                            </Space>
                        </div>
                        <div className="Contact-number">
                            <Space style={{ paddingBottom: "20px" }}>
                                {branchData.contactNumber}
                            </Space>
                        </div>

                        <div className="NIC">
                            <Space style={{ paddingBottom: "20px" }}>
                                {branchData.nic}
                            </Space>
                        </div>
                        <div className="Colombo-Branch">
                            <Space
                                style={{ paddingBottom: "20px", color: "blue" }}
                            >
                                {branchData.branchName}
                            </Space>
                        </div>
                    </Col>
                    <Col xs={24} xl={4}></Col>
                </Row>
            </div>
        </div>
    );
}

export default ViewBranchAdmin;
