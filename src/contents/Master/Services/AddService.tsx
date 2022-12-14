import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import { getAllVehiclesAllocationsForDropDown } from "../RevenueLicense/ServicesRevenueLicense";
import { useState, useEffect } from "react";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { addService, getAllServices } from "./ServicesService";
import { errHandler, serviceAddSuccess } from "../../../helper/helper";
import {
  amountNoRegex,
  lifeTiimeMonthNoRegex,
  lifeTimeMileageNoRegex,
} from "../../../utils/Regex";
import {
  getAllVehiclesByCompanyId,
  getAllVehiclesByCompanyIdAndBranchId,
} from "../Vehicles/ServiceVehicle";

function AddService(props: any) {
  const { reloadTable } = props;
  const [form] = Form.useForm();
  const [vehicle, setVehicle] = useState([]);
  const [vehicleNumbers, setvehicleNumbers] = useState("");
  const [services, setServices] = useState([]);
  const [fileList, setFileList] = useState([]);
  const { Option } = Select;
  let vehicleNum: string;

  useEffect(() => {
    getVehicleSelectData(
      getUserDetails().user_id,
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
    getAllServicesSelectData();
  }, []);

  const getVehicleSelectData = (
    userId: number,
    companyId: number,
    branchId: number
  ) => {
    if (getUserDetails().roleName == "COMPANYDRIVER") {
      getAllVehiclesAllocationsForDropDown(userId).then((res: any) => {
        let data: any = [];
        res.map((post: any) => {
          data.push({
            value: post.vehicleNumber,
            label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
          });
          vehicleNum = post.vehicleNumber;
          return null;
        });
        setVehicle(data);
        setvehicleNumbers(vehicleNum);
      });
    } else if (getUserDetails().roleName == "COMPANYADMIN") {
      getAllVehiclesByCompanyId(companyId).then((res: any) => {
        let data: any = [];
        res.results.companyVehicle.map((post: any) => {
          data.push({
            value: post.vehicleNumber,
            label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
          });
          vehicleNum = post.vehicleNumber;
          return null;
        });
        setVehicle(data);
        setvehicleNumbers(vehicleNum);
      });
    } else if (getUserDetails().roleName == "COMPANYBRANCHADMIN") {
      getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
        (res: any) => {
          let data: any = [];
          res.results.vehicleByCompanyAndBranch.map((post: any) => {
            data.push({
              value: post.vehicleNumber,
              label: `${post.resourceVehicleDto.vehicleBrand} ${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
            });
            vehicleNum = post.vehicleNumber;
            return null;
          });
          setVehicle(data);
          setvehicleNumbers(vehicleNum);
        }
      );
    }
  };

  const getAllServicesSelectData = () => {
    getAllServices().then((res: any) => {
      let data: any = [];
      res.results.service.map((post: any) => {
        data.push({
          value: post.id,
          label: `${post.serviceName}`,
        });
      });
      setServices(data);
    });
  };
  const onFinishAdd = (values: any) => {
    let data: object = {
      id: values.id,
      vehicleNumber: values.vehicleNumber,
      serviceIdFromResource: values.serviceIdFromResource,
      amount: values.amount,
      serviceDate: values.serviceDate,
      expectedLifeTimeInKm: values.expectedLifeTimeInKm,
      expectedLifeTimeInMonth: values.expectedLifeTimeInMonth,
      userId: getUserDetails().user_id,
      companyId: getUserDetails().company_id,
      branchId: getUserDetails().company_branch_id,
    };

    addService(data)
      .then((res: any) => {
        serviceAddSuccess();
        reloadTable(res);
      })
      .catch((err) => {
        errHandler(err);
      });
  };
  const onFinishFailed = () => {
    console.log("failed");
  };
  return (
    <>
      <Form
        id="form"
        name="basic"
        form={form}
        onFinish={onFinishAdd}
        onFinishFailed={onFinishFailed}
      >
        <Row style={{ paddingLeft: "35px", paddingRight: "35px" }}>
          <Col span={24}>
            <Form.Item name="vehicleNumber">
              <Select
                placeholder="Vehicle"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={vehicle}
              ></Select>
            </Form.Item>
            <Form.Item name="serviceDate">
              <DatePicker
                placeholder="Service Date"
                style={{
                  borderBottom: "1px solid #ccccb3",
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  width: "100%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="amount"
              rules={[
                {
                  pattern: new RegExp(amountNoRegex),

                  message: "Enter valid amount Eg:-2300.00",
                },
              ]}
            >
              <Input
                placeholder="Service Amount"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
                maxLength={10}
              />
            </Form.Item>
            <Form.Item
              name="expectedLifeTimeInKm"
              rules={[
                {
                  pattern: new RegExp(lifeTimeMileageNoRegex),

                  message: "Enter valid km Eg:-11",
                },
              ]}
            >
              <Input
                placeholder="Expected LifeTime In KM"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
                maxLength={4}
              />
            </Form.Item>
            <Form.Item
              name="expectedLifeTimeInMonth"
              rules={[
                {
                  pattern: new RegExp(lifeTiimeMonthNoRegex),

                  message: "Enter valid month Eg:-12",
                },
              ]}
            >
              <Input
                placeholder="Expected LifeTime In Month"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
                maxLength={4}
              />
            </Form.Item>
            <Form.Item name="serviceIdFromResource">
              <Select
                placeholder="Service Name"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={services}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row align="middle" justify="end">
          <Col span={24}>
            <Space direction="horizontal" align="center">
              <div className="1" style={{ width: "275px" }}></div>
              <Button htmlType="button" type="ghost" onClick={props.onCancel}>
                cancel
              </Button>
              <Button htmlType="submit" type="primary" onClick={props.onAdd}>
                Add
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </>
  );
}
export default AddService;
