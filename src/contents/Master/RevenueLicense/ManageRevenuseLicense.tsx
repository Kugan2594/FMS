import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useState,useEffect } from "react";
import AddRevenueLicense from "./AddRevenueLicense";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import {
    getAllRevenueLicenseByUserId
  } from "./ServicesRevenueLicense";
  import { getUserDetails} from "../../Login/LoginAuthentication";
  function createData(data:any){
    let convertData=data.map((post:any,index:any)=>{
return {
    id: post.id,
    name: "Revenue license",
    progressData: post.revenueLicenseTestValidity,
    vehicleNo: post.vehicleResponseDto.vehicleNumber,
    vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel
    ,
    branchName: "Jaffna Branch",
    dueDate: post.taxExpiryDate,
}
    })
    return convertData
}

function ManageRevenueLicense() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [revenueLicense,setRevenueLicense]=useState([]);
    useEffect(()=>{
        getAllRevenueLicenseData(getUserDetails().user_id);
    }, [])
    const getAllRevenueLicenseData=(userId: number)=>{
        let data: any=[];

        getAllRevenueLicenseByUserId(userId).then(
            (res:any) => {
                data=createData(res.results.revenueLicense);
                setRevenueLicense(data);
            },(error:any)=>{
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

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <MasterTemplateWithLargeCard
                data={revenueLicense}
                dataCount={revenueLicense.length}
                headerOnSearch={() => { }}
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                deleteButton={(id: string) => console.log("DELETED " + id)}
                updateButton={showModalEdit}
            />

            <Modal
                title={isEdit ? "Edit Revenue License" : "Add Revenue License"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
            >
                <AddRevenueLicense />
            </Modal>
        </>
    );
}

export default ManageRevenueLicense;
