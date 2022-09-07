import React from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";

const data = [
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "2",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "3",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "4",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "5",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "6",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "7",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "8",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "9",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
    {
        id: "10",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        branchName: "Colombo Branch",
        adminName: "Michael Clarke",
    },
];
function ManageBranch() {
    return (
        <div>
            <MasterTemplateWithSmallCard
                data={data}
                dataCount={data.length}
                headerOnSearch={() => console.log("SEARCHED")}
                headerOnClickAdd={() => console.log("ADDED")}
                cardOnClick={(id: string) => console.log("CLICKED " + id)}
                onClickDelete={(id: string) => console.log("DELETED " + id)}
                onClickUpdate={(id: string) => console.log("UPDATED " + id)}
            />
        </div>
    );
}

export default ManageBranch;
