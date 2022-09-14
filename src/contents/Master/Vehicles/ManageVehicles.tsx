import { Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import AddVehicle from "./AddVehicle";

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

  const licenseType = [
    { id: 1, name: "Heavy Vehicle" },
    { id: 2, name: "Light Vehicle" },
  ];

  const branches = [
    { id: 1, name: "Jaffna" },
    { id: 2, name: "Vavuniya" },
    { id: 3, name: "Colombo" },
    { id: 4, name: "Kandy" },
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
    },
    {
      id: "2",
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
        isProgressBar={false}
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
            cancelClickHandler={handleCancel}
            updateVehicleData={vehicleData}
          />
        </Modal>
      )}
    </div>
  );
}

export default ManageVehicles;
