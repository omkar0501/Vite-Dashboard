import {
  createBrowserRouter,
  RouterProvider,
  // BrowserRouter as Router,
  // Routes,
  // Route,
  // useParams,
} from "react-router-dom";
import DisplayUser from "./APIs/DIsplayUser";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Projects from "./Portfolio/Projects";
import Profile from "./Components/MUI/Profile";
import Notes from "./Components/MUI/Notes";
import Practice from "./Components/MUI/Practice";
import PageNotFound404 from "./Components/MUI/PageNotFound404";
import { User } from "./APIs/User";
import Admin_Login from "./Components/MUI/Admin_Login";
import { Unauthorized } from "./Components/MUI/Unauthorized";
import Dashboard from "./Components/MUI/Dashboard/Dashboard";
// import { Login } from "./Components/Auth/Login";
// import Registration from "./Components/Auth/Registration";
// import { DisplayAllUsers } from "./Components/Auth/DisplayAllUsers";
// import { Opt } from "./Components/Auth/Opt";

const RoutesFile = () => {
  // const navigate = useNavigate();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Admin_Login />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        {
          index: true,
          path: "/dashboard/main",
          element: <Practice />,
        },
        {
          path: "/dashboard/home",
          element: <Home />,
        },
        {
          path: "/dashboard/about",
          element: <About />,
        },
        {
          path: "/dashboard/projects",
          element: <Projects />,
        },
        {
          path: "/dashboard/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard/notes",
          element: <Notes />,
        },
        {
          path: "/dashboard/users",
          element: <DisplayUser />,
        },
        {
          path: "/dashboard/users/:id",
          element: <User />,
        },
        {
          path: "/dashboard/*",
          element: <PageNotFound404 />,
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
      <RouterProvider router={router}></RouterProvider>
    </>
  );

  // const router1 = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/registration",
  //     element: <Registration />,
  //   },
  //   {
  //     path: "/displayusers",
  //     element: <DisplayAllUsers />,
  //   },
  //   {
  //     path: "/forgotpassword",
  //     element: <Opt />,
  //   },
  // ]);
  //   return (
  //     <>
  //       <RouterProvider router={router}></RouterProvider>
  //     </>
  //   );
};
export default RoutesFile;
