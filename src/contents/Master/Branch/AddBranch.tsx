import { Col, Form, Image, message, Modal, Row, Upload, Button } from "antd";
import { Input } from "../../../components/atoms/index";
import Column from "antd/lib/table/Column";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import React, { useState } from "react";
import { errHandler, branchAddSuccess } from "../../../helper/helper";
import { addBranch, editBranch } from "./ServicesBranch";
import { phoneNumberRegex, emailRegex } from "../../../utils/Regex";
interface AddBranchType {
  onClickCancel?: React.MouseEventHandler<HTMLElement> | undefined;
  onClickAdd?: React.MouseEventHandler<HTMLElement> | undefined;
  initialValues?: any;
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

function AddBranch(props: any) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const onFinishFailed = () => {};

  const onFinishAdd = (values: any) => {
    let branchData = values;
    if (props.action == "add") {
      const data = {
        id: 100,
        branchName: branchData.branchName,
        address: branchData.address,
        phoneNumber: branchData.phoneNumber,
        email: branchData.email,
        companyId: getUserDetails().company_id,
        //   companyId:  1
      };

      addBranch(data)
        .then((res: any) => {
          branchAddSuccess();
          props.reloadTable(res);
        })
        .catch((err: any) => {
          errHandler(err);
        });
    } else {
      const data = {
        id: props.initialValues.id,
        branchName: branchData.branchName,
        address: branchData.address,
        phoneNumber: branchData.phoneNumber,
        email: branchData.email,
        companyId: getUserDetails().company_id,
      };

      editBranch(data)
        .then((res: any) => {
          branchAddSuccess();
          props.reloadTable(res);
        })
        .catch((err: any) => {
          errHandler(err);
        });
    }
  };
  return (
    <Form
      id="form"
      name="basic"
      form={form}
      initialValues={props.isEdit ? props.updateData : {}}
      onFinish={onFinishAdd}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={8}>
        <Col xs={24} xl={6} style={{ marginLeft: "0px" }}>
          <Row className="row-1">
            <Form.Item valuePropName="fileList">
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
          </Row>
          <Row className="row-2"></Row>
          <Row className="row-3"></Row>
        </Col>
        <Col xs={24} xl={18}>
          <div
            className="input-container"
            style={{
              width: "100%",
              marginTop: "0px",
            }}
          >
            <Form.Item name="branchName" required>
              <Input label="Branch Name" />
            </Form.Item>
            <Form.Item name="address">
              <Input label="Address" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  pattern: new RegExp(phoneNumberRegex),

                  message: "Enter valid Mobile",
                },
              ]}
              name="phoneNumber"
            >
              <Input label="Contact Number" />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  pattern: new RegExp(emailRegex),

                  message: "Enter valid Email",
                },
              ]}
              name="email"
            >
              <Input label="email" />
            </Form.Item>
          </div>
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
        <Button htmlType="submit" type="primary">
          Add
        </Button>
      </Row>
    </Form>
  );
}

export default AddBranch;
