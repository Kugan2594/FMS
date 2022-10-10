import { Col, Form, Input, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import "./driver.style.less";
import { addDriver, updateDriver } from "./ServiceDriver";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { Button } from "../../../components/atoms/Button";
import { getAllBranchesByCompanyId } from "../Branch/ServicesBranch";
import { getAllDrivingLicenseTypes } from "../../../contents/Settings/DrivingLicenseType/ServiceDrivingLicenseType";
import {
  drivingLicenseNoRegex,
  emailRegex,
  nicNoRegex,
  phoneNumberRegex,
} from "../../../utils/Regex";
import {
  driverAddSuccess,
  driverUpdateSuccess,
  errHandler,
} from "../../../helper/helper";
import { any } from "prop-types";
const { Option } = Select;

interface AddDriversPropType {
  isEdit: boolean;
  updateDriverData: any;
  cancelClickHandler: any;
  reloadTable: any;
  setIsModelOpen: any;
}

function AddDriver({
  isEdit,
  updateDriverData,
  cancelClickHandler,
  reloadTable,
  setIsModelOpen,
}: AddDriversPropType) {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [branch, setBranch] = useState([]);
  const [drivingLicenseType, setDrivingLicenseType] = useState([]);

  useEffect(() => {
    getBranchSelectData(getUserDetails().company_id);
    getDrivingLicenseTypeSelectData();
  }, []);

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
    if (isEdit == false) {
      let data: object = {
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
          setIsModelOpen(false);
          reloadTable(res);
        })
        .catch((err) => {
          errHandler(err);
        });
    } else {
      let data: object = {
        driverId: updateDriverData.id,
        firstName: values.firstName,
        lastName: values.lastName,
        nic: values.nic,
        email: updateDriverData.email,
        drivingLicenseNo: values.drivingLicenseNo,
        drivingLicenseTypeId: values.drivingLicenseTypeId,
        branchId: values.branchId,
        mobileNumber: values.mobileNumber,
        companyId: getUserDetails().company_id,
        subscription: "PREMIUM",
        userType: "COMPANYDRIVER",
        userId: updateDriverData.userId,
      };
      updateDriver(data)
        .then((res) => {
          driverUpdateSuccess();
          setIsModelOpen(false);
          reloadTable(res);
        })
        .catch((err) => {
          errHandler(err);
        });
    }
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
          {!isEdit && (
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    pattern: new RegExp(emailRegex),

                    message: "Enter valid Email",
                  },
                ]}
                name="email"
              >
                <Input
                  placeholder="Email"
                  required
                  bordered={false}
                  style={{ borderBottom: "1px solid #ccccb3" }}
                />
              </Form.Item>
            </Col>
          )}
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
              ></Select>
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
              ></Select>
            </Form.Item>
          </Col>
          <Col className="form-button-content" span={24}>
            <Form.Item>
              <Button
                className="form-button"
                title="Cancel"
                onClick={cancelClickHandler}
              />
              <Button
                className="form-button"
                title={isEdit ? "Update" : "Add"}
                type="primary"
                htmlType="submit"
              />
            </Form.Item>
            {/* <Button htmlType="submit" type="primary">
              Submit
            </Button> */}
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddDriver;
