import React from "react";
import { Button, Card, Col, Progress, Row, Typography } from "antd";
import "./card.style.less"

interface CardLargeType {
    id?: string;
    name?: string;
    progressData?: number;
    vehicleNo?: string;
    vehicleModel?: string;
    branchName?: string;
    dueDate?: string;
    cardOnClick?: any;
    updateButton?: any;
    deleteButton?: any;
}

const { Title,Text } = Typography;

function CardLarge({id,name,progressData,vehicleNo,vehicleModel,branchName,dueDate,updateButton,deleteButton,cardOnClick}: CardLargeType) {
  return (
    <Card key={id} className="large-card">
      <Row className="large-card-row" gutter={4} align="middle">
        <Col span={6} >
          <div className="large-card-name" onClick={() => cardOnClick(id)}>
            <Title style={{margin:0}} level={5}>{name}</Title>
            <Progress style={{width:"200px"}} percent={progressData} size="small" />
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
            <Button onClick={() => updateButton(id)} type="primary">Update</Button>
            <Button onClick={() => deleteButton(id)}>Delete</Button>
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CardLarge;
