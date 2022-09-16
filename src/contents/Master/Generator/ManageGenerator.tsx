import { Modal } from "antd";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import React, { useState, useEffect } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddGenerator from "./AddGenerator";
import { getGeneratorByCompanyId } from "./ServiceGenerator";

function ManageGenerator() {
    const [addVisible, setAddVisible] = useState(false);
    const [editVisible, seteditVisible] = useState(false);
    const [generatorData, setgeneratorData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    const [action, setaction] = useState<string>("add");

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                branchName: getUserDetails().company_branch_name,
                progressData: 49,
                itemName: "Generator",
                adminFirstName: getUserDetails().firstName,
                branchLocation: "Jaffna",
                generatorBrand: post.generatorBrand,
                tankCapacity: post.tankCapacity,
                maximumPower: post.maximumPower,
            };
        });

        return convertData;
    };

    const reloadTable = (res: any) => {
        getAllGenerator(getUserDetails().company_id);
    };

    const openAdd = () => {
        setaction("add");
        setAddVisible(true);
        seteditVisible(false);
    };

    const openEdit = (data: any) => {
        setaction("edit");
        seteditVisible(true);
        setupdateData(data);
    };

    const handleOk = () => {
        setAddVisible(false);
    };

    const handleCancel = () => {
        setAddVisible(false);
        seteditVisible(false);
    };

    const getAllGenerator = (companyId: number) => {
        getGeneratorByCompanyId(companyId).then((res: any) => {
            let data: any = createData(res.results.Generator);
            setgeneratorData(data);
        });
    };

    useEffect(() => {
        getAllGenerator(getUserDetails().company_id);
    }, []);

    return (
        <>
            <MasterTemplateWithSmallCard
                data={generatorData}
                dataCount={generatorData.length}
                headerOnSearch={() => {}}
                headerOnClickAdd={openAdd}
                cardOnClick={openAdd}
                onClickDelete={(id: string) => {}}
                onClickUpdate={(data: any) => openEdit(data)}
                generatorCard={true}
            />

            {addVisible ? (
                <AddGenerator
                    title={"Add Generator"}
                    visible={addVisible}
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                    setAddVisible={setAddVisible}
                    updateData={editVisible ? updateData : null}
                    reloadTable={reloadTable}
                />
            ) : editVisible ? (
                <AddGenerator
                    title={"Edit Generator"}
                    visible={editVisible}
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                    setAddVisible={seteditVisible}
                    updateData={editVisible ? updateData : null}
                    reloadTable={reloadTable}
                />
            ) : (
                <></>
            )}
        </>
    );
}

export default ManageGenerator;
