import { DownloadOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, message, Modal, notification, Upload } from "antd";
import { useEffect, useState } from "react";
import { SYSTEM_CONFIG } from "../../../utils/StytemConfig";
import { errHandler, vehicleDeleteSuccess } from "../../../helper/helper";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import { getToken, getUserDetails } from "../../Login/LoginAuthentication";
import AddVehicle from "./AddVehicle";
import {
    deleteVehicleByVehicleNumberAndCompanyId,
    getAllVehiclesByCompanyId,
    getAllVehiclesByCompanyIdAndBranchId,
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
                progressData: post.vehicleValidity,
                image: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
                vehicleIdFromResource: post.resourceVehicleDto.id,
                vehicleModel:
                    post.resourceVehicleDto.vehicleBrand +
                    " " +
                    post.resourceVehicleDto.vehicleModel +
                    " " +
                    post.resourceVehicleDto.fuelTypeName +
                    " " +
                    post.resourceVehicleDto.vehicleBodyTypeResponseDto,
                vehicleType: post.resourceVehicleDto.vehicleTypeName,
                bodyType: post.resourceVehicleDto.vehicleBodyTypeResponseDto,
            };
        });

        return convertData;
    };

    const profileOnClickHandler = (data: any) => {
        setIsProfileModalOpen(true);
        setupdateData(data);
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

    const getAllVehiclesByCompanyAndBranch = (
        companyId: number,
        branchId: number
    ) => {
        getAllVehiclesByCompanyIdAndBranchId(companyId, branchId).then(
            (res: any) => {
                let data: [] = createData(
                    res.results.vehicleByCompanyAndBranch
                );
                setvehicles(data);
            }
        );
    };

    const reloadTable = (res: any) => {
        if (getUserDetails().roleName == "COMPANYADMIN") {
            getAllVehicles(getUserDetails().company_id);
        } else if (getUserDetails().roleName == "COMPANYBRANCHADMIN") {
            getAllVehiclesByCompanyAndBranch(
                getUserDetails().company_id,
                getUserDetails().company_branch_id
            );
        }
    };

    const deleteVehicleData = (vehicleNumber: string, companyId: number) => {
        deleteVehicleByVehicleNumberAndCompanyId(vehicleNumber, companyId)
            .then((res) => {
                vehicleDeleteSuccess();
                reloadTable(res);
            })
            .catch((error) => {
                errHandler(error);
            });
    };

    useEffect(() => {
        if (getUserDetails().roleName == "COMPANYADMIN") {
            getAllVehicles(getUserDetails().company_id);
        } else if (getUserDetails().roleName == "COMPANYBRANCHADMIN") {
            getAllVehiclesByCompanyAndBranch(
                getUserDetails().company_id,
                getUserDetails().company_branch_id
            );
        }
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

    const uploadProps = {
        name: "file",
        action: SYSTEM_CONFIG.corporateUrl + "/vehicleBulkUpload",
        onChange(info: any) {
            if (info.file.status !== "uploading") {
            }

            if (info.file.status === "done") {
                getAllVehicles(getUserDetails().company_id);

                if (info.file.response.hasOwnProperty("results")) {
                    if (
                        info.file.response.results.bulkImport
                            .employeesDesignation.length > 0
                    ) {
                        notification.error({
                            message: `Designations doesn't match for following Employees : ${info.file.response.results.bulkImport.employeesDesignation}`,
                        });
                    }
                    if (
                        info.file.response.results.bulkImport.employeesId
                            .length > 0
                    ) {
                        notification.error({
                            message: `Duplicate Employee IDs : ${info.file.response.results.bulkImport.employeesId}`,
                            duration: 3,
                        });
                    }
                    if (
                        info.file.response.results.bulkImport.employeesEmail
                            .length > 0
                    ) {
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
                headerOnClickAdd={openAdd}
                headerOnSearch={() => {}}
                cardOnClick={(data: any) => profileOnClickHandler(data)}
                onClickVehicleDelete={(vehicleNumber: string) =>
                    deleteClickHandler(vehicleNumber)
                }
                onClickUpdate={(data: any) => openEdit(data)}
                vehicleCard={true}
                isProgressBar={true}
                isBulkImportExport={true}
                uploadProps={uploadProps}
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
                    cancelClickHandler={handleCancel}
                    isEdit={editVisible}
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
                    cancelClickHandler={handleCancel}
                    isEdit={editVisible}
                />
            ) : isProfileModalOpen ? (
                <Modal
                    title={false}
                    open={isProfileModalOpen}
                    onCancel={handleCancel}
                    closable={false}
                    width={"90%"}
                    footer={false}
                >
                    <VehicleProfile 
                    profileData={updateData}
                    />
                </Modal>
            ) : (
                <></>
            )}
        </>
    );
}

export default ManageVehicles;
