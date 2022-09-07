import { Col, Form, Input, Row, Select } from "antd";
import React from "react";

function AddUserPart() {

    const [form] = Form.useForm();
    const { Option } = Select;

    return (
        <>
            <Form id="form" name="basic" form={form}>
                <Row>
                    <Col span={24}>
                        <Form.Item>
                            <Input
                                placeholder="Name"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Select
                                placeholder="Life Time Factor"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="timeline">TIMELINE</Option>
                                <Option value="mileage">MILEAGE</Option>
                                <Option value="both">BOTH</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default AddUserPart;