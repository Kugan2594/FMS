import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useEffect, useState } from "react";
import AddEco from "./AddEco";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import { createDeflateRaw } from "zlib";
import {
  deleteEmissionTest,
  getAllEmissionTestDocumentByCompanyId,
  getAllEmissionTestDocumentByCompanyIdAndBranchId,
  getAllEmissionTestDocumentByUserId,
} from "./ServicesEco";
import { getUserDetails } from "../../Login/LoginAuthentication";
import moment from "moment";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { ecoDocumentDeleteSuccess, errHandler } from "../../../helper/helper";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      name: "EmissionTest",
      progressData: post.emissionTestValidity,
      vehicleNo: post.vehicleResponseDto.vehicleNumber,
      vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel,
      branchName: "Jaffna Branch",
      dueDate: moment(post.emissionTestExpiryDate).format("DD-MM-yyyy"),
      lastChangedDate: moment(post.updatedAt).format("DD-MM-yyyy"),
      emissionTestAmount: post.emissionTestAmount,
    };
  });
  return convertData;
}
function ManageEco() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [eco, setEco] = useState([]);
  const [updateData, setUpdataData] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
    setisEdit(false);
  };

  const showModalEdit = (data: any) => {
    setIsModalOpen(true);
    setisEdit(true);
    setUpdataData(data);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllEmissionTestData(
      getUserDetails().user_id,
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  }, []);
  const getAllEmissionTestData = (
    userId: number,
    companyId: number,
    branchId: number
  ) => {
    let data: any = [];
    if (getUserDetails().roleName === "COMPANYDRIVER") {
      getAllEmissionTestDocumentByUserId(userId).then(
        (res: any) => {
          data = createData(res.results.emissionTest);
          setEco(data);
        },
        (error: any) => {
          setEco([]);
        }
      );
    } else if (getUserDetails().roleName === "COMPANYADMIN") {
      getAllEmissionTestDocumentByCompanyId(companyId).then(
        (res: any) => {
          data = createData(res.results.emissionTest);
          setEco(data);
        },
        (error: any) => {
          setEco([]);
        }
      );
    } else if (getUserDetails().roleName === "COMPANYBRANCHADMIN") {
      getAllEmissionTestDocumentByCompanyIdAndBranchId(
        companyId,
        branchId
      ).then(
        (res: any) => {
          data = createData(res.results.emissionTest);
          setEco(data);
        },
        (error: any) => {
          setEco([]);
        }
      );
    }
  };

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Emission Test Document?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteEmissionTest(id)
          .then((res: any) => {
            ecoDocumentDeleteSuccess();
            reloadTable(res);
          })
          .catch((error) => {
            errHandler(error);
          });
      },
    });
  };

  const reloadTable = (res: any) => {
    getAllEmissionTestData(
      getUserDetails().user_id,
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  };

  return (
    <>
      <MasterTemplateWithLargeCard
        data={eco}
        dataCount={eco.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        cardOnClick={(id: string) => console.log("CLICKED " + id)}
        deleteButton={(id: string) => deleteClickHandler(id)}
        updateButton={(data: any) => showModalEdit(data)}
      />

      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Emission Test" : "Add Emission Test"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={500}
          footer={null}
        >
          <AddEco
            updateData={updateData}
            isEdit={isEdit}
            reloadTable={reloadTable}
            setIsModelOpen={setIsModalOpen}
            cancelClickHandler={handleCancel}
          />
        </Modal>
      )}
    </>
  );
}

export default ManageEco;
