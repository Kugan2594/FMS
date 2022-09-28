import { Form, Image, Input, message, Select, Typography, Upload } from "antd";
import CustomButton from "../../atoms/Button/CustomButton";
import React, { useState, useEffect } from "react";
import User from "../../../assets/User.svg";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import getUserProfileDetails from "./ServiceProfile";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { getAllDrivingLicenseTypes } from "../../../contents/Settings/DrivingLicenseType/ServiceDrivingLicenseType";
import { phoneNumberRegex } from "../../../utils/Regex";


const { Title, Text } = Typography;

interface ProfileType {
  closeOnClickHandler: any;
}

function createData(data: any) {
  let convertData = {
      id: data.id,
      status: data.status,
      mobileNumber: data.mobileNumber,
      firstName: data.firstName,
      lastName: data.lastName,
      nic: data.nic,
      email: data.email,
      drivingLicenseNo: data.drivingLicenseNo,
      type: data.type,
    };
    return convertData;
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

function Profile({closeOnClickHandler }: ProfileType) {
  const [form] = Form.useForm();
  const [userProfile, setUserProfile]: any = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(
    userProfile.image != null && userProfile.image
  );
  const [loading, setLoading] = useState(false);
  const [drivingLicense, setDrivingLicenseType] = useState([])

  

  console.log("PROFILE", userProfile);

  const getProfileData = (userId: number) => {
    let data: any = {};
    getUserProfileDetails(userId).then(
      (res: any) => {
        data = createData(res.results.id);
        setUserProfile(data);
      },
      (error: any) => {
        setUserProfile({})
      }
    );
  };

  useEffect(() => {
    getProfileData(getUserDetails().user_id);
    getDrivingLicenseTypeSelectData();
  },[])

  const getDrivingLicenseTypeSelectData = () => {
    getAllDrivingLicenseTypes().then((res: any) => {
      let data: any = [];
      res.map((post: any) => {
        data.push({
          value: post.id,
          label: `${post.type}`,
        });
      });
      setDrivingLicenseType(data);
    });
  };

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

  console.log("DDDDDD", getUserDetails().roleName);
  
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
              {userProfile.image != null ? (
                <Image
                  width="120px"
                  height= "120px"
                  style={{ borderRadius: "50%", objectFit: "cover" }}
                  src={userProfile.image}
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
              {userProfile.firstName + " " + userProfile.lastName}
            </Title>
            <Title
              className="user-profile-detail-title"
              level={5}
              type="secondary"
            >
              {userProfile.email}
            </Title>
            <Title
              className="user-profile-detail-title"
              level={5}
              type="secondary"
            >
              {userProfile.mobileNumber}
            </Title>
          </div>
          <div className="user-profile-detail-content">
          {getUserDetails().roleName != "ADMIN" &&
            <div className="user-detail">
              <Text>Company Name: </Text>
              <br />
              <Text className="data" strong>
                {getUserDetails().company_name}
              </Text>
            </div>}
            {getUserDetails().roleName == "COMPANYDRIVER" || getUserDetails().roleName == "COMPANYBRANCHADMIN" &&
            <div className="user-detail">
            <Text>Branch Name: </Text>
            <br />
            <Text className="data" strong>
              {getUserDetails().company_branch_name}
            </Text>
          </div>
            }
            {getUserDetails().roleName === "COMPANYDRIVER" &&
            <div>
            <div className="user-detail">
            <Text>License Number: </Text>
            <br />
            <Text className="data" strong>
              {userProfile.drivingLicenseNo}
            </Text>
          </div>
          <div className="user-detail">
          <Text>License Type: </Text>
          <br />
          <Text className="data" strong>
            {userProfile.type}
          </Text>
        </div>
        </div>
            }
            {getUserDetails().roleName === "COMPANYADMIN" &&
            <div>
            <div className="user-detail">
            <Text>Company Address: </Text>
            <br />
            <Text className="data" strong>
              Address
            </Text>
          </div>
          <div className="user-detail">
          <Text>License Type:</Text>
          <br />
          <Text className="data" strong>
            {userProfile.licenceType}
          </Text>
        </div>
        </div>
            }
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
            form={form}
            initialValues={userProfile}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
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
            <Form.Item name="firstName">
              <Input
                placeholder="First Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="lastName">
              <Input
                placeholder="Last Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            <Form.Item name="mobileNumber"
            rules={[
              {
                pattern: new RegExp(phoneNumberRegex),
                message: "Enter valid Mobile No Ex:- 947*********",
              },
            ]}
            >
              <Input
                placeholder="Contact Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
            {getUserDetails().roleName === "COMPANYADMIN" &&
            <Form.Item>
              <Input
                value={getUserDetails().company_name}
                placeholder="Company Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>}
            {getUserDetails().roleName === "COMPANYADMIN" &&
            <div>
            <Form.Item name="address">
              <Input
                placeholder="Company Address"
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
            </div>}
            {getUserDetails().roleName === "COMPANYDRIVER" &&
            <div>
            <Form.Item name="drivingLicenseNo">
            <Input
              placeholder="Driving License Number"
              required
              bordered={false}
              style={{ borderBottom: "1px solid #ccccb3" }}
            />
          </Form.Item>
          <Form.Item name="type">
          <Select
            placeholder="Driving License Type"
            bordered={false}
            style={{ borderBottom: "1px solid #ccccb3" }}
            options={drivingLicense}
          />
        </Form.Item>
        </div>}
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
