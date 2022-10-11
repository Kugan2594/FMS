import SignUp from "../../../contents/Login/SignUp/SignUp";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { Modal } from "antd";

function ManageCompany() {
    const [open, setOpen] = useState(false);
    const data: any = [
        {
            companyName: "SGIC",
            address: "Jaffna",
            registrationNumber: "E001",
            companyPhoneNumber: "0212221231",
            companyEmail: "sgic@gmail.com",
            licenceType: 2,
            firstName: "Rishi",
            lastName: "Rishi",
            nic: "971414141V",
            mobileNumber: "94712385879",
            subscription: "GOLD",
            userType: "COMPANYADMIN",
            userStatus: "ACTIVE",
            email: "rishireiko@gmail.com",
            status: false,
        },
    ];
    const openAdd = () => {
        setOpen(true);
        console.log("open");
    };
    const deleteClickHandler = (id: any) => {};
    const openEdit = (data: any) => {};
    const handleCancel = () => {};
    return (
        <div>
            <MasterTemplateWithSmallCard
                data={data}
                headerOnSearch={() => {}}
                headerOnClickAdd={openAdd}
                cardOnClick={openAdd}
                onClickDelete={(id: number) => {
                    deleteClickHandler(id);
                }}
                onClickUpdate={(data: any) => openEdit(data)}
                dataCount={data.length}
                companyCard={true}
                privilege={false}
                branchCard={false}
                adminCard={false}
                isProgressBar={true}
                vehicleCard={false}
                generatorCard={false}
                driverCard={false}
                isCreate={true}
            />
            <Modal
                open={open}
                onCancel={handleCancel}
                closable={false}
                width={"70%"}
                footer={false}
            >
                <SignUp />
            </Modal>
            <SignUp />
        </div>
    );
}

export default ManageCompany;
