import { RocketOutlined } from "@ant-design/icons";
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
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
    {
        id: "1",
        numberOfVehicles: 34,
        progressData: 49,
        itemName: "Vehicles",
        branchLocation: "Colombo",
        name: "Colombo Branch",
        adminName: "Michael Clarke",
        contactNumber: "0772250114",
        vehicleNumber: "MJ2200",
        vehicleType: "car",
        designation: "Manager",
        drivingLicense: "82763871",
        vehicleModel: "Tyota MT",
        generatorBrand: "Honda",
        fuelType: "gasoline",
        nic: "941234500V",
        generatorName: "generator-A",
        driverName: "michael Clarke",
        vehicleIcon: <RocketOutlined />,
    },
];
function ManageBranchAdmin() {
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
                privilege={false}
                branchCard={false}
                adminCard={true}
                isProgressBar={false}
                vehicleCard={false}
                generatorCard={false}
                driverCard={false}
            />
        </div>
    );
}

export default ManageBranchAdmin;
