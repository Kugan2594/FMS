import { Button, Col, DatePicker, Form, Input, Row, Select, Space } from "antd";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { errHandler, partAddSuccess } from "../../../helper/helper";
import { useEffect, useState } from "react";
import {
  addPart,
  getAllParts,
  getAllVehiclesAllocationsForDropDown,
} from "./ServiceParts";
import {
  getAllVehiclesByCompanyId,
  getAllVehiclesByCompanyIdAndBranchId,
} from "../Vehicles/ServiceVehicle";

function AddParts(props: any) {
  const { reloadTable, setIsModelOpen } = props;
  const [form] = Form.useForm();
  const { Option } = Select;
  const [open, setOpen] = useState(false);
  const [part, setPart] = useState([]);
  const [vehicle, setVehicle] = useState([]);
  const [vehicleNumbers, setVehicleNumbers] = useState("");

  let vehicleNum: string;

  useEffect(() => {
    getVehicleSelectData(
      getUserDetails().user_id,
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
    getAllPartsSelectData();
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
            label: `${post.resourceVehicleDto.vehicleModel} ${post.resourceVehicleDto.vehicleBodyTypeResponseDto} ${post.resourceVehicleDto.vehicleTypeName} ${post.resourceVehicleDto.fuelTypeName} ${post.vehicleNumber}`,
          });
          vehicleNum = post.vehicleNumber;

          return null;
        });
        setVehicle(data);
        setVehicleNumbers(vehicleNum);
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
        setVehicleNumbers(vehicleNum);
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
          setVehicleNumbers(vehicleNum);
        }
      );
    }
  };

  const getAllPartsSelectData = () => {
    getAllParts().then((res: any) => {
      let result = res.results.part.map((post: any) => {
        return {
          value: post.id,
          label: `${post.name}`,
        };
      });
      setPart(result);
    });
  };
  const onFinishAdd = (values: any) => {
    let data: object = {
      expectedLifetimeInKm: values.expectedLifetimeInKm,
      expectedLifetimeInYears: values.expectedLifetimeInYears,
      warranty: values.warranty,
      amount: values.amount,
      date: values.date,
      locationWhereItFixed: values.locationWhereItFixed,
      brandNew: values.brandNew,
      capacity: values.capacity,
      lastService: values.lastService,
      brand: values.brand,
      partId: values.partName,
      vehicleNumber: vehicleNumbers,
      companyId: getUserDetails().company_id,
      branchId: getUserDetails().company_branch_id,
      userId: getUserDetails().user_id,
    };

    addPart(data)
      .then((res: any) => {
        partAddSuccess();
        setIsModelOpen(false);
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
        <Row>
          <Col span={24}>
            <Form.Item name="partName">
              <Select
                placeholder="Part Name"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={part}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="vehicleNumber">
              <Select
                placeholder="Vehicle"
                optionFilterProp="children"
                bordered={false}
                style={{ borderBottom: "1px solid #ccccb3" }}
                options={vehicle}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="date">
              <DatePicker
                placeholder="Changed Date"
                style={{
                  borderBottom: "1px solid #ccccb3",
                  borderTop: "0px",
                  borderLeft: "0px",
                  borderRight: "0px",
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={11}>
            <Form.Item name="expectedLifetimeInKm">
              <Input
                placeholder="Durability in Km"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={2}></Col>
          <Col span={11}>
            <Form.Item name="expectedLifetimeInYears">
              <Input
                placeholder="Durability in Months"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="amount">
              <Input
                placeholder="Price"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="warranty">
              <Input
                placeholder="Warranty"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="locationWhereItFixed">
              <Input
                placeholder="Location Where It Fixed"
                bordered={false}
                required
                style={{ borderBottom: "1px solid #ccccb3" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="brandNew">
              <Checkbox
                name="brandNew"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Brand New
              </Checkbox>
            </Form.Item>
          </Col>

          {open ? (
            <Col span={24}>
              <Form.Item name="brand">
                <Input
                  placeholder="Brand"
                  bordered={false}
                  required
                  style={{
                    borderBottom: "1px solid #ccccb3",
                  }}
                />
              </Form.Item>
            </Col>
          ) : (
            <></>
          )}
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

export default AddParts;
