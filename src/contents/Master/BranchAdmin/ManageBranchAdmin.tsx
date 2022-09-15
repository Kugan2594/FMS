import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { useState } from "react";
import { Modal, Space } from "antd";
import AddBranchAdmin from "../BranchAdmin/AddBranchAdmin";
import { ExclamationCircleOutlined, RocketOutlined } from "@ant-design/icons";
import ViewBranchAdmin from "../BranchAdmin/ViewBranchAdmin";

const { confirm } = Modal;
const data = [
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo 06,Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
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
        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
    {
        id: "2",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Triplicane",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
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

        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
    {
        id: "3",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
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
        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
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
        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
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
        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "Manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
        email: "kugan2594@gmail.com",
        adminFirstName: "Michael",
        adminLastName: "Clarke",
        driverFirstName: "Michael",
        driverLastName: "Clarke",
    },
];
interface ManageBranchType {}
function ManageBranchAdmin() {
    const [visible, setVisible] = useState(false);
    const [ok, setOk] = useState(false);
    const [edit, setEdit] = useState(false);
    const [formValues, setFormValues] = useState("");
    const onClickAddBranch = () => {};
    const showModal = () => {
        setVisible(!visible);
    };
    const handleOk = () => {
        setVisible(!visible);
        setEdit(false);
    };
    const handleCancel = () => {
        setVisible(!visible);
        setEdit(false);
    };
    const showEditModal = (data: any) => {
        setEdit(true);
        setVisible(!visible);
        setFormValues(data);
    };

    const [view, setView] = useState(false);
    const deleteHandler = (id: any) => {
        confirm({
            title: "Are you sure do you want to delete this Branch Admin?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {},
        });
    };
    const handleViewCancel = () => {
        setView(false);
    };
    const showViewModal = (data: string) => {
        setView(true);
        setFormValues(data);
    };
    return (
        <div>
            <MasterTemplateWithSmallCard
                data={data}
                dataCount={data.length}
                headerOnSearch={() => console.log("SEARCHED")}
                headerOnClickAdd={showModal}
                cardOnClick={(data: string) => showViewModal(data)}
                onClickDelete={(id: string) => deleteHandler(id)}
                onClickUpdate={(data: any) => showEditModal(data)}
                privilege={false}
                branchCard={false}
                adminCard={true}
                isProgressBar={false}
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
                        bodyStyle={{ borderRadius: "10" }}
                        width={450}
                    >
                        {edit ? (
                            <Space
                                style={{
                                    paddingBottom: "4%",
                                    fontSize: "18px",
                                }}
                            >
                                Edit branch Admin
                            </Space>
                        ) : (
                            <Space
                                style={{
                                    paddingBottom: "4%",
                                    fontSize: "18px",
                                }}
                            >
                                Add New branch Admin
                            </Space>
                        )}
                        <AddBranchAdmin
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
                        width={400}
                    >
                        <ViewBranchAdmin branchData={formValues} />
                    </Modal>
                )}
            </div>
        </div>
    );
}

export default ManageBranchAdmin;
