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
    vehicleModel?: string;
    driverCard?: boolean;
    generatorCard?: boolean;
    generatorBrand?: string;
    fuelType?: string;
    drivercard?: boolean;
    nic?: string;
    generatorName?: string;
    driverName?: string;
}

function MasterTemplateWithSmallCard({
    data,
    headerOnSearch,
    headerOnClickAdd,
    dataCount,
    cardOnClick,
    onClickUpdate,
    onClickDelete,
    isProgressBar,
    privilege,
    adminCard,
    branchCard,
    vehicleCard,
    generatorCard,
    driverCard,
}: TemplateType) {
    return (
        <div>
            <div className="master-template-small-card">
                <div>
                    <MasterHeader
                        onSearch={headerOnSearch}
                        onClickAdd={headerOnClickAdd}
                        dataCount={dataCount}
                    />
                </div>
                <div>
                    <List
                        grid={{ gutter: 16, column: 2 }}
                        itemLayout="vertical"
                        size="default"
                        pagination={{
                            onChange: (page: any) => {
                                console.log(page);
                            },
                            pageSize: 8,
                        }}
                        dataSource={data}
                        renderItem={(data) => (
                            <List.Item style={{ padding: 0 }} key={data.id}>
                                {
                                    <SmallCard
                                        key={data.id}
                                        branchLocation={data.branchLocation}
                                        name={data.name}
                                        cardOnClick={() => cardOnClick(data)}
                                        onClickUpdate={() =>
                                            onClickUpdate(data)
                                        }
                                        onClickDelete={() =>
                                            onClickDelete(data.id)
                                        }
                                        numberOfVehicles={data.numberOfVehicles}
                                        itemName={data.itemName}
                                        image={data.image}
                                        progressData={data.progressData}
                                        adminName={data.adminName}
                                        isProgressBar={isProgressBar}
                                        privilege={privilege}
                                        adminCard={adminCard}
                                        branchCard={branchCard}
                                        vehicleCard={vehicleCard}
                                        generatorCard={generatorCard}
                                        contactNumber={data.contactNumber}
                                        driverCard={driverCard}
                                        designation={data.designation}
                                        nic={data.nic}
                                        vehicleNumber={data.vehicleNumber}
                                        vehicleModel={data.vehicleModel}
                                        vehicleType={data.vehicleType}
                                        generatorBrand={data.generatorBrand}
                                        generatorName={data.generatorName}
                                        fuelType={data.fuelType}
                                        driverName={data.driverName}
                                        vehicleIcon={data.vehicleIcon}
                                        drivingLicense={data.drivingLicense}
                                    />
                                }
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default MasterTemplateWithSmallCard;
