import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";

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
];

export default PrivateRoute;
