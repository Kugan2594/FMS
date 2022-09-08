import { Suspense } from "react";
import LoginTemplate from "../templates/LoginTemplate";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import CustomLayout from "../layout/CustomLayout";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
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
    path: "home",
    element: <CustomLayout />,
    children: [
      {
        path: "drivers",
        element: "<ManageDrivers />",
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
];

export default PublicRoute;
