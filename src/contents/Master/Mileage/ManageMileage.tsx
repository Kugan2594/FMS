import { Col, Image, InputNumber, Modal, Row } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Button } from "../../../components/atoms/Button";

function ManageMileage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editOpen, seteditOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOpenEdit = () => {
        seteditOpen(!editOpen);
    };

    return (
        <>
            <Button title="Mileage" type="primary" onClick={showModal} />

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                footer={null}
                width={800}
            >
                <div style={gridStyle}>
                    <Row>
                        <Col span={12} style={{ paddingRight: "20px" }}>
                            <h2 style={{ textAlign: "left", color: "#3385FF" }}>
                                Mileage History
                            </h2>
                            <h5 style={{ textAlign: "left", color: "#3385FF" }}>
                                {" "}
                                Recent
                            </h5>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        52415 km
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        52400 km
                                    </div>
                                </Col>
                            </Row>

                            <h5 style={{ textAlign: "left", color: "#3385FF" }}>
                                {" "}
                                Last Month
                            </h5>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        51530 km
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        50500 km
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        50400 km
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <div
                                        style={{
                                            fontSize: "12px",
                                        }}
                                    >
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={16}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        50000 km
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={0.5}>
                            <div
                                style={{
                                    border: "1px solid grey",
                                    height: "100%",
                                }}
                            ></div>
                        </Col>
                        <Col span={11} style={{ paddingLeft: "20px" }}>
                            <Row>
                                <Col span={5}>
                                    <Image
                                        width={70}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                        style={{
                                            alignItems: "right",
                                            borderRadius: "50%",
                                        }}
                                    />
                                </Col>
                                <Col span={14} style={vehicleName}>
                                    <div
                                        style={{
                                            fontSize: "25px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        TOYOYA aqua
                                    </div>
                                    <div
                                        style={{
                                            fontSize: "15px",
                                            color: "grey",
                                            paddingTop: "-5px",
                                            marginLeft: "-35%",
                                        }}
                                    >
                                        NP CAD 4135
                                    </div>
                                </Col>
                            </Row>
                            <div
                                style={{
                                    fontSize: "30px",
                                    fontWeight: "bold",
                                    paddingTop: "5px",
                                }}
                            >
                                Mileage
                            </div>
                            <br />
                            <div style={{ fontSize: "12px", color: "gray" }}>
                                Latest Meter Reading
                            </div>
                            <InputNumber addonAfter="km" />
                            <br />
                            <br />
                            <Button
                                style={{ width: "200" }}
                                type="primary"
                                onClick={showModal}
                                title="Update"
                            />
                        </Col>
                    </Row>
                </div>
            </Modal>
        </>
    );
}

export default ManageMileage;

const gridStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
    borderRadius: "5px",
    border: "0px",
};

const vehicleName: React.CSSProperties = {
    marginTop: "1%",
};
