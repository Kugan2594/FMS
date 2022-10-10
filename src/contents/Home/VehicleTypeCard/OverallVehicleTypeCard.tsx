import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { getAllVehicleType } from "./ServiceVehicleType";
import { useState, useEffect } from "react";
import { getAllVehiclesByCompanyId } from "../../../contents/Master/Vehicles/ServiceVehicle";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { IoIosCar } from "react-icons/io";
Chart.register(CategoryScale);
const { Title, Text } = Typography;

function OverallVehicleTypeCard() {
    const [vehicles, setVehicles]: any[] = useState([]);
    const [vehicleType, setVehicleType]: any[] = useState([]);
    const [vehicleTypeArray, setVehicleTypeArray]: any[] = useState([]);
    const [vehicleTypeData, setVehicleTypeData]: any[] = useState([]);
    useEffect(() => {
        getVehicleTypeData();
        getAllVehicles(getUserDetails().company_id);
        overallVehicleTypes(vehicles, vehicleType);
    }, []);
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
    const getVehicleTypeData = () => {
        getAllVehicleType().then((res: any) => {
            let data: any = [];
            res.results.VehicleType.map((post: any) => {
                data.push({
                    id: post.id,
                    vehicleType: post.vehicleTypeName,
                });
                setVehicleType(data);
            });
        });
    };
    const getAllVehicles = (companyId: number) => {
        getAllVehiclesByCompanyId(companyId).then((res: any) => {
            let data: [] = createData(res.results.companyVehicle);
            setVehicles(data);
        });
    };
    const overallVehicleTypes = (vehicles: any, vehicleType: any) => {
        for (let i = 0; i < vehicleType.length; i++) {
            let vehicleTypeCount = 0;
            let typeArray = vehicleTypeArray;
            let vehicleTypeFilter = vehicles.filter(
                (x: any) => x.vehicleType === vehicleType[i].vehicleType
            );
            vehicleTypeCount = vehicleTypeFilter.length;
            typeArray.push({
                vehicleType: vehicleType[i].vehicleType,
                icon: <IoIosCar size={30} />,
                vehicleTypeCount: vehicleTypeCount,
            });
            setVehicleTypeArray(typeArray);
        }
    };
    let count = vehicleTypeArray.map((x: any) => x.vehicleTypeCount);
    const data = {
        labels: ["Red", "Blue", "Yellow", "Blue", "Yellow"],
        datasets: [
            {
                label: "My First Dataset",
                data: count,
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                    "rgb(26, 23, 202)",
                    "rgb(26, 23, 202)",
                ],
                hoverOffset: 4,
                cutout: 50,
            },
        ],
        option: [
            {
                aspectRatio: 0.1,
            },
        ],
    };
    const config = {
        type: "doughnut",
        data: data,
    };

    return (
        <Card style={{ borderRadius: "3%" }}>
            <Row justify="center">
                <Col span={1}></Col>
                <Col span={22}>
                    <Pie data={data} height={"100%"} />
                </Col>
                <Col span={1}></Col>
            </Row>
            <Row style={{ margin: "5%" }}>
                <Col span={24}></Col>
            </Row>
            <div className="row-container" style={{ width: "100%" }}>
                <Row gutter={16} justify="start">
                    {vehicleTypeArray.map((x: any) => {
                        return (
                            <Col span={8} style={{ textAlign: "center" }}>
                                <div>{x.icon}</div>
                                <div style={{ color: "grey" }}>
                                    {x.vehicleType}
                                </div>
                                <div>{x.vehicleTypeCount}</div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Card>
    );
}

export default OverallVehicleTypeCard;
