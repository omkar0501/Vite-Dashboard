import { CssBaseline } from "@mui/material";
import { MuiBox } from "../../../MUIComponents/Mui";
import { Appbar } from "../AppBar/Appbar";
import PageWarpperMainDashboardPage from "./PagesWrapperMainDashboardPage";
import DefaultHome from "../../Pages/Default_Home/DefaultHome";
export const Dashboard = () => {
  
  return (
    <>
      <MuiBox>
        <CssBaseline />
        <Appbar />
        <PageWarpperMainDashboardPage>
          <DefaultHome />
        </PageWarpperMainDashboardPage>
      </MuiBox>
    </>
  );
};
