import { Card, Col, Image, Row, Typography } from "antd";
import MilageUpdate from "../../../components/molecules/VehicleComponents/MilageUpdate";
import React from "react";
import "./vehicle.style.less";
import FuelUpdate from "../../../components/molecules/VehicleComponents/FuelUpdate";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import VehicleDocumentsCharts from "../../../components/molecules/VehicleComponents/VehicleDocumentsCharts";
import VehicleReminders from "../../../components/molecules/VehicleComponents/VehicleReminders";
import { Button } from "../../../components/atoms/Button";

const { Title, Text } = Typography;

interface VehicleProfileType {
  profileData: any;
  onClickClose: any;
}

function VehicleProfile({ profileData, onClickClose }: VehicleProfileType) {
  return (
    <>
      <div className="vehicle-profile">
        <Row gutter={16}>
          <Col span={12}>
            <div className="vehicle-details">
              <div className="vehicle-profile-title">
                <Title level={3}>{profileData.vehicleNumber}</Title>
                <Text strong type="secondary" style={{ fontSize: "16px" }}>
                  {profileData.vehicleModel}
                </Text>
              </div>
              <div className="vehicle-profile-image-container">
                <Row>
                  <Col span={8}>
                    <Image
                      className="vehicle-profile-image"
                      src={profileData.image}
                    />
                  </Col>
                  <Col span={16}>
                    <div className="vehicle-profile-card">
                      <MilageUpdate milage={"25 452"} milageOnClick={""} />
                    </div>
                    <div className="vehicle-profile-card">
                      <FuelUpdate
                        fuelType={"Petrol 92"}
                        fuelOnClick={""}
                        lastUpdate={{ date: "24 Jun 2022", amount: 3000 }}
                      />
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="vehicle-profile-details">
                <Text>Branch : </Text>
                <Text strong>{getUserDetails().company_branch_name}</Text>
                <br />
                <Text>Vehicle Owner : </Text>
                <Text strong>{profileData.vehicleOwner}</Text>
                <br />
                <Text>Vehicle Colour : </Text>
                <Text strong>{profileData.color}</Text>
                <br />
                <Text>Vehicle Bodytype : </Text>
                <Text strong>{profileData.bodyType}</Text>
                <br />
                <Text>Tank Capacity : </Text>
                <Text strong>{profileData.tankCapacity} l</Text>
                <br />
                <Text>Reserve Tank Capacity : </Text>
                <Text strong>{profileData.reserveTankCapacity} l</Text>
                <br />
                <Text>Maximum Weight Carriable : </Text>
                <Text strong>{profileData.maximumWeightCarriable} kg</Text>
                <br />
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className="vehicle-reminders">
              <div className="vehicle-reminders-documents">
                <VehicleDocumentsCharts
                  emissionTestUpdate={""}
                  insuranceUpdate={""}
                  revenueLicenseUpdate={""}
                  vehicleNumber={profileData.vehicleNumber}
                />
              </div>
              <div className="vehicle-reminder-reminder">
                <VehicleReminders vehicleNumber={""} />
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: "20px"}}>
              <Button title="Close" type="default" onClick={onClickClose} />
            </div>
          </Col>
          {/* <Col span={8}>
            <div className="vehicle-lease"></div>
          </Col> */}
        </Row>
      </div>
    </>
  );
}

export default VehicleProfile;
