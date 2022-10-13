import { Col, Row, Typography } from "antd";
import { getEmissionTest, getInsurance, getRevenueLicense } from "../../../contents/Master/Vehicles/ServiceVehicle";
import React, { useEffect, useState } from "react";
import VehicleDocumentChart from "./VehicleDocumentChart";
import moment from "moment";

const { Title, Text } = Typography;

interface VehicleDocumentsChartsType {
  revenueLicenseUpdate: any;
  insuranceUpdate: any;
  emissionTestUpdate: any;
  vehicleNumber: string;
}

const createdDataRevenueLicense = (data: any) => {
  let convertData = {
    id: data.id,
    issuedDate: moment(data.taxIssuedDate).format("DD-MM-YYYY"),
    dueDate: moment(data.taxExpiryDate).format("DD-MM-YYYY"),
    percentage: (moment(data.taxExpiryDate).diff(moment(), "days")/moment(data.taxExpiryDate).diff(data.taxIssuedDate, "days"))*100,
  };
  return convertData;
};

const createdDataInsurance = (data: any) => {
  let convertData = {
    id: data.id,
    issuedDate: moment(data.insuranceIssuedDate).format("DD-MM-YYYY"),
    dueDate: moment(data.insuranceExpiryDate).format("DD-MM-YYYY"),
    percentage: (moment(data.insuranceExpiryDate).diff(moment(), "days")/moment(data.insuranceExpiryDate).diff(data.insuranceIssuedDate, "days"))*100,
  };
  return convertData;
};

const createdDataEmissionTest = (data: any) => {
  let convertData = {
    id: data.id,
    issuedDate: moment(data.emissionTestIssuedDate).format("DD-MM-YYYY"),
    dueDate: moment(data.emissionTestExpiryDate).format("DD-MM-YYYY"),
    percentage: (moment(data.emissionTestExpiryDate).diff(moment(), "days")/moment(data.emissionTestExpiryDate).diff(data.emissionTestIssuedDate, "days"))*100,
  };
  return convertData;
};

function VehicleDocumentsCharts({
  revenueLicenseUpdate,
  insuranceUpdate,
  emissionTestUpdate,
  vehicleNumber,
}: VehicleDocumentsChartsType) {
  const [revenueLicense, setRevenueLicense]: any = useState({});
  const [insurance, setInsurance]: any = useState({});
  const [emissionTest, setEmissionTest]: any = useState({});

  useEffect(() => {
    getVehicleRevenueLicense(vehicleNumber);
    getVehicleInsurance(vehicleNumber);
    getVehicleEmissionTest(vehicleNumber);
  }, []);

  const getVehicleRevenueLicense = (vehicleNo: string) => {
    getRevenueLicense(vehicleNo).then((res: any) => {
      let data: any = createdDataRevenueLicense(res.results.revenueLicense);
      console.log("Revenue license", data);
      setRevenueLicense(data);
    });
  };

  const getVehicleInsurance = (vehicleNo: string) => {
    getInsurance(vehicleNo).then((res: any) => {
      let data: any = createdDataInsurance(res.results.insurance);
      console.log("Insurance", data);
      setInsurance(data);
    });
  };

  const getVehicleEmissionTest = (vehicleNo: string) => {
    getEmissionTest(vehicleNo).then((res: any) => {
      let data: any = createdDataEmissionTest(res.results.emissionTest);
      console.log("Emission Test", data);
      setEmissionTest(data);
    });
  };

  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <Text style={{ color: "#1890ff", lineHeight: 1, fontSize: "18px" }}>
          Documents
        </Text>
      </div>
      <div>
        <Row gutter={8}>
          <Col span={8}>
            <VehicleDocumentChart
              id={0}
              label="Revenue License"
              percentage={Math.round(revenueLicense.percentage)}
              dueDate={revenueLicense.dueDate}
              update={revenueLicenseUpdate}
            />
          </Col>
          <Col span={8}>
            <VehicleDocumentChart
              id={0}
              label="Insurance"
              percentage={Math.round(insurance.percentage)}
              dueDate={insurance.dueDate}
              update={insuranceUpdate}
            />
          </Col>
          <Col span={8}>
            <VehicleDocumentChart
              id={0}
              label=" Emission Test"
              percentage={Math.round(emissionTest.percentage)}
              dueDate={emissionTest.dueDate}
              update={emissionTestUpdate}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default VehicleDocumentsCharts;
