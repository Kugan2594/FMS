import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

function UserProfile() {
    return (
        <div className="user-profile">
            <div>
                <Avatar
                    src=""
                    icon={<UserOutlined />}
                    shape="square"
                    size="large"
                />
                <div>Profile</div>
            </div>
            <div className="logout" style={{ marginTop: "20px" }}>
                <h4>Logout</h4>
            </div>
        </div>
    );
}

export default UserProfile;
