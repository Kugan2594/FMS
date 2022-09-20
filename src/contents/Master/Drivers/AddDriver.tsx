import { Col, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./driver.style.less";
import { addDriver } from "./ServiceDriver";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { Button } from "antd";
import { getAllBranchesByCompanyId } from "../Branch/ServiceManage";
import { getAllDrivingLicenseTypes } from "../../../contents/Settings/DrivingLicenseType/ServiceDrivingLicenseType";
import {
  drivingLicenseNoRegex,
  nicNoRegex,
  phoneNumberRegex,
} from "../../../utils/Regex";
import { driverAddSuccess, errHandler } from "../../../helper/helper";
const { Option } = Select;

interface AddDriversPropType {
  isEdit: boolean;
  updateDriverData: any;
  cancelClickHandler: any;
}

function AddDriver({
  isEdit,
  updateDriverData,
  cancelClickHandler,
}: AddDriversPropType) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [branch, setBranch] = useState([]);
  const [drivingLicenseType, setDrivingLicenseType] = useState([]);
  const [assignedVehicle, setAssignedVehicle] = useState([]);

  const handleSubmit = () => {
    cancelClickHandler();
  };

  useEffect(() => {
    getBranchSelectData(getUserDetails().company_id);
    getDrivingLicenseTypeSelectData();
  }, []);

  const handleChange = (data: any) => {
    setAssignedVehicle(data);
  };

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

  const getBranchSelectData = (companyId: number) => {
    getAllBranchesByCompanyId(companyId).then((res: any) => {
      let data: any = [];
      res.map((post: any) => {
        data.push({
          value: post.id,
          label: `${post.branchName}`,
        });
      });
      setBranch(data);
    });
  };

  const onFinish = (values: any) => {
    let data: object = {
      id: 1,
      firstName: values.firstName,
      lastName: values.lastName,
      nic: values.nic,
      email: values.email,
      drivingLicenseNo: values.drivingLicenseNo,
      drivingLicenseTypeId: values.drivingLicenseTypeId,
      branchId: values.branchId,
      mobileNumber: values.mobileNumber,
      companyId: getUserDetails().company_id,
      subscription: "PREMIUM",
      userType: "COMPANYDRIVER",
    };
    addDriver(data)
      .then((res) => {
        driverAddSuccess();
      })
      .catch((err) => {
        errHandler(err);
      });
  };

  const onFinishFailed = () => {};

  return (
    <>
      <Form
        id="addDriver-form"
        name="basic"
        form={form}
        initialValues={isEdit ? updateDriverData : {}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row className="add-driver" gutter={16}>
          <Col span={12}>
            <Form.Item name="firstName">
              <Input
                placeholder="First Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lastName">
              <Input
                placeholder="Last Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="mobileNumber"
              rules={[
                {
                  pattern: new RegExp(phoneNumberRegex),

                  message: "Enter valid Mobile No Ex:- 947*********",
                },
              ]}
            >
              <Input
                placeholder="Mobile Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email">
              <Input
                placeholder="Email"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="nic"
              rules={[
                {
                  max: 12,
                  message: "Sorry you are exceeding the limit!",
                },
                {
                  pattern: new RegExp(nicNoRegex),

                  message: "Enter valid NIC",
                },
              ]}
            >
              <Input
                placeholder="NIC Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="branchId"
              rules={[
                {
                  required: true,
                  message: "Select Branch",
                },
              ]}
            >
              <Select
                placeholder="Branch"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={branch}
              >
                {/* {branches.map((branch) => {
                  return <Option value={branch.name}>{branch.name}</Option>;
                })} */}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="drivingLicenseNo"
              rules={[
                {
                  max: 9,
                  message: "Sorry you are exceeding the limit!",
                },
                {
                  pattern: new RegExp(drivingLicenseNoRegex),

                  message: "Enter valid Driving License No",
                },
              ]}
            >
              <Input
                placeholder="License Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="drivingLicenseTypeId"
              rules={[
                {
                  required: true,
                  message: "Select Driving License Type",
                },
              ]}
            >
              <Select
                placeholder="License Type"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={drivingLicenseType}
              >
                {/* {licenseTypes.map((type) => {
                  return <Option value={type.name}>{type.name}</Option>;
                })} */}
              </Select>
            </Form.Item>
          </Col>
          <Col  className="assign-vehicle-tag" span={6}>
            <Form.Item>
              <div>Assign Vehicle</div>
            </Form.Item>
          </Col>
          <Col span={18}>
            <Form.Item name="assignedVehicles">
              <Select
                mode="multiple"
                allowClear
                bordered={false}
                style={{ width: "80%", borderBottom: "1px solid #ccccb3" }}
                placeholder="Select Vehicles"
                onChange={handleChange}
              >
                <Option value="v1">V1</Option>
                <Option value="v2">V2</Option>
                <Option value="v3">V3</Option>
                <Option value="v4">V4</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col className="form-button-content" span={24}>
            {/* <Form.Item>
              <CustomButton
                className="form-button"
                title="Cancel"
                onClick={cancelClickHandler}
              />
              <CustomButton
                className="form-button"
                title={isEdit ? "Update" : "Add"}
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              />
            </Form.Item> */}
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddDriver;
