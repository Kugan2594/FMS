import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState } from "react";
import AddAccident from "./AddAccident";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";

const data = [
    {
        id: "1",
        name: "Accident",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    },
    {
        id: "8",
        name: "Accident",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    }
];

function ManageAccident() {
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
                title={isEdit ? "Edit Accident" : "Add Accident"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
            >
                <AddAccident />
            </Modal>
        </>
    );
}

export default ManageAccident;
