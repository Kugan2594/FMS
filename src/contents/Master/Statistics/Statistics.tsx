import React from "react";
import { Column } from "@ant-design/charts";
import { useState, useEffect } from "react";
import { Button, Card, Col, DatePicker, Row, Select } from "antd";
import "./Statistics.style.less";
import SelectOptions from "./SelectOptions";

import moment from "moment";
import { any } from "prop-types";
import { has } from "immer/dist/internal";
const { RangePicker } = DatePicker;
const Page: React.FC = () => {
    const data1 = [
        {
            month: "Jan",
            expense: 3227.32,
        },
        {
            month: "Feb",
            expense: 1621.576,
        },
        {
            month: "March",
            expense: 2298.396,
        },
        {
            month: "April",
            expense: 3262.98,
        },
        {
            month: "May",
            expense: 1458.8,
        },
        {
            month: "Jun",
            expense: 11704.476,
        },
        {
            month: "July",
            expense: 582.56,
        },
        {
            month: "Aug",
            expense: 1072.872,
        },
        {
            month: "Sep",
            expense: 1785.84,
        },
        {
            month: "Oct",
            expense: 2789.892,
        },
        {
            month: "Nov",
            expense: 2706.2,
        },
        {
            month: "December",
            expense: 1692.14,
        },
        {
            month: "Jan",
            expense: 4508.28,
        },
        {
            month: "Feb",
            expense: 1276.068,
        },
        {
            month: "March",
            expense: 10165.89,
        },
        {
            month: "April",
            expense: 17153.92,
        },
        {
            month: "May",
            expense: 1050.42,
        },
        {
            month: "June",
            expense: 10309.516,
        },
        {
            month: "July",
            expense: 82.04,
        },
    ];
    const { Option } = Select;
    const [xField, setXField] = useState("");
    const [yField, setYField] = useState("");
    interface Idata {
        id: number;
        amount: number;
        date: string;
        userId: number;
        vehicleNumber: string;
        expensesType: string;
        branchId: number;
        branchName: string;
        companyId: number;
        vehicleTypeId: string;
    }

    const data: Idata[] = [
        {
            id: 10,
            amount: 250.0,
            date: "2022-09-14T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 1,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Car",
        },
        {
            id: 11,
            amount: 150.0,
            date: "2023-09-14T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 2,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Van",
        },
        {
            id: 12,
            amount: 230.0,
            date: "2024-09-14T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 3,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
        {
            id: 13,
            amount: 350.0,
            date: "2025-09-14T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
    ];

    const [overAll, setOverAll] = useState(false);
    const [service, setService] = useState(false);
    const [part, setPart] = useState(false);
    const [docs, setDocs] = useState(false);
    const [fuel, setFuel] = useState(false);
    const [Others, setOthers] = useState(false);
    const [custom, setCustom] = useState(false);
    const [monthly, setMonthly] = useState(false);
    const [anually, setAnnually] = useState(false);
    const [weekly, setWeekly] = useState(false);
    const [startYearEndYear, setStartYearEndYear]: any = useState([0, 0]);
    const [chartData, setChartData] = useState("");
    const [period, setPeriod]: any[] = useState([]);
    const [newData, setNewData] = useState<any>(data);
    const [grandData, setGrandData] = useState<any>();
    console.log("newdata", newData);
    useEffect(() => {
        setGrandData(newData);
    }, []);
    const onClickPart = () => {
        setOverAll(false);
        setPart(true);
        console.log(service);
        console.log("all Over" + overAll);
    };
    const onClickService = () => {
        setOverAll(false);
        setService(true);
        console.log(service);
        console.log("all Over" + overAll);
    };
    const onClickFuel = () => {
        setOverAll(false);
        setFuel(true);
        console.log(fuel);
        console.log("all Over" + overAll);
    };
    const onClickDocs = () => {
        setOverAll(false);
        setDocs(true);
        console.log(docs);
        console.log("all Over" + overAll);
    };
    const onClickOthers = () => {
        setOverAll(false);
        setOthers(true);
        console.log(Others);
        console.log("all Over" + overAll);
    };
    const onClickOverall = () => {
        // overAll ? setOverAll(true) : setOverAll(false);
        if (overAll === false) {
            setOverAll(true);
            console.log(overAll);
            console.log(moment("20220916", "YYYYMMDD").fromNow());
        }
        if (overAll === true) {
            setOverAll(false);
            console.log(overAll);
            console.log(moment("20220916", "YYYYMMDD").fromNow());
        }
    };
    const handleChange = () => {};
    const handleChangeDate = (value: string) => {
        console.log(value);
        if (value === "Custom") {
            setCustom(true);
            setAnnually(false);
            setMonthly(false);
        }
        if (value === "Monthly") {
            setMonthly(true);
            setAnnually(false);
            setCustom(false);
        }
        if (value === "Annually") {
            setAnnually(true);
            setMonthly(false);
            setCustom(false);
        }
        if (value === "Last Month") {
            setAnnually(false);
            setMonthly(false);
            setCustom(false);
        }
        if (value === "Last 7 Days") {
            setAnnually(false);
            setMonthly(false);
            setCustom(false);
            setWeekly(true);
        }
    };
    const monthFormat = "YYYY/MM";
    const yearFormat = "YYYY";
    const handleMonthChange = (value: any) => {
        console.log(value);
    };
    const handleYearChange = (value: any) => {
        let graphData: any[] = data.filter(
            (x) =>
                moment(x.date).year() >= moment(value[0]._d).year() &&
                moment(x.date).year() <= moment(value[1]._d).year()
        );
        console.log("graphdata", graphData);
        setNewData(graphData);
        const arrayData = data.map((x: any) => {
            return moment(x.date).year();
        });
        console.log("....arrayData", arrayData);
    };

    // console.log("test", moment(data[0].date).year());
    // console.log("period[1]", period[1]);
    // console.log("data", data);
    // console.log("outside", period);
    // data.push(newData);
    // console.log("graaandData", data);
    const config = {
        data: newData,
        xField: "date",
        yField: "amount",
        key: "id",
        xAxis: {
            label: {
                autoRotate: true,
            },
        },
        slider: {
            start: 0.1,
            end: 1,
        },
    };

    return (
        <Card
            style={{
                width: "50%",
                height: "30%",
                borderRadius: "5px",
            }}
        >
            <div className="filter-container" style={{ height: "40px" }}>
                <Row>
                    <Col xs={24} xl={8}>
                        <Select
                            // defaultValue="All Types"
                            style={{ width: 120 }}
                            onChange={handleChange}
                        >
                            {data.map((x: any) => {
                                return (
                                    <Option value={x.vehicleTypeId}>
                                        {x.vehicleTypeId}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Col>
                    <Col xs={24} xl={8}>
                        <Select
                            // defaultValue="All Vehicles"
                            style={{ width: 120 }}
                            onChange={handleChange}
                        >
                            {data.map((x: any) => {
                                return (
                                    <Option value={x.vehicleNumber}>
                                        {x.vehicleNumber}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Col>
                    <Col xs={24} xl={8}>
                        <div className="toggle">
                            <Select
                                defaultValue="Bar"
                                style={{ width: 120 }}
                                onChange={handleChange}
                            >
                                <Option value="Graph">Graph</Option>
                                <Option value="Bar">Bar</Option>
                                <Option value="Pie" disabled>
                                    Pie
                                </Option>
                            </Select>
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col span={24}>
                    <div
                        className="calender"
                        style={{ marginTop: "10px", height: "60px" }}
                    >
                        <div className="new-container">
                            <Select
                                // defaultValue="Bar"
                                style={{ width: 120 }}
                                onChange={handleChangeDate}
                            >
                                <Option value="Last 7 Days">Last 7 Days</Option>
                                <Option value="Last Month">Last Month</Option>
                                <Option value="Monthly">Monthly</Option>
                                <Option value="Annually">Annually</Option>
                                <Option value="Custom">Custom</Option>
                            </Select>
                            {custom ? <RangePicker /> : ""}
                            {anually ? (
                                <RangePicker
                                    onChange={handleYearChange}
                                    defaultValue={[
                                        moment("2015", yearFormat),
                                        moment("2016", yearFormat),
                                    ]}
                                    format={yearFormat}
                                    picker="year"
                                />
                            ) : (
                                ""
                            )}
                            {monthly ? (
                                <RangePicker
                                    onChange={handleMonthChange}
                                    defaultValue={[
                                        moment("2015/01", monthFormat),
                                        moment("2015/02", monthFormat),
                                    ]}
                                    format={monthFormat}
                                    picker="month"
                                />
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} xl={18}>
                    <div>
                        <Column {...config} />
                    </div>
                </Col>
                <Col xs={24} xl={6}>
                    <div>
                        <SelectOptions
                            onClickOverall={onClickOverall}
                            onClickDocs={onClickDocs}
                            onClickFuel={onClickFuel}
                            onClickOthers={onClickOthers}
                            onClickPart={onClickPart}
                            onClickService={onClickService}
                        />
                    </div>
                </Col>
            </Row>
        </Card>
    );
};
export default Page;
