import { Button, Card, Col, Progress, Row } from "antd";
import React from "react";
import "./card.style.less"
import { Typography } from 'antd';

interface CardLargeType {
    name: string;
    provider: string;
    progressData: number;
    vehicleNo: string;
    vehicleModel: string;
    branchName: string;
    dueDate: string;
    cardOnClick: any;
    updateButton: any;
    deleteButton: any;
}

const { Title,Text } = Typography;

function CardLarge({name,provider,progressData,vehicleNo,vehicleModel,branchName,dueDate,updateButton,deleteButton,cardOnClick}: CardLargeType) {
  return (
    <Card className="large-card">
      <Row className="large-card-row" gutter={4} align="middle">
        <Col span={6} >
          <div className="large-card-name" onClick={cardOnClick}>
            <Title level={5}>{name}</Title>
            <Text>{provider}</Text>
            <br/>
            <Progress style={{width:"200px", marginTop: "5px"}} percent={progressData} size="small" />
          </div>
        </Col>
        <Col span={4}>
          <div>
          <Title level={5}>{vehicleNo}</Title>
          <Text>{vehicleModel}</Text>
          </div>
        </Col>
        <Col span={5}>
          <div>
          <Text strong>{branchName}</Text>
          </div>
        </Col>
        <Col span={4}>
          <div>
          <Text strong type="secondary">Due on: {dueDate}</Text>
          </div>
        </Col>
        <Col span={5}>
          <div className="large-card-button">
            <Button onClick={updateButton} type="primary">Update</Button>
            <Button onClick={deleteButton}>Delete</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardLarge;
