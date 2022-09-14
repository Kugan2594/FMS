import { AutoComplete, Col, Form, Input, Row, Select } from "antd";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import React from "react";
import { Option } from "antd/lib/mentions";

interface AddVehiclePropsType {
  isEdit: boolean;
  updateVehicleData: any;
  branches: any[];
  cancelClickHandler: any;
}

function AddVehicle({
  isEdit,
  updateVehicleData,
  branches,
  cancelClickHandler,
}: AddVehiclePropsType) {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    cancelClickHandler();
  };

  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  return (
    <>
      <Form
        id="addDriver-form"
        name="basic"
        form={form}
        initialValues={isEdit ? updateVehicleData : {}}
      >
        <Row className="add-driver" gutter={16}>
          <Col span={24}>
            <Form.Item name="driverFirstName">
              <Select
                style={{ borderBottom: "1px solid #ccccb3" }}
                bordered={false}
                showSearch
                placeholder="Select Vehicle Model"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="tom">Tom</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="driverLastName">
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
            <Form.Item name="branchName">
              <Select
                placeholder="Branch"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              >
                {branches.map((branch) => {
                  return <Option>{branch.name}</Option>;
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
              ></Select>
            </Form.Item>
          </Col>
          <Col className="form-button-content" span={24}>
            <Form.Item name="drivingLicenseType">
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
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default AddVehicle;
