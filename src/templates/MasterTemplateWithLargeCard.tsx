import React from "react";
import CardLarge from "../components/organisms/Cards/CardLarge";
import MasterHeader from "../components/organisms/MasterHeader/MasterHeader";
import { List } from "antd";
import "./templates.style.less";

// Component prop data array object contain following properties
// name = Part | Document | Service name
// provider = Secondary data
// progressData = Progress bar data(((system date - changed date)/durability in days)*100)
// vehicleNo = Part's Vehicle number
// vehicleModel = Parts's Vehicle model
// branch = Part's Branch
// dueDate = Part's due date
// cardOnClick = function when click card
// updateButton = function when click update button
// deleteButton = function when click delete button

interface TemplateType {
    data: CardType[];
    headerOnSearch: any;
    headerOnClickAdd: any;
    dataCount: number;
    cardOnClick?: any;
    updateButton?: any;
    deleteButton?: any;
}

interface CardType {
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

function MasterTemplateWithLargeCard({
    data,
    headerOnSearch,
    headerOnClickAdd,
    dataCount,
    cardOnClick,
    updateButton,
    deleteButton,
}: TemplateType) {
    return (
        <div className="master-template-large-card">
            <div>
                <MasterHeader
                    onSearch={headerOnSearch}
                    onClickAdd={headerOnClickAdd}
                    dataCount={dataCount}
                />
            </div>
            <div>
                <List
                    style={{ minHeight: 530 }}
                    itemLayout="vertical"
                    size="default"
                    pagination={{
                        onChange: (page: any) => {
                            console.log(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={data}
                    renderItem={(data) => (
                        <List.Item style={{ padding: 0 }} key={data.id}>
                            {
                                <CardLarge
                                    key={data.id}
                                    name={data.name}
                                    progressData={data.progressData}
                                    vehicleNo={data.vehicleNo}
                                    vehicleModel={data.vehicleModel}
                                    branchName={data.branchName}
                                    dueDate={data.dueDate}
                                    cardOnClick={() => cardOnClick(data.id)}
                                    updateButton={() => updateButton(data.id)}
                                    deleteButton={() => deleteButton(data.id)}
                                />
                            }
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default MasterTemplateWithLargeCard;
