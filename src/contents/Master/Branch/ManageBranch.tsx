import { ExclamationCircleOutlined, RocketOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddBranch from "./AddBranch";
import { Modal, Space } from "antd";
import ViewBranch from "./ViewBranch";
import { getUserDetails } from "../../Login/LoginAuthentication";
import { getAllBranchByCompanyId, deleteBranch } from "./ServicesBranch";
import { branchDeleteSuccess, errHandler } from "../../../helper/helper";
import "./viewBranch.style.less";
const { confirm } = Modal;
function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      numberOfVehicles: 34,
      progressData: 49,
      address: post.address,
      branchName: post.branchName,
      email: post.email,
      phoneNumber: post.phoneNumber,
    };
  });
  return convertData;
}

function ManageBranch() {
  const [formValues, setFormValues]: any = useState("");
  const [visible, setVisible] = useState(false);
  const [ok, setOk] = useState(false);
  const [edit, setEdit] = useState(false);
  const [view, setView] = useState(false);
  const [branch, setBranch] = useState([]);
  const [action, setaction] = useState("add");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [branchData, setBranchData] = useState({});

  const showModal = () => {
    setaction("add");
    setIsModalOpen(true);
    setisEdit(false);
  };

  const updateClickHandler = (data: any) => {
    setaction("edit");
    setIsModalOpen(true);
    setisEdit(true);
    setBranchData(data);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setisEdit(false);
  };

  useEffect(() => {
    getAllBranchData(getUserDetails().company_id);
  }, []);

  const getAllBranchData = (companyId: number) => {
    let data: any = [];

    getAllBranchByCompanyId(companyId).then(
      (res: any) => {
        data = createData(res.results.Branch);
        setBranch(data);
      },
      (error: any) => {
        setBranch([]);
      }
    );
  };
  const onDeleteHandler = (id: any) => {
    confirm({
      title: "Are you sure do you want to delete this Branch?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        deleteBranch(id)
          .then((res: any) => {
            branchDeleteSuccess();
            reloadTable(res);
          })
          .catch((error) => {
            errHandler(error);
          });
      },
    });
  };
  const showViewModal = (data: string) => {
    setaction("add");
    setView(true);
  };
  const handleViewCancel = () => {
    setView(false);
  };
  const reloadTable = (res: any) => {
    getAllBranchData(getUserDetails().company_id);
    setView(false);
  };
  return (
    <>
      <MasterTemplateWithSmallCard
        data={branch}
        dataCount={branch.length}
        headerOnSearch={() => console.log("SEARCHED")}
        headerOnClickAdd={showModal}
        cardOnClick={(data: string) => showViewModal(data)}
        onClickDelete={(id: string) => onDeleteHandler(id)}
        onClickUpdate={(data: any) => updateClickHandler(data)}
        privilege={false}
        branchCard={true}
        adminCard={false}
        isProgressBar={true}
        vehicleCard={false}
        generatorCard={false}
        driverCard={false}
      />
      <div>
        {isModalOpen && (
          <Modal
            title={isEdit ? "Edit Branch" : "Add New Branch"}
            open={isModalOpen}
            onCancel={handleCancel}
            closable={false}
            width={"50%"}
            footer={false}
          >
            <AddBranch
              isEdit={isEdit}
              updateData={branchData}
              cancelClickHandler={handleCancel}
              reloadTable={reloadTable}
              setIsModelOpen={setIsModalOpen}
              action={action}
            />
          </Modal>
        )}
        {view && (
          <Modal
            visible={view}
            maskStyle={{ borderRadius: "25" }}
            footer={false}
            onCancel={handleViewCancel}
          >
            <ViewBranch branchData={ViewBranch} />
          </Modal>
        )}
      </div>
    </>
  );
}
export default ManageBranch;
