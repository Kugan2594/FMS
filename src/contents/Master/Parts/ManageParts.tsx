import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState } from "react";
import AddParts from "./AddParts";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";

const data = [
    {
        id: "1",
        name: "Parts",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "67",
        name: "Parts",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
];

function ManageParts() {
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
                title={isEdit ? "Edit Parts" : "Add  Parts"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
                footer={false}
            >
                <AddParts onAdd={handleCancel} onCancel={handleCancel} />
            </Modal>
        </>
    );
}

export default ManageParts;
