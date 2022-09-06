import { Button, Modal } from "antd";
import React, { useState } from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";
import AddDriver from "./AddDriver";

function ManageDrivers() {

    const [showAddModel, setShowAddModel] = useState(false);

    const handleCancel = () => {

    };

    const handleAdd = () => {

    };
    
  const data = [{
            id: "1",
            progressData: 49,
            itemName: "Colombo",
            branchLocation: "NP CAR 5625",
            branchName: "Cudeson",
        },
        {
            id: "2",
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
        headerOnClickAdd={() => {setShowAddModel(true)}}
        headerOnSearch={() => {}}
        cardOnClick={() => {}}
        onClickDelete={() => {}}
        onClickUpdate={() => {}}
      />
      <Modal
        visible={showAddModel}
        onCancel={() =>setShowAddModel(false)}
        footer={[
          <Button onClick={() =>setShowAddModel(false)}>
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
        <AddDriver />
      </Modal>
    </div>
  );
}

export default ManageDrivers;
