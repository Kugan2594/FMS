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
                                        cardOnClick={() => cardOnClick(data.id)}
                                        onClickUpdate={() =>
                                            onClickUpdate(data.id)
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
