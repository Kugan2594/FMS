import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';

function UserProfile() {
  const [userProfile, setUserProfile] = useState("");

  return (
    <div className="user-profile">
      <div style={{cursor: "pointer"}}>
        {userProfile != "" ? (
          <Avatar src={userProfile} shape="square" size="large" />
        ) : (
          <Avatar icon={<UserOutlined />} shape="square" size="large" />
        )}
        <div>Profile</div>
      </div>
      <div className="logout" style={{ marginTop: "15px", cursor: "pointer" }}>
        <h4>Logout</h4>
      </div>
    </div>
  );
}

export default UserProfile;