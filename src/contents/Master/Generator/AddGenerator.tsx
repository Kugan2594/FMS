import {
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    message,
    Upload,
    Checkbox,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState } from "react";

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

function AddGenerator() {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();

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

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const { Option } = Select;

    return (
        <>
            <Form id="form" name="basic" form={form}>
                <Row>
                    <Col span={12}>
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
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Form.Item>
                            <Input
                                placeholder="Generator Brand"
                                required
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Select
                                placeholder="Fuel Type"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="jack">Petrol</Option>
                                <Option value="lucy">Diesal</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Maximum Power kVA"
                                required
                                bordered={false}
                                style={{
                                    borderBottom: "1px solid #ccccb3",
                                }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Tank Capacity in Litre"
                                required
                                bordered={false}
                                style={{
                                    borderBottom: "1px solid #ccccb3",
                                    marginTop: "9%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item>
                            <Input
                                placeholder="Generator Name"
                                required
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Select
                                placeholder="Company Branch"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="jack">Jaffna</Option>
                                <Option value="lucy">Colombo</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Continuous Operating Hours"
                                required
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                            <span style={{ color: "blue", marginLeft: "4%" }}>
                                Warranty{" "}
                            </span>
                            <Checkbox />
                        </Form.Item>
                        <Row>
                            <Col span={11}>
                                <Form.Item>
                                    <DatePicker
                                        placeholder="Issued Date"
                                        style={datePickerStyle}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={2}></Col>
                            <Col span={11}>
                                <Form.Item>
                                    <Input
                                        placeholder="Warranty Period"
                                        required
                                        bordered={false}
                                        style={{
                                            borderBottom: "1px solid #ccccb3",
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default AddGenerator;

const datePickerStyle: React.CSSProperties = {
    width: "100%",
    borderLeft: "0px",
    borderRight: "0px",
    borderTop: "0px",
    borderBottom: "1px solid #ccccb3",
};
