import { Modal } from "antd";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import React, { useState, useEffect } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddGenerator from "./AddGenerator";
import { getGeneratorByCompanyId } from "./ServiceGenerator";

function ManageGenerator() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [generatorData, setgeneratorData] = useState([]);

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
            };
        });

        return convertData;
    };

    const showModal = () => {
        setIsModalOpen(true);
        setisEdit(false);
    };

    const showModalEdit = () => {
        setIsModalOpen(true);
        setisEdit(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
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
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => {}}
                onClickDelete={(id: string) => {}}
                onClickUpdate={showModalEdit}
                generatorCard={true}
            />
            <Modal
                title={isEdit ? "Edit Generator" : "Add Generator"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={"35%"}
                footer={null}
            >
                <AddGenerator />
            </Modal>
        </>
    );
}

export default ManageGenerator;
