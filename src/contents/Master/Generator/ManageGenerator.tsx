import { Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddGenerator from "./AddGenerator";

const data = [
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "2",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "3",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "4",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "5",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "6",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "7",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "8",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "9",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "10",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
];

function ManageGenerator() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);

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
    return (
        <>
            <MasterTemplateWithSmallCard
                data={data}
                dataCount={data.length}
                headerOnSearch={() => console.log("SEARCHED")}
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                onClickDelete={(id: string) => console.log("DELETED " + id)}
                onClickUpdate={showModalEdit}
            />
            <Modal
                title={isEdit ? "Edit Generator" : "Add Generator"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={600}
            >
                <AddGenerator />
            </Modal>
        </>
    );
}

export default ManageGenerator;
