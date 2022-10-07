import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Col, Form, message, Modal, Row, Select, Upload } from "antd";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { DefaultOptionType } from "antd/lib/select";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import React, { useEffect, useState } from "react";
import { Input } from "../../../components/atoms/index";
import "./branchAdmin.style.less";
import { createBranchAdmin, updateBranchAdmin } from "./ServiceBranchAdmin";
import {
  branchAdminAddSuccess,
  branchAdminUpdateSuccess,
  errHandler,
} from "../../../helper/helper";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import {
  nicNoRegex,
  phoneNumberRegex,
  noSplCharAndNoRegex,
  emailRegex,
} from "../../../utils/Regex";
import { getAllBranchByCompanyId } from "../Branch/ServicesBranch";

const { Option } = Select;
interface IAddBranchAdmin {
  onClickCancel?: React.MouseEventHandler<HTMLElement> | undefined;
  onClickAdd?: React.MouseEventHandler<HTMLElement> | undefined;
  onSearch?: ((value: string) => void) | undefined;
  onChange?:
    | ((value: any, option: DefaultOptionType | DefaultOptionType[]) => void)
    | undefined;
  option?: DefaultOptionType | undefined;
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

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      value: post.id,
      label: post.branchName,
    };
  });
  return convertData;
}

function AddBranchAdmin(props: any) {
  const {
    visible,
    handleOk,
    handleCancel,
    setAddVisible,
    title,
    updateData,
    action,
    reloadTable,
  } = props;

  let show = visible;

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();
  const [branch, setBranch] = useState([]);

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

  const onFinish = (values: any) => {
    if (action === "add") {
      let data: object = {
        branchName: values.branchName,
        firstName: values.firstName,
        lastName: values.lastName,
        nic: values.nic,
        mobileNumber: values.contactNumber,
        email: values.email,
        userType: "COMPANYBRANCHADMIN",
        companyId: getUserDetails().company_id,
        branchId: values.branchId,
        subscription: "PREMIUM",
      };
      createBranchAdmin(data)
        .then((res) => {
          branchAdminAddSuccess();
          reloadTable(res);
          setAddVisible(false);
        })
        .catch((err) => {
          errHandler(err);
        });
    } else {
      let data: object = {
        branchAdminId: updateData.userId,
        branchName: values.branchName,
        firstName: values.firstName,
        lastName: values.lastName,
        nic: values.nic,
        mobileNumber: values.contactNumber,
        email: updateData.email,
        userType: "COMPANYBRANCHADMIN",
        companyId: getUserDetails().company_id,
        branchId: values.branchId,
        subscription: "PREMIUM",
      };
      updateBranchAdmin(data)
        .then((res) => {
          branchAdminUpdateSuccess();
          reloadTable(res);
          setAddVisible(false);
        })
        .catch((err) => {
          errHandler(err);
        });
    }
  };

  const onFinishFailed = () => {};

  useEffect(() => {
    getAllBranchData(getUserDetails().company_id);
  }, []);

  const getAllBranchData = (companyId: number) => {
    let data: any = [];

    getAllBranchByCompanyId(companyId).then(
      (res: any) => {
        data = createData(res.results.Branch);
        setBranch(data);
        console.log("branch", data);
      },
      (error: any) => {
        setBranch([]);
      }
    );
  };

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
          id="form"
          name="basic"
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={updateData}
        >
          <div className="addBranch">
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
                    <img
                      src={imageUrl}
                      alt="avatar"
                      style={{ width: "100%" }}
                    />
                  ) : (
                    uploadButton
                  )}
                </Upload>
              </Form.Item>
            </Row>
            <Row gutter={4}>
              <Col xs={24} xl={24}>
                <div
                  className="input-container"
                  style={{
                    width: "100%",
                    marginTop: "0px",
                  }}
                >
                  <div className="name">
                    {" "}
                    <Form.Item
                      name="firstName"
                      rules={[
                        {
                          required: true,
                          message: "First name is mandatory",
                        },
                        {
                          max: 30,
                          message: "Sorry you are exceeding the limit",
                        },
                        {
                          pattern: new RegExp(noSplCharAndNoRegex),
                          message: "Numbers are prohibited",
                        },
                      ]}
                    >
                      <Input label="First Name" />
                    </Form.Item>
                    <Form.Item
                      name="lastName"
                      style={{ marginLeft: "10%" }}
                      rules={[
                        {
                          max: 30,
                          message: "Sorry you are exceeding the limit",
                        },
                        {
                          pattern: new RegExp(noSplCharAndNoRegex),
                          message: "Numbers are prohibited",
                        },
                      ]}
                    >
                      <Input label="Last Name" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    name="nic"
                    rules={[
                      {
                        required: true,
                        message: "NIC is mandatory",
                      },
                      {
                        pattern: new RegExp(nicNoRegex),

                        message: "Enter valid NIC",
                      },
                    ]}
                  >
                    <Input label="NIC" />
                  </Form.Item>
                  <Form.Item
                    name="contactNumber"
                    rules={[
                      {
                        required: true,
                        message: "Mobile number is mandatory",
                      },
                      {
                        pattern: new RegExp(phoneNumberRegex),
                        message: "Enter valid Mobile No Ex:- 947*********",
                      },
                    ]}
                  >
                    <Input label="Contact Number" />
                  </Form.Item>
                  {action === "add" && (
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Email is mandatory",
                        },
                        {
                          pattern: new RegExp(emailRegex),
                          message: "Enter valid E-mail",
                        },
                      ]}
                    >
                      <Input label="E Mail" />
                    </Form.Item>
                  )}
                  <div
                    className="Select"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "8px",
                    }}
                  >
                    <Form.Item
                      name="branchId"
                      rules={[
                        {
                          required: true,
                          message: "Branch Name is mandatory",
                        },
                      ]}
                    >
                      <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Company Branch"
                        optionFilterProp="children"
                        value={updateData.branchId}
                        options={branch}
                      />
                    </Form.Item>
                  </div>
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
              <CustomButton
                type={"primary"}
                htmlType={"submit"}
                title={"Submit"}
                style={submitButton}
              />
            </Row>
          </div>
        </Form>
      </Modal>
    </>
  );
}

export default AddBranchAdmin;

const submitButton: React.CSSProperties = {
  marginLeft: "70%",
  width: "30%",
};
