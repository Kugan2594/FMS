import { List } from "antd";
import CardLarge from "../components/organisms/Cards/CardLarge";
import SmallCard, {
    CardSmallType,
} from "../components/organisms/Cards/SmallCard";
import MasterHeader from "../components/organisms/MasterHeader/MasterHeader";

import React from "react";
interface TemplateType {
    data: CardSmallType[];
    headerOnSearch: any;
    headerOnClickAdd: any;
    dataCount: number;
    cardOnClick?: any;
    onClickUpdate?: any;
    onClickDelete?: any;
    onClickVehicleDelete?: any;
    isProgressBar?: boolean;
    privilege?: boolean;
    adminCard?: boolean;
    branchCard?: boolean;
    contactNumber?: string;
    vehicleCard?: boolean;
    vehicleNumber?: string;
    vehicleType?: string;
    designation?: string;
    drivingLicense?: string;
    tankCapacity?: any;
    maximumPower?: any;
    vehicleModel?: string;
    driverCard?: boolean;
    generatorCard?: boolean;
    generatorBrand?: string;
    fuelType?: string;
    drivercard?: boolean;
    nic?: string;
    generatorName?: string;
    driverName?: string;
    isBulkImportExport?: boolean;
    uploadProps?: any;
    downloadProps?: any;
    onClickVehicleAssign?: any;
}

function MasterTemplateWithSmallCard({
    data,
    headerOnSearch,
    headerOnClickAdd,
    dataCount,
    cardOnClick,
    onClickUpdate,
    onClickDelete,
    onClickVehicleDelete,
    isProgressBar,
    privilege,
    adminCard,
    branchCard,
    vehicleCard,
    generatorCard,
    driverCard,
    isBulkImportExport,
    uploadProps,
    downloadProps,
    onClickVehicleAssign,
}: TemplateType) {
    return (
            <div className="master-template-small-card" style={{width:"100%"}}>
                <div>
                    <MasterHeader
                        onSearch={headerOnSearch}
                        onClickAdd={headerOnClickAdd}
                        dataCount={dataCount}
                        isBulkImportExport={isBulkImportExport}
                        uploadProps={uploadProps}
                        downloadProps={downloadProps}
                    />
                </div>
                <div>
                    <List
                    style={{ height: "100%"}}
                        grid={{ gutter: 16, column: 2 }}
                        itemLayout="vertical"
                        size="default"
                        pagination={{
                            onChange: (page: any) => {
                                console.log(page);
                            },
                            pageSize: 6,
                        }}
                        dataSource={data}
                        renderItem={(data) => (
                            <List.Item style={{ padding: 0 }} key={data.id}>
                                {
                                    <SmallCard
                                        key={data.id}
                                        branchLocation={data.branchLocation}
                                        branchName={data.branchName}
                                        onCardClick={() => cardOnClick(data)}
                                        onClickUpdate={() =>
                                            onClickUpdate(data)
                                        }
                                        onClickDelete={() =>
                                            onClickDelete(data.id)
                                        }
                                        onClickVehicleDelete={() => {
                                            onClickVehicleDelete(
                                                data.vehicleNumber
                                            );
                                        }}
                                        onClickVehicleAssign={() => {
                                            onClickVehicleAssign(data);
                                        }}
                                        status={data.status}
                                        numberOfVehicles={data.numberOfVehicles}
                                        itemName={data.itemName}
                                        image={data.image}
                                        progressData={data.progressData}
                                        adminFirstName={data.adminFirstName}
                                        adminLastName={data.adminLastName}
                                        firstName={data.firstName}
                                        lastName={data.lastName}
                                        isProgressBar={isProgressBar}
                                        privilege={privilege}
                                        adminCard={adminCard}
                                        branchCard={branchCard}
                                        vehicleCard={vehicleCard}
                                        generatorCard={generatorCard}
                                        mobileNumber={data.mobileNumber}
                                        driverCard={driverCard}
                                        designation={data.designation}
                                        nic={data.nic}
                                        vehicleNumber={data.vehicleNumber}
                                        vehicleModel={data.vehicleModel}
                                        vehicleType={data.vehicleType}
                                        generatorBrand={data.generatorBrand}
                                        generatorName={data.generatorName}
                                        fuelType={data.fuelType}
                                        vehicleIcon={data.vehicleIcon}
                                        drivingLicenseNo={data.drivingLicenseNo}
                                        tankCapacity={data.tankCapacity}
                                        maximumPower={data.maximumPower}
                                    />
                                }
                            </List.Item>
                        )}
                    />
                </div>
            </div>
    );
}

export default MasterTemplateWithSmallCard;
