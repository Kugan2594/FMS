import React from "react";
import MasterTemplateWithSmallCard from "../../../templates/MasterTemplateWithSmallCard";

const data = [
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "dkfnsjk",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "dv231241",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
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
                privilege={true}
                branchCard={false}
                adminCard={true}
                isProgressBar={true}
                vehicleCard={false}
            />
        </div>
    );
}

export default ManageBranch;
