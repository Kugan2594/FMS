import { Col, Form, Input, Row, Select } from "antd";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import "./driver.style.less";

interface AddDriversPropType {
  isEdit: boolean;
  updateDriverData: any;
  branches: any[];
  licenseTypes: any[];
  cancelClickHandler: any;
}

function AddDriver({
  isEdit,
  updateDriverData,
  branches,
  licenseTypes,
  cancelClickHandler,
}: AddDriversPropType) {
  const [form] = Form.useForm();

  const { Option } = Select;

  const handleSubmit = () => {
    cancelClickHandler();
  };

  return (
    <>
      <Form
        id="addDriver-form"
        name="basic"
        form={form}
        initialValues={isEdit ? updateDriverData : {}}
      >
        <Row className="add-driver" gutter={16}>
          <Col span={12}>
            <Form.Item name="driverName">
              <Input
                placeholder="First Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="">
              <Input
                placeholder="Last Name"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="contactNumber">
              <Input
                placeholder="Contact Number"
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
            <Form.Item name="nic">
              <Input
                placeholder="NIC Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="branch">
              <Select
                placeholder="Branch"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              >
                {branches.map((branch) => {
                  return <Option value={branch.name}>{branch.name}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="drivingLicense">
              <Input
                placeholder="License Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="drivingLicenseType">
              <Select
                placeholder="License Type"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              >
                {licenseTypes.map((type) => {
                  return <Option value={type.name}>{type.name}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col className="form-button-content" span={24}>
            <Form.Item name="drivingLicenseType">
              <CustomButton className="form-button" title="Cancel" onClick={cancelClickHandler} />
              <CustomButton
                className="form-button"
                title={isEdit ? "Update" : "Add"}
                type="primary"
                htmlType="submit"
                onClick={handleSubmit}
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddDriver;

const datePickerStyle: React.CSSProperties = {
  width: "100%",
  borderLeft: "0px",
  borderRight: "0px",
  borderTop: "0px",
  borderBottom: "1px solid #ccccb3",
};
