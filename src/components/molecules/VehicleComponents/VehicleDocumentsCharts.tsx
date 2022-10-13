import { Col, Row, Typography } from "antd";
import { getRevenueLicense } from "../../../contents/Master/Vehicles/ServiceVehicle";
import React, { useEffect, useState } from "react";
import VehicleDocumentChart from "./VehicleDocumentChart";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";

const { Title, Text } = Typography;

interface VehicleDocumentsChartsType {
  revenueLicenseUpdate: any;
  insuranceUpdate: any;
  emissionTestUpdate: any;
  vehicleNumber: string;
}

function VehicleDocumentsCharts({
  revenueLicenseUpdate,
  insuranceUpdate,
  emissionTestUpdate,
  vehicleNumber,
}: VehicleDocumentsChartsType) {

    const [revenueLicense, setRevenueLicense]: any = useState({});

    useEffect(() => {
        getVehicleRevenueLicense("ABC-9487")
    }, [])

    const getVehicleRevenueLicense =(vehicleNo: string) => {
    getRevenueLicense(vehicleNo,
        getUserDetails().user_id).then((res: any) => {
        let data: any = [];
        res.map((post: any) => {
          data.push({
            percentage: post.id,
            dueDate: `${post.branchName}`,
          });
        });
        setRevenueLicense(data);
      });
    }

  return (
    <div>
        <div style={{marginBottom: "10px"}}>
        <Text style={{color: "#1890ff", lineHeight: 1, fontSize: "18px"}}>Documents</Text>
        </div>
      <div>
        <Row gutter={8}>
          <Col span={8}>
            <VehicleDocumentChart
              id = {0}
              label="Revenue License"
              percentage={80}
              dueDate={"24-04-2014"}
              update={revenueLicenseUpdate}
            />
          </Col>
          <Col span={8}>
            <VehicleDocumentChart
              id = {0}
              label="Insurance"
              percentage={40}
              dueDate={"24-04-2014"}
              update={insuranceUpdate}
            />
          </Col>
          <Col span={8}>
            <VehicleDocumentChart
              id = {0}
              label=" Emission Test"
              percentage={0}
              dueDate={"24-04-2014"}
              update={emissionTestUpdate}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default VehicleDocumentsCharts;
