import { Image, Typography } from "antd";
import React from "react";
import User from "../../../assets/User.svg";

const { Title, Text } = Typography;

interface DriverProfileType {
  driverProfileData: any;
}

function DriverProfile({ driverProfileData }: DriverProfileType) {
  return (
    <div className="driver-profile">
      <div className="driver-profile-image-container">
        <div className="driver-profile-image">
          {driverProfileData.image != null ? (
            <Image width="100%" src={driverProfileData.image} />
          ) : (
            <Image width="100%" preview={false} src={User} />
          )}
        </div>
      </div>
      <div className="driver-profile-detail-header">
        <Title className="driver-profile-detail-title" level={4}>
          {driverProfileData.driverFirstName +
            " " +
            driverProfileData.driverLastName}
        </Title>
        <Title
          className="driver-profile-detail-title"
          level={5}
          type="secondary"
        >
          {driverProfileData.email}
        </Title>
        <Title
          className="driver-profile-detail-title"
          level={5}
          type="secondary"
        >
          {driverProfileData.contactNumber}
        </Title>
      </div>
      <div className="driver-profile-detail-content">
        <div className="driver-detail">
          <Text>NIC: </Text>
          <br />
          <Text className="data" strong>
            {driverProfileData.nic}
          </Text>
        </div>
        <div className="driver-detail">
          <Text>Driving License No: </Text>
          <br />
          <Text className="data" strong>
            {driverProfileData.drivingLicense}
          </Text>
        </div>
        <div className="driver-detail">
          <Text>Driving License Type: </Text>
          <br />
          <Text className="data" strong>
            {driverProfileData.drivingLicenseType}
          </Text>
        </div>
        <div className="driver-detail">
          <Text>Branch: </Text>
          <br />
          <Text className="data" strong>
            {driverProfileData.branchName}
          </Text>
        </div>
      </div>
    </div>
  );
}

export default DriverProfile;
