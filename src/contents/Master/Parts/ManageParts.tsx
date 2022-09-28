import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState, useEffect } from "react";
import AddParts from "././AddParts";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import moment from "moment";
import {
    deletePartById,
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
    const [updateData, setupdateData] = useState([]);
    const [editVisible, seteditVisible] = useState(false);
    const [action, setaction] = useState<string>("add");
    const [addVisible, setAddVisible] = useState(false);

    function createData(data: any) {
        let convertData = data.map((post: any, index: any) => {
            return {
                id: post.id,
                name: "Tyre",
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
    const showModalEdit = (data: any) => {
        setIsModalOpen(true);
        setisEdit(true);
        setupdateData(data);
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
    const deleteClickHandler = (id: any) => {
        confirm({
            title: "Are you sure delete this Generator?",
            icon: <ExclamationCircleOutlined />,
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk() {
                deletePartById(id)
                    .then((res) => {
                        partDeleteSuccess();
                        reloadTable(res);
                    })
                    .catch((err) => {
                        errHandler(err);
                    });
            },
        });
    };
    const reloadTable = (res: any) => {
        // getAllGenerator(getUserDetails().company_id);
    };
    return (
        <>
            <MasterTemplateWithLargeCard
                data={parts}
                dataCount={parts.length}
                headerOnSearch={() => {}}
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                deleteButton={(id: number) => {
                    deleteClickHandler(id);
                }}
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
                    title={"Add Generator"}
                    visible={addVisible}
                    setAddVisible={setAddVisible}
                    updateData={isEdit ? updateData : null}
                    // reloadTable={reloadTable}
                    handleClose={handleCancel}
                    handleAdd={handleCancel}
                    action={action}
                />
            </Modal>
        </>
    );
}

export default ManageParts;
