import { Button, Modal } from "antd";
import { useState } from "react";
import AddService from "./AddService";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
const data = [
    {
        id: "1",
        name: "Water Service",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        dueDate: "23 Mar 2022",
    },
];
function ManageService() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
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
                title={isEdit ? "Edit Service" : "Add Service"}
                open={isModalOpen}
                onOk={handleOk}
                // onCancel={handleCancel}
                closable={false}
                width={500}
                footer={false}
            >
                <AddService onAdd={handleCancel} onCancel={handleCancel} />
            </Modal>
        </>
    );
}
export default ManageService;
