import { Button, Col, Row, Typography } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import "./masterHeader.style.less";

const { Text } = Typography;

interface MasterHeaderType {
  onSearch: any;
  onClickAdd: any;
  dataCount: number;
}

function MasterHeader({onSearch,onClickAdd,dataCount}: MasterHeaderType) {
  return (
    <div className="master-header">
      <Row gutter={8} align="middle" style={{ width: "100%" }}>
        <Col span={10}>
          <div>
            <Search
              className="master-header-search"
              placeholder="Search"
              size="middle"
              onSearch={onSearch}
            />
          </div>
        </Col>
        <Col span={2}>
          <div></div>
        </Col>
        <Col span={4}>
          <div></div>
        </Col>
        <Col span={6}>
          <div></div>
        </Col>
        <Col span={2}>
          <div className="master-header-addButton">
            <Button type="primary" onClick={onClickAdd}>Add</Button>
          </div>
        </Col>
      </Row>
      <div className="master-header-count">
        <Text strong type="secondary">{dataCount} Results</Text>
        </div>
    </div>
  );
}

export default MasterHeader;
