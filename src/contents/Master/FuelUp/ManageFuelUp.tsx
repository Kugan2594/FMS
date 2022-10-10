import { Button, Col, Form, Image, Input, InputNumber, Modal, Row } from "antd";
import "antd/dist/antd.css";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import moment from "moment";
import React, { useState, useEffect } from "react";
import { addFuelUp, getAllFuelUpHistoryById } from "./ServiceFuelUp";
import { errHandler, fuelUpAddSuccess } from "../../../helper/helper";

function ManageFuelUp() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editOpen, seteditOpen] = useState(false);
    const [fuelUpData, setfuelUpData] = useState<any>([]);

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                filledAmount: post.filledAmount,
                filledDate: moment(post.filledDate).format("DD MMM YYYY"),
            };
        });
        return convertData;
    };

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

    const getFuelUpData = (vehicleId: string) => {
        getAllFuelUpHistoryById(vehicleId).then((res: any) => {
            let data: [] = createData(res.results.fuelup);
            setfuelUpData(data);
        });
    };

    const onFinish = (values: any) => {
        let filledDate: any = moment(Date()).format("YYYY-MM-DD");
        let data: object = {
            filledAmount: values.filledAmount,
            filledDate: filledDate,
            userId: getUserDetails().user_id,
            vehicleNumber: "BAT-9470",
        };
        addFuelUp(data)
            .then((res) => {
                fuelUpAddSuccess();
                getFuelUpData("BAT-9470");
            })
            .catch((err) => {
                errHandler(err);
            });
    };

    const onFinishFailed = () => {};

    useEffect(() => {
        getFuelUpData("BAT-9470");
    }, []);

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Fuel Up
            </Button>
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
                                        {
                                            fuelUpData[fuelUpData.length - 1]
                                                .filledDate
                                        }
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
                                        {
                                            fuelUpData[fuelUpData.length - 1]
                                                .filledAmount
                                        }{" "}
                                        Rs
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

                            <h5 style={{ textAlign: "left", color: "#3385FF" }}>
                                {" "}
                                Last Month
                            </h5>
                            {fuelUpData.map((post: any) => {
                                return (
                                    <Row>
                                        <Col span={6}>
                                            <div style={{ fontSize: "12px" }}>
                                                {post.filledDate}
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
                                                {post.filledAmount} Rs
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
                                );
                            })}
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
                                            Last Refilled:{" "}
                                            {
                                                fuelUpData[
                                                    fuelUpData.length - 1
                                                ].filledDate
                                            }
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
                                            {
                                                fuelUpData[
                                                    fuelUpData.length - 1
                                                ].filledAmount
                                            }{" "}
                                            Rs
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
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item name="filledAmount">
                                    <InputNumber
                                        placeholder="Latest Refilled Amount"
                                        addonAfter="Rs"
                                    />
                                </Form.Item>
                                <Form.Item name="userId" hidden>
                                    <Input />
                                </Form.Item>
                                <Button
                                    style={{ width: "200" }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Update
                                </Button>
                            </Form>
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
