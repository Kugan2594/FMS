import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { branchAdminDeleteSuccess } from "../../../helper/helper";
import { useEffect, useState } from "react";
import { getUserDetails } from "../../../contents/Login/LoginAuthentication";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddBranchAdmin from "../BranchAdmin/AddBranchAdmin";
import { deleteBranchAdminById, getAllBranchAdmin } from "./ServiceBranchAdmin";

const { confirm } = Modal;

function ManageBranchAdmin() {
    const [addVisible, setAddVisible] = useState(false);
    const [editVisible, seteditVisible] = useState(false);
    const [branchAdminData, setbranchAdminData] = useState([]);
    const [updateData, setupdateData] = useState([]);
    const [action, setaction] = useState<string>("add");

    const createData = (data: any) => {
        let convertData = data.map((post: any) => {
            return {
                id: post.id,
                numberOfVehicles: 34,
                progressData: 49,
                itemName: "Branch Admin",
                branchLocation: "Colombo",
                branchName: post.branchResponseDto.branchName,
                adminName: post.firstName + " " + post.lastName,
                contactNumber: post.mobileNumber,
                vehicleNumber: null,
                vehicleType: null,
                designation: "Branch Admin",
                drivingLicense: post.drivingLicenseNo,
                vehicleModel: null,
                generatorBrand: null,
                fuelType: null,
                nic: post.nic,
                generatorName: null,
                driverName: null,
                vehicleIcon: null,
                email: post.email,
                adminFirstName: post.firstName,
                adminLastName: post.lastName,
                driverFirstName: null,
                driverLastName: null,
            };
        });
        return convertData;
    };

    const getBranchAdmins = (companyId: number) => {
        getAllBranchAdmin(companyId).then((res: any) => {
            let data: [] = createData(res.results.branchAdmin);
            setbranchAdminData(data);
        });
    };

    const reloadTable = (res: any) => {
        getBranchAdmins(getUserDetails().company_id);
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
    };

    const handleOk = () => {
        setAddVisible(false);
    };

    const handleCancel = () => {
        setAddVisible(false);
        seteditVisible(false);
    };

    const deleteBranchAdmin = (id: number) => {
        deleteBranchAdminById(id).then((res: any) => {
            branchAdminDeleteSuccess();
            reloadTable(res);
        });
    };

    const deleteClickHandler = (id: any) => {
        confirm({
            title: "Are you sure delete this Branch Admin?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                deleteBranchAdmin(id);
            },
        });
    };

    useEffect(() => {
        getBranchAdmins(getUserDetails().company_id);
    }, []);

    return (
        <>
            <MasterTemplateWithSmallCard
                data={branchAdminData}
                dataCount={branchAdminData.length}
                headerOnSearch={() => {}}
                headerOnClickAdd={openAdd}
                cardOnClick={openAdd}
                onClickDelete={(id: number) => {
                    deleteClickHandler(id);
                }}
                onClickUpdate={(data: any) => openEdit(data)}
                privilege={false}
                adminCard={true}
                isProgressBar={false}
            />
            {addVisible ? (
                <AddBranchAdmin
                    title={"Add Branch Admin"}
                    visible={addVisible}
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                    setAddVisible={setAddVisible}
                    updateData={editVisible ? updateData : null}
                    reloadTable={reloadTable}
                    action={action}
                />
            ) : editVisible ? (
                <AddBranchAdmin
                    title={"Edit Branch Admin"}
                    visible={editVisible}
                    handleCancel={handleCancel}
                    handleOk={handleOk}
                    setAddVisible={seteditVisible}
                    updateData={editVisible ? updateData : null}
                    reloadTable={reloadTable}
                    action={action}
                />
            ) : (
                <></>
            )}
        </>
    );
}

export default ManageBranchAdmin;
