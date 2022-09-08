import { Suspense } from "react";
import SuspenseLoader from "../components/molecules/SuspenseLoader";
import { RouteObject } from "react-router-dom";
import ManageDrivers from "../contents/Master/Drivers/ManageDrivers";
import ManageBranch from "../contents/Master/Branch/ManageBranch";
import ManageService from "../contents/Master/Services/ManageService";
import ManageAccident from "../contents/Master/Accident/ManageAccident";
import ManageEco from "../contents/Master/Eco/ManageEco";

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
  {
    path: "/services",
    element: <ManageService />,
  },
  {
    path: "/accidentDocument",
    element: <ManageAccident/>,
  },
  {
    path: "/emissionTest",
    element: <ManageEco/>,
  },
];

export default PrivateRoute;
