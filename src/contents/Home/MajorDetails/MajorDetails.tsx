import { Card, Col, Row, Typography } from "antd";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { getAllBranchByCompanyId } from "../../../contents/Master/Branch/ServicesBranch";
import React from "react";
import { useEffect, useState } from "react";

import {
    AiOutlineAlibaba,
    AiOutlineRadarChart,
    AiOutlineRedEnvelope,
    AiOutlineRollback,
} from "react-icons/ai";
import {
    getAllVehiclesByCompanyId,
    getAllVehiclesByCompanyIdAndBranchId,
} from "../../../contents/Master/Vehicles/ServiceVehicle";
import { IoGitNetworkOutline } from "react-icons/io5";
import Office from "../../../assets/office.svg";
import Happy from "../../../assets/happy.svg";
import Sad from "../../../assets/sad.svg";
import "../MajorDetails/MajorDetail.style.less";
const { Title, Text } = Typography;

function MajorDetails() {
    const [vehicles, setvehicles]: any[] = useState([]);
    const [allVehicles, setAllVehicles] = useState([]);
    const [branch, setBranch]: any[] = useState([]);
    const [perfectNumber, setPerfectNumber]: any[] = useState(0);
    const [perfect, setPerfect]: any[] = useState([]);
    const [onRisk, setOnRisk] = useState(0);
    const [branchData, setBranchData]: any[] = useState([]);
    function createData1(data: any) {
        let convertData = data.map((post: any, index: any) => {
            return {
                id: post.id,
                branchName: post.branchName,
            };
        });
        return convertData;
    }

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                vehicleNumber: post.vehicleNumber,
                lease: post.lease,
                color: post.color,
                vehicleOwner: post.vehicleOwner,
                tankCapacity: post.tankCapacity,
                reserveTankCapacity: post.reserveTankCapacity,
                maximumWeightCarriable: post.maximumWeightCarriable,
                branchLocation: getUserDetails().company_branch_name,
                companyId: getUserDetails().company_id,
                branchId: getUserDetails().company_branch_id,
                progressData: 80,
                image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                vehicleIdFromResource: post.resourceVehicleDto.id,
                vehicleModel:
                    post.resourceVehicleDto.vehicleBrand +
                    " " +
                    post.resourceVehicleDto.vehicleModel +
                    " " +
                    post.resourceVehicleDto.fuelTypeName +
                    " " +
                    post.resourceVehicleDto.vehicleBodyTypeResponseDto,
                vehicleType: post.resourceVehicleDto.vehicleTypeName,
            };
        });

        return convertData;
    };
    const getAllVehicles = (companyId: number) => {
        getAllVehiclesByCompanyId(companyId).then((res: any) => {
            let data: [] = createData(res.results.companyVehicle);
            setvehicles(data);
        });
    };
    const getAllBranchData = (companyId: number) => {
        let data: any = [];

        getAllBranchByCompanyId(companyId).then(
            (res: any) => {
                data = createData1(res.results.Branch);
                setBranch(data);
            },
            (error: any) => {
                setBranch([]);
            }
        );
    };
    const getAllVehiclesByCompanyAndBranch = (
        companyId: number,
        branchId: number
    ) => {
        getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
            (res: any) => {
                let data: [] = createData(
                    res.results.vehicleByCompanyAndBranch
                );
                setAllVehicles(data);
            }
        );
    };
    const reloadTable = (res: any) => {
        getAllBranchData(getUserDetails().company_id);
        getAllVehicles(getUserDetails().company_id);
        getAllVehiclesByCompanyAndBranch(
            getUserDetails().company_id,
            getUserDetails().company_branch_id
        );
    };
    useEffect(() => {
        getAllBranchData(getUserDetails().company_id);
        getAllVehicles(getUserDetails().company_id);
        getAllVehiclesByCompanyAndBranch(
            getUserDetails().company_id,
            getUserDetails().company_branch_id
        );
        getMajorDetails(branch, vehicles);
    }, []);
    const getMajorDetails = (branch: any, vehicles: any) => {
        let totalBranches = branch.length;
        let filterArray: any = branchData;
        for (let i = 1; i <= totalBranches; i++) {
            let filteredData = vehicles.filter((x: any) => (x.branchId = i));
            filterArray.push(filteredData);
            setBranchData(filterArray);
        }
        let sum = 0;
        let array: any = perfect;
        let l = branchData.length;
        for (let i = 0; i < l; i++) {
            branchData[i].map((x: any) => {
                if (x.progressData === 80) {
                    array.push(x);
                }
            });
            setPerfect(array);
            if (perfect.length === branchData[i].length) {
                sum = +1;
                setPerfectNumber(sum);
            }
        }
    };
    const cardInfo: any = [
        {
            title: "Branches",
            icon: <img src={Office} />,
            count: branch.length,
        },
        {
            title: "On-risk",
            icon: <img src={Sad} />,
            count: branch.length - perfectNumber,
        },
        {
            title: "Perfect",
            icon: <img src={Happy} />,
            count: perfectNumber,
        },
    ];
    return (
        <div
            style={{
                marginBottom: "8px",
            }}
        >
            <Row gutter={8}>
                {cardInfo.map((x: any) => (
                    <Col span={8}>
                        <div className="mini-card">
                            <Card
                                style={{
                                    borderRadius: "5px",
                                }}
                            >
                                <Row justify="end" align="bottom">
                                    <Col>
                                        <Title level={3}>{x.count}</Title>
                                    </Col>
                                </Row>
                                <Row
                                    justify="end"
                                    style={{ textAlign: "right" }}
                                    align="bottom"
                                >
                                    <Col span={8}>{x.icon}</Col>
                                    <Col span={16}>
                                        <Text>{x.title}</Text>
                                    </Col>
                                </Row>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MajorDetails;
