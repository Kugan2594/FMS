import React, { useEffect, useState } from "react";
import {
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    message,
    Upload,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import { getAllVehiclesAllocationsForDropDown } from "../RevenueLicense/ServicesRevenueLicense";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addInsurance } from "./ServiceInsurance";
import {
    errHandler,
    insuranceDocumentAddSuccess,
} from "../../../helper/helper";
import { noSplCharAndLetterRegex } from "../../../utils/Regex";
import {
    getAllVehiclesByCompanyId,
    getAllVehiclesByCompanyIdAndBranchId,
} from "../Vehicles/ServiceVehicle";
import { Button } from "../../../components/atoms/Button";

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

function AddInsurance(props: any) {
    const { reloadTable, setIsModelOpen, cancelClickHandler, isEdit } = props;
    const [form] = Form.useForm();
    const { Option } = Select;
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [vehicle, setVehicle] = useState([]);
    const [vehicleNumbers, setvehicleNumbers] = useState("");
    const [fileList, setFileList] = useState([]);

    let vehicleNum: string;

    const handleChange: UploadProps["onChange"] = (
        info: UploadChangeParam<UploadFile>
    ) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            // Get this url from response in real world.
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

    useEffect(() => {
        getVehicleSelectData(getUserDetails().user_id);
    }, []);

    const getVehicleSelectData = (userId: number) => {
        getAllVehiclesAllocationsForDropDown(userId).then((res: any) => {
            let data: any = [];
            res.map((post: any) => {
                data.push({
                    value: post.vehicleNumber,
                    label: `${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
                });
                vehicleNum = post.vehicleNumber;
                return null;
            });
            setVehicle(data);
            setvehicleNumbers(vehicleNum);
        });
    };

    const onFinishAdd = (values: any) => {
        const formData = new FormData();
        let insuranceData = values;
        const data = {
            id: 1,
            insuranceIssuedDate: insuranceData.insuranceIssuedDate,
            insuranceExpiryDate: insuranceData.insuranceExpiryDate,
            insuranceType: insuranceData.insuranceType,
            vehicleNumber: vehicleNumbers,
            userId: getUserDetails().user_id,
            policyNumber: insuranceData.policyNumber,
            policyHolderName: insuranceData.policyHolderName,
            insuranceProvider: insuranceData.insuranceProvider,
            insuranceAmount: insuranceData.insuranceAmount,
        };

        fileList.map((post, index) => {
            formData.append("files", post);
        });

        formData.append("addInsuranceDetails", JSON.stringify(data));

        addInsurance(formData)
            .then((res: any) => {
                insuranceDocumentAddSuccess();
                setIsModelOpen(false);
                reloadTable();
            })
            .catch((err) => {
                errHandler(err);
            });
    };

    const onFinishFailed = () => {};

    return (
        <>
            <Form
                id="form"
                name="basic"
                form={form}
                initialValues={props.isEdit ? props.updateData : {}}
                onFinish={onFinishAdd}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={11}>
                        <Form.Item name="vehicleNo">
                            <Select
                                placeholder="Vehicle"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                                options={vehicle}
                            ></Select>
                        </Form.Item>
                    </Col>
                    <Col span={2}> </Col>
                    <Col span={11}>
                        <Form.Item
                            rules={[
                                {
                                    max: 10,
                                    message:
                                        "Sorry you are exceeding the limit!",
                                },
                                {
                                    pattern: new RegExp(
                                        noSplCharAndLetterRegex
                                    ),

                                    message: "Enter valid amount",
                                },
                            ]}
                            name="insuranceAmount"
                        >
                            <Input
                                placeholder="Price"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Form.Item name="insuranceProvider">
                            <Input
                                placeholder="Provider"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}> </Col>
                    <Col span={11}>
                        <Form.Item name="insuranceIssuedDate">
                            <DatePicker
                                placeholder="Issued Date"
                                style={{
                                    borderBottom: "1px solid #ccccb3",
                                    borderTop: "0px",
                                    borderLeft: "0px",
                                    borderRight: "0px",
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Form.Item name="policyNumber">
                            <Input
                                placeholder="Policy Number"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item name="insuranceExpiryDate">
                            <DatePicker
                                placeholder="Expire Date"
                                style={{
                                    borderBottom: "1px solid #ccccb3",
                                    borderTop: "0px",
                                    borderLeft: "0px",
                                    borderRight: "0px",
                                    width: "100%",
                                }}
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row>
                    <Col span={11}>
                        <Form.Item name="policyHolderName">
                            <Input
                                placeholder="Policy Holder Name"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
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
                        <Form.Item name="insuranceType">
                            <Select
                                placeholder="Policy Type"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="Third Party">Third Party</Option>
                                <Option value="Fully Insurance">
                                    Fully Insurance
                                </Option>
                            </Select>
                        </Form.Item>
                        <Form.Item hidden={true} name="id"></Form.Item>

                        <Form.Item hidden={true} name="userId"></Form.Item>
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
        </>
    );
}

export default AddInsurance;
