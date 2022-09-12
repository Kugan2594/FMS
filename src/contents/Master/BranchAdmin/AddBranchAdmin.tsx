import { Col, Form, Image, Row, Select, Typography } from "antd";
import { Input } from "../../../components/atoms/index";
import React from "react";
import { Button } from "../../../components/atoms/Button/index";
import "./branchAdmin.style.less";
import { DefaultOptionType } from "antd/lib/select";
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

const { Option } = Select;
function AddBranchAdmin({
    onClickAdd,
    onClickCancel,
    onSearch,
    onChange,
    option,
    initialValues,
}: AddBranchAdmin) {
    return (
        <Form initialValues={initialValues}>
            <div className="addBranch">
                <Row className="row-1">
                    <Image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style={{
                            borderRadius: 10,
                            width: "25%",
                        }}
                    />
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
                                {/* <Form.Item>
                                    <Select
                                        showSearch
                                        style={{ width: 200 }}
                                        placeholder="Select Vehicles"
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
                                </Form.Item> */}
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
