import React from "react";
import { AutoComplete, Button, Col, Form, Input, Row, Select } from "antd";
import "./driver.style.less";

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function AddDriver() {
  const [form] = Form.useForm();

  const onGenderChange = (value: string) => {
    switch (value) {
      case "male":
        form.setFieldsValue({ note: "Hi, man!" });
        return;
      case "female":
        form.setFieldsValue({ note: "Hi, lady!" });
        return;
      case "other":
        form.setFieldsValue({ note: "Hi there!" });
    }
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const branch = [{value: "Jaffna"}, {value:"Colombo"}, {value:"Kandy"}, {value:"Vavuniya"}];

  return (
    <div className="add-driver">
      <Form
        {...layout}
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        layout="vertical"
      >
        <Row>
          <Col span={12}>
            <Form.Item name="firstName" label="First Name">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="lastName" label="Last Name">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="nic" label="NIC Number">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="contactNumber" label="Contact Number">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="licenseNumber" label="License Number">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="branch" label="Select Branch">
              <AutoComplete
                style={{ width: 200 }}
                options={branch}
                placeholder="Select Branch"
                filterOption={(inputValue, option) =>
                  option!.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
              />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="vehicle" label="Select Vehicle">
              <Select
                className="select"
                placeholder="Select Vehicle"
                onChange={onGenderChange}
                allowClear
              >
                {branch.map((name) => {
                  return <Option value="jaffna">{name.value}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        {/* <Form.Item name="note" label="Note" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
        <Select
          placeholder="Select a option and change input text above"
          onChange={onGenderChange}
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item> */}
      </Form>
    </div>
  );
}

export default AddDriver;
