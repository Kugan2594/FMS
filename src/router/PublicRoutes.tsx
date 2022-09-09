import { Suspense } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import CustomLayout from "../layout/CustomLayout";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ForgotPassword from "../contents/Login/ForgotPassword";
import ChangePassword from "../contents/Profile/ChangePassword";
const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PublicRoute: RouteObject[] = [
    {
        path: "/",
        element: <LoginTemplate />,
    },
    {
        path: "/forgot-password",
        element: <ForgotPassword />,
    },
    {
        path: "home",
        element: <CustomLayout />,
        children: [],
    },
    {
        path: "master",
        element: <CustomLayout />,
        children: [
            {
                path: "drivers",
                element: <ManageDrivers />,
            },
            {
                path: "branches",
                element: <ManageBranch />,
            },
        ],
    },
    {
        path: "notification",
        element: <CustomLayout />,
        children: [],
    },
    {
        path: "settings",
        element: <CustomLayout />,
        children: [],
    },
    {
        path: "/change-password",
        element: <ChangePassword />,
    },
];

export default PublicRoute;
