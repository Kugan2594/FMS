import { Col, Form, Image, Modal, Row } from "antd";
import React from "react";

function AddBranch() {
    return (
        <Form>
            <div className="addBranch">
                <Row className="content">
                    <Col xs={24} xl={8}>
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
                    <Col xs={24} xl={16}></Col>
                </Row>
            </div>
        </Form>
    );
}

export default AddBranch;
