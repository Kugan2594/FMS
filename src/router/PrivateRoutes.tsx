import CustomLayout from "../layout/CustomLayout";
import { Suspense } from "react";
import { RouteObject } from "react-router";
import SuspenseLoader from "../components/molecules/SuspenseLoader";

const Loader = (Component: any) => (props: any) =>
    (
        <Suspense fallback={<SuspenseLoader />}>
            <Component {...props} />
        </Suspense>
    );

const PrivateRoute = [
    {
        path: "/",
        element: <CustomLayout />,
    },
    {
        path: "master",
        element: <CustomLayout />,
        children: [
            {
                path: "/",
                element: "<Dashboard />",
            },
        ],
    },
];

export default PrivateRoute;
