import { Form, Image, Input, message, Typography, Upload } from "antd";
import CustomButton from "../../atoms/Button/CustomButton";
import React, { useState } from "react";
import User from "../../../assets/User.svg";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

interface ProfileType {
  userProfileData: any;
  closeOnClickHandler: any;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

function Profile({ userProfileData, closeOnClickHandler }: ProfileType) {
  const [isEdit, setIsEdit] = useState(false);
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>(
    userProfileData.image != null && userProfileData.image
  );
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Vehicle Image</div>
    </div>
  );

  const editOnclickHandler = () => {
    setIsEdit(true);
  };

  const handleSubmit = () => {
    setIsEdit(false);
  };

  const cancelClickHandler = () => {
    setIsEdit(false);
  };

  return (
    <div>
      {!isEdit ? (
        <div className="user-profile">
          <div className="user-profile-image-container">
            <div className="user-profile-image">
              {userProfileData.image != null ? (
                <Image
                  width="100%"
                  style={{ borderRadius: "50%" }}
                  src={userProfileData.image}
                />
              ) : (
                <Image
                  width="100%"
                  style={{ borderRadius: "50%" }}
                  preview={false}
                  src={User}
                />
              )}
            </div>
          </div>
          <div className="user-profile-detail-header">
            <Title className="user-profile-detail-title" level={4}>
              {userProfileData.companyName}
            </Title>
            <Title
              className="user-profile-detail-title"
              level={5}
              type="secondary"
            >
              {userProfileData.companyEmail}
            </Title>
            <Title
              className="user-profile-detail-title"
              level={5}
              type="secondary"
            >
              {userProfileData.companyPhoneNumber}
            </Title>
          </div>
          <div className="user-profile-detail-content">
            <div className="user-detail">
              <Text>Address: </Text>
              <br />
              <Text className="data" strong>
                {userProfileData.address}
              </Text>
            </div>
            <div className="user-detail">
              <Text>Registation Number: </Text>
              <br />
              <Text className="data" strong>
                {userProfileData.registrationNumber}
              </Text>
            </div>
            <div className="user-detail">
              <Text>License Type:</Text>
              <br />
              <Text className="data" strong>
                {userProfileData.licenceType}
              </Text>
            </div>
          </div>
          <div className="profile-button-container">
            <CustomButton
              className="profile-button"
              title="Edit Profile"
              type="primary"
              onClick={editOnclickHandler}
            />
            <CustomButton
                  className="profile-button"
                  title="Close"
                  onClick={closeOnClickHandler}
                />
          </div>
        </div>
      ) : (
        <div className="user-profile">
          <Form
            id="addDriver-form"
            name="basic"
            //   form={form}
            initialValues={userProfileData}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
          >
            <Form.Item name="image">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                beforeUpload={beforeUpload}
                onChange={handleChange}
              >
                {imageUrl ? (
                  <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
                ) : (
                  uploadButton
                )}
              </Upload>
            </Form.Item>
            <Form.Item name="companyName">
              <Input
                placeholder="Company Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="companyPhoneNumber">
              <Input
                placeholder="Contact Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="address">
              <Input
                placeholder="Address"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="registrationNumber">
              <Input
                placeholder="Registation Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="drivingLicenseType">
              <div className="profile-button-container">
                <CustomButton
                  className="profile-button"
                  title={"Update"}
                  type="primary"
                  htmlType="submit"
                  onClick={handleSubmit}
                />
                <br />
                <CustomButton
                  className="profile-button"
                  title="Cancel"
                  onClick={cancelClickHandler}
                />
              </div>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
}

export default Profile;
