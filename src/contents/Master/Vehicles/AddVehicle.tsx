import { Checkbox, Col, Form, Input, Modal, Row, Select } from "antd";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import {
  errHandler,
  vehicleAddSuccess,
  vehicleUpdateSuccess,
} from "../../../helper/helper";
import {
  addVehicle,
  getAllVehiclesFromResourcesForDropDown,
  updateVehicle,
} from "./ServiceVehicle";
import "./vehicle.style.less";
import React, { useEffect, useState } from "react";
import { getAllBranchesByCompanyId } from "../Branch/ServicesBranch";
import { Button } from "../../../components/atoms/Button";
import { vehicleNoRegex } from "../../../utils/Regex";

const { Option } = Select;
interface AddVehiclePropsType {
  visible: boolean;
  handleOk: any;
  handleCancel: any;
  setAddVisible: any;
  title: string;
  updateData: any;
  action: string;
  reloadTable: any;
  cancelClickHandler: any;
  isEdit: boolean;
}

function AddVehicle(props: AddVehiclePropsType) {
  const [form] = Form.useForm();
  const [branch, setBranch] = useState([]);
  const [vehicle, setVehicle] = useState([]);

  const {
    visible,
    handleOk,
    handleCancel,
    setAddVisible,
    title,
    updateData,
    action,
    reloadTable,
    cancelClickHandler,
    isEdit,
  } = props;

  let show = visible;

  useEffect(() => {
    getBranchSelectData(getUserDetails().company_id);
    getVehicleSelectData();
  }, []);

  const onFinish = (values: any) => {
    if (action === "add") {
      let data: object = {
        vehicleNumber: values.vehicleNumber,
        lease: values.lease,
        color: values.color,
        vehicleOwner: values.vehicleOwner,
        tankCapacity: values.tankCapacity,
        reserveTankCapacity: values.reserveTankCapacity,
        maximumWeightCarriable: values.maximumWeightCarriable,
        vehicleIdFromResource: values.vehicleIdFromResource,
        branchId: values.branchId,
        companyId: getUserDetails().company_id,
      };
      addVehicle(data)
        .then((res) => {
          vehicleAddSuccess();
          reloadTable(res);
          setAddVisible(false);
        })
        .catch((err) => {
          errHandler(err);
        });
    } else {
      let data: object = {
        vehicleNumber: values.vehicleNumber,
        lease: values.lease,
        color: values.color,
        vehicleOwner: values.vehicleOwner,
        tankCapacity: values.tankCapacity,
        reserveTankCapacity: values.reserveTankCapacity,
        maximumWeightCarriable: values.maximumWeightCarriable,
        vehicleIdFromResource: values.vehicleIdFromResource,
        branchId: values.branchId,
        companyId: getUserDetails().company_id,
      };
      updateVehicle(data)
        .then((res) => {
          vehicleUpdateSuccess();
          reloadTable(res);
          setAddVisible(false);
        })
        .catch((err) => {
          errHandler(err);
        });
    }
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

  const getVehicleSelectData = () => {
    getAllVehiclesFromResourcesForDropDown().then((res: any) => {
      let data: any = [];
      res.results.vehicle.map((post: any) => {
        data.push({
          value: post.id,
          label: `${post.vehicleModel.vehicleBrandDto.vehicleBrandName} ${post.vehicleModel.vehicleModelName} ${post.fuelTypeDto.fuelTypeName} ${post.vehicleBodyTypeResponseDto.vehicleBodyTypeName} ${post.transmission}`,
        });
        setVehicle(data);
      });
    });
  };

  const onFinishFailed = () => {};

  return (
    <>
      <Modal
        title={title}
        visible={show}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"35%"}
        footer={null}
      >
        <Form
          id="addVehicle"
          name="basic"
          form={form}
          initialValues={updateData}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row className="add-vehicle" gutter={16} align="bottom">
            <Col span={6}>
              <Form.Item name="id" hidden>
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="vehicleIdFromResource">
                <Select
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                  bordered={false}
                  showSearch
                  placeholder="Select Vehicle Model"
                  optionFilterProp="vehicleModels"
                  filterOption={(input, option) =>
                    (option!.children as unknown as string)
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                >
                  {vehicle.map((post: any) => {
                    return <Option value={post.value}>{post.label}</Option>;
                  })}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                rules={[
                  {
                    pattern: new RegExp(vehicleNoRegex),
                    message: "Enter valid Vehicle No Ex: ABC-1234",
                  },
                ]}
                name="vehicleNumber"
              >
                <Input
                  placeholder="Vehicle Number"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="color">
                <Input
                  placeholder="Vehicle Colour"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="vehicleOwner">
                <Input
                  placeholder="Vehicle Owner"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="branchId">
                <Select
                  placeholder="Branch"
                  optionFilterProp="children"
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                  options={branch}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="tankCapacity">
                <Input
                  placeholder="Tank Capacity"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="reserveTankCapacity">
                <Input
                  placeholder="Reserve Tank Capacity"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="maximumWeightCarriable">
                <Input
                  placeholder="Maximum Weight Carriable"
                  required
                  bordered={false}
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="lease" valuePropName="checked">
                <Checkbox>Vehicle on Lease</Checkbox>
              </Form.Item>
            </Col>
          </Row>
          <Row
            justify="end"
            className="Actions"
            gutter={8}
            style={{
              marginTop: "3%",
            }}
          >
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
          </Row>
        </Form>
      </Modal>
    </>
  );
}

export default AddVehicle;

const submitButton: React.CSSProperties = {
  marginLeft: "70%",
  width: "30%",
};
