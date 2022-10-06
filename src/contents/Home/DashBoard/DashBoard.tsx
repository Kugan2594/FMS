import {
    AppstoreOutlined,
    BarsOutlined,
    CheckOutlined,
    CloseOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Segmented, Space, Switch } from "antd";
import React, { useState } from "react";
import BranchCard from "../BranchesList/BranchCard";

import MajorDetails from "../MajorDetails/MajorDetails";
import StaticsHistory from "../Statics/StaticsHistory";
import Page from "../Statistics/Statistics";
import OverallVehiclesStatus from "../VehiclesCard/OverallVehiclesStatus";
import OverallVehicleTypeCard from "../VehicleTypeCard/OverallVehicleTypeCard";
import "./dashBoard.styles.less";

function DashBoard() {
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
            >
                <Col span={10}>
                    <Row style={{ width: "100%" }}>
                        <Col>
                            <MajorDetails />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <OverallVehiclesStatus />
                        </Col>
                        <Col span={12}>
                            <OverallVehicleTypeCard />
                        </Col>
                    </Row>
                </Col>
                <Col span={14}>
                    <Row justify="end" style={{ backgroundColor: "white" }}>
                        <Col xs={24} xl={15}></Col> <Col xs={24} xl={1}></Col>
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
                        <Col span={24}>
                            <BranchCard />
                        </Col>
                    </Row>{" "}
                </Col>
            </Row>
        </div>
    );
}

export default DashBoard;
