import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddVehicle from "./AddVehicle";
import { getAllVehiclesByCompanyId } from "./ServiceVehicle";
import { getUserDetails } from "../../Login/LoginAuthentication";

const { confirm } = Modal;

function ManageVehicles() {
    const [vehicleData, setVehicleData] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [vehicles, setvehicles] = useState([]);

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                vehicleNumber: post.vehicleNumber,
                lease: post.lease,
                color: post.color,
                vehicleOwner: post.vehicleOwner,
                tankCapacity: post.tankCapacity,
                reserveTankCapacity: post.reserveTankCapacity,
                maximumWeightCarriable: post.maximumWeightCarriable,
                branchLocation: getUserDetails().company_branch_name,
                companyId: getUserDetails().company_id,
                branchId: getUserDetails().company_branch_id,
                progressData: 80,
                image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                vehicleIdFromResource: post.resourceVehicleDto.id,
                vehicleModel: post.resourceVehicleDto.vehicleModel,
                vehicleType: post.resourceVehicleDto.vehicleType,
            };
        });

        return convertData;
    };

    const profileOnClickHandler = (data: any) => {
        setIsProfileModalOpen(true);
        setVehicleData(data);
    };

    const showModal = () => {
        setIsModalOpen(true);
        setisEdit(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setisEdit(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setisEdit(false);
        setIsProfileModalOpen(false);
    };

    const getAllVehicles = (companyId: number) => {
        getAllVehiclesByCompanyId(companyId).then((res: any) => {
            let data: [] = createData(res.results.companyVehicle);
            setvehicles(data);
        });
    };

    useEffect(() => {
        getAllVehicles(getUserDetails().company_id);
    }, []);

    const deleteClickHandler = (id: string) => {
        confirm({
            title: "Are you sure delete this Vehicle?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                //Delete API
            },
        });
    };

    const updateClickHandler = (data: any) => {
        setIsModalOpen(true);
        setisEdit(true);
        setVehicleData(data);
    };

    const branches = [
        { id: 1, name: "Jaffna" },
        { id: 2, name: "Vavuniya" },
        { id: 3, name: "Colombo" },
        { id: 4, name: "Kandy" },
    ];

    const vehicleModels = [
        { id: 1, name: "TOYOTA aqua" },
        { id: 2, name: "HONDA suv" },
        { id: 3, name: "AUDI a6" },
        { id: 4, name: "FORD" },
    ];

    return (
        <>
            <MasterTemplateWithSmallCard
                data={vehicles}
                dataCount={vehicles.length}
                headerOnClickAdd={showModal}
                headerOnSearch={() => {}}
                cardOnClick={(data: any) => profileOnClickHandler(data)}
                onClickDelete={(id: any) => deleteClickHandler(id)}
                onClickUpdate={(data: any) => updateClickHandler(data)}
                vehicleCard={true}
                isProgressBar={true}
            />
            {isModalOpen &&
            <Modal
                title={isEdit ? "Edit Vehicle" : "Add New Vehicle"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={"50%"}
                footer={null}
            >
                <AddVehicle
                    isEdit={isEdit}
                    branches={branches}
                    vehicleModels={vehicleModels}
                    cancelClickHandler={handleCancel}
                    updateVehicleData={vehicleData}
                />
            </Modal>}
        </>
    );
}

export default ManageVehicles;
