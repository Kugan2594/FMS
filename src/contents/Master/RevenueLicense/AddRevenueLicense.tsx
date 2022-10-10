import React, { useState, useEffect } from "react";
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
import {
    addRevenueLicense,
    getAllRevenueLicenseByUserId,
    getAllVehiclesAllocationsForDropDown,
} from "./ServicesRevenueLicense";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import axios from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";
import {
    errHandler,
    revenueLicenseDocumentAddSuccess,
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

function AddRevenueLicense(props: any) {
    const { reloadTable, setIsModelOpen, cancelClickHandler, isEdit } = props;
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const [vehicle, setVehicle] = useState([]);
    const [fileList, setFileList] = useState([]);
    const [vehicleNumbers, setvehicleNumbers] = useState("");

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

    useEffect(() => {
        getVehicleSelectData(
            getUserDetails().user_id,
            getUserDetails().company_id,
            getUserDetails().company_branch_id
        );
    }, []);

    const getVehicleSelectData = (
        userId: number,
        companyId: number,
        branchId: number
    ) => {
        if (getUserDetails().roleName == "COMPANYDRIVER") {
            getAllVehiclesAllocationsForDropDown(userId).then((res: any) => {
                let data: any = [];
                res.map((post: any) => {
                    data.push({
                        value: post.vehicleNumber,
                        label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
                    });
                    vehicleNum = post.vehicleNumber;
                    return null;
                });
                setVehicle(data);
                setvehicleNumbers(vehicleNum);
            });
        } else if (getUserDetails().roleName == "COMPANYADMIN") {
            getAllVehiclesByCompanyId(companyId).then((res: any) => {
                let data: any = [];
                res.results.companyVehicle.map((post: any) => {
                    data.push({
                        value: post.vehicleNumber,
                        label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
                    });
                    vehicleNum = post.vehicleNumber;
                    return null;
                });
                setVehicle(data);
                setvehicleNumbers(vehicleNum);
            });
        } else if (getUserDetails().roleName == "COMPANYBRANCHADMIN") {
            getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
                (res: any) => {
                    let data: any = [];
                    res.results.vehicleByCompanyAndBranch.map((post: any) => {
                        data.push({
                            value: post.vehicleNumber,
                            label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
                        });
                        vehicleNum = post.vehicleNumber;
                        return null;
                    });
                    setVehicle(data);
                    setvehicleNumbers(vehicleNum);
                }
            );
        }
    };

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const { Option } = Select;

    const onFinishAdd = (values: any) => {
        const formData = new FormData();
        let revenueLicenseData = values;
        const data = {
            id: 1,
            taxIssuedDate: revenueLicenseData.taxIssuedDate,
            taxExpiryDate: revenueLicenseData.taxExpiryDate,
            region: revenueLicenseData.region,
            vehicleNumber: vehicleNumbers,
            taxAmount: revenueLicenseData.taxAmount,
            userId: getUserDetails().user_id,
            companyId: getUserDetails().company_id,
            branchId: getUserDetails().company_branch_id,
        };

        fileList.map((post, index) => {
            formData.append("files", post);
        });

        formData.append("addRevenueLicense", JSON.stringify(data));

        addRevenueLicense(formData)
            .then((res: any) => {
                revenueLicenseDocumentAddSuccess();
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
                <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
                    <Col span={24}>
                        <Form.Item name="vehicleNo">
                            <Select
                                placeholder="Vehicle"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                                options={vehicle}
                            ></Select>
                        </Form.Item>
                        <Form.Item name="region">
                            <Input
                                placeholder="Region"
                                required
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                        <Form.Item name="taxIssuedDate">
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
                        <Form.Item name="taxExpiryDate">
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
                            name="taxAmount"
                        >
                            <Input
                                placeholder="Price"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
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

export default AddRevenueLicense;
