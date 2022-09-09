import { Button, Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;

function ManageDrivers() {

    const [showAddModel, setShowAddModel] = useState(false);
    const [showUpdateModel, setShowUpdateModel] = useState(false);
    const [updateData, setUpdateData] = useState({id: "",
    progressData: 0,
    itemName: "",
    branchLocation: "",
    branchName: "",});

    const handleCancel = () => {

    };

    const handleAdd = () => {

    };

    const updateClickHandler = (data:any) => {
        setShowUpdateModel(true);
        setUpdateData(data);
    };

    const deleteClickHandler = (id:any) => {
      confirm({
        title: 'Are you sure delete this Driver?',
        icon: <ExclamationCircleOutlined />,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log(id);
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    
  const data = [{
            id: "1 one",
            progressData: 49,
            itemName: "Colombo",
            branchLocation: "NP CAR 5625",
            branchName: "Cudeson",
        },
        {
            id: "2 two",
            progressData: 49,
            itemName: "Colombo",
            branchLocation: "NP CAR 5625",
            branchName: "Kuganesan",
        },];

  return (
    <div>
      <MasterTemplateWithSmallCard
        data={data}
        dataCount={data.length}
        headerOnClickAdd={() => setShowAddModel(true)}
        headerOnSearch={() => {}}
        cardOnClick={() => {}}
        onClickDelete={(id:any) => deleteClickHandler(id)}
        onClickUpdate={(data:any) => updateClickHandler(data)}
      />
      <Modal
        visible={showAddModel}
        title="Add New Driver"
        width="75%"
        onCancel={() => setShowAddModel(false)}
        footer={[
          <Button onClick={() => setShowAddModel(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={handleAdd}
          >
            Add
          </Button>,
        ]}
      >
        {<AddDriver />}
      </Modal>
      <Modal
        visible={showUpdateModel}
        title="Update Driver"
        width="50%"
        onCancel={() => setShowUpdateModel(false)}
        footer={[
          <Button onClick={() => setShowUpdateModel(false)}>
            Cancel
          </Button>,
          <Button
            type="primary"
            onClick={handleAdd}
          >
            Update
          </Button>,
        ]}
      >
        {updateData.branchName}
      </Modal>
    </div>
  );
}

export default ManageDrivers;
