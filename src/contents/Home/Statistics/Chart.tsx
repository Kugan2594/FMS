import { Column } from "@ant-design/charts";
import { Col, Row } from "antd";
import React from "react";
import { Line } from "react-chartjs-2";

function Chart({ graph, newData }: any) {
    const config = {
        // data: anually
        //     ? yearData
        //     : weekly
        //     ? weekData
        //     : lastMonth
        //     ? lastMonthData
        //     : custom
        //     ? customData
        //     : monthly
        //     ? monthlyData
        //     : data,
        data: newData,
        xField: "date",
        yField: "amount",
        key: "id",
        xAxis: {
            label: {
                autoRotate: true,
            },
        },
        // slider: {
        //     start: 0,
        //     end: 1,
        // },
    };
    const configLine = {
        // data: anually
        //     ? yearData
        //     : weekly
        //     ? newData
        //     : lastMonth
        //     ? lastMonthData
        //     : custom
        //     ? customData
        //     : monthly
        //     ? monthlyData
        data: newData,
        xField: "date",
        yField: "amount",

        label: {},
        point: {
            size: 5,
            shape: "diamond",
            style: {
                fill: "white",
                stroke: "#5B8FF9",
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: "#000",
                    fill: "red",
                },
            },
        },
        interactions: [
            {
                type: "marker-active",
            },
        ],
    };

    return (
        <div>
            <div>
                <Row>
                    <Col xs={24} xl={24}>
                        {graph ? (
                            <Line {...configLine} width={300} height={200} />
                        ) : (
                            <Column {...config} width={300} height={200} />
                        )}
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Chart;
