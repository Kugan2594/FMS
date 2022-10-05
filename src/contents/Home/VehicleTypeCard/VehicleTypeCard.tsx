import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import CustomRangePicker from "components/atoms/RangePicker/CustomRangePicker";
Chart.register(CategoryScale);
const { Title, Text } = Typography;
const labels = ["Perfect", "Needs Attention", "Sleep"];
const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
            cutout: 40,
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
function VehicleTypeCard() {
    return (
        // <div className="vehicleTypeCard" style={{ width: "100%" }}>
        <Card>
            <Row justify="center">
                <Col span={1}></Col>
                <Col span={22}>
                    <Pie data={data} height={"100%"} />
                </Col>
                <Col span={1}></Col>
            </Row>
            <Row>
                <Col xs={24} xl={12}>
                    <Text>Status </Text>
                </Col>
                <Col xs={24} xl={12}>
                    <Text> Number of Vehicles</Text>
                </Col>
            </Row>
            <Row>
                <Col xs={24} xl={2}>
                    <div className="square"></div>
                </Col>
                <Col xs={24} xl={11}>
                    Perfect
                </Col>
                <Col xs={24} xl={11}>
                    33
                </Col>
            </Row>
        </Card>
        // </div>
    );
}

export default VehicleTypeCard;
