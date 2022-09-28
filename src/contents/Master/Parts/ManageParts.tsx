import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState, useEffect } from "react";
import AddParts from "././AddParts";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import moment from "moment";
import { getAllPartsByCompanyIdAndBranchId } from "././ServiceParts";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";

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
        lastChangedDate: moment(post.date).format("DD-MM-yyyy"),
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
    getAllPartsByCompanyIdAndBranchId(companyId, branchId).then(
      (res: any) => {
        data = createData(res.results.companyParts);
        setParts(data);
      },
      (error: any) => {}
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
        deleteButton={(id: string) => console.log("DELETED " + id)}
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
        <AddParts onAdd={handleCancel} onCancel={handleCancel} />
      </Modal>
    </>
  );
}

export default ManageParts;
