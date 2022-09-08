import { Col, Image, InputNumber, Modal, Row } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Button } from "../../../components/atoms/Button";

function ManageFuelUp() {
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
            <Button title="Fuel Up" type="primary" onClick={showModal} />

            <Modal
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={null}
                width={800}
            >
                <div style={gridStyle}>
                    <Row>
                        <Col span={12} style={{ paddingRight: "20px" }}>
                            <h2 style={{ textAlign: "left", color: "#3385FF" }}>
                                Fuel Up History
                            </h2>
                            <h5 style={{ textAlign: "left", color: "#3385FF" }}>
                                {" "}
                                Recent
                            </h5>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        title="Edit"
                                        onClick={handleOpenEdit}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        onClick={handleOpenEdit}
                                        title=" Edit"
                                    />
                                </Col>
                            </Row>

                            <h5 style={{ textAlign: "left", color: "#3385FF" }}>
                                {" "}
                                Last Month
                            </h5>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        onClick={handleOpenEdit}
                                        title=" Edit"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        onClick={handleOpenEdit}
                                        title="Edit"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        onClick={handleOpenEdit}
                                        title=" Edit"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={6}>
                                    <div style={{ fontSize: "12px" }}>
                                        15 Jun 2022
                                    </div>
                                </Col>
                                <Col span={10}>
                                    <div
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: "bold",
                                            textAlign: "right",
                                        }}
                                    >
                                        3000 Rs
                                    </div>
                                </Col>
                                <Col span={8}>
                                    <Button
                                        type="link"
                                        onClick={handleOpenEdit}
                                        title="Edit"
                                    />
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
                                Petrol 92
                            </div>

                            {!editOpen && (
                                <Row>
                                    <Col span={12}>
                                        <div style={{ fontSize: "12px" }}>
                                            Last Refilled: 15 Jun 2022
                                        </div>
                                    </Col>
                                    <Col span={7}>
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                                textAlign: "right",
                                            }}
                                        >
                                            3000 Rs
                                        </div>
                                    </Col>
                                    <Col span={5}>
                                        <Button
                                            type="link"
                                            onClick={handleOpenEdit}
                                            title="Edit"
                                        />
                                    </Col>
                                </Row>
                            )}
                            {editOpen && (
                                <div style={{ fontSize: "12px" }}>
                                    Refilled Amount on 15 Jun 2022
                                </div>
                            )}
                            <InputNumber
                                placeholder="Latest Refilled Amount"
                                addonAfter="Rs"
                            />
                            <br />
                            <br />
                            {editOpen ? (
                                <Row>
                                    <Col span={12}>
                                        {editOpen && (
                                            <Button
                                                style={{
                                                    width: "200",
                                                    border: "1px solid #3385FF",
                                                    color: "#3385FF",
                                                }}
                                                type="default"
                                                onClick={() => {
                                                    seteditOpen(false);
                                                }}
                                                title="Cancel"
                                            />
                                        )}
                                    </Col>
                                    <Col span={12}>
                                        <Button
                                            style={{ width: "200" }}
                                            type="primary"
                                            onClick={showModal}
                                            title="Update"
                                        />
                                    </Col>
                                </Row>
                            ) : (
                                <Button
                                    style={{ width: "200" }}
                                    type="primary"
                                    onClick={showModal}
                                    title="Update"
                                />
                            )}
                        </Col>
                    </Row>
                </div>
            </Modal>
            {console.log(editOpen)}
        </>
    );
}

export default ManageFuelUp;

const gridStyle: React.CSSProperties = {
    width: "100%",
    textAlign: "center",
    borderRadius: "5px",
    border: "0px",
};

const vehicleName: React.CSSProperties = {
    marginTop: "1%",
};
