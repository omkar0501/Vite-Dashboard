import { ChevronRight, Home } from "@mui/icons-material";
import {
  MuiBox,
  MuiCard,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import { bardata, LineData } from "../../../Data/JsonData/EmployeeData";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";
import { Grid } from "@mui/material";

const Charts = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <MuiCard className="d-flex justify-content-between m-1 p-3 mb-3">
        <MuiTypography sx={{ fontSize: "medium", fontWeight: "bold" }}>
          Charts
        </MuiTypography>
        <MuiTypography sx={{ fontSize: "small", fontWeight: "bold" }}>
          <MuiIconButton onClick={() => navigate("/dashboard/home")}>
            <Home fontSize="small" sx={{ color: "#5e35b1" }} />{" "}
          </MuiIconButton>
          <ChevronRight sx={{ color: "gray" }} /> Charts
        </MuiTypography>
      </MuiCard>
      <div className="row">
        {LineData.map((data, i) => {
          return (
            <Grid className="col-md-3">
              <MuiPaper sx={{ backgroundColor: `${data.bgcolor}` }}>
                <MuiBox className="row p-2 pt-4">
                  <MuiTypography
                    className="mb-2 mt-0 col-md-6 d-flex float-left bar-chart-title"
                    sx={{
                      fontSize: "meduim",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {data.total}
                    <br />
                    {data.title}
                  </MuiTypography>
                  <MuiTypography
                    variant="h6"
                    color="white"
                    className="line-chart-total-profit fw-bold col-md-6 "
                  >
                    {data.per}
                  </MuiTypography>
                </MuiBox>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart
                    layout="horizontal"
                    width="100%"
                    height={300}
                    data={bardata}
                    margin={{ top: 1, right: 0, left: 0, bottom: 0 }}
                  >
                    <Tooltip height={2} />
                    <Area
                      type="monotone"
                      fillOpacity={0.4}
                      dataKey="profit"
                      strokeWidth={2}
                      stroke="white"
                      fill="white"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </MuiPaper>
            </Grid>
          );
        })}
      </div>
    </div>
  );
};
export default Charts;
