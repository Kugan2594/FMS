import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ManageEco from "../contents/Master/Eco/ManageEco";
import ManageFuelUp from "../contents/Master/FuelUp/ManageFuelUp";
import ManageMileage from "../contents/Master/Mileage/ManageMileage";
import ManageGenerator from "../contents/Master/Generator/ManageGenerator";

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
        path: "/fuelup",
        element: <ManageFuelUp />,
    },
    {
        path: "/mileage",
        element: <ManageMileage />,
    },
    {
        path: "/emission",
        element: <ManageEco />,
    },
    {
        path: "/generator",
        element: <ManageGenerator />,
    },
];

export default PrivateRoute;
