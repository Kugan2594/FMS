import { Modal } from "antd";
import { useState } from "react";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import AddEco from "./AddEco";

const data = [
    {
        id: "1",
        name: "Emission Test",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "2",
        name: "Emission Test",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "3",
        name: "Emission Test",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "4",
        name: "Emission Test",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "5",
        name: "Emission Test",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    }
];

function ManageEco() {
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
            <MasterTemplateWithLargeCard
                data={data}
                dataCount={data.length}
                headerOnSearch={() => {}}
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                deleteButton={(id: string) => console.log("DELETED " + id)}
                updateButton={showModalEdit}
            />

            <Modal
                title={isEdit ? "Edit Emission Test" : "Add Emission Test"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
            >
                <AddEco />
            </Modal>
        </>
    );
}

export default ManageEco;
