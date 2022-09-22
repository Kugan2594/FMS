import { Col, Form, Image, Row, Select, Typography } from "antd";
import React, { useState } from "react";
import User from "../../../assets/User.svg";
import { Button } from "../../../components/atoms/Button";

const { Title, Text } = Typography;
const { Option } = Select;

interface DriverDataType {
  driverData: any;
  cancelClickHandler: any;
}

function AssignVehicle({ driverData, cancelClickHandler }: DriverDataType) {
  const [form] = Form.useForm();

  const [assignedVehicle, setAssignedVehicle] = useState([]);

  const handleChange = (data: any) => {
    setAssignedVehicle(data);
  };

  const onFinish = (values: any) => {
    let data: object = {};
  };

  const onFinishFailed = () => {};

  return (
    <div className="assignVehicle">
      <Row gutter={8} align="middle">
        <Col span={6}>
          <div className="assignVehicle-image-container">
          <div className="assignVehicle-image">
            {driverData.image != null ? (
              <Image
                width="100%"
                style={{ borderRadius: "50%" }}
                src={driverData.image}
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
        </Col>
        <Col span={18}>
          <div className="assignVehicle-detail-header" >
            <Title className="assignVehicle-detail-title" level={4}>
              {driverData.firstName + " " + driverData.lastName}
            </Title>
          </div>
          <Row gutter={40}>
            <Col>
              <div className="assignVehicle-detail">
                <Text>Driving License No: </Text>
                <br />
                <Text className="assignVehicle-data" strong>
                  {driverData.drivingLicenseNo}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="assignVehicle-detail">
                <Text>Driving License Type: </Text>
                <br />
                <Text className="assignVehicle-data" strong>
                  {driverData.drivingLicenseTypeId}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="assignVehicle-detail">
                <Text>Branch: </Text>
                <br />
                <Text className="assignVehicle-data" strong>
                  {driverData.branchId}
                </Text>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="assignVehicle-form">
        <Form
          id="addDriver-form"
          name="basic"
          form={form}
          initialValues={assignedVehicle}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={24}>
            <Col className="assign-vehicle-tag" span={6}>
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
          </Row>
          <Form.Item>
            <div className="assignVehicle-form-button">
              <Button
                className="form-button"
                title="Cancel"
                onClick={cancelClickHandler}
              />
              <Button
                type="primary"
                title="Assign Vehicle"
                htmlType="submit"
                onClick={() => console.log("AAAAAA", assignedVehicle)}
              />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AssignVehicle;
