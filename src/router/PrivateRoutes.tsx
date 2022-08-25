import { Suspense } from "react";
import { RouteObject } from "react-router";
import SuspenseLoader from "../components/molecules/SuspenseLoader";

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
        path: "master",
        element: "<SidebarLayout />",
        children: [
            {
                path: "/",
                element: "<Dashboard />",
            },
        ],
    },
];

export default PrivateRoute;
