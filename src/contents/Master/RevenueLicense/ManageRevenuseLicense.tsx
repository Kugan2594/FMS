import { Modal } from "antd";
import { useState, useEffect } from "react";
import AddRevenueLicense from "./AddRevenueLicense";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
  deleteRevenueLicense,
  getAllRevenueLicenseByCompanyId,
  getAllRevenueLicenseByUserId,
} from "./ServicesRevenueLicense";
import { getUserDetails } from "../../Login/LoginAuthentication";
import moment from "moment";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import {
  errHandler,
  revenueLicenseDocumentAddSuccess,
  revenueLicenseDocumentDeleteSuccess,
} from "../../../helper/helper";

const { confirm } = Modal;

function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      name: "Revenue license",
      progressData: post.revenueLicenseTestValidity,
      vehicleNo: post.vehicleResponseDto.vehicleNumber,
      vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel,
      branchName: "Jaffna Branch",
      lastChangedDate: moment(post.updatedAt).format("DD-MM-yyyy"),
      dueDate: moment(post.taxExpiryDate).format("DD-MM-yyyy"),
      region: post.region,
      issuedDate: post.taxIssuedDate,
      taxAmount: post.taxAmount,
    };
  });
  return convertData;
}

function ManageRevenueLicense() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [revenueLicense, setRevenueLicense] = useState([]);
  const [updateData, setUpdataData] = useState({});

  useEffect(() => {
    getAllRevenueLicenseData(getUserDetails().company_id);
  }, []);

  const getAllRevenueLicenseData = (companyId: number) => {
    let data: any = [];

    getAllRevenueLicenseByCompanyId(companyId).then(
      (res: any) => {
        data = createData(res.results.revenueLicense);
        setRevenueLicense(data);
      },
      (error: any) => {
        setRevenueLicense([]);
      }
    );
  };

  const deleteClickHandler = (id: any) => {
    confirm({
      title: "Are you sure delete this Revenue License?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteRevenueLicense(id)
          .then((res: any) => {
            revenueLicenseDocumentDeleteSuccess();
            reloadTable(res);
          })
          .catch((error) => {
            errHandler(error);
          });
      },
    });
  };

  const showModal = () => {
    setIsModalOpen(true);
    setisEdit(false);
  };

  const showModalEdit = (data: any) => {
    setIsModalOpen(true);
    setisEdit(true);
    setUpdataData(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setisEdit(false);
    getAllRevenueLicenseData(getUserDetails().user_id);
  };

  const onFinishAdd = () => {};

  const reloadTable = (res: any) => {
    getAllRevenueLicenseData(getUserDetails().user_id);
  };

  return (
    <>
      <MasterTemplateWithLargeCard
        data={revenueLicense}
        dataCount={revenueLicense.length}
        headerOnSearch={() => {}}
        headerOnClickAdd={showModal}
        // cardOnClick={(id: string) => console.log("CLICKED " + id)}
        // cardOnClick={onFinishAdd}
        deleteButton={(id: number) => deleteClickHandler(id)}
        updateButton={(data: any) => showModalEdit(data)}
      />
      {isModalOpen && (
        <Modal
          title={isEdit ? "Edit Revenue License" : "Add Revenue License"}
          open={isModalOpen}
          onOk={onFinishAdd}
          onCancel={handleCancel}
          closable={false}
          width={500}
          footer={null}
        >
          <AddRevenueLicense
            updateData={updateData}
            isEdit={isEdit}
            reloadTable={reloadTable}
            setIsModelOpen={setIsModalOpen}
          />
        </Modal>
      )}
    </>
  );
}

export default ManageRevenueLicense;
