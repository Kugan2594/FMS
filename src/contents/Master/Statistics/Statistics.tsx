import React from "react";
import { Column, Line, Pie } from "@ant-design/charts";
import { useState, useEffect } from "react";
import { Button, Card, Col, DatePicker, Row, Select, Space } from "antd";
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
            id: 1,
            amount: 350.0,
            date: "2022-09-12T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 2,
            amount: 350.0,
            date: "2022-09-13T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 3,
            amount: 350.0,
            date: "2022-09-14T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 4,
            amount: 350.0,
            date: "2022-09-15T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 5,
            amount: 350.0,
            date: "2022-09-16T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 6,
            amount: 350.0,
            date: "2022-09-17T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 7,
            amount: 350.0,
            date: "2022-09-18T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 8,
            amount: 350.0,
            date: "2022-09-19T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "service",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 9,
            amount: 350.0,
            date: "2022-09-20T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 10,
            amount: 250.0,
            date: "2022-09-21T11:13:26.503+00:00",
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
            date: "2022-09-23T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "service",
            branchId: 2,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Van",
        },
        {
            id: 12,
            amount: 230.0,
            date: "2022-09-24T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "fuel",
            branchId: 3,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
        {
            id: 13,
            amount: 350.0,
            date: "2022-09-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "Part",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 14,
            amount: 350.0,
            date: "2022-07-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "Part",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 15,
            amount: 350.0,
            date: "2022-06-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "Part",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 16,
            amount: 350.0,
            date: "2022-05-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "service",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
        {
            id: 17,
            amount: 350.0,
            date: "2022-06-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
        {
            id: 18,
            amount: 350.0,
            date: "2029-09-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "service",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
        {
            id: 19,
            amount: 350.0,
            date: "2028-06-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9500",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
        {
            id: 20,
            amount: 350.0,
            date: "2025-09-22T11:13:26.503+00:00",
            userId: 5,
            vehicleNumber: "BAT-9470",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Bus",
        },
    ];
    const monthFormat = "YYYY/MM";
    const yearFormat = "YYYY";
    interface yearTotal {
        amount: number;
        date: number;
    }
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
    const [yearExpense, setYearExpense]: any = useState([]);
    const [yearData, setYearData]: any = useState([]);
    const [weekData, setweekData]: any = useState([]);
    const [monthData, setMonthData]: any = useState([]);
    const [lastMonthData, setLastMonthData]: any = useState([]);
    const [customData, setCustomData]: any = useState([]);
    const [monthlyData, setMonthlyData]: any = useState([]);
    const [lastMonth, setLastMonth]: any = useState(false);
    const [buss, setBuss] = useState(true);
    const [monthlyDate, setMonthlyDate] = useState("");
    const [graph, setGraph] = useState(false);
    // console.log("newdata", newData);
    useEffect(() => {}, []);
    const onClickPart = () => {
        setOverAll(false);
        setPart(true);
        setOverAll(false);
        setDocs(false);
        setFuel(false);
        setOthers(false);
        setService(false);
        console.log(part);
        console.log("part", " ", part);
    };
    const onClickService = () => {
        setOverAll(false);
        setDocs(false);
        setFuel(false);
        setOthers(false);
        setService(true);
        console.log(service);
        console.log("all Over" + overAll);
    };
    const onClickFuel = () => {
        setOverAll(false);
        setFuel(true);
        setOverAll(false);
        setPart(false);
        setDocs(false);
        setOthers(false);
        setService(false);
        console.log(fuel);
        console.log("all Over" + overAll);
    };
    const onClickDocs = () => {
        setOverAll(false);
        setDocs(true);
        setPart(false);
        setFuel(false);
        setService(false);
        console.log(docs);
        console.log("all Over" + overAll);
    };
    const onClickOthers = () => {
        setOverAll(false);
        setPart(false);
        setDocs(false);
        setFuel(false);
        setOthers(true);
        setService(false);
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
            setLastMonth(false);
            setWeekly(false);
        }
        if (value === "Monthly") {
            setMonthly(true);
            setAnnually(false);
            setCustom(false);
            setLastMonth(false);
            setWeekly(false);
        }
        if (value === "Annually") {
            setAnnually(true);
            setMonthly(false);
            setCustom(false);
            setLastMonth(false);
            setWeekly(false);
        }
        if (value === "Last Month") {
            setAnnually(false);
            setMonthly(false);
            setCustom(false);
            setWeekly(false);
            setLastMonth(true);
            let dateTo = moment();
            let dateFrom = moment().subtract(30, "d");
            let graphData: any[] = data.filter((x) =>
                moment(x.date).isBetween(dateFrom, dateTo)
            );
            console.log("today", dateTo);
            console.log("graphdata", graphData);
            let lastMonthInfo;
            lastMonthInfo = graphData.map((x) => {
                let dataObj = {
                    amount: x.amount,
                    date: moment(x.date).format("MMM/DD"),
                };
                console.log("dataObj", dataObj);
                let lastMonthDetail = lastMonthData;
                lastMonthDetail.push(dataObj);
                setLastMonthData(lastMonthDetail);
                console.log("lastmonthData", "  ", lastMonthData);
            });
        }
        if (value === "Last 7 Days") {
            setAnnually(false);
            setMonthly(false);
            setCustom(false);
            setWeekly(true);
            let dateTo = moment();
            let dateFrom = moment().subtract(7, "d");
            let graphData: any[] = data.filter((x) =>
                moment(x.date).isBetween(dateFrom, dateTo)
            );
            console.log("today", dateTo);
            console.log("graphdata", graphData);
            setNewData(graphData);
            let yearInfo;
            yearInfo = graphData.map((x) => {
                let dataObj = {
                    amount: x.amount,
                    date: moment(x.date).format("DD-dd"),
                };
                console.log("dataObj", dataObj);
                let weekDetail = weekData;
                weekDetail.push(dataObj);
                setweekData(weekDetail);
                console.log("weekData", weekData);
            });
        }
    };

    const handleMonthChange = (value: any) => {
        console.log(value);
        let graphData: any[] = data.filter((x) =>
            moment(x.date).isBetween(moment(value[0]), moment(value[1]))
        );
        console.log("graphdata", graphData);
        setNewData(graphData);
        let start = moment(value[0]);
        let end = moment(value[1]);
        let diff = end.diff(start, "months");
        console.log("diff", diff);
        console.log("start", start);
        console.log("end", end);

        for (let i = 0; i <= diff; i++) {
            let amount = 0;
            let monthData = graphData.filter(
                (x) =>
                    moment(x.date).year() ===
                        moment(value[0]).add(i, "months").year() &&
                    moment(x.date).month() ===
                        moment(value[0]).add(i, "months").month()
            );
            console.log("monthData", monthData);
            monthData.map((x) => {
                amount += x.amount;
                setMonthlyDate(
                    moment(value[0]).add(i, "months").format("YYYY/MMM")
                );
                console.log(
                    "mmmmmmmmmm",
                    moment(value[0]).add(i, "months").format("YYYY/MMM")
                );
            });
            let dataObj = {
                amount: amount,
                date: moment(value[0]).add(i, "months").format("YY/MMM"),
            };
            console.log("dataObj,", dataObj);
            let monthlyDetail = monthlyData;
            monthlyDetail.push(dataObj);
            setMonthlyData(monthlyDetail);
            console.log("MonthlyData", monthlyData);
        }
    };

    const handleYearChange = (value: any) => {
        let graphData: any[] = data.filter(
            (x) =>
                moment(x.date).year() >= moment(value[0]._d).year() &&
                moment(x.date).year() <= moment(value[1]._d).year()
        );
        console.log("graphdata", graphData);
        setNewData(graphData);
        let start = moment(value[0]._d).year();
        let end = moment(value[1]._d).year();
        let diff = end - start;

        for (let i = start; i <= end; i++) {
            let amount = 0;
            let yearInfo;

            part
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.expensesType === "Part"
                  ))
                : service
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.expensesType === "service"
                  ))
                : docs
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.expensesType === "ECO_DOCUMENT"
                  ))
                : fuel
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.expensesType === "fuel"
                  ))
                : buss && part
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.expensesType === "part" &&
                          x.vehicleTypeId === "Bus"
                  ))
                : (yearInfo = data.filter((x) => moment(x.date).year() === i));

            // yearInfo = data.filter(
            //     (x) => moment(x.date).year() === i && x.vehicleTypeId === "Bus"
            // );
            // yearInfo = data.filter(
            //     (x) =>
            //         moment(x.date).year() === i &&
            //         x.vehicleTypeId === "Bus" &&
            //         x.vehicleNumber === "BAT-9500"
            // );
            console.log(
                "year",
                i,
                "        ",
                "yearInfo",
                yearInfo,
                "vehicleType"
            );
            yearInfo.map((x) => (amount += x.amount));
            console.log("#####amount", amount);
            let dataObj = {
                amount: amount,
                date: i,
            };
            console.log("dataObj,", dataObj);
            let yearDetail = yearData;
            yearDetail.push(dataObj);
            setYearData(yearDetail);
            console.log("yearData", yearData);
        }
    };
    const handleCustomChange = (value: any) => {
        let graphData: any[] = data.filter((x) =>
            moment(x.date).isBetween(moment(value[0]), moment(value[1]))
        );
        console.log(graphData);
        setNewData(graphData);
        graphData.map((x) => {
            let dataObj = {
                amount: x.amount,
                date: moment(x.date).format("YY/MM/DD"),
            };
            console.log("dataObj,", dataObj);
            let customDetail = customData;
            customDetail.push(dataObj);
            setCustomData(customDetail);
            console.log("custom Data", customData);
        });
    };
    const handleVehicleType = (value: any) => {
        console.log(value);
        value === "Bus" ? setBuss(true) : setBuss(false);
        console.log(buss);
    };
    const handleChangeChart = (value: any) => {
        value === "Graph" ? setGraph(true) : setGraph(false);
    };
    const config = {
        data: anually
            ? yearData
            : weekly
            ? weekData
            : lastMonth
            ? lastMonthData
            : custom
            ? customData
            : monthly
            ? monthlyData
            : weekData,
        xField: "date",
        yField: "amount",
        key: "id",
        xAxis: {
            label: {
                autoRotate: true,
            },
        },
        slider: {
            start: 0,
            end: 1,
        },
    };
    const configLine = {
        data: anually
            ? yearData
            : weekly
            ? weekData
            : lastMonth
            ? lastMonthData
            : custom
            ? customData
            : monthly
            ? monthlyData
            : weekData,
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
        <Card
            style={{
                width: "50%",
                height: "30%",
                borderRadius: "10px",
            }}
        >
            <div className="filter-container" style={{ height: "40px" }}>
                <Row justify="start">
                    <Col xs={24} xl={6}>
                        <Select
                            // defaultValue="All Types"
                            style={{ width: 120 }}
                            onChange={handleVehicleType}
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
                    <Col xs={24} xl={6}>
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
                    <Col xs={24} xl={4}></Col>
                    <Col xs={24} xl={8}>
                        <div className="toggle">
                            <Select
                                defaultValue="Bar"
                                style={{ width: 120 }}
                                onChange={handleChangeChart}
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
                            <Row justify="space-between">
                                <Col xs={24} xl={6}>
                                    <Select
                                        // defaultValue="Bar"
                                        style={{ width: 120 }}
                                        onChange={handleChangeDate}
                                    >
                                        <Option value="Last 7 Days">
                                            Last 7 Days
                                        </Option>
                                        <Option value="Last Month">
                                            Last Month
                                        </Option>
                                        <Option value="Monthly">Monthly</Option>
                                        <Option value="Annually">
                                            Annually
                                        </Option>
                                        <Option value="Custom">Custom</Option>
                                    </Select>
                                </Col>
                                <Col xs={24} xl={18}>
                                    {custom ? (
                                        <RangePicker
                                            onChange={handleCustomChange}
                                        />
                                    ) : (
                                        ""
                                    )}
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
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col xs={24} xl={18}>
                    {graph ? <Line {...configLine} /> : <Column {...config} />}
                </Col>
                <Col xs={24} xl={6}>
                    <SelectOptions
                        onClickOverall={onClickOverall}
                        onClickDocs={onClickDocs}
                        onClickFuel={onClickFuel}
                        onClickOthers={onClickOthers}
                        onClickPart={onClickPart}
                        onClickService={onClickService}
                    />
                </Col>
            </Row>
        </Card>
    );
};
export default Page;
