import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ManageBranchAdmin from "../contents/Master/BranchAdmin/ManageBranchAdmin";
import ManageEco from "../contents/Master/Eco/ManageEco";
import ManageFuelUp from "../contents/Master/FuelUp/ManageFuelUp";
import ManageMileage from "../contents/Master/Mileage/ManageMileage";
import ManageGenerator from "../contents/Master/Generator/ManageGenerator";
import ManageService from "../contents/Master/Services/ManageService";
import ManageAccident from "../contents/Master/Accident/ManageAccident";
import ManageInsurance from "../contents/Master/Insurance/ManageInsurance";
import ManageRevenueLicense from "../contents/Master/RevenueLicense/ManageRevenuseLicense";
import ManageParts from "../contents/Master/Parts/ManageParts";
import ManageVehicles from "../contents/Master/Vehicles/ManageVehicles";

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PrivateRoute: RouteObject[] = [
    {
        path: "/drivers",
        element: <ManageDrivers />,
    },
    {
        path: "/branches",
        element: <ManageBranch />,
    },
    {
        path: "/branchAdmins",
        element: <ManageBranchAdmin />,
    },
    {
        path: "/fuelup",
        element: <ManageFuelUp />,
    },
    {
        path: "/mileage",
        element: <ManageMileage />,
    },
    {
        path: "/generator",
        element: <ManageGenerator />,
    },
    {
        path: "/services",
        element: <ManageService />,
    },
    {
        path: "/accidentDocument",
        element: <ManageAccident />,
    },
    {
        path: "/emissionTest",
        element: <ManageEco />,
    },
    {
        path: "/insurance",
        element: <ManageInsurance />,
    },
    {
        path: "/revenueLicense",
        element: <ManageRevenueLicense />,
    },
    {
        path: "/parts",
        element: <ManageParts />,
    },
    {
        path: "/vehicles",
        element: <ManageVehicles />,
    },
];

export default PrivateRoute;
