import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import CustomRangePicker from "components/atoms/RangePicker/CustomRangePicker";
Chart.register(CategoryScale);
const { Title, Text } = Typography;
const labels = ["January", "February", "March", "April", "May", "June"];
const vehicles = [
    {
        vehicleNumber: "BAT-9470",
        lease: true,
        color: "red",
        vehicleOwner: "Cudeson",
        tankCapacity: 10.1,
        reserveTankCapacity: 10.2,
        maximumWeightCarriable: 10.2,
        vehicleIdFromResource: 1,
        companyId: 1,
        branchId: 1,
    },
    {
        vehicleNumber: "BAT-9470",
        lease: true,
        color: "red",
        vehicleOwner: "Cudeson",
        tankCapacity: 10.1,
        reserveTankCapacity: 10.2,
        maximumWeightCarriable: 10.2,
        vehicleIdFromResource: 1,
        companyId: 1,
        branchId: 1,
    },
    {
        vehicleNumber: "BAT-9470",
        lease: true,
        color: "red",
        vehicleOwner: "Cudeson",
        tankCapacity: 10.1,
        reserveTankCapacity: 10.2,
        maximumWeightCarriable: 10.2,
        vehicleIdFromResource: 1,
        companyId: 1,
        branchId: 1,
    },
    {
        vehicleNumber: "BAT-9470",
        lease: true,
        color: "red",
        vehicleOwner: "Cudeson",
        tankCapacity: 10.1,
        reserveTankCapacity: 10.2,
        maximumWeightCarriable: 10.2,
        vehicleIdFromResource: 1,
        companyId: 1,
        branchId: 1,
    },
];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
            cutout: 75,
        },
    ],
};
function VehiclesCard() {
    return (
        <div>
            <Card>
                <Space direction="vertical">
                    <Title level={5}>Vehicles</Title>
                    <Doughnut data={data} />
                    <Row>
                        <Col xs={24} xl={12}>
                            <Title level={5}>Status </Title>
                        </Col>
                        <Col xs={24} xl={12}>
                            <Title level={5}> Number of Vehicles</Title>
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
                </Space>
            </Card>
        </div>
    );
}

export default VehiclesCard;
