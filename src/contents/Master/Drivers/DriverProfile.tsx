import { Avatar } from 'antd';
import React, {useState} from 'react'
import { UserOutlined } from "@ant-design/icons";

interface DriverProfileType {
    driverProfileData: any;
}

function DriverProfile({driverProfileData}: any) {

  return (
    <div>
        {driverProfileData.name != "" ? (
          <Avatar src={driverProfileData.name} shape="square" size="large" />
        ) : (
          <Avatar icon={<UserOutlined />} shape="square" size="large" />
        )}
    </div>
  )
}

export default DriverProfile;