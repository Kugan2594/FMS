import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import AddService from "./AddService";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
  deleteVehicleService,
  getAllVehicleServicesByCompanyIdAndBranchId,
  getAllVehicleServicesByCompanyId,
} from "./ServicesService";
import moment from "moment";
import {
  getAllVehiclesByCompanyId,
  getAllVehiclesByCompanyIdAndBranchId,
} from "../Vehicles/ServiceVehicle";
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
  const [vehicles, setvehicles] = useState([]);

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

  const getAllVehicleServices = (companyId: Number) => {
    let data: any = [];
    getAllVehicleServicesByCompanyId(companyId).then(
      (res: any) => {
        data = createData(res.results.companyVehicleService);
        setServices(data);
      },
      (error: any) => {}
    );
  };

  const getAllVehicles = (companyId: number) => {
    getAllVehiclesByCompanyId(companyId).then((res: any) => {
      let data: [] = createData(res.results.companyVehicle);
      setvehicles(data);
    });
  };

  const getAllVehiclesByCompanyAndBranch = (
    companyId: number,
    branchId: number
  ) => {
    getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
      (res: any) => {
        let data: [] = createData(res.results.vehicleByCompanyAndBranch);
        setvehicles(data);
      }
    );
  };

  useEffect(() => {
    if (getUserDetails().roleName == "COMPANYADMIN") {
      getAllVehicleServices(getUserDetails().company_id);
      getAllVehicles(getUserDetails().company_id);
    } else if (getUserDetails().roleName == "COMPANYBRANCHADMIN") {
      getAllVehicleServiceData(
        getUserDetails().company_id,
        getUserDetails().company_branch_id
      );
      getAllVehiclesByCompanyAndBranch(
        getUserDetails().company_id,
        getUserDetails().company_branch_id
      );
    }
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
