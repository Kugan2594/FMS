import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import AddService from "./AddService";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
  getAllVehicleServices,
  getAllVehicleServicesByCompanyIdAndBranchId,
} from "./ServicesService";
import moment from "moment";
import { getAllVehiclesByCompanyIdAndBranchId } from "../Vehicles/ServiceVehicle";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      name: post.serviceResponseDto.serviceName,
      progressData: post.serviceValidity,
      vehicleNo: post.vehicleResponseDto.vehicleNumber,
      lastChangedDate: moment(post.serviceDate).format("DD-MM-yyyy"),
    };
  });
  return convertData;
}

function ManageService() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [services, setServices] = useState([]);

  const showModal = () => {
    setIsModalOpen(true);
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

  const getAllVehicleServiceData = (companyId: Number, branchId: Number) => {
    let data: any = [];
    getAllVehicleServicesByCompanyIdAndBranchId(companyId, branchId).then(
      (res: any) => {
        data = createData(res.results.service);
        setServices(data);
      },
      (error: any) => {}
    );
  };

  useEffect(() => {
    getAllVehicleServiceData(
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  }, []);

  return (
    <>
      <MasterTemplateWithLargeCard
        data={services}
        dataCount={services.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        cardOnClick={(id: string) => console.log("CLICKED " + id)}
        deleteButton={(id: string) => console.log("DELETED " + id)}
        updateButton={showModalEdit}
      />

      <Modal
        title={isEdit ? "Edit Service" : "Add Service"}
        open={isModalOpen}
        onOk={handleOk}
        // onCancel={handleCancel}
        closable={false}
        width={500}
        footer={false}
      >
        <AddService onAdd={handleCancel} onCancel={handleCancel} />
      </Modal>
    </>
  );
}
export default ManageService;
