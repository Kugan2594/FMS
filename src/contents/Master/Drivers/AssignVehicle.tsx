import { Col, Form, Image, Row, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import User from "../../../assets/User.svg";
import { Button } from "../../../components/atoms/Button";
import {
  addVehicleAllocationByDriverId,
  getAllocatedVehicleByDriverId,
  getAllVehicleByCompanyIdAndBranchId,
  updateVehicleAllocationByDriverId,
} from "./ServiceDriver";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { assignedVehicleSuccess } from "../../../helper/helper";
import { getAllVehiclesAllocationsForDropDown } from "../RevenueLicense/ServicesRevenueLicense";
import {
  getAllVehiclesByCompanyId,
  getAllVehiclesByCompanyIdAndBranchId,
} from "../Vehicles/ServiceVehicle";

const { Title, Text } = Typography;
const { Option } = Select;

interface DriverDataType {
  driverData: any;
  cancelClickHandler: any;
}

function AssignVehicle({ driverData, cancelClickHandler }: DriverDataType) {
  const [form] = Form.useForm();
  const [vehicle, setVehicle] = useState([]);
  const [assignedVehicle, setAssignedVehicle] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  useEffect(() => {
    getVehicleSelectData(
      getUserDetails().user_id,
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
    getAllocatedVehicleData(driverData.userId);
  }, []);

  const handleChange = (data: any) => {
    setAssignedVehicle(data);
    console.log("DATA", data);
  };

  const onFinish = (values: any) => {
    if (isAdd) {
      let data: object = {
        userId: driverData.userId,
        vehicleNumber: assignedVehicle,
      };
      addVehicleAllocationByDriverId(data)
        .then((res) => {
          assignedVehicleSuccess();
          cancelClickHandler();
        })
        .catch((err) => {});
    } else {
      let data: object = {
        id: 1,
        userId: driverData.userId,
        vehicleNumber: assignedVehicle,
      };
      updateVehicleAllocationByDriverId(data)
        .then((res) => {
          assignedVehicleSuccess();
          cancelClickHandler();
        })
        .catch((err) => {});
    }
  };

  const onFinishFailed = () => {};

  const getVehicleSelectData = (
    userId: number,
    companyId: number,
    branchId: number
  ) => {
    if (getUserDetails().roleName === "COMPANYDRIVER") {
      getAllVehiclesAllocationsForDropDown(userId).then((res: any) => {
        let data: any = [];
        res.map((post: any) => {
          data.push({
            value: post.vehicleNumber,
            label: `${post.vehicleNumber}`,
          });
        });
        setVehicle(data);
      });
    } else if (getUserDetails().roleName === "COMPANYADMIN") {
      getAllVehiclesByCompanyId(companyId).then((res: any) => {
        let data: any = [];
        res.results.companyVehicle.map((post: any) => {
          data.push({
            value: post.vehicleNumber,
            label: `${post.vehicleNumber}`,
          });
        });
        setVehicle(data);
      });
    } else if (getUserDetails().roleName === "COMPANYBRANCHADMIN") {
      getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
        (res: any) => {
          let data: any = [];
          res.results.vehicleByCompanyAndBranch.map((post: any) => {
            data.push({
              value: post.vehicleNumber,
              label: `${post.vehicleNumber}`,
            });
          });
          setVehicle(data);
        }
      );
    }
  };

  const getAllocatedVehicleData = (userId: number) => {
    getAllocatedVehicleByDriverId(userId).then((res: any) => {
      let data: any = [];
      res.results.vehicleAllocation.map((post: any) => {
        data.push(post.vehicleNumber);
      });
      setAssignedVehicle(data);
      setIsAdd(data.length == 0 ? true : false);
    });
  };

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
          <div className="assignVehicle-detail-header">
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
                  {driverData.drivingLicenseType}
                </Text>
              </div>
            </Col>
            <Col>
              <div className="assignVehicle-detail">
                <Text>Branch: </Text>
                <br />
                <Text className="assignVehicle-data" strong>
                  {driverData.branchName}
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
              <Form.Item>
                <Select
                  value={assignedVehicle}
                  mode="multiple"
                  allowClear
                  bordered={false}
                  style={{ width: "80%", borderBottom: "1px solid #ccccb3" }}
                  placeholder="Select Vehicles"
                  onChange={handleChange}
                  options={vehicle}
                ></Select>
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
                onClick={() => console.log("KKKKK", assignedVehicle)}
              />
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AssignVehicle;
