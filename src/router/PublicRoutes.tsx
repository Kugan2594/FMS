import { Suspense } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import CustomLayout from "../layout/CustomLayout";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ManageService from "../contents/Master/Services/ManageService";
import ManageAccident from "../contents/Master/Accident/ManageAccident";
import ManageEco from "../contents/Master/Eco/ManageEco";
import ManageInsurance from "../contents/Master/Insurance/ManageInsurance";
import ManageRevenueLicense from "../contents/Master/RevenueLicense/ManageRevenuseLicense";
import ManageParts from "../contents/Master/Parts/ManageParts";
import ManageBranchAdmin from "../contents/Master/BranchAdmin/ManageBranchAdmin";
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
            { path: "branchAdmins", element: <ManageBranchAdmin /> },
            {
                path: "services",
                element: <ManageService />,
            },
            {
                path: "accidentDocument",
                element: <ManageAccident />,
            },
            {
                path: "emissionTest",
                element: <ManageEco />,
            },
            {
                path: "insurance",
                element: <ManageInsurance />,
            },
            {
                path: "revenueLicense",
                element: <ManageRevenueLicense />,
            },
            {
                path: "parts",
                element: <ManageParts />,
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
