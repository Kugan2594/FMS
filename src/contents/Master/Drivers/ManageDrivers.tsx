import { Button, Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function ManageDrivers() {
  const [updateData, setUpdateData] = useState({
    id: "",
    progressData: 0,
    itemName: "",
    branchLocation: "",
    branchName: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [eco,setEco]=useState([]);

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

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Driver?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        console.log(id);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const data = [
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
    {
      id: "1",
      numberOfVehicles: 34,
      progressData: 49,
      itemName: "Vehicles",
      branchLocation: "Colombo",
      name: "Colombo Branch",
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
    },
  ];

  return (
    <div>
      <MasterTemplateWithSmallCard
        data={data}
        dataCount={data.length}
        headerOnClickAdd={showModal}
        headerOnSearch={() => {}}
        cardOnClick={() => {}}
        onClickDelete={(id: any) => deleteClickHandler(id)}
        onClickUpdate={showModalEdit}
        driverCard={true}
      />
      <Modal
        title={isEdit ? "Edit Driver" : "Add New Driver"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={500}
      >
        <AddDriver />
      </Modal>
    </div>
  );
}

export default ManageDrivers;
