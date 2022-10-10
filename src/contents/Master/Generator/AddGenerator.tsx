import React, { useState, useEffect } from "react";
import { Col, Form, Input, Modal, Row, Select } from "antd";
import {
    generatorAddSuccess,
    generatorUpdateSuccess,
    errHandler,
} from "../../../helper/helper";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addGenerator, updateGeneratorById } from "./ServiceGenerator";
import { getAllBranchesByCompanyId } from "../Branch/ServicesBranch";

function AddGenerator(props: any) {
    const [form] = Form.useForm();
    const [branch, setBranch] = useState([]);

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

    const onFinish = (values: any) => {
        if (action === "add") {
            let data: object = {
                generatorBrand: values.generatorBrand,
                tankCapacity: values.tankCapacity,
                maximumPower: values.maximumPower,
                companyId: getUserDetails().company_id,
                branchId: getUserDetails().company_branch_id,
            };
            addGenerator(data)
                .then((res) => {
                    generatorAddSuccess();
                    reloadTable(res);
                    setAddVisible(false);
                })
                .catch((err) => {
                    errHandler(err);
                });
        } else {
            let data: object = {
                id: values.id,
                generatorBrand: values.generatorBrand,
                tankCapacity: values.tankCapacity,
                maximumPower: values.maximumPower,
                companyId: getUserDetails().company_id,
                branchId: getUserDetails().company_branch_id,
            };
            updateGeneratorById(data)
                .then((res) => {
                    generatorUpdateSuccess();
                    reloadTable(res);
                    setAddVisible(false);
                })
                .catch((err) => {
                    errHandler(err);
                });
        }
    };

    const getBranchSelectData = (companyId: number) => {
        getAllBranchesByCompanyId(companyId).then((res: any) => {
            let data: any = [];
            res.map((post: any) => {
                data.push({
                    value: post.id,
                    label: `${post.branchName}`,
                });
            });
            setBranch(data);
        });
    };

    useEffect(() => {
        getBranchSelectData(getUserDetails().company_id);
    }, []);

    const onFinishFailed = () => {};

    const { Option } = Select;

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
                    <Row>
                        <Col span={24}>
                            <Form.Item name="id" hidden>
                                <Input />
                            </Form.Item>
                            <Form.Item name="generatorBrand">
                                <Input
                                    placeholder="Generator Brand"
                                    required
                                    bordered={false}
                                    style={{
                                        borderBottom: "1px solid #ccccb3",
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="maximumPower">
                                <Input
                                    placeholder="Maximum Power kVA"
                                    required
                                    bordered={false}
                                    style={{
                                        borderBottom: "1px solid #ccccb3",
                                    }}
                                />
                            </Form.Item>
                            <Form.Item name="branchName">
                                <Select
                                    placeholder="Company Branch"
                                    optionFilterProp="children"
                                    bordered={false}
                                    style={{
                                        borderBottom: "1px solid #ccccb3",
                                    }}
                                >
                                    {branch.map((post: any) => {
                                        return (
                                            <Option value={post.value}>
                                                {post.label}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item name="tankCapacity">
                                <Input
                                    placeholder="Tank Capacity in Litre"
                                    required
                                    bordered={false}
                                    style={{
                                        borderBottom: "1px solid #ccccb3",
                                    }}
                                />
                            </Form.Item>
                            <CustomButton
                                type={"primary"}
                                htmlType={"submit"}
                                title={"Submit"}
                                style={submitButton}
                            />
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </>
    );
}

export default AddGenerator;

const submitButton: React.CSSProperties = {
    marginLeft: "70%",
    width: "30%",
};
