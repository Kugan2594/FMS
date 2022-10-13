import { Button, Col, Row, Typography, Upload } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";
import "./masterHeader.style.less";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";

const { Text } = Typography;

interface MasterHeaderType {
    onSearch: any;
    onClickAdd: any;
    dataCount: number;
    isBulkImportExport?: boolean;
    uploadProps?: any;
    downloadProps?: any;
    isCreate?: boolean;
}

function MasterHeader({
    onSearch,
    onClickAdd,
    dataCount,
    isBulkImportExport,
    uploadProps,
    downloadProps,
    isCreate,
}: MasterHeaderType) {
    return (
        <div className="master-header">
            <Row gutter={8}>
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
                    {isBulkImportExport && (
                        <div className="master-header-bulkImportExport">
                            <Upload {...uploadProps}>
                                <Button icon={<DownloadOutlined />}>
                                    Import
                                </Button>
                            </Upload>
                            <Button
                                {...downloadProps}
                                icon={<UploadOutlined />}
                            >
                                Export
                            </Button>
                        </div>
                    )}
                </Col>
                <Col span={2}>
                    {isCreate ? (
                        <div className="master-header-bulkImportExport">
                            <Button type="primary" onClick={onClickAdd}>
                                Create
                            </Button>
                        </div>
                    ) : (
                        <div className="master-header-addButton">
                            <Button type="primary" onClick={onClickAdd}>
                                Add
                            </Button>
                        </div>
                    )}
                </Col>
            </Row>
            <div className="master-header-count">
                <Text strong type="secondary">
                    {dataCount} Results
                </Text>
            </div>
        </div>
    );
}

export default MasterHeader;
