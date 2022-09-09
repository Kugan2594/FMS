import {
    RocketOutlined,
    SettingFilled,
    SettingOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons/lib/components/AntdIcon";
import { Button, Card, Col, Image, Progress, Row, Typography } from "antd";
import Title from "antd/lib/skeleton/Title";

import React, { useState } from "react";
import "./card.style.less";

export interface CardSmallType {
    id?: string;
    numberOfVehicles?: number;
    progressData?: number;
    itemName?: string;
    branchLocation?: string;
    name?: string;
    adminName?: string;
    cardOnClick?: any;
    onClickUpdate?: any;
    onClickDelete?: any;
    image?: any;
    isProgressBar?: boolean;
    onClickProfile?: any;
    privilege?: boolean;
    adminCard?: boolean;
    branchCard?: boolean;
    contactNumber?: string;
    vehicleCard?: boolean;
    vehicleNumber?: string;
    vehicleType?: string;
    designation?: string;
    drivingLicense?: string;
    vehicleModel?: string;
    driverCard?: boolean;
    generatorCard?: boolean;
    generatorBrand?: string;
    generatorName?: string;
    fuelType?: string;
    nic?: string;
    driverName?: string;
    vehicleIcon?: any;
}
let intialValue: CardSmallType = {
    id: "",
    adminName: "",
    branchLocation: "",
    name: "",
    image: "",
    isProgressBar: false,
    itemName: "",
    progressData: 0,
    cardOnClick: null,
    numberOfVehicles: 0,
    onClickDelete: null,
    onClickProfile: null,
    onClickUpdate: null,
    privilege: false,
    adminCard: false,
    vehicleCard: false,
    vehicleNumber: "",
    vehicleType: "",
    designation: "",
    drivingLicense: "",
    vehicleModel: "",
    driverCard: false,
    generatorCard: false,
    generatorBrand: "",
    fuelType: "",
    nic: "",
    generatorName: "",
    driverName: "",
    vehicleIcon: "",
};
function SmallCard({
    id,
    numberOfVehicles,
    progressData,
    itemName,
    branchLocation,
    name,
    adminName,
    cardOnClick,
    onClickUpdate,
    onClickDelete,
    image,
    isProgressBar,
    onClickProfile,
    privilege,
    adminCard,
    branchCard,
    contactNumber,
    vehicleCard,
    vehicleNumber,
    vehicleType,
    designation,
    drivingLicense,
    vehicleModel,
    driverCard,
    generatorBrand,
    generatorCard,
    fuelType,
    nic,
    generatorName,
    driverName,
    vehicleIcon,
}: CardSmallType) {
    const { Title, Text } = Typography;

    const [profile, setProfile] = useState(image);

    return (
        <Card className="small-card" onClick={cardOnClick}>
            <Row className="main-row" justify="center" align="top" gutter={8}>
                <Col xs={24} xl={4}>
                    {
                        <div className="profile" onClick={onClickProfile}>
                            {profile === "" ? (
                                <Image
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                            ) : (
                                <Image
                                    src={
                                        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    }
                                    style={{
                                        borderRadius: 10,
                                    }}
                                />
                            )}
                        </div>
                    }

                    {isProgressBar && (
                        <Progress percent={progressData} size="small" />
                    )}
                </Col>
                <Col xs={24} xl={9} className="content-2">
                    <div className="content-2-item">
                        {branchCard && <Title level={5}> {name}</Title>}
                        {driverCard && <Title level={5}> {driverName}</Title>}
                        {adminCard && <Title level={5}> {adminName}</Title>}
                        {vehicleCard && (
                            <Title level={5}> {vehicleNumber}</Title>
                        )}
                        {generatorCard && (
                            <Title
                                style={{ fontSize: "18px", marginBottom: "5%" }}
                                level={5}
                            >
                                {" "}
                                {generatorName}
                            </Title>
                        )}
                        <div className="sub-content">
                            {branchCard && <Text>{branchLocation}</Text>}
                            {/* {generatorCard && (
                                <Title level={5}> {fuelType}</Title>
                            )} */}
                            {adminCard && (
                                <Text strong type="secondary">
                                    {" "}
                                    {contactNumber}
                                </Text>
                            )}
                            {branchCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {adminName}
                                    </Text>
                                </div>
                            )}
                            {adminCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {nic}
                                    </Text>
                                    <br />
                                    <Text strong type="secondary">
                                        {name}
                                    </Text>
                                </div>
                            )}
                            {driverCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {drivingLicense}
                                    </Text>
                                    <br />
                                    <Text strong type="secondary">
                                        {name}
                                    </Text>
                                </div>
                            )}
                            {vehicleCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {vehicleType}
                                    </Text>
                                    <br />
                                    <Text strong type="secondary">
                                        {name}
                                    </Text>
                                </div>
                            )}
                            {generatorCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {fuelType}
                                    </Text>
                                    <br />
                                    <Text strong type="secondary">
                                        {name}
                                    </Text>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>

                <Col xs={24} xl={11}>
                    <Row justify="end" className="content-3" align="bottom">
                        <div
                            className="vehicles"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            {branchCard && (
                                <div className="number-of-vehicles">
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "24px",
                                            padding: "0px",
                                        }}
                                    >
                                        {numberOfVehicles}
                                    </div>{" "}
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            {itemName}
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                            {adminCard && (
                                <div className="number-of-vehicles">
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "24px",
                                            padding: "0px",
                                        }}
                                    >
                                        {designation}
                                    </div>{" "}
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            Designation
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                            {vehicleCard && (
                                <div className="number-of-vehicles">
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "18px",
                                            padding: "0px",
                                        }}
                                    >
                                        {vehicleModel}
                                    </div>{" "}
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            vehicle model
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}

                            {generatorCard && (
                                <div className="number-of-vehicles">
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "24px",
                                            padding: "0px",
                                        }}
                                    >
                                        {generatorBrand}
                                    </div>{" "}
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            branch name
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                            {driverCard && (
                                <div className="number-of-vehicles">
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "24px",
                                            padding: "0px",
                                        }}
                                    >
                                        {vehicleIcon}
                                    </div>{" "}
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            {vehicleType}
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="actions">
                            {privilege && (
                                <SettingOutlined
                                    style={{ fontSize: "24px", opacity: "0.5" }}
                                />
                            )}
                            <Button
                                style={{ borderRadius: 5 }}
                                onClick={() => {
                                    onClickDelete(id);
                                }}
                            >
                                Delete
                            </Button>
                            <Button
                                style={{ borderRadius: 5 }}
                                type="primary"
                                onClick={() => {
                                    onClickUpdate(id);
                                }}
                            >
                                Update
                            </Button>
                        </div>
                    </Row>
                </Col>
            </Row>
        </Card>
    );
}

export default SmallCard;
