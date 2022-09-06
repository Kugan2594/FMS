import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

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
      <div className="logout" onClick={onClickLogout}>
        <h4>Logout</h4>
      </div>
    </div>
  );
}

export default UserProfile;
