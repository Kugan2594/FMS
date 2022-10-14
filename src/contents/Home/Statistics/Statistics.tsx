import React from "react";
import { Column, Line, Pie } from "@ant-design/charts";
import { useState, useEffect } from "react";
import {
    Button,
    Card,
    Col,
    DatePicker,
    Form,
    Modal,
    Row,
    Select,
    Space,
} from "antd";
import "./Statistics.style.less";
import SelectOptions from "./SelectOptions";
import {
    AiOutlineAreaChart,
    AiOutlineBarChart,
    AiOutlineOrderedList,
} from "react-icons/ai";
import { FaRegChartBar } from "react-icons/fa";
import { FcBarChart, FcLineChart } from "react-icons/fc";
import moment from "moment";
import { any } from "prop-types";
import { has } from "immer/dist/internal";
import { type } from "@testing-library/user-event/dist/type";
const { RangePicker } = DatePicker;
const Statistics: React.FC = () => {
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
            vehicleNumber: "BAT-9471",
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
            vehicleNumber: "BAT-9472",
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
            vehicleNumber: "BAT-9473",
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
            vehicleNumber: "BAT-9474",
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
            vehicleNumber: "BAT-9475",
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
            vehicleNumber: "BAT-9476",
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
            vehicleNumber: "BAT-9477",
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
            vehicleNumber: "BAT-9479",
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
            vehicleNumber: "BAT-9478",
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
            vehicleNumber: "SAT-9479",
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
            vehicleNumber: "BAT-94780",
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
            vehicleNumber: "BAT-9481",
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
            vehicleNumber: "PAT-9482",
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
            vehicleNumber: "PAT-9475",
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
            vehicleNumber: "CAT-9479",
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
            vehicleNumber: "BAT-9485",
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
            vehicleNumber: "SAT-9486",
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
            vehicleNumber: "BAT-9590",
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
            vehicleNumber: "BAT-9450",
            expensesType: "ECO_DOCUMENT",
            branchId: 4,
            branchName: "singapore",
            companyId: 1,
            vehicleTypeId: "Train",
        },
    ];
    const monthFormat = "YYYY/MM";
    const yearFormat = "YYYY";
    interface yearTotal {
        amount: number;
        date: number;
    }
    let dataArray: any = [];
    const defltData = data.map((x: any) => {
        let obj = {
            amount: x.amount,
            date: moment(x.date).format("YY/MM/dd"),
        };
        dataArray.push(obj);
    });
    const typeArray = ["All Vehhicle Types", "Bus", "Car", "Train"];
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
    const [startYearEndYear, setStartYearEndYear]: any[] = useState([]);
    const [period, setPeriod]: any[] = useState([]);
    const [newData, setNewData] = useState<any>(dataArray);
    const [grandData, setGrandData] = useState<any>();
    const [yearExpense, setYearExpense]: any = useState([]);
    const [yearData, setYearData]: any[] = useState([]);
    const [weekData, setweekData]: any = useState([]);
    const [monthData, setMonthData]: any = useState([]);
    const [lastMonthData, setLastMonthData]: any = useState([]);
    const [customData, setCustomData]: any = useState([]);
    const [monthlyData, setMonthlyData]: any = useState([]);
    const [lastMonth, setLastMonth]: any = useState(false);
    const [buss, setBuss] = useState(true);
    const [monthlyDate, setMonthlyDate] = useState("");
    const [graph, setGraph] = useState(false);
    const [yearArray, setYearArray]: any[] = useState([]);
    const [yearsInfo, setYearsInfo]: any[] = useState([]);
    const [vehicleNumberValue, setVehicleNumberValue]: any = useState();
    const [vehicleTypeValue, setVehicleTypeValue]: any = useState();
    const [vehicleNoFilter, setVehicleNoFilter]: any = useState(false);
    const [vehicleTypeFilter, setVehicleTypeFilter] = useState(false);
    const [filterArray, setFilterArray] = useState([false, false]);
    const [majorData, setMajorData]: any = useState([]);
    const [bar, setBar]: any = useState(true);
    const [staticsType, setStaticsType]: any = useState(true);
    const [value1, setValue1]: any = useState("All vehicle Types");
    const [value2, setValue2]: any = useState("Last 7 Days");
    const [open, setOpen]: any = useState(false);
    const [filterData, setFilterData]: any = useState(dataArray);

    useEffect(() => {
        console.log("vehicleType", vehicleTypeValue);
        setValue1(typeArray[0]);
    }, [
        majorData,
        startYearEndYear,
        yearData,
        yearArray,
        yearsInfo,
        vehicleNumberValue,
        vehicleTypeValue,
        vehicleNoFilter,
        vehicleTypeFilter,
        filterArray,
        lastMonthData,
        newData,
    ]);
    const onClickPart = () => {
        setOverAll(false);
        setPart(true);
        setOverAll(false);
        setDocs(false);
        setFuel(false);
        setOthers(false);
        setService(false);
    };
    const onClickService = () => {
        setOverAll(false);
        setDocs(false);
        setFuel(false);
        setOthers(false);
        setService(true);
    };
    const onClickFuel = () => {
        setOverAll(false);
        setFuel(true);
        setOverAll(false);
        setPart(false);
        setDocs(false);
        setOthers(false);
        setService(false);
    };
    const onClickDocs = () => {
        setOverAll(false);
        setDocs(true);
        setPart(false);
        setFuel(false);
        setService(false);
    };
    const onClickOthers = () => {
        setOverAll(false);
        setPart(false);
        setDocs(false);
        setFuel(false);
        setOthers(true);
        setService(false);
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
    const handleDateRange = (value: string) => {
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
            let graphData: any[] = [];
            vehicleTypeFilter && vehicleNoFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleNumber === vehicleNumberValue &&
                          x.vehicleTypeId === vehicleTypeValue
                  ))
                : vehicleNoFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleNumber === vehicleNumberValue
                  ))
                : vehicleTypeFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleTypeId === vehicleTypeValue
                  ))
                : (graphData = data.filter((x) =>
                      moment(x.date).isBetween(dateFrom, dateTo)
                  ));

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
                setNewData(lastMonthDetail);
                console.log("lastmonthdata", lastMonthData);
                setMajorData(lastMonthDetail);
                console.log("majorData", "  ", majorData);
            });
        }
        if (value === "Last 7 Days") {
            setAnnually(false);
            setMonthly(false);
            setCustom(false);
            setWeekly(true);
            let dateTo = moment();
            let dateFrom = moment().subtract(7, "d");

            let graphData: any[] = [];
            vehicleTypeFilter && vehicleNoFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleTypeId === vehicleTypeValue &&
                          x.vehicleNumber === vehicleNumberValue
                  ))
                : vehicleNoFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleNumber === vehicleNumberValue
                  ))
                : vehicleTypeFilter
                ? (graphData = data.filter(
                      (x) =>
                          moment(x.date).isBetween(dateFrom, dateTo) &&
                          x.vehicleTypeId === vehicleTypeValue
                  ))
                : (graphData = data.filter((x) =>
                      moment(x.date).isBetween(dateFrom, dateTo)
                  ));
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
        let graphData: any = [];
        vehicleNoFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) && x.vehicleNumber === vehicleNumberValue
              ))
            : vehicleTypeFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) && x.vehicleTypeId === vehicleTypeValue
              ))
            : vehicleNoFilter && vehicleTypeFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) &&
                      x.vehicleTypeId === vehicleTypeValue &&
                      x.vehicleTypeId === vehicleTypeValue
              ))
            : (graphData = data.filter((x) =>
                  moment(x.date).isBetween(moment(value[0]), moment(value[1]))
              ));

        let start = moment(value[0]);
        let end = moment(value[1]);
        let diff = end.diff(start, "months");
        console.log("diff", diff);
        console.log("start", start);
        console.log("end", end);

        for (let i = 0; i <= diff; i++) {
            let amount = 0;
            let monthData = graphData.filter(
                (x: any) =>
                    moment(x.date).year() ===
                        moment(value[0]).add(i, "months").year() &&
                    moment(x.date).month() ===
                        moment(value[0]).add(i, "months").month()
            );
            console.log("monthData", monthData);
            monthData.map((x: any) => {
                amount += x.amount;
                setMonthlyDate(
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
            setNewData(monthlyData);
            setMonthlyData(monthlyDetail);
            console.log("MonthlyData", monthlyData);
        }
    };

    const handleYearChange = (value: any) => {
        let startEnd = value;
        setStartYearEndYear(startEnd);
        console.log("startend", startEnd);
        console.log("startyearendyear", startYearEndYear);
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
            vehicleNoFilter && vehicleTypeFilter
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.vehicleTypeId === vehicleTypeValue &&
                          x.vehicleNumber === vehicleNumberValue
                  ))
                : vehicleNoFilter
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.vehicleNumber === vehicleNumberValue
                  ))
                : vehicleTypeFilter
                ? (yearInfo = data.filter(
                      (x) =>
                          moment(x.date).year() === i &&
                          x.vehicleTypeId === vehicleTypeValue
                  ))
                : (yearInfo = data.filter((x) => moment(x.date).year() === i));

            console.log(
                "year",
                i,
                "        ",
                "yearInfo",
                yearInfo,
                "vehicleType"
            );

            console.log("yearArray", yearArray);
            yearInfo.map((x) => {
                amount += x.amount;
                yearArray.push(x);
            });

            // console.log("#####amount", amount);
            let dataObj = {
                amount: amount,
                date: i,
            };
            console.log("dataObj,", dataObj);
            let yearDetail = yearData;
            yearDetail.push(dataObj);
            setYearData(yearDetail);
            setNewData(yearDetail);
            setMajorData(yearDetail);
            console.log("majorData", majorData);
            console.log("yearData", yearData);
            console.log("yearArray$#@#$%", "  ", yearArray);
            setYearsInfo(yearArray);
            console.log("yearInfo$#@#$%", "  ", yearsInfo);
        }
    };
    const handleCustomChange = (value: any) => {
        let graphData;
        vehicleNoFilter && vehicleTypeFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) &&
                      x.vehicleNumber === vehicleNumberValue &&
                      x.vehicleTypeId === vehicleTypeValue
              ))
            : vehicleNoFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) && x.vehicleNumber === vehicleNumberValue
              ))
            : vehicleTypeFilter
            ? (graphData = data.filter(
                  (x) =>
                      moment(x.date).isBetween(
                          moment(value[0]),
                          moment(value[1])
                      ) && x.vehicleTypeId === vehicleTypeValue
              ))
            : (graphData = data.filter((x) =>
                  moment(x.date).isBetween(moment(value[0]), moment(value[1]))
              ));
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
            setNewData(customDetail);
            setCustomData(customDetail);
            console.log("custom Data", customData);
        });
    };
    const handleVehicleType = (value: any) => {
        setVehicleTypeFilter(true);
        setVehicleTypeValue(value);
        console.log("newData", newData);
        let dateTo = moment();
        let dateFrom = moment().subtract(7, "d");
        let graphData;
        weekly && vehicleNoFilter
            ? (graphData = data.filter((x: any) => x.vehicleTypeId === value))
            : weekly
            ? (graphData = data.filter((x: any) => x.vehicleTypeId === value))
            : vehicleNoFilter
            ? (graphData = data.filter(
                  (x: any) =>
                      x.vehicleTypeId === value &&
                      x.VehicleNUmber === vehicleNumberValue
              ))
            : (graphData = data.filter((x: any) => x.vehicleTypeId === value));
        let array: any = [];
        let y = graphData.map((x) => {
            let dataObj = {
                amount: x.amount,
                date: moment(x.date).format("YYYY/MM/DD"),
            };
            array.push(dataObj);
        });

        console.log("y", y);
        console.log("graphArray", array);
        setNewData(array);
        console.log("graphDATA", newData);
    };
    const handleChangeChart = () => {
        // value === "Graph" ? setGraph(true) : setGraph(false);
        setBar(!bar);
        setGraph(!graph);
    };
    const onChange = (value: string) => {
        setVehicleNumberValue(value);
        setVehicleNoFilter(true);
        let graphData;
        vehicleTypeFilter
            ? (graphData = data.filter(
                  (x) =>
                      x.vehicleTypeId === vehicleTypeValue &&
                      x.vehicleNumber === vehicleNumberValue
              ))
            : (graphData = data.filter((x) => x.vehicleNumber === value));
        setNewData(graphData);
        console.log(newData);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };
    const handleStaticType = () => {
        setStaticsType(!staticsType);
    };
    const openModalHandler = () => {
        setOpen(!open);
        console.log("modal opened");
    };
    const onOk = () => {
        setOpen(!open);
        setFilterData(newData);
    };
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
        data: filterData,
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
        <>
            {" "}
            <Form>
                <Modal
                    onCancel={openModalHandler}
                    open={open}
                    onOk={onOk}
                    footer={false}
                >
                    {" "}
                    <div className="modal-rows">
                        <Row gutter={64} style={{ marginBottom: "20px" }}>
                            <Col>Filter</Col>
                        </Row>
                        <Row gutter={128} style={{ marginBottom: "20px" }}>
                            <Col>
                                <Row
                                    justify="end"
                                    align="middle"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Col xs={24} xl={21}>
                                        <Select
                                            // defaultValue="All Types"
                                            style={{
                                                width: "60%",
                                                borderRadius: "50px",
                                            }}
                                            onChange={handleVehicleType}
                                            placeholder="All vehicle Types"
                                            defaultValue="All vehicle Types"
                                            size="small"
                                        >
                                            {" "}
                                            <Option value="All vehicle Types">
                                                All vehicle Types
                                            </Option>
                                            <Option value="Bus">Bus</Option>
                                            <Option value="Car">Car</Option>
                                            <Option value="Train">Train</Option>
                                        </Select>
                                    </Col>

                                    <Col xs={24} xl={3}></Col>
                                </Row>

                                <Row style={{ marginBottom: "20px" }}>
                                    {" "}
                                    <Col xs={24} xl={10}>
                                        <Select
                                            showSearch
                                            placeholder="All vehicles"
                                            optionFilterProp="children"
                                            onChange={onChange}
                                            onSearch={onSearch}
                                            filterOption={(input, option) =>
                                                (
                                                    option!
                                                        .children as unknown as string
                                                )
                                                    .toLowerCase()
                                                    .includes(
                                                        input.toLowerCase()
                                                    )
                                            }
                                            style={{ width: "90%" }}
                                            size="small"
                                        >
                                            {vehicleTypeFilter
                                                ? data
                                                      .filter(
                                                          (x: any) =>
                                                              x.vehicleTypeId ===
                                                              vehicleTypeValue
                                                      )
                                                      .map((x: any) => {
                                                          return (
                                                              <Option
                                                                  value={
                                                                      x.vehicleNumber
                                                                  }
                                                              >
                                                                  {
                                                                      x.vehicleNumber
                                                                  }
                                                              </Option>
                                                          );
                                                      })
                                                : data.map((x: any) => {
                                                      return (
                                                          <Option
                                                              value={
                                                                  x.vehicleNumber
                                                              }
                                                          >
                                                              {x.vehicleNumber}
                                                          </Option>
                                                      );
                                                  })}
                                        </Select>
                                    </Col>
                                </Row>

                                <Row
                                    justify="space-around"
                                    style={{ marginBottom: "20px" }}
                                >
                                    <Col
                                        xs={24}
                                        xl={6}
                                        style={{
                                            width: "100%",
                                        }}
                                    >
                                        <Select
                                            // defaultValue="Bar"
                                            style={{
                                                width: "100%",
                                            }}
                                            onChange={handleDateRange}
                                            defaultValue="Last 7 Days"
                                            size="small"
                                        >
                                            <Option value="Last 7 Days">
                                                Last 7 Days
                                            </Option>
                                            <Option value="Last Month">
                                                Last Month
                                            </Option>
                                            <Option value="Monthly">
                                                Monthly
                                            </Option>
                                            <Option value="Annually">
                                                Annually
                                            </Option>
                                            <Option value="Custom">
                                                Custom
                                            </Option>
                                        </Select>
                                    </Col>
                                    <Col xs={24} xl={2}></Col>
                                    <Col xs={24} xl={14} style={{}}>
                                        {custom ? (
                                            <RangePicker
                                                onChange={handleCustomChange}
                                                size="small"
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
                                                size="small"
                                            />
                                        ) : (
                                            ""
                                        )}
                                        {monthly ? (
                                            <RangePicker
                                                onChange={handleMonthChange}
                                                defaultValue={[
                                                    moment(
                                                        "2015/01",
                                                        monthFormat
                                                    ),
                                                    moment(
                                                        "2015/02",
                                                        monthFormat
                                                    ),
                                                ]}
                                                format={monthFormat}
                                                picker="month"
                                                size="small"
                                            />
                                        ) : (
                                            ""
                                        )}
                                    </Col>
                                    <Col xs={24} xl={2}></Col>
                                </Row>

                                <Row>
                                    <Col xs={24} xl={24}>
                                        <SelectOptions />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row justify="end">
                        <Col span={12}></Col>
                        <Col span={4}>
                            <Button
                                htmlType="reset"
                                size="small"
                                style={{ width: "80%" }}
                            >
                                Reset
                            </Button>
                        </Col>
                        <Col span={4}>
                            <Button
                                size="small"
                                style={{ width: "80%" }}
                                onClick={openModalHandler}
                            >
                                Cancel
                            </Button>
                        </Col>
                        <Col span={4}>
                            <Button
                                onClick={onOk}
                                size="small"
                                style={{ width: "80%" }}
                            >
                                Ok
                            </Button>
                        </Col>
                    </Row>
                </Modal>
            </Form>
            <Card
                style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "0vw 0vw 0.5vw 0.5vw",
                }}
            >
                <div
                    className="filter-comntainer"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "right",
                    }}
                >
                    {" "}
                    <div>
                        <div className="toggle">
                            <Space className="toggle-space">
                                {bar ? (
                                    <FcBarChart
                                        size={25}
                                        onClick={handleChangeChart}
                                    />
                                ) : (
                                    <FcLineChart
                                        size={25}
                                        onClick={handleChangeChart}
                                    />
                                )}
                            </Space>
                        </div>
                    </div>
                    <div>
                        <Button onClick={openModalHandler}>filters</Button>
                    </div>
                </div>{" "}
                <Row>
                    <Col xs={24} xl={24}>
                        {graph ? (
                            <div>
                                <Line
                                    {...configLine}
                                    width={300}
                                    height={200}
                                />
                            </div>
                        ) : (
                            <div>
                                {" "}
                                <div className="filter-comntainer">
                                    {" "}
                                    <Column
                                        {...config}
                                        width={300}
                                        height={200}
                                    />
                                </div>
                            </div>
                        )}
                    </Col>
                </Row>
            </Card>
        </>
    );
};
export default Statistics;
