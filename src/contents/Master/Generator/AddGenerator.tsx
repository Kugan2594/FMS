import { Col, Form, Input, Row, Select } from "antd";
import CustomButton from "../../../components/atoms/Button/CustomButton";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addGenerator } from "./ServiceGenerator";

function AddGenerator() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        let data: object = {
            generatorBrand: values.generatorBrand,
            tankCapacity: values.tankCapacity,
            maximumPower: values.maximumPower,
            companyId: getUserDetails().company_id,
            branchId: getUserDetails().company_branch_id,
        };
        addGenerator(data)
            .then((res) => {})
            .catch((err) => {});
    };

    const onFinishFailed = () => {};

    const { Option } = Select;

    return (
        <>
            <Form
                id="form"
                name="basic"
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Row>
                    <Col span={24}>
                        <Form.Item name="generatorBrand">
                            <Input
                                placeholder="Generator Brand"
                                required
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
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
                        <Form.Item>
                            <Select
                                placeholder="Company Branch"
                                optionFilterProp="children"
                                bordered={false}
                                style={{ borderBottom: "1px solid #ccccb3" }}
                            >
                                <Option value="Jaffna">Jaffna</Option>
                                <Option value="Kandy">Kandy</Option>
                                <Option value="Colombo">Colombo</Option>
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
        </>
    );
}

export default AddGenerator;

const submitButton: React.CSSProperties = {
    marginLeft: "70%",
    width: "30%",
};
