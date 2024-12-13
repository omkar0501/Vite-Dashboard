import { CssBaseline } from "@mui/material";
import { MuiBox } from "../../../MUIComponents/Mui";
import { Appbar } from "../AppBar/Appbar";
import PageWarpperMainDashboardPage from "./PagesWrapperMainDashboardPage";
import DefaultHome from "../../Pages/Default_Home/DefaultHome";
import { Outlet } from "react-router-dom";
export const Dashboard = () => {
  return (
    <>
      <MuiBox sx={{ backgroundColor: "#EEF2F6" }}>
        <CssBaseline />
        <Appbar />
        <PageWarpperMainDashboardPage>
          <Outlet />
        </PageWarpperMainDashboardPage>
      </MuiBox>
    </>
  );
};
