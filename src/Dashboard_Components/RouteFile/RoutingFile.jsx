import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import PageNotFound404 from "../../Components/MUI/PageNotFound404";
import React from "react";
import { Dashboard } from "../Dashboard/DashboardMain/Dashboard";
const DashboardLogin = React.lazy(() => import("../Login/DashboardLogin"));
const ForgotPassword = React.lazy(() => import("../Login/ForgotPassword"));
const DontHaveAccount = React.lazy(() => import("../Login/DontHaveAccount"));
// const Dashboard = React.lazy(() =>
//   import("../Dashboard/DashboardMain/Dashboard")
// );
const DefaultHome = React.lazy(() =>
  import("../Pages/Default_Home/DefaultHome")
);
const UsersTable = React.lazy(() => import("../Pages/User/UsersTable"));
const RouteingFile = () => {
  // const navigate = useNavigate();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashboardLogin />,
    },
    {
      path: "/forgotpassword",
      element: <ForgotPassword />,
    },
    {
      path: "/signup",
      element: <DontHaveAccount />,
    },
    //   {
    //     path: "/unauthorized",
    //     element: <Unauthorized />,
    //   },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          path: "/dashboard/home",
          element: <DefaultHome />,
        },
        {
          path: "/dashboard/user",
          element: <UsersTable />,
        },
      ],
    },
    {
      path: "/*",
      element: <PageNotFound404 />,
    },
  ]);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </>
  );
};
export default RouteingFile;
