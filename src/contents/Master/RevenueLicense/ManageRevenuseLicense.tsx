import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState, useEffect } from "react";
import AddRevenueLicense from "./AddRevenueLicense";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
    addRevenueLicense,
    getAllRevenueLicenseByUserId, getAllVehiclesAllocationsForDropDown
} from "./ServicesRevenueLicense";
import { getUserDetails } from "../../Login/LoginAuthentication";
import moment from "moment";
import axios from "axios";


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
    const [fileList, setFileList] = useState([]);

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

    const onFinishAdd = (values:any) => {
        
        const formData = new FormData();
        let revenueLicenseData = values;
        // formData.append("id", values.id);
        // formData.append("taxIssuedDate", values.taxIssuedDate);
        // formData.append("taxExpiryDate", values.taxExpiryDate);
        // formData.append("region", values.region);
        // formData.append("userId", values.userId);
        // formData.append("vehicleNumber", values.vehicleNumber);
        // formData.append("taxAmount", values.taxAmount);
        const data = {
            id: revenueLicenseData.id,
            taxIssuedDate: revenueLicenseData.taxIssuedDate,
            taxExpiryDate: revenueLicenseData.taxExpiryDate,
            region: revenueLicenseData.region,
            userId: revenueLicenseData.userId,
            vehicleNumber: revenueLicenseData.vehicleNumber,
            taxAmount: revenueLicenseData.taxAmount
        };

        fileList.map((post, index) => {
            formData.append("files", post);
            console.log(post);
        });

        formData.append("addRevenueLicense", JSON.stringify(data));

        axios({
            method: "post",
            url : `http://localhost:1014/fleet-management-oauth/fleet-management-corporate/api/v1/revenueLicense`,
            data: formData,
            headers: {
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${localStorage.getItem("TOKEN")}`
            }

        })
    };

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
            >
                <AddRevenueLicense  />
            </Modal>
        </>
    );
}

export default ManageRevenueLicense;
