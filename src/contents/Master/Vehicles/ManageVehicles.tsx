import { Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import AddVehicle from "./AddVehicle";
import VehicleProfile from "./VehicleProfile";

const { confirm } = Modal;

function ManageVehicles() {
  const [vehicleData, setVehicleData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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

  const data = [
    {
      id: "1",
      vehicleNumber: "BAT-9470",
      lease: true,
      color: "red",
      vehicleOwner: "Cudeson",
      tankCapacity: 10.1,
      reserveTankCapacity: 10.2,
      maximumWeightCarriable: 10.2,
      vehicleIdFromResource: 1,
      vehicleModel: "TOYOTA aqua",
      vehicleType: "Car",
      branchLocation: "Jaffna",
      companyId: 1,
      branchId: 1,
      progressData: 80,
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      id: "2",
      vehicleNumber: "BAT-9470",
      lease: false,
      color: "red",
      vehicleOwner: "Cudeson",
      tankCapacity: 10.1,
      reserveTankCapacity: 10.2,
      maximumWeightCarriable: 10.2,
      vehicleIdFromResource: 1,
      vehicleModel: "TOYOTA aqua",
      vehicleType: "Car",
      branchLocation: "Jaffna",
      companyId: 1,
      branchName: "Colombo",
      progressData: 40,
      image: "https://picsum.photos/200",
    },
    {
      id: "3",
      vehicleNumber: "BAT-9470",
      lease: false,
      color: "red",
      vehicleOwner: "Cudeson",
      tankCapacity: 10.1,
      reserveTankCapacity: 10.2,
      maximumWeightCarriable: 10.2,
      vehicleIdFromResource: 1,
      vehicleModel: "TOYOTA aqua",
      vehicleType: "Car",
      branchLocation: "Jaffna",
      companyId: 1,
      branchName: "Colombo",
      progressData: 40,
    },
  ];

  return (
    <div>
      <MasterTemplateWithSmallCard
        data={data}
        dataCount={data.length}
        headerOnClickAdd={showModal}
        headerOnSearch={() => {}}
        cardOnClick={(data: any) => profileOnClickHandler(data)}
        onClickDelete={(id: any) => deleteClickHandler(id)}
        onClickUpdate={(data: any) => updateClickHandler(data)}
        vehicleCard={true}
        isProgressBar={true}
      />
      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Vehicle" : "Add New Vehicle"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={"50%"}
          footer={false}
        >
          <AddVehicle
            isEdit={isEdit}
            branches={branches}
            vehicleModels={vehicleModels}
            cancelClickHandler={handleCancel}
            updateVehicleData={vehicleData}
          />
        </Modal>
      )}
      {isProfileModalOpen && (
        <Modal
          open={isProfileModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={"25%"}
          footer={false}
        >
          <VehicleProfile />
        </Modal>
      )}
    </div>
  );
}

export default ManageVehicles;
