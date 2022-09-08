import CustomLayout from "../layout/CustomLayout";
import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import LoginTemplate from "../templates/LoginTemplate";
import ForgotPassword from "../contents/Login/ForgotPassword";

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
        element: <LoginTemplate />,
    },
];

export default PrivateRoute;
