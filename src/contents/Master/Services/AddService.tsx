import {
    Col,
    DatePicker,
    Form,
    Input,
    Row,
    Select
} from "antd";
function AddService() {
    const [form] = Form.useForm();
 
    const { Option } = Select;

    return (
        <>
            <Form id="form" name="basic" form={form}  style={{
                                    width: "50%"
                                }} >
                <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
                    <Col span={24}>
                        <Form.Item>
                            <Select
                                placeholder="Vehicle"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <DatePicker
                                placeholder="Service Date"
                                style={{ borderBottom: "1px solid #ccccb3", borderTop: "0px", borderLeft: "0px", borderRight: "0px" ,width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Service Amount"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Expected LifeTime In KM"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder="Expected LifeTime In Month"
                                bordered={false}
                                required
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            />
                        </Form.Item>
                      
                        <Form.Item>
                            <Select
                                placeholder="Service Name"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="1">Water</Option>
                                <Option value="2">Oil</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default AddService;