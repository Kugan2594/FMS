import { Suspense } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ForgotPassword from "../contents/Login/ForgotPassword";
import CustomLayout from "../layout/CustomLayout";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PublicRoute: RouteObject[] = [
    {
        path: "/",
        element: <ForgotPassword />,
    },
    {
        path: "master",
        element: <CustomLayout />,
        children: [
            {
                path: "branch/:branchId",
                element: <ManageBranch />,
            },
        ],
    },
];

export default PublicRoute;
