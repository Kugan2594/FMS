import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import CustomRangePicker from "components/atoms/RangePicker/CustomRangePicker";
import {
    AiFillRightCircle,
    AiOutlineQq,
    AiOutlineRocket,
} from "react-icons/ai";
import { GrCar } from "react-icons/gr";
Chart.register(CategoryScale);
const { Title, Text } = Typography;
const data1 = [
    { vehicleType: "Car", icon: <AiOutlineRocket size={30} />, count: 34 },
    { vehicleType: "Bus", icon: <AiOutlineRocket size={30} />, count: 4 },
    { vehicleType: "Bike", icon: <AiOutlineRocket size={30} />, count: 3 },
    { vehicleType: "Lorry", icon: <AiOutlineRocket size={30} />, count: 43 },
];
const count = data1.map((x) => x.count);
const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: count,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
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

function OverallVehicleTypeCard() {
    return (
        // <div className="vehicleTypeCard" style={{ width: "100%" }}>
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
                    {data1.map((x) => {
                        return (
                            <Col span={8} style={{ textAlign: "center" }}>
                                <div>{x.icon}</div>
                                <div style={{ color: "grey" }}>
                                    {x.vehicleType}
                                </div>
                                <div>{x.count}</div>
                                {/* </div> */}
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </Card>
        // </div>
    );
}

export default OverallVehicleTypeCard;
