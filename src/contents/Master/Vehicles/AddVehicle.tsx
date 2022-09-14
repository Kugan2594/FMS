import {
  Col,
  Form,
  Input,
  Row,
  Select,
  Upload,
  message,
  Checkbox,
  Image,
} from "antd";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import React, { useState } from "react";
import { Option } from "antd/lib/mentions";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { UploadChangeParam } from "antd/es/upload";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import "./vehicle.style.less";

interface AddVehiclePropsType {
  isEdit: boolean;
  updateVehicleData: any;
  branches: any[];
  vehicleModels: any[];
  cancelClickHandler: any;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

function AddVehicle({
  isEdit,
  updateVehicleData,
  branches,
  cancelClickHandler,
  vehicleModels,
}: AddVehiclePropsType) {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>(
    isEdit && updateVehicleData.image != null && updateVehicleData.image
  );
  const [loading, setLoading] = useState(false);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
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
        <Row className="add-vehicle" gutter={16} align="bottom">
          <Col span={6}>
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
          </Col>
          <Col span={18}>
            <Form.Item name="vehicleModel">
              <Select
                style={{ borderBottom: "1px solid #ccccb3" }}
                bordered={false}
                showSearch
                placeholder="Select Vehicle Model"
                optionFilterProp="vehicleModels"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  (option!.children as unknown as string)
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
              >
                {vehicleModels.map((model) => {
                  return <Option value={model.name}>{model.name}</Option>
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="vehicleNumber">
              <Input
                placeholder="Vehicle Number"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="color">
              <Input
                placeholder="Vehicle Colour"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="vehicleOwner">
              <Input
                placeholder="Vehicle Owner"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="branchLocation">
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
            <Form.Item name="tankCapacity">
              <Input
                placeholder="Tank Capacity"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="reserveTankCapacity">
              <Input
                placeholder="Reserve Tank Capacity"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="maximumWeightCarriable">
              <Input
                placeholder="Maximum Weight Carriable"
                required
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="lease" valuePropName="checked">
              <Checkbox>Vehicle on Lease</Checkbox>
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
