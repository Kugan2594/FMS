import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PublicRoute = [
    {
        path: "/",
        element: <LoginTemplate />,
    },
];

export default PublicRoute;
