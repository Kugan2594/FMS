import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ManageBranchAdmin from "../contents/Master/BranchAdmin/ManageBranchAdmin";

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
];

export default PrivateRoute;
