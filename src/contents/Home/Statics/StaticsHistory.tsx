import { Card, Col, DatePicker, Row, Table, Tag, Typography } from "antd";
import Search from "antd/lib/input/Search";
import type { ColumnsType } from "antd/es/table";
import React, { useState, useEffect } from "react";
import "./statics.style.less";
import { Button } from "../../../components/atoms/Button";
import { getAllExpensesByCompanyId } from "./ServiceStatics";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import moment from "moment";

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

function createdData(data: any) {
  let convertData = data.map((post: any) => {
    return {
      key: post.id,
      expense: post.expensesType.toLowerCase(),
      branch: post.branchId,
      amount: post.amount,
      date: moment(post.date).format("DD-MM-YYYY"),
      type: post.expensesType.toLowerCase(),
    };
  });
  return convertData;
}

function StaticsHistory() {
  const [selectedTags, setSelectedTags] = useState("All Vehicles");
  // const [mockData, setMockData] = useState(data);
  const [data, setData]: any = useState([]);
  const [tableData, setTableData] = useState([]);
  const [type, setType] = useState([]);
  const [dateRange, setDateRange] = useState([]);

  const tagsData = ["All Vehicles", ...type];

  const handleChange = (tag: string) => {
    // const nextSelectedTags =
    //   checked && selectedTags.includes("All Vehicles")
    //     ? [...selectedTags, tag]
    //     : selectedTags.filter((t) => t !== tag);
    // console.log("You are interested in: ", nextSelectedTags);
    // setSelectedTags(nextSelectedTags);
  };

  useEffect(() => {
    getExpensesByCompanyId(getUserDetails().company_id);
  }, []);

  const getExpensesByCompanyId = (companyId: number) => {
    let data: any = [];
    getAllExpensesByCompanyId(companyId).then(
      (res: any) => {
        data = createdData(res.results.expenses);
        setData(data);
        setTableData(data);

        const unique = (value: any, index: number, self: any) => {
          return self.indexOf(value) === index;
        };

        setType(data.map((expense: any) => expense.type).filter(unique));
      },
      (error: any) => {
        setData([]);
      }
    );
  };

  const clickHandler = (tag: any) => {
    if (tag === "All Vehicles") {
      setTableData(data);
    } else {
      setTableData(data.filter((data: any) => data.type === tag));
    }
  };

  const datePickerOnChange = (datePickerDate: any) => {
    setDateRange(datePickerDate);
    console.log("DATE", datePickerDate);
    setTableData(tableData.filter((data: any) => data.date >= dateRange[0] || datePickerDate.date <= dateRange[1]))
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
              <RangePicker bordered={false} onChange={datePickerOnChange} />
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
            scroll={{ y: 200 }}
            columns={columns}
            dataSource={tableData}
            size="small"
          />
        </div>
      </Card>
    </div>
  );
}

export default StaticsHistory;
