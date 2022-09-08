import { Col, DatePicker, Form, Input, Row, Select } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import React, { useState } from "react";



function AddParts() {

    const [form] = Form.useForm();
    const { Option } = Select;
    const [open, setOpen] = useState(false);



    return (
        <>
            <Form id="form" name="basic" form={form}>
                <Row>
                    <Col span={24}>
                        <Form.Item>
                            <Select
                                placeholder="Part Name"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="Front Tyre">Front Tyre</Option>
                                <Option value="Battery">Battery</Option>
                                <Option value="Front Mirror">Front Mirror</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Select
                                placeholder="Vehicle"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="Toyata Aqua NP CAD 4135">Toyata Aqua NP CAD 4135</Option>
                                <Option value="Honda Suv NP AKM 5684">Honda Suv NP AKM 5684</Option>
                                <Option value="Honda NP BAT 9480">Honda NP BAT 9480</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <DatePicker
                                placeholder="Changed Date"
                                style={{ borderBottom: "1px solid #ccccb3", borderTop: "0px", borderLeft: "0px", borderRight: "0px", width: "100%" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={11}>
                        <Form.Item>
                            <Input
                                placeholder="Durability in Km"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={2}></Col>
                    <Col span={11}>
                        <Form.Item>
                            <Input
                                placeholder="Durability in Years"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Input
                                placeholder="Price"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Input
                                placeholder="Warranty"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Form.Item>
                            <Input
                                placeholder="Location Where It Fixed"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                    </Col>
                    <Col span={24}>
                        <Checkbox name="brandNew" onClick={() => {
                            setOpen(!open)
                        }}>Brand New</Checkbox>
                    </Col>

                    {open ? (
                        <Col span={24}>
                            <Form.Item>
                                <Input
                                    placeholder="Brand"
                                    bordered={false}
                                    required
                                    style={{ borderBottom: "1px solid #ccccb3" }}
                                />
                            </Form.Item>
                        </Col>
                    ) : (<></>)}


                </Row>

            </Form>


        </>
    );
}

export default AddParts;