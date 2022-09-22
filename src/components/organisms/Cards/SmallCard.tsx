import { SettingOutlined, CarOutlined } from "@ant-design/icons";
import { Button, Card, Col, Image, Progress, Row, Tooltip, Typography } from "antd";
import React, { useState } from "react";
import "./card.style.less";
export interface CardSmallType {
    id?: string;
    numberOfVehicles?: number;
    progressData?: number;
    itemName?: string;
    branchLocation?: string;
    branchName?: string;
    cardOnClick?: any;
    onClickUpdate?: any;
    onClickDelete?: any;
    onClickVehicleDelete?: any;
    image?: any;
    isProgressBar?: boolean;
    onClickProfile?: any;
    privilege?: boolean;
    adminCard?: boolean;
    branchCard?: boolean;
    mobileNumber?: string;
    vehicleCard?: boolean;
    vehicleNumber?: string;
    vehicleType?: string;
    designation?: string;
    drivingLicenseNo?: string;
    vehicleModel?: string;
    driverCard?: boolean;
    generatorCard?: boolean;
    generatorBrand?: string;
    generatorName?: string;
    fuelType?: string;
    nic?: string;
    vehicleIcon?: any;
    email?: string;
    adminFirstName?: string;
    adminLastName?: string;
    firstName?: string;
    lastName?: string;
    tankCapacity?: any;
    maximumPower?: any;
    onCardClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    status?: boolean;
    onClickVehicleAssign?: any;
}
let intialValue: CardSmallType = {
    id: "",
    branchLocation: "",
    branchName: "",
    image: "",
    isProgressBar: false,
    itemName: "",
    progressData: 0,
    cardOnClick: null,
    numberOfVehicles: 0,
    onClickDelete: null,
    onClickVehicleDelete: null,
    onClickProfile: null,
    onClickUpdate: null,
    privilege: false,
    adminCard: false,
    vehicleCard: false,
    vehicleNumber: "",
    vehicleType: "",
    designation: "",
    drivingLicenseNo: "",
    vehicleModel: "",
    driverCard: false,
    generatorCard: false,
    generatorBrand: "",
    fuelType: "",
    nic: "",
    generatorName: "",
    vehicleIcon: "",
    email: "",
    adminFirstName: "",
    adminLastName: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    tankCapacity: "",
    maximumPower: "",
};
function SmallCard({
    id,
    numberOfVehicles,
    progressData,
    itemName,
    branchLocation,
    branchName,
    cardOnClick,
    onClickUpdate,
    onClickDelete,
    onClickVehicleDelete,
    image,
    isProgressBar,
    onClickProfile,
    privilege,
    adminCard,
    branchCard,
    vehicleCard,
    vehicleNumber,
    vehicleType,
    designation,
    drivingLicenseNo,
    vehicleModel,
    driverCard,
    generatorBrand,
    generatorCard,
    fuelType,
    nic,
    generatorName,
    vehicleIcon,
    email,
    adminFirstName,
    adminLastName,
    firstName,
    lastName,
    tankCapacity,
    maximumPower,
    mobileNumber,
    onCardClick,
    status,
    onClickVehicleAssign,
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
                <Col
                    xs={24}
                    xl={9}
                    className="content-2"
                    onClick={onCardClick}
                    style={{ cursor: "pointer" }}
                >
                    <div className="content-2-item">
                        {branchCard && <Title level={5}> {branchName}</Title>}
                        {driverCard && <Title level={5}> {firstName}</Title>}
                        {adminCard && (
                            <Title level={5}> {adminFirstName}</Title>
                        )}
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
                            {adminCard && (
                                <Text strong type="secondary">
                                    {" "}
                                    {mobileNumber}
                                </Text>
                            )}
                            {branchCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {adminFirstName}
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
                                        {branchName}
                                    </Text>
                                </div>
                            )}
                            {driverCard && (
                                <div className="admin-name">
                                    <Text strong type="secondary">
                                        {drivingLicenseNo}
                                    </Text>
                                    <br />
                                    <Text strong type="secondary">
                                        {nic}
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
                                        {branchLocation}
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
                                        {itemName}
                                    </Text>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>

                <Col xs={24} xl={11}>
                    <Row justify="end" className="content-3" align="bottom">
                        <div className="vehicles" style={{}}>
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
                                            {designation}
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                            {vehicleCard && (
                                <div className="number-of-vehicles">
                                    <div className="item-name">
                                        <Text strong type="secondary">
                                            vehicle model
                                        </Text>{" "}
                                    </div>
                                    <div
                                        className="number"
                                        style={{
                                            fontSize: "18px",
                                            padding: "0px",
                                        }}
                                    >
                                        {vehicleModel}
                                    </div>{" "}
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
                                            {branchName}
                                        </Text>{" "}
                                    </div>
                                </div>
                            )}
                            {driverCard &&
                            <Tooltip placement="top" title={"Assign Vehicle"}>
                            <Button
                            disabled={!status}
                            onClick={() => onClickVehicleAssign(id)}
                            style={{ borderRadius: 5, margin: "10px" }}
                            >
                                
                            <CarOutlined style={{ fontSize: "24px" }} />
                            </Button>
                            </Tooltip>
                            }
                        </div>
                        <div className="actions">
                            {privilege && (
                                <SettingOutlined
                                    style={{ fontSize: "24px", opacity: "0.5" }}
                                />
                            )}
                            <Button
                                style={{ borderRadius: 5 }}
                                onClick={
                                    vehicleCard
                                        ? () => {
                                              onClickVehicleDelete(
                                                  vehicleNumber
                                              );
                                          }
                                        : () => {
                                              onClickDelete(id);
                                          }
                                }
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
