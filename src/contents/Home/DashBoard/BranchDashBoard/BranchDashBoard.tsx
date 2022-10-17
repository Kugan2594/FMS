import {
    AppstoreOutlined,
    BarsOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import {
    Button,
    Card,
    Col,
    Row,
    Segmented,
    Space,
    Switch,
    Typography,
} from "antd";
import BranchCard from "contents/Home/BranchesList/BranchCard";
import MajorDetails from "contents/Home/MajorDetails/MajorDetails";
import StaticsHistory from "contents/Home/Statics/StaticsHistory";
import OverallVehiclesStatus from "contents/Home/VehiclesCard/OverallVehiclesStatus";
import OverallVehicleTypeCard from "contents/Home/VehicleTypeCard/OverallVehicleTypeCard";
import Page from "contents/Master/Statistics/Statistics";
import React, { useState } from "react";
import "./dashBoard.styles.less";

function DashBoard() {
    const { Text, Title } = Typography;
    const [chart, setChart] = useState(false);
    const onchangeHandler = () => {
        setChart(!chart);
    };
    return (
        <div className="dashboard" style={{ width: "100%" }}>
            <Row
                style={{
                    width: "100%",
                    height: "70%",
                }}
                gutter={8}
            >
                <Col span={10}>
                    <Row style={{ width: "100%" }} gutter={8}>
                        <Col span={24}>
                            <MajorDetails />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <div
                                className="vehicle-status-card"
                                style={{ marginBottom: "8px" }}
                            >
                                <OverallVehiclesStatus />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Col span={24}>
                                <OverallVehicleTypeCard />
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col span={14}>
                    <Row
                        justify="end"
                        style={{
                            backgroundColor: "white",
                            borderRadius: "0.5vw 0.5vw 0vw 0vw",
                        }}
                        align="middle"
                    >
                        <Col xs={24} xl={15}>
                            <div
                                className="space"
                                style={{
                                    marginLeft: "10px",
                                }}
                            >
                                Expense History
                            </div>
                        </Col>{" "}
                        <Col xs={24} xl={1}></Col>
                        <Col
                            xs={24}
                            xl={8}
                            style={{
                                textAlign: "right",
                                padding: "5px",
                            }}
                        >
                            <Segmented
                                onChange={onchangeHandler}
                                options={[
                                    {
                                        label: "List",
                                        value: "List",
                                        icon: <BarsOutlined />,
                                    },
                                    {
                                        label: "Chart",
                                        value: "Chart",
                                        icon: <AppstoreOutlined />,
                                    },
                                ]}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            {chart ? <Page /> : <StaticsHistory />}
                        </Col>
                    </Row>{" "}
                    <Row>
                        <Col span={24} style={{ height: "10px" }}></Col>
                    </Row>
                    <Row gutter={8}>
                        <Col span={24}>
                            <Title level={5}>Branch Status</Title>
                            <BranchCard />
                        </Col>
                    </Row>{" "}
                </Col>
            </Row>
        </div>
    );
}

export default DashBoard;
