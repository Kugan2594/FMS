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
import ResetPassword from "../contents/Login/ResetPassword";
import ManageGenerator from "../contents/Master/Generator/ManageGenerator";
import ManageFuelUp from "../contents/Master/FuelUp/ManageFuelUp";
import ManageMileage from "../contents/Master/Mileage/ManageMileage";
import SignUp from "../contents/Login/SignUp/SignUp";
import ManageVehicles from "../contents/Master/Vehicles/ManageVehicles";
import ManageNotifications from "../contents/Notification/ManageNotifications";
import OTPVerification from "../contents/Login/OTPVerification/OTPVerification";
import SignUpSplitScreen from "../contents/Login/SignUp/SignUpSplitScreen";
import StaticsHistory from "../contents/Home/Statics/StaticsHistory";
import Page from "../contents/Home/Statistics/Statistics";
import OverallVehiclesStatus from "../contents/Home/VehiclesCard/OverallVehiclesStatus";
import DashBoard from "../contents/Home/DashBoard/DashBoard";
import ManageCompany from "../contents/Master/Company/ManageCompany";

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
        path: "/sign-up-split-screen",
        element: <SignUpSplitScreen />,
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/otp-verification",
        element: <OTPVerification />,
    },
    {
        path: "home/*",
        element: <CustomLayout />,
        children: [
            {
                path: "allBranches",
                element: <DashBoard />,
            },
        ],
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
            {
                path: "generator",
                element: <ManageGenerator />,
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
                path: "vehicles",
                element: <ManageVehicles />,
            },
            {
                path: "companies",
                element: <ManageCompany />,
            },
        ],
    },
    {
        path: "notification",
        element: <CustomLayout />,
        children: [
            {
                path: "notification",
                element: <ManageNotifications />,
            },
        ],
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
    {
        path: "/reset-password",
        element: <ResetPassword />,
    },
];

export default PublicRoute;
