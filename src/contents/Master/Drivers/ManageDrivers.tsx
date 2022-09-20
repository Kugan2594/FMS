import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import DriverProfile from "./DriverProfile";
import { getAllDriverByCompanyIdAndBranchId } from "./ServiceDriver";
import { getUserDetails } from "../../Login/LoginAuthentication";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      branchName: post.branchResponseDto.branchName,
      contactNumber: post.userResponseDto.mobileNumber,
      // vehicleType: "car",
      drivingLicense: post.userResponseDto.drivingLicenseNo,
      drivingLicenseType: "Light Vehicle",
      nic: post.userResponseDto.nic,
      driverFirstName: post.userResponseDto.lastName,
      driverLastName: post.userResponseDto.lastName,
      vehicleIcon: <RocketOutlined />,
      email: post.userResponseDto.email,
      image:
        "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    };
  });
  return convertData;
}

function ManageDrivers() {
  const [driverData, setDriverData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [driver, setDriver] = useState([]);

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

  useEffect(() => {
    getAllDriverData(
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  }, []);

  const getAllDriverData = (companyId: number, branchId: number) => {
    let data: any = [];

    getAllDriverByCompanyIdAndBranchId(companyId, branchId).then(
      (res: any) => {
        data = createData(res.results.driver);
        setDriver(data);
      },
      (error: any) => {
        setDriver([]);
      }
    );
  };

  return (
    <>
      <MasterTemplateWithSmallCard
        data={driver}
        dataCount={driver.length}
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
    </>
  );
}

export default ManageDrivers;
