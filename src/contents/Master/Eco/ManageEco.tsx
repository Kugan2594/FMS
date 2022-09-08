import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useEffect, useState } from "react";
import AddEco from "./AddEco";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import { createDeflateRaw } from "zlib";
import {
    getAllEmissionTestDocumentByUserId
  } from "./ServicesEco";
  import { getUserDetails} from "../../Login/LoginAuthentication";
function createData(data:any){
    let convertData=data.map((post:any,index:any)=>{
return {
    id: post.id,
    name: "EmissionTest",
    progressData: post.emissionTestValidity,
    vehicleNo: post.vehicleResponseDto.vehicleOwner,
    vehicleModel: post.vehicleResponseDto.resourceVehicleDto.vehicleModel
    ,
    branchName: "Jaffna Branch",
    dueDate: post.emissionTestExpiryDate,
}
    })
    return convertData
}
function ManageEco() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [eco,setEco]=useState([]);
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

    useEffect(()=>{
        getAllEmissionTestData(getUserDetails().user_id);
    }, [])
    const getAllEmissionTestData=(userId: number)=>{
        let data: any=[];

        getAllEmissionTestDocumentByUserId(userId).then(
            (res:any) => {
                data=createData(res.results.emissionTest);
                setEco(data);
            },(error:any)=>{
                setEco([]);
            }
        )
    }
    return (
        <>
            <MasterTemplateWithLargeCard
                data={eco}
                dataCount={eco.length}
                headerOnSearch={() => {}}
                headerOnClickAdd={showModal}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                deleteButton={(id: string) => console.log("DELETED " + id)}
                updateButton={showModalEdit}
            />

            <Modal
                title={isEdit ? "Edit Emission Test" : "Add Emission Test"}
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                width={500}
            >
                <AddEco />
            </Modal>
        </>
    );
}

export default ManageEco;
