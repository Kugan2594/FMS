import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PublicRoute: RouteObject[] = [
    {
        path: "/",
        element: "<Login />",
    },
];

export default PublicRoute;
