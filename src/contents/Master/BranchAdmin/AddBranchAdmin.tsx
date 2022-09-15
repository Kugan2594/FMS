import { Col, Form, message, Row, Select, Typography, Upload } from "antd";
import { Input } from "../../../components/atoms/index";
import { Button } from "../../../components/atoms/Button/index";
import "./branchAdmin.style.less";
import { DefaultOptionType } from "antd/lib/select";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";
interface AddBranchAdmin {
    onClickCancel?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickAdd?: React.MouseEventHandler<HTMLElement> | undefined;
    onSearch?: ((value: string) => void) | undefined;
    onChange?:
        | ((
              value: any,
              option: DefaultOptionType | DefaultOptionType[]
          ) => void)
        | undefined;
    option?: DefaultOptionType | undefined;
    initialValues?: any;
}
const { Text, Title } = Typography;
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
const { Option } = Select;
function AddBranchAdmin({
    onClickAdd,
    onClickCancel,
    onSearch,
    onChange,
    option,
    initialValues,
}: AddBranchAdmin) {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    console.log("TEST" + initialValues);
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
    return (
        <Form initialValues={initialValues}>
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
                                <Form.Item name="adminFirstName">
                                    <Input label="First Name" />
                                </Form.Item>
                                <Form.Item
                                    name="adminLastName"
                                    style={{ marginLeft: "10%" }}
                                >
                                    <Input label="Last Name" />
                                </Form.Item>
                            </div>
                            <Form.Item name="nic">
                                <Input label="NIC*" />
                            </Form.Item>
                            <Form.Item name="contactNumber">
                                <Input label="Contact Number" />
                            </Form.Item>
                            <Form.Item name="email">
                                <Input label="E Mail" />
                            </Form.Item>
                            <div
                                className="Select"
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "8px",
                                }}
                            >
                                <Form.Item name="branchName">
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Company Branch"
                                        optionFilterProp="children"
                                        filterOption={(input, option) =>
                                            (
                                                option!
                                                    .children as unknown as string
                                            ).includes(input)
                                        }
                                        filterSort={(optionA, optionB) =>
                                            (
                                                optionA!
                                                    .children as unknown as string
                                            )
                                                .toLowerCase()
                                                .localeCompare(
                                                    (
                                                        optionB!
                                                            .children as unknown as string
                                                    ).toLowerCase()
                                                )
                                        }
                                    >
                                        <Option value="1">Colombo</Option>
                                        <Option value="2">Jaffna</Option>
                                        <Option value="3">Singapore</Option>
                                        <Option value="4">Identified</Option>
                                        <Option value="5">Resolved</Option>
                                        <Option value="6">Cancelled</Option>
                                    </Select>
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
                    <Col>
                        {" "}
                        <Button title="Cancel" onClick={onClickCancel} />
                    </Col>
                    <Col>
                        <Button
                            title="Add"
                            type="primary"
                            onClick={onClickAdd}
                        />
                    </Col>
                </Row>
            </div>
        </Form>
    );
}

export default AddBranchAdmin;
