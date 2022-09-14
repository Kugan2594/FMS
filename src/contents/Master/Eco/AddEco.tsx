import {
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select,
    message,
    Upload,
    Button,
} from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useState, useEffect } from "react";
import { getAllVehiclesAllocationsForDropDown } from "../RevenueLicense/ServicesRevenueLicense";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addEmissionTest } from "./ServicesEco";

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

function AddEco() {
    const [form] = Form.useForm();
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

    useEffect(() => {
        getVehicleSelectData(getUserDetails().user_id);
    }, [])

    
    const getVehicleSelectData = (userId: number) => {
        
        getAllVehiclesAllocationsForDropDown(userId).then((res: any) => {
            let data: any = [];
            res.map((post: any) => {
                data.push({ value: post.vehicleNumber, label: `${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}` });
                vehicleNum = post.vehicleNumber
                return null;
            });
            setVehicle(data);
            setvehicleNumbers(vehicleNum);
          
            
        });
    };

    const onFinishAdd = (values:any) => {
        
        const formData = new FormData();
        let emissionTestData = values;
        const data = {
            id:1,
            emissionTestIssuedDate: emissionTestData.emissionTestIssuedDate,
            emissionTestExpiryDate: emissionTestData.emissionTestExpiryDate,
            emissionTestAmount: emissionTestData.emissionTestAmount,
            vehicleNumber: vehicleNumbers,
            userId:getUserDetails().user_id
        };

        fileList.map((post, index) => {
            formData.append("files", post);
            console.log(post);
        });

        formData.append("addEmissionTest", JSON.stringify(data));

        addEmissionTest(formData).then(
            (res: any) => {
                
            }
        )
    };

    const onFinishFailed = () => {
        console.log("add cancel");   
    }

    return (
        <>
            <Form id="form" name="basic" form={form}
              onFinish={onFinishAdd}
              onFinishFailed={onFinishFailed}
            >
                <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
                    <Col span={24}>
                        <Form.Item>
                            <Select
                                placeholder="Vehicle"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                                options={vehicle}
                            >  
                            </Select>
                        </Form.Item>
                        <Form.Item
                            name = "emissionTestIssuedDate"
                        >
                            <DatePicker
                                placeholder="Issued Date"
                                style={datePickerStyle}
                            />
                        </Form.Item>
                        <Form.Item
                            name = "emissionTestExpiryDate"
                        >
                            <DatePicker
                                placeholder="Expire Date"
                                style={datePickerStyle}
                            />
                        </Form.Item>
                        <Form.Item
                            name = "emissionTestAmount"
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
                        <Form.Item hidden={true}
                            name="id"
                        >
                        </Form.Item>

                        <Form.Item hidden={true}
                            name="userId"
                        >
                        </Form.Item>
                    </Col>
                </Row>
                <Button htmlType="submit" type="primary">Add</Button>
            </Form>
        </>
    );
}

export default AddEco;

const datePickerStyle: React.CSSProperties = {
    width: "100%",
    borderLeft: "0px",
    borderRight: "0px",
    borderTop: "0px",
    borderBottom: "1px solid #ccccb3",
};
