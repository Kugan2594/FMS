import { Suspense } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ForgotPassword from "../contents/Login/ForgotPassword";
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
];

export default PublicRoute;
