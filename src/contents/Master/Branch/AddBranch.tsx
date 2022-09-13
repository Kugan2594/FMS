import { Col, Form, Image, Modal, Row } from "antd";
import { Input } from "../../../components/atoms/index";
import React from "react";
import Column from "antd/lib/table/Column";
import { Button } from "../../../components/atoms/Button/index";
interface AddBranchType {
    onClickCancel?: React.MouseEventHandler<HTMLElement> | undefined;
    onClickAdd?: React.MouseEventHandler<HTMLElement> | undefined;
    initialValues?: any;
}

function AddBranch({
    onClickAdd,
    onClickCancel,
    initialValues,
}: AddBranchType) {
    console.log("TEST" + initialValues);

    return (
        <Form initialValues={initialValues}>
            <Row gutter={8}>
                <Col xs={24} xl={6} style={{ marginLeft: "0px" }}>
                    <Row className="row-1">
                        <Image
                            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                            style={{
                                borderRadius: 10,
                            }}
                        />
                    </Row>
                    <Row className="row-2"></Row>
                    <Row className="row-3"></Row>
                </Col>
                <Col xs={24} xl={18}>
                    <div
                        className="input-container"
                        style={{
                            width: "100%",
                            marginTop: "0px",
                        }}
                    >
                        <Form.Item name="branchName">
                            <Input label="branchName" />
                        </Form.Item>
                        <Form.Item name="branchLocation">
                            <Input label="Address" />
                        </Form.Item>
                        <Form.Item name="contactNumber">
                            <Input label="Contact Number" />
                        </Form.Item>
                        <Form.Item name="email">
                            <Input label="email" />
                        </Form.Item>
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
                    <Button title="Add" type="primary" onClick={onClickAdd} />
                </Col>
            </Row>
        </Form>
    );
}

export default AddBranch;
