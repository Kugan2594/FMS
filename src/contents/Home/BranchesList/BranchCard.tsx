import { Card, Col, Image, Progress, Row, Space, Typography } from "antd";
import React from "react";
import "./branch.style.less";
import { useState, useEffect } from "react";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { getAllBranchByCompanyId } from "../../../contents/Master/Branch/ServicesBranch";
const { Text, Title } = Typography;

function BranchCard() {
    const [branch, setBranch] = useState([]);
    useEffect(() => {
        getAllBranchData(getUserDetails().company_id);
        console.log(".......branch", branch);
    }, []);
    function createData(data: any) {
        let convertData = data.map((post: any, index: any) => {
            return {
                id: post.id,
                numberOfVehicles: 34,
                progressData: 49,
                address: post.address,
                branchName: post.branchName,
                email: post.email,
                phoneNumber: post.phoneNumber,
            };
        });
        return convertData;
    }
    const getAllBranchData = (companyId: number) => {
        let data: any = [];

        getAllBranchByCompanyId(companyId).then(
            (res: any) => {
                data = createData(res.results.Branch);
                setBranch(data);
            },
            (error: any) => {
                setBranch([]);
            }
        );
    };

    return (
        <div>
            {branch.map((x: any) => {
                return (
                    <Card
                        className="card-container"
                        style={{ marginBottom: "2px" }}
                    >
                        <Row justify="center" align="middle">
                            <Col xs={24} xl={2}>
                                {" "}
                                <Image
                                    // width={200}
                                    style={{
                                        borderRadius: "100%",
                                        border: "1px solid red",
                                        margin: "0px !important",
                                    }}
                                    height={40}
                                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                />
                            </Col>
                            <Col xs={24} xl={20}>
                                <Text>{x.branchName}</Text>
                                <Progress
                                    percent={x.progressData}
                                    size="small"
                                    strokeWidth={3}
                                />
                            </Col>
                            <Col xs={24} xl={2}></Col>
                        </Row>
                    </Card>
                );
            })}
        </div>
    );
}

export default BranchCard;
