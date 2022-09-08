import CustomLayout from "../layout/CustomLayout";
import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
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
        path: "/",
        element: "",
    },
    {
        path: "Master",
        element: <ManageBranch />,
    },
    {
        path: "fuelup",
        element: <ManageFuelUp />,
    },
    {
        path: "mileage",
        element: <ManageMileage />,
    },
    {
        path: "master/emission",
        element: <ManageEco />,
    },
    {
        path: "master/generator",
        element: <ManageGenerator />,
    },
];

export default PrivateRoute;
