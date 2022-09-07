import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState } from "react";
import AddService from "./AddService";
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

];

function ManageService() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
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
                updateButton={(id: string) => console.log("UPDATED " + id)}
            />

            <Modal
                title="Add Service"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
            >
                <AddService />
            </Modal>
        </>
    );
}

export default ManageService;
