import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState, useEffect } from "react";
import AddParts from "././AddParts";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import moment from "moment";
import {
  deletePart,
  getAllPartsByCompanyId,
  getAllPartsByCompanyIdAndBranchId,
} from "././ServiceParts";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { errHandler, partDeleteSuccess } from "../../../helper/helper";

const { confirm } = Modal;

function ManageParts() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [parts, setParts] = useState([]);

  function createData(data: any) {
    let convertData = data.map((post: any, index: any) => {
      return {
        id: post.id,
        name: post.partResponseDto.name,
        progressData: post.healthPercentage,
        vehicleNo: post.vehicleNumber,
        branchName: "Rs. " + post.amount,
        lastChangedDate: moment(post.date).format("DD-MM-yyyy"),
        dueDate: moment(post.date)
          .add(post.expectedLifetimeInYears, "months")
          .format("DD-MM-yyyy"),
      };
    });
    return convertData;
  }

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

  const getAllPartsData = (companyId: Number, branchId: Number) => {
    let data: any = [];
    if (
      getUserDetails().roleName == "COMPANYBRANCHADMIN" ||
      getUserDetails().roleName == "COMPANYDRIVER"
    ) {
      getAllPartsByCompanyIdAndBranchId(companyId, branchId).then(
        (res: any) => {
          data = createData(res.results.companyParts);
          setParts(data);
        },
        (error: any) => {}
      );
    } else if (getUserDetails().roleName == "COMPANYADMIN") {
      getAllPartsByCompanyId(companyId).then(
        (res: any) => {
          data = createData(res.results.companyParts);
          setParts(data);
        },
        (error: any) => {}
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
        deletePart(id)
          .then((res: any) => {
            partDeleteSuccess();
            reloadTable(res);
          })
          .catch((error) => {
            errHandler(error);
          });
      },
    });
  };

  const reloadTable = (res: any) => {
    getAllPartsData(
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  };

  useEffect(() => {
    getAllPartsData(
      getUserDetails().company_id,
      getUserDetails().company_branch_id
    );
  }, []);

  return (
    <>
      <MasterTemplateWithLargeCard
        data={parts}
        dataCount={parts.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        cardOnClick={(id: string) => console.log("CLICKED " + id)}
        deleteButton={(id: string) => deleteClickHandler(id)}
        updateButton={showModalEdit}
      />

      <Modal
        title={isEdit ? "Edit Parts" : "Add  Parts"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        width={500}
        footer={false}
      >
        <AddParts
          onAdd={handleCancel}
          onCancel={handleCancel}
          reloadTable={reloadTable}
        />
      </Modal>
    </>
  );
}

export default ManageParts;
