import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useEffect, useState } from "react";
import AddInsurance from "./AddInsurance";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import moment from "moment";
import { getUserDetails } from "../../Login/LoginAuthentication";
import { deleteInsurance, getInsuranceByUserId } from "./ServiceInsurance";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      name: "Insurance Document",
      progressData: post.insuranceValidity,
      vehicleNo: post.vehicleResponseDto.vehicleNumber,
      vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel,
      branchName: "Jaffna Branch",
      lastChangedDate: moment(post.updatedAt).format("DD-MM-yyyy"),
      dueDate: moment(post.insuranceExpiryDate).format("DD-MM-yyyy"),
      insuranceAmount: post.insuranceAmount,
      insuranceProvider: post.insuranceProvider,
      insuranceType: post.insuranceType,
      policyHolderName: post.policyHolderName,
      policyNumber: post.policyNumber,
    };
  });
  return convertData;
}

function ManageInsurance() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [insurance, setInsurance] = useState([]);
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
    setisEdit(false);
    setIsModalOpen(false);
  };

  useEffect(() => {
    getInsuranceByUserIdData(getUserDetails().user_id);
  }, []);

  const getInsuranceByUserIdData = (userId: number) => {
    let data: any = [];
    getInsuranceByUserId(userId).then(
      (res: any) => {
        data = createData(res.results.insurance);
        setInsurance(data);
      },
      (error: any) => {
        setInsurance([]);
      }
    );
  };

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Insurance Document?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteInsurance(id);
        getInsuranceByUserIdData(getUserDetails().user_id);
      },
    });
  };

  return (
    <>
      <MasterTemplateWithLargeCard
        data={insurance}
        dataCount={insurance.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        cardOnClick={(id: string) => console.log("CLICKED " + id)}
        deleteButton={(id: number) => deleteClickHandler(id)}
        updateButton={(data: any) => showModalEdit(data)}
      />

      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Insurance" : "Add Insurance"}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          closable={false}
          width={500}
          footer={null}
        >
          <AddInsurance updateData={updateData} isEdit={isEdit} />
        </Modal>
      )}
    </>
  );
}

export default ManageInsurance;
