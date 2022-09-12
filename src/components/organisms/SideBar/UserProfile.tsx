import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Button } from "../../atoms/Button";
import CustomButton from "../../atoms/Button/CustomButton";

interface UserProfileType {
  onClickProfile: any;
  onClickLogout: any;
}

function UserProfile({onClickProfile, onClickLogout}: UserProfileType) {
  const [userProfile, setUserProfile] = useState("");

  return (
    <div className="user-profile">
      <div className="profile" onClick={onClickProfile}>
        {userProfile != "" ? (
          <Avatar src={userProfile} shape="square" size="large" />
        ) : (
          <Avatar icon={<UserOutlined />} shape="square" size="large" />
        )}
        <div>Profile</div>
      </div>
      <div className="logout">
        <CustomButton title="Logout" onClick={onClickLogout} type="default"/>
      </div>
    </div>
  );
}

export default UserProfile;
