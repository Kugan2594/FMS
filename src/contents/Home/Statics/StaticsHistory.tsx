import { Card, Col, Row, Table, Typography } from "antd";
import Search from "antd/lib/input/Search";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import "./statics.style.less";

const { Title } = Typography;

const columns: ColumnsType<any> = [
  {
    title: "Expense",
    dataIndex: "expense",
    width: 150,
  },
  {
    title: "Branch",
    dataIndex: "branch",
    width: 150,
  },
  {
    title: "Date",
    dataIndex: "date",
    width: 150,
  },
  {
    title: "Amount",
    dataIndex: "amount",
    width: 100,
  },
];

const data = [
  {
    key: "1",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "2",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "3",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "4",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "5",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "6",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "7",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "8",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "9",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "10",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "11",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "12",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "13",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "14",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
  {
    key: "15",
    expense: "Water Service",
    branch: "Jaffna",
    amount: 3000,
    date: "24 Mar 2022",
  },
];

function StaticsHistory() {
  return (
    <div className="statics-history">
      <Card className="statics-history-card">
        <Title level={5}>Expanse History</Title>
        <div className="statics-history-header">
          <Row>
            <Col span={12}>
              <Search />
            </Col>
          </Row>
        </div>
        <div className="statics-history-content">
          <Table columns={columns} dataSource={data} size="small" />
        </div>
      </Card>
    </div>
  );
}

export default StaticsHistory;
