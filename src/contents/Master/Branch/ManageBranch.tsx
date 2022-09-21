import { ExclamationCircleOutlined, RocketOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddBranch from "./AddBranch";
import { Modal, Space } from "antd";
import ViewBranch from "./ViewBranch";
import { getUserDetails } from "../../Login/LoginAuthentication";
import { getAllBranchByCompanyId, deleteBranch } from "./ServicesBranch";
const { confirm } = Modal;
function createData(data: any) {
  let convertData = data.map((post: any, index: any) => {
    return {
      id: post.id,
      numberOfVehicles: 34,
      progressData: 49,
      branchLocation: post.address,
      branchName: post.branchName,
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
  const showModal = () => {
    setVisible(!visible);
  };
  const handleOk = () => {
    setVisible(!visible);
  };
  const handleCancel = () => {
    setVisible(!visible);
    setEdit(false);
  };
  const showEditModal = (data: any) => {
    setEdit(true);
    setaction("edit");
    setVisible(!visible);
    setFormValues(data);
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
        deleteBranch(id);
        getAllBranchData(getUserDetails().company_id);
        console.log(id);
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
        onClickUpdate={(data: any) => showEditModal(data)}
        privilege={false}
        branchCard={true}
        adminCard={false}
        isProgressBar={true}
        vehicleCard={false}
        generatorCard={false}
        driverCard={false}
      />
      <div>
        {visible && (
          <Modal
            visible={visible}
            maskStyle={{ borderRadius: "25" }}
            footer={false}
          >
            {edit ? (
              <Space
                style={{
                  paddingBottom: "1%",
                  fontSize: "18px",
                }}
              >
                Edit branch
              </Space>
            ) : (
              <Space
                style={{
                  paddingBottom: "1%",
                  fontSize: "18px",
                }}
              >
                Add New branch
              </Space>
            )}
            <AddBranch
              onClickAdd={handleOk}
              onClickCancel={handleCancel}
              action={action}
              initialValues={edit ? formValues : {}}
              reloadTable={reloadTable}
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
