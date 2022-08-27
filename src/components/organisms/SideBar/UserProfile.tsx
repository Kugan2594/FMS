import React from "react";
import {
    LogoutOutlined
  } from "@ant-design/icons";

function UserProfile() {
  return (
    <div className="user-profile">
      <div >
        <div
          style={{
            height: "40px",
            width: "40px",
            borderRadius: "5px",
            backgroundColor: "blue",
          }}
        ></div>
        <div>Profile</div>
      </div>
      <div className="logout" style={{ marginTop: "20px"}}>
        <h4>Logout</h4>
      </div>
    </div>
  );
}

export default UserProfile;
