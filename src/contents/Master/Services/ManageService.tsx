import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import AddService from "./AddService";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
  deleteVehicleService,
  getAllVehicleServices,
  getAllVehicleServicesByCompanyIdAndBranchId,
} from "./ServicesService";
import moment from "moment";
import { getAllVehiclesByCompanyIdAndBranchId } from "../Vehicles/ServiceVehicle";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { VehicleServiceDeletedSuccess } from "../../../helper/helper";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      name: post.serviceResponseDto.serviceName,
      progressData: post.serviceValidity,
      vehicleNo: post.vehicleNumber,
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
        data = createData(res.results.companyVehicleService);
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

  const reloadTable = (res: any) => {
    getAllVehicleServiceData(
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  };

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Vehicle Service?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteVehicleService(id).then((res: any) => {
          VehicleServiceDeletedSuccess();
          reloadTable(res);
        });
      },
    });
  };

  return (
    <>
      <MasterTemplateWithLargeCard
        data={services}
        dataCount={services.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        cardOnClick={(id: string) => console.log("CLICKED " + id)}
        deleteButton={(id: string) => deleteClickHandler(id)}
        updateButton={showModalEdit}
      />

      <Modal
        title={isEdit ? "Edit Service" : "Add Service"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={500}
        footer={false}
      >
        <AddService
          onAdd={handleCancel}
          onCancel={handleCancel}
          reloadTable={reloadTable}
        />
      </Modal>
    </>
  );
}
export default ManageService;
