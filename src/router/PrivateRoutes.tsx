import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const PrivateRoute: RouteObject[] = [
  {
    path: "/drivers",
    element: <ManageDrivers />,
  },
  {
    path: "/branches",
    element: <ManageBranch />,
  },
];

export default PrivateRoute;
