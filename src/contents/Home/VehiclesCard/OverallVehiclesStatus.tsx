import { Card, Col, Row, Space, Typography } from "antd";
import Chart from "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import CustomRangePicker from "components/atoms/RangePicker/CustomRangePicker";
import { AiOutlineRocket } from "react-icons/ai";
Chart.register(CategoryScale);
const { Text, Title } = Typography;
const labels = ["Perfect", "Needs Attention", "Sleep"];

const data1 = [
    { title: "Perfect", count: 23 },
    { title: "Needs Attention", count: 53 },
    { title: "Sleep", count: 43 },
];
const count = data1.map((x) => x.count);
const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "Dataset",
            data: count,
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 8,
            cutout: 50,
        },
    ],
};
function OverallVehiclesStatus() {
    return (
        <Card style={{ borderRadius: "3%" }}>
            <Row>
                <Col style={{ width: "130%" }}></Col>
            </Row>
            <Row justify="center">
                <Col span={1}></Col>
                <Col span={22}>
                    <Pie data={data} />
                </Col>
                <Col span={1}></Col>
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
