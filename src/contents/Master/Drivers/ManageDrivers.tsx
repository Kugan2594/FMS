import { Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import DriverProfile from "./DriverProfile";

const { confirm } = Modal;

function ManageDrivers() {
  const [driverData, setDriverData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setisEdit(false);
  };

  const updateClickHandler = (data: any) => {
    setIsModalOpen(true);
    setisEdit(true);
    setDriverData(data);
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

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Driver?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        //Delete API
      },
    });
  };

  const profileOnClickHandler = (data: any) => {
    setIsProfileModalOpen(true);
    setDriverData(data);
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
      branchName: "Colombo",
      contactNumber: "0772250114",
      vehicleType: "car",
      drivingLicense: "82763871",
      drivingLicenseType: "Light Vehicle",
      nic: "941234500V",
      driverFirstName: "Kugan",
      driverLastName: "Kuga",
      vehicleIcon: <RocketOutlined />,
      email: "kugan@gmail.com",
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        assignedVehicles: ["V1","V2"]
    },
    {
      id: "2",
      branchName: "Jaffna",
      contactNumber: "0772250114",
      vehicleType: "car",
      drivingLicense: "82763871",
      drivingLicenseType: "Light Vehicle",
      nic: "941234500V",
      driverFirstName: "Cudeson",
      driverLastName: "Cudeson",
      vehicleIcon: <RocketOutlined />,
      email: "Cudeson@gmail.com",
      assignedVehicles: ["V1"]
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
        driverCard={true}
      />
      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Driver" : "Add New Driver"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={"50%"}
          footer={false}
        >
          <AddDriver
            isEdit={isEdit}
            updateDriverData={driverData}
            branches={branches}
            licenseTypes={licenseType}
            cancelClickHandler={handleCancel}
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
          <DriverProfile driverProfileData={driverData} />
        </Modal>
      )}
    </div>
  );
}

export default ManageDrivers;
