import { Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function ManageDrivers() {
  const [updateDriverData, setUpdateDriverData] = useState({
    id: "",
    name: "",
    contactNumber: "",
    vehicleType: "",
    drivingLicense: "",
    nic: "",
    driverName: "",
  });

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setisEdit(false);
  };

  const updateClickHandler = (data: any) => {
    setIsModalOpen(true);
    setisEdit(true);
    setUpdateDriverData(data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setisEdit(false);
    setUpdateDriverData({
      id: "",
      name: "",
      contactNumber: "",
      vehicleType: "",
      drivingLicense: "",
      nic: "",
      driverName: "",
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setisEdit(false);

    setUpdateDriverData({
      id: "",
      name: "",
      contactNumber: "",
      vehicleType: "",
      drivingLicense: "",
      nic: "",
      driverName: "",
    });
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

  const data = [
    {
      id: "1",
      name: "Colombo Branch",
      contactNumber: "0772250114",
      vehicleType: "car",
      drivingLicense: "82763871",
      nic: "941234500V",
      driverName: "Kugan",
      vehicleIcon: <RocketOutlined />,
      test: "test1",
    },
    {
      id: "2",
      name: "Jaffna Branch",
      contactNumber: "0772250114",
      vehicleType: "car",
      drivingLicense: "82763871",
      nic: "941234500V",
      driverName: "Cudeson",
      vehicleIcon: <RocketOutlined />,
      test: "test2",
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
            updateDriverData={updateDriverData}
            branches={branches}
            licenseTypes={licenseType}
            cancelClickHandler={handleCancel}
          />
        </Modal>
      )}
    </div>
  );
}

export default ManageDrivers;
