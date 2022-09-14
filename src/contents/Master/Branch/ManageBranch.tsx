import { ExclamationCircleOutlined, RocketOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddBranch from "./AddBranch";
import { Button, Modal, Space } from "antd";
import ViewBranch from "./ViewBranch";
const { confirm } = Modal;
const data = [
    {
        id: "1",
        numberOfVehicles: 34,
        branchName: "Malaysia",
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Singapore",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        branchName: "Malaysia",
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        branchLocation: "Malaysia",
        branchName: "Malaysia",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        branchName: "Malaysia",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        branchName: "Malaysia",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        adminFirstName: "Michael",
        adminlastName: "Clarke",
        driverFirstName: "Michael",
        driverlastName: "Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail.com",
        branchName: "Malaysia",
    },
];
const mockData = {
    branchLocation: "Colombo",
    name: "Colombo Branch",
    adminName: "Michael Clarke",
    contactNumber: "0772250114",
};
function ManageBranch() {
    const [formValues, setFormValues]: any = useState("");
    const [visible, setVisible] = useState(false);
    const [ok, setOk] = useState(false);
    const [edit, setEdit] = useState(false);
    const [view, setView] = useState(false);
    const showModal = () => {
        setVisible(!visible);
    };
    const handleOk = () => {
        setVisible(!visible);
    };
    const handleCancel = () => {
        setVisible(!visible);
        setEdit(false);
    };
    const showEditModal = (data: any) => {
        setEdit(true);
        setVisible(!visible);
        setFormValues(data);
        console.log("DATA", data);
    };

    const onDeleteHandler = (id: any) => {
        confirm({
            title: "Are you sure do you want to delete this Branch?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {},
        });
    };
    const showViewModal = (data: string) => {
        setView(true);
        console.log(view);
    };
    const handleViewCancel = () => {
        setView(false);
    };
    return (
        <>
            <MasterTemplateWithSmallCard
                data={data}
                dataCount={data.length}
                headerOnSearch={() => console.log("SEARCHED")}
                headerOnClickAdd={showModal}
                cardOnClick={(data: string) => showViewModal(data)}
                onClickDelete={(id: string) => onDeleteHandler(id)}
                onClickUpdate={(data: any) => showEditModal(data)}
                privilege={false}
                branchCard={true}
                adminCard={false}
                isProgressBar={true}
                vehicleCard={false}
                generatorCard={false}
                driverCard={false}
            />
            <div>
                {visible && (
                    <Modal
                        visible={visible}
                        maskStyle={{ borderRadius: "25" }}
                        footer={false}
                    >
                        {edit ? (
                            <Space
                                style={{
                                    paddingBottom: "1%",
                                    fontSize: "18px",
                                }}
                            >
                                Edit branch
                            </Space>
                        ) : (
                            <Space
                                style={{
                                    paddingBottom: "1%",
                                    fontSize: "18px",
                                }}
                            >
                                Add New branch
                            </Space>
                        )}
                        <AddBranch
                            onClickAdd={handleOk}
                            onClickCancel={handleCancel}
                            initialValues={edit ? formValues : {}}
                        />
                    </Modal>
                )}
                {view && (
                    <Modal
                        visible={view}
                        maskStyle={{ borderRadius: "25" }}
                        footer={false}
                        onCancel={handleViewCancel}
                    >
                        <ViewBranch />
                    </Modal>
                )}
            </div>
        </>
    );
}
export default ManageBranch;
