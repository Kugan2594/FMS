import { DownloadOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, notification, Upload } from "antd";
import { useEffect, useState } from "react";
import { SYSTEM_CONFIG } from "../../../utils/StytemConfig";
import { vehicleDeleteSuccess } from "../../../helper/helper";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { getUserDetails } from "../../Login/LoginAuthentication";
import AddVehicle from "./AddVehicle";
import {
  deleteVehicleByVehicleNumberAndCompanyId,
  getAllVehiclesByCompanyId,
} from "./ServiceVehicle";
import VehicleProfile from "./VehicleProfile";

const { confirm } = Modal;

function ManageVehicles() {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [vehicles, setvehicles] = useState([]);
  const [addVisible, setAddVisible] = useState(false);
  const [editVisible, seteditVisible] = useState(false);
  const [vehicleNum, setvehicleNum] = useState<string>("");
  const [updateData, setupdateData] = useState({});
  const [action, setaction] = useState<string>("add");

  const createData = (data: any) => {
    let convertData = data.map((post: any) => {
      return {
        id: post.id,
        vehicleNumber: post.vehicleNumber,
        lease: post.lease,
        color: post.color,
        vehicleOwner: post.vehicleOwner,
        tankCapacity: post.tankCapacity,
        reserveTankCapacity: post.reserveTankCapacity,
        maximumWeightCarriable: post.maximumWeightCarriable,
        branchLocation: getUserDetails().company_branch_name,
        companyId: getUserDetails().company_id,
        branchId: getUserDetails().company_branch_id,
        progressData: 80,
        image:
          "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        vehicleIdFromResource: post.resourceVehicleDto.id,
        vehicleModel: post.resourceVehicleDto.vehicleModel,
        vehicleType: post.resourceVehicleDto.vehicleType,
      };
    });

    return convertData;
  };

  const profileOnClickHandler = (data: any) => {
    setIsProfileModalOpen(true);
    setvehicles(data);
  };

  const openAdd = () => {
    setaction("add");
    setAddVisible(true);
    seteditVisible(false);
  };

  const openEdit = (data: any) => {
    setaction("edit");
    seteditVisible(true);
    setupdateData(data);
    setvehicleNum(data.vehicleNumber);
  };

  const handleOk = () => {
    setAddVisible(false);
  };

  const handleCancel = () => {
    setAddVisible(false);
    seteditVisible(false);
    setIsProfileModalOpen(false);
  };

  const getAllVehicles = (companyId: number) => {
    getAllVehiclesByCompanyId(companyId).then((res: any) => {
      let data: [] = createData(res.results.companyVehicle);
      setvehicles(data);
    });
  };

  const reloadTable = (res: any) => {
    getAllVehicles(getUserDetails().company_id);
  };

  const deleteVehicleData = (vehicleNumber: string, companyId: number) => {
    deleteVehicleByVehicleNumberAndCompanyId(vehicleNumber, companyId).then(
      (res) => {
        vehicleDeleteSuccess();
        reloadTable(res);
      }
    );
  };

  useEffect(() => {
    getAllVehicles(getUserDetails().company_id);
  }, []);

  const deleteClickHandler = (vehicleNumber: any) => {
    confirm({
      title: "Are you sure delete this Vehicle?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteVehicleData(vehicleNumber, getUserDetails().company_id);
      },
    });
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

  const uploadProps = {
    name: "file",
    action: SYSTEM_CONFIG.baseUrl + "/csvUpload",
    onChange(info: any) {
      if (info.file.status !== "uploading") {
      }

      if (info.file.status === "done") {
        getAllVehicles(getUserDetails().company_id);

        if (info.file.response.hasOwnProperty("results")) {
          if (
            info.file.response.results.bulkImport.employeesDesignation.length >
            0
          ) {
            notification.error({
              message: `Designations doesn't match for following Employees : ${info.file.response.results.bulkImport.employeesDesignation}`,
            });
          }
          if (info.file.response.results.bulkImport.employeesId.length > 0) {
            notification.error({
              message: `Duplicate Employee IDs : ${info.file.response.results.bulkImport.employeesId}`,
              duration: 3,
            });
          }
          if (info.file.response.results.bulkImport.employeesEmail.length > 0) {
            notification.error({
              message: `Duplicate Email Id : ${info.file.response.results.bulkImport.employeesEmail}`,
              duration: 3,
            });
          }
        } else {
          notification.success({
            message: `File uploaded successfully : ${info.file.name}`,
            duration: 3,
          });
        }
      } else if (info.file.status === "error") {
        console.log(info.file);
        notification.error({
          message: `File upload failed: \n ${info.file.response.message}`,
          duration: 3,
        });
      }
    },
    showUploadList: false,
  };

  return (
    <>
      <MasterTemplateWithSmallCard
        data={vehicles}
        dataCount={vehicles.length}
        headerOnClickAdd={() => setIsProfileModalOpen(true)}
        headerOnSearch={() => {}}
        cardOnClick={(data: any) => profileOnClickHandler(data)}
        onClickVehicleDelete={(vehicleNumber: string) =>
          deleteClickHandler(vehicleNumber)
        }
        onClickUpdate={(data: any) => openEdit(data)}
        vehicleCard={true}
        isProgressBar={true}
      />

      {addVisible ? (
        <AddVehicle
          title={"Add Vehicle"}
          visible={addVisible}
          handleCancel={handleCancel}
          handleOk={handleOk}
          setAddVisible={setAddVisible}
          updateData={editVisible ? updateData : null}
          reloadTable={reloadTable}
          action={action}
          vehicleModels={vehicleModels}
          branches={branches}
        />
      ) : editVisible ? (
        <AddVehicle
          title={"Edit Vehicle"}
          visible={editVisible}
          handleCancel={handleCancel}
          handleOk={handleOk}
          setAddVisible={seteditVisible}
          updateData={editVisible ? updateData : null}
          reloadTable={reloadTable}
          action={action}
          vehicleModels={vehicleModels}
          branches={branches}
        />
      ) : isProfileModalOpen ? (
        <Modal
          title={false}
          open={isProfileModalOpen}
          onCancel={handleCancel}
          closable={false}
          width={"75%"}
          footer={false}
        >
          <VehicleProfile />
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
}

export default ManageVehicles;
