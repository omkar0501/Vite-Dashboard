import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import React from "react";
import { Dashboard } from "../Dashboard/DashboardMain/Dashboard";
import Loader from "../Pages/Loader";

const DashboardLogin = React.lazy(() => import("../Login/DashboardLogin"));
const ForgotPassword = React.lazy(() => import("../Login/ForgotPassword"));
const DontHaveAccount = React.lazy(() => import("../Login/DontHaveAccount"));
const Contacts = React.lazy(() => import("../Pages/Contacts/Contacts"));
const ContactsList = React.lazy(() => import("../Pages/Contacts/ContactsList"));
const Charts = React.lazy(() => import("../Pages/All Charts/Charts"));
const CustomerTable = React.lazy(() =>
  import("../Pages/Customer/CustomerTable")
);
const DefaultHome = React.lazy(() =>
  import("../Pages/Default_Home/DefaultHome")
);
const CommingSoon = React.lazy(() => import("../Pages/CommingSoon"));
const UsersTable = React.lazy(() => import("../Pages/User/UsersTable"));
const Analytics = React.lazy(() => import("../Pages/Analytics/Analytics"));
const PageNotFound404 = React.lazy(() => import("../Pages/PageNotFound404"));
const Statastics = React.lazy(() => import("../Pages/Statastics/Statastics"));
const ChatComponent = React.lazy(() => import("../Pages/Chats/ChatComponent"));
const Calender = React.lazy(() => import("../Pages/Calender/Calender"));
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
          path: "/dashboard/charts",
          element: <Charts />,
        },
        {
          path: "/dashboard/user",
          element: <UsersTable />,
        },
        {
          path: "/dashboard/contacts/cards",
          element: <Contacts />,
        },
        {
          path: "/dashboard/contacts/list",
          element: <ContactsList />,
        },
        {
          path: "/dashboard/customer",
          element: <CustomerTable />,
        },
        {
          path: "/dashboard/analytics",
          element: <Analytics />,
        },
        {
          path: "/dashboard/statistics",
          element: <Statastics />,
        },
        {
          path: "/dashboard/data",
          element: <CommingSoon />,
        },
        {
          path: "/dashboard/chat",
          element: <ChatComponent />,
        },
        {
          path: "/dashboard/mail",
          element: <CommingSoon />,
        },
        {
          path: "/dashboard/calender",
          element: <Calender />,
        },
        {
          path: "/dashboard/ecommerce",
          element: <CommingSoon />,
        },
        {
          path: "/dashboard/invoice",
          element: <CommingSoon />,
        },
        {
          path: "/dashboard/CRM",
          element: <CommingSoon />,
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
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router}></RouterProvider>
      </Suspense>
    </>
  );
};
export default RouteingFile;
