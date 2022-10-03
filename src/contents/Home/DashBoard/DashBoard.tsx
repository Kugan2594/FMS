import { Card, Col, Row, Space } from "antd";
import React from "react";
import Page from "../Statistics/Statistics";
import VehiclesCard from "../VehiclesCard/VehiclesCard";
import VehicleTypeCard from "../VehicleTypeCard/VehicleTypeCard";

function DashBoard() {
    return (
        <div>
            <Row>
                <Col>
                    <Page />
                </Col>
            </Row>
            <Row>
                <Col>
                    {" "}
                    <Page />
                </Col>
            </Row>
        </div>
    );
}

export default DashBoard;
