import CustomLayout from "../layout/CustomLayout";
import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageBranch from "../contents/Master/Branch/ManageBranch";

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PrivateRoute: RouteObject[] = [
    {
        path: "/branch/:branchId",
        element: <ManageBranch />,
    },
];

export default PrivateRoute;
