import { Modal } from "antd";
import { useState, useEffect } from "react";
import AddRevenueLicense from "./AddRevenueLicense";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
    getAllRevenueLicenseByUserId
} from "./ServicesRevenueLicense";
import { getUserDetails } from "../../Login/LoginAuthentication";
import moment from "moment";


function createData(data: any) {
    let convertData = data.map((post: any, index: any) => {
        return {
            id: post.id,
            name: "Revenue license",
            progressData: post.revenueLicenseTestValidity,
            vehicleNo: post.vehicleResponseDto.vehicleNumber,
            vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel,
            branchName: "Jaffna Branch",
            lastChangedDate:moment(post.updatedAt).format("DD-MM-yyyy"),
            dueDate: moment(post.taxExpiryDate).format("DD-MM-yyyy"),
        }
    })
    return convertData
}

function ManageRevenueLicense() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [revenueLicense, setRevenueLicense] = useState([]);

    useEffect(() => {
        getAllRevenueLicenseData(getUserDetails().user_id);
    }, [])

    const getAllRevenueLicenseData = (userId: number) => {
        let data: any = [];

        getAllRevenueLicenseByUserId(userId).then(
            (res: any) => {
                data = createData(res.results.revenueLicense);
                setRevenueLicense(data);
            }, (error: any) => {
                setRevenueLicense([]);
            }
        )
    }

    const showModal = () => {
        setIsModalOpen(true);
        setisEdit(false);
    };

    const showModalEdit = () => {
        setIsModalOpen(true);
        setisEdit(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinishAdd = () => {
        
    }

    return (
        <>
            <MasterTemplateWithLargeCard
                data={revenueLicense}
                dataCount={revenueLicense.length}
                headerOnSearch={() => { }}
                headerOnClickAdd={showModal}
                // cardOnClick={(id: string) => console.log("CLICKED " + id)}
                // cardOnClick={onFinishAdd}
                deleteButton={(id: string) => console.log("DELETED " + id)}
                updateButton={showModalEdit}
            />

            <Modal
                title={isEdit ? "Edit Revenue License" : "Add Revenue License"}
                open={isModalOpen}
                onOk={onFinishAdd}
                onCancel={handleCancel}
                closable={false}
                width={500}
                footer={null}
            >
                <AddRevenueLicense  />
            </Modal>
        </>
    );
}

export default ManageRevenueLicense;
