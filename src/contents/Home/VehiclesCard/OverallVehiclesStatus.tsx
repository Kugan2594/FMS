import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import CustomRangePicker from "components/atoms/RangePicker/CustomRangePicker";
import { AiOutlineRocket } from "react-icons/ai";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { getAllVehiclesByCompanyId } from "../../../contents/Master/Vehicles/ServiceVehicle";
import { useEffect, useState } from "react";
Chart.register(CategoryScale);
const { Text, Title } = Typography;
const labels = ["Perfect", "Needs Attention", "Sleep"];

function OverallVehiclesStatus() {
    const [vehicles, setvehicles] = useState([]);
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
            console.log(data);
        });
    };

    let count = vehicles.length;

    useEffect(() => {
        getAllVehicles(getUserDetails().company_id);
        console.log("vehicles", vehicles);
    }, []);
    let perfect1 = vehicles.filter((x: any) => x.progressData === 100).length;
    let needsAttention1 = vehicles.filter(
        (x: any) => x.progressData != 100
    ).length;
    const data1 = [
        { title: "Perfect", count: perfect1 },
        { title: "Needs Attention", count: needsAttention1 },
        { title: "Sleep", count: 0 },
    ];
    const count1 = data1.map((x) => x.count);
    const data = {
        datasets: [
            {
                label: "vehicle types",
                data: count1,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                ],
                hoverOffset: 8,
                cutout: 70,
            },
        ],
    };

    return (
        <Card style={{ borderRadius: "3%" }}>
            <Row>
                <Col style={{ width: "130%" }}></Col>
            </Row>
            <Row justify="center">
                <Col span={1}></Col>
                <Col span={22}>
                    <Pie data={data} />
                    <div
                        className="div"
                        style={{
                            position: "absolute",
                            // bottom: "0",
                            // left: "0",
                            top: "35%",
                            left: "38%",
                            textAlign: "center",
                        }}
                    >
                        {" "}
                        <div style={{ textAlign: "center", fontSize: "28px" }}>
                            <Text>{count}</Text>
                        </div>
                        <div>
                            <Text>Vehicles</Text>
                        </div>
                    </div>
                </Col>
                <Col span={1}></Col>
            </Row>
            <Row>
                <Col></Col>
            </Row>
            <Row style={{ margin: "3%" }}>
                <Col span={24}></Col>
            </Row>
            <div className="row-container" style={{ width: "100%" }}>
                <Row gutter={4} justify="start">
                    <Col span={2}></Col>
                    <Col span={16} style={{ fontSize: "16px" }}>
                        <Text strong>Status</Text>
                    </Col>
                    <Col span={6} style={{ fontSize: "16px" }}>
                        <Text strong>Count</Text>
                    </Col>
                </Row>
                <Row gutter={16} justify="start" align="middle">
                    {data1.map((x) => {
                        return (
                            <>
                                <Col span={2}>
                                    {x.title === "Perfect" ? (
                                        <div
                                            className="dot"
                                            style={{
                                                backgroundColor: "green",
                                                width: "10px",
                                                height: "10px",
                                                borderRadius: "100%",
                                            }}
                                        >
                                            <Space></Space>
                                        </div>
                                    ) : x.title === "Needs Attention" ? (
                                        <div
                                            className="dot"
                                            style={{
                                                backgroundColor: "red",
                                                width: "10px",
                                                height: "10px",
                                                borderRadius: "100%",
                                            }}
                                        >
                                            <Space></Space>
                                        </div>
                                    ) : x.title === "Sleep" ? (
                                        <div
                                            className="dot"
                                            style={{
                                                backgroundColor: "orange",
                                                width: "10px",
                                                height: "10px",
                                                borderRadius: "100%",
                                            }}
                                        >
                                            <Space></Space>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </Col>
                                <Col span={18}>{x.title}</Col>
                                <Col span={4}>{x.count}</Col>
                            </>
                        );
                    })}
                </Row>
            </div>
        </Card>
        // </div>
    );
}

export default OverallVehiclesStatus;
