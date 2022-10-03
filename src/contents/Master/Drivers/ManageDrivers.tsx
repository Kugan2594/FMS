import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RocketOutlined } from "@ant-design/icons";
import DriverProfile from "./DriverProfile";
import {
  deleteDriver,
  getAllDriverByCompanyId,
  getAllDriverByCompanyIdAndBranchId,
} from "./ServiceDriver";
import { getUserDetails } from "../../Login/LoginAuthentication";
import { driverDeleteSuccess, errHandler } from "../../../helper/helper";
import AssignVehicle from "./AssignVehicle";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      userId: post.userResponseDto.id,
      branchId: post.branchResponseDto.branchName,
      mobileNumber: post.userResponseDto.mobileNumber,
      // vehicleType: "car",
      drivingLicenseNo: post.userResponseDto.drivingLicenseNo,
      drivingLicenseTypeId: post.userResponseDto.type,
      nic: post.userResponseDto.nic,
      firstName: post.userResponseDto.firstName,
      lastName: post.userResponseDto.lastName,
      vehicleIcon: <RocketOutlined />,
      email: post.userResponseDto.email,
      image: null,
      status: post.userResponseDto.status,
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
  const [isAssignVehicleModal, setIsAssignVehicleModal] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
    setisEdit(false);
  };

  const updateClickHandler = (data: any) => {
    setIsModalOpen(true);
    setisEdit(true);
    setDriverData(data);
  };

  const assignVehicleHandler = (data: any) => {
    setIsAssignVehicleModal(true);
    setDriverData(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setisEdit(false);
    setIsProfileModalOpen(false);
    setIsAssignVehicleModal(false);
  };

  const reloadTable = (res: any) => {
    getAllDriverData(getUserDetails().company_id);
  };

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Driver?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteDriver(id)
          .then((res: any) => {
            driverDeleteSuccess();
            reloadTable(res);
          })
          .catch((error) => {
            errHandler(error);
          });
      },
    });
  };

  const profileOnClickHandler = (data: any) => {
    setIsProfileModalOpen(true);
    setDriverData(data);
  };

  useEffect(() => {
    getAllDriverData(getUserDetails().company_id);
  }, []);

  const getAllDriverData = (companyId: number) => {
    let data: any = [];

    getAllDriverByCompanyId(companyId).then(
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
        onClickVehicleAssign={(data: any) => assignVehicleHandler(data)}
      />
      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Driver" : "Add New Driver"}
          open={isModalOpen}
          onCancel={handleCancel}
          closable={false}
          width={"50%"}
          footer={false}
        >
          <AddDriver
            isEdit={isEdit}
            updateDriverData={driverData}
            cancelClickHandler={handleCancel}
            reloadTable={reloadTable}
            setIsModelOpen={setIsModalOpen}
          />
        </Modal>
      )}
      {isProfileModalOpen && (
        <Modal
          open={isProfileModalOpen}
          onCancel={handleCancel}
          closable={false}
          width={"25%"}
          footer={false}
        >
          <DriverProfile driverProfileData={driverData} />
        </Modal>
      )}
      {isAssignVehicleModal && (
        <Modal
          open={isAssignVehicleModal}
          closable={false}
          width={"50%"}
          footer={false}
        >
          <AssignVehicle
            driverData={driverData}
            cancelClickHandler={handleCancel}
          />
        </Modal>
      )}
    </>
  );
}

export default ManageDrivers;
