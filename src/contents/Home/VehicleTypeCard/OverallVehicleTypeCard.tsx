import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { getAllVehicleType } from "./ServiceVehicleType";
import { useState, useEffect } from "react";
import { getAllVehiclesByCompanyId } from "../../../contents/Master/Vehicles/ServiceVehicle";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { IoIosCar } from "react-icons/io";
import { IoCarSportOutline } from "react-icons/io5";
import { GrBus } from "react-icons/gr";
import { transform } from "typescript";
import Bus from "../../../assets/bus.svg";
import Car from "../../../assets/car.svg";
import Van from "../../../assets/van.svg";
import Bike from "../../../assets/motor-bike.svg";
import Lorry from "../../../assets/lorry.svg";
Chart.register(CategoryScale);
const { Title, Text } = Typography;

function OverallVehicleTypeCard() {
    const [vehicles, setVehicles]: any[] = useState([]);
    const [vehicleType, setVehicleType]: any[] = useState([]);
    const [vehicleTypeData, setVehicleTypeData]: any[] = useState([]);
    const [countArray, setCountArray]: any[] = useState([]);
    useEffect(() => {
        getVehicleTypeData();
        getAllVehicles(getUserDetails().company_id);
        console.log("....)8....", typeArray);
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
    let typeArray: any[] = [];
    let count: any[] = [];
    for (let i = 0; i < vehicleType.length; i++) {
        let vehicleTypeCount = 0;
        let vehicleTypeFilter = vehicles.filter(
            (x: any) => x.vehicleType === vehicleType[i].vehicleType
        );
        vehicleTypeCount = vehicleTypeFilter.length;
        typeArray.push({
            vehicleType: vehicleType[i].vehicleType,
            icon:
                vehicleType[i].vehicleType === "Car" ? (
                    <img src={Car} width={30} />
                ) : vehicleType[i].vehicleType === "Bus" ? (
                    <img src={Bus} width={25} />
                ) : vehicleType[i].vehicleType === "Van" ? (
                    <img src={Van} width={30} />
                ) : vehicleType[i].vehicleType === "Lorry" ? (
                    <img src={Lorry} width={30} />
                ) : vehicleType[i].vehicleType === "Motor Bikes" ? (
                    <img src={Bike} width={30} />
                ) : (
                    ""
                ),

            vehicleTypeCount: vehicleTypeCount,
        });
        if (i === vehicleType.length) {
            typeArray.push(typeArray);
        }
    }
    const data = {
        datasets: [
            {
                label: "My First Dataset",
                data: typeArray.map((x: any) => x.vehicleTypeCount),
                backgroundColor: ["#32CD30", "#DE0001", "#013A20", "#013A20"],
                hoverOffset: 4,
                cutout: 55,
                borderRadius: 2,
            },
        ],
        option: [
            {
                aspectRatio: 1,
            },
        ],
    };
    const config = {
        type: "doughnut",
        data: data,
    };

    return (
        <Card style={{ borderRadius: "3%", height: "100%" }}>
            <Row>
                <Col>
                    <Title level={5}>Vehicle Types</Title>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={1}></Col>
                <Col span={22}>
                    <div className="doughnut">
                        {" "}
                        <Pie data={data} height={"100%"} />
                        <div
                            className="doughnut"
                            style={{
                                position: "absolute",
                                // bottom: "0",
                                // left: "0",
                                top: "45%",
                                left: "45%",
                                textAlign: "center",
                            }}
                        >
                            <div>
                                <Text style={{ fontSize: "24px" }}>
                                    {typeArray.length}
                                </Text>
                            </div>
                            <div>{/* <Text>Vehicle Types</Text> */}</div>
                        </div>
                    </div>
                </Col>

                <Col span={1}></Col>
            </Row>
            <Row style={{ margin: "5%" }}>
                <Col span={24}></Col>
            </Row>
            <div className="row-container" style={{ width: "100%" }}>
                <Row gutter={16} justify="start">
                    {typeArray.map((x: any) => {
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
