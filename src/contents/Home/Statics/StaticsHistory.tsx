import { Card, Col, DatePicker, Row, Table, Tag, Typography } from "antd";
import Search from "antd/lib/input/Search";
import type { ColumnsType } from "antd/es/table";
import React, { useState } from "react";
import "./statics.style.less";
import { Button } from "../../../components/atoms/Button";

const { Title } = Typography;
const { RangePicker } = DatePicker;
const { CheckableTag } = Tag;

const columns: ColumnsType<any> = [
    {
        title: "Expense",
        dataIndex: "expense",
        width: 150,
    },
    {
        title: "Branch",
        dataIndex: "branch",
        width: 100,
    },
    {
        title: "Date",
        dataIndex: "date",
        width: 100,
    },
    {
        title: "Amount",
        dataIndex: "amount",
        width: 80,
        align: "right",
    },
];

const data = [
    {
        key: "1",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "2",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "3",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "4",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "5",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "6",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Bike",
    },
    {
        key: "7",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Bike",
    },
    {
        key: "8",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Van",
    },
    {
        key: "9",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Van",
    },
    {
        key: "10",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "11",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Van",
    },
    {
        key: "12",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Truck",
    },
    {
        key: "13",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Car",
    },
    {
        key: "14",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Van",
    },
    {
        key: "15",
        expense: "Water Service",
        branch: "Jaffna",
        amount: 3000,
        date: "24 Mar 2022",
        type: "Truck",
    },
];

const vehicleTypes = ["Car", "Truck", "Van", "Bike"];

const tagsData = ["All Vehicles", ...vehicleTypes];

function StaticsHistory() {
    const [selectedTags, setSelectedTags] = useState("All Vehicles");
    const [mockData, setMockData] = useState(data);

    const handleChange = (tag: string) => {
        // const nextSelectedTags =
        //   checked && selectedTags.includes("All Vehicles")
        //     ? [...selectedTags, tag]
        //     : selectedTags.filter((t) => t !== tag);
        // console.log("You are interested in: ", nextSelectedTags);
        // setSelectedTags(nextSelectedTags);
    };

    const clickHandler = (tag: any) => {
        if (tag === "All Vehicles") {
            setMockData(data);
        } else {
            setMockData(data.filter((data) => data.type === tag));
        }
    };

    return (
        <div className="statics-history">
            <Card className="statics-history-card">
                <Title level={5}>Expense History</Title>
                <div className="statics-history-header">
                    <Row>
                        <Col span={12}>
                            <Search />
                        </Col>
                        <Col span={12}>
                            <RangePicker bordered={false} />
                        </Col>
                    </Row>
                    <div className="statics-history-tag">
                        {tagsData.map((tag) => {
                            return (
                                <Button
                                    onClick={() => clickHandler(tag)}
                                    size="small"
                                    title={tag}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="statics-history-content">
                    <Table
                        pagination={false}
                        scroll={{ y: 140 }}
                        columns={columns}
                        dataSource={mockData}
                        size="small"
                    />
                </div>
            </Card>
        </div>
    );
}

export default StaticsHistory;
