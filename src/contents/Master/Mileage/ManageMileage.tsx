import { Button, Col, Form, Image, Input, InputNumber, Modal, Row } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addMileage, getAllMileageHistoryById } from "./ServiceMileage";

function ManageMileage() {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataSource, setdataSource] = useState<any>([]);

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                kilometer: post.kilometer,
                userId: post.userId,
            };
        });
        return convertData;
    };

    const showModal = () => {
        setIsModalOpen(true);
        getMileageHistoryById("BAT-9470");
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinishFailed = () => {};

    const getMileageHistoryById = (vehicleId: string) => {
        getAllMileageHistoryById(vehicleId).then((res: any) => {
            let data: [] = createData(res.results.mileage);
            setdataSource(data);
        });
    };

    const onFinish = (values: any) => {
        let data: object = {
            kilometer: values.kilometer,
            userId: getUserDetails().user_id,
            vehicleNumber: "BAT-9470",
        };
        addMileage(data)
            .then((res) => {})
            .catch((error) => {});
    };

    return (
        <>
            <Button type="primary" onClick={showModal}>
                Mileage
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
                            <h2
                                style={{
                                    textAlign: "left",
                                    color: "#3385FF",
                                }}
                            >
                                Mileage History
                            </h2>
                            <h5
                                style={{
                                    textAlign: "left",
                                    color: "#3385FF",
                                }}
                            >
                                {" "}
                                Recent
                            </h5>
                            {dataSource.map((post: any) => {
                                return (
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
                                                {post.kilometer} km
                                            </div>
                                        </Col>
                                    </Row>
                                );
                            })}

                            <h5
                                style={{
                                    textAlign: "left",
                                    color: "#3385FF",
                                }}
                            >
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
                            <div
                                style={{
                                    fontSize: "12px",
                                    color: "gray",
                                }}
                            >
                                Latest Meter Reading
                            </div>
                            <Form
                                name="basic"
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item name="userId" hidden>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="vehicleNumber" hidden>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="kilometer">
                                    <InputNumber addonAfter="km" />
                                </Form.Item>
                                <br />
                                <Button
                                    style={{ width: "200" }}
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Update
                                </Button>
                            </Form>
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
