import { Button, Modal } from "antd";
import MasterHeader from "../../../components/organisms/MasterHeader/MasterHeader";
import { useEffect, useState } from "react";
import AddEco from "./AddEco";
import MasterTemplateWithLargeCard from "../../../templates/MasterTemplateWithLargeCard";
import { createDeflateRaw } from "zlib";
import {
    getAllEmissionTestDocumentByUserId
  } from "./ServicesEco";
const data = [
    {
        id: "1",
        name: "Insurance",
        progressData: 40,
        vehicleNo: "NP CAR 5245",
        vehicleModel: "TOYOTA aqua",
        branchName: "Jaffna Branch",
        dueDate: "23 Mar 2022",
    }

];
function createData(data:any){
    let convertData=data.map((post:any,index:any)=>{
return {
    id: "1",
    name: "Insurance",
    progressData: 40,
    vehicleNo: "NP CAR 5245",
    vehicleModel: "TOYOTA aqua",
    branchName: "Jaffna Branch",
    dueDate: "23 Mar 2022",
}
    })
    return convertData
}
function ManageEco() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [userId, setuserId] = useState(1);
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
        getAllEmissionTestData(userId);
    })
    const getAllEmissionTestData=(userId:any)=>{
        let data: any=[];
        getAllEmissionTestDocumentByUserId(userId).then(
            (res:any) => {
                data=createData(res);
                setEco(data);
            },(error:any)=>{
                setEco([]);
            }
        )
    }
    return (
        <>
            <MasterTemplateWithLargeCard
                data={data}
                dataCount={data.length}
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
