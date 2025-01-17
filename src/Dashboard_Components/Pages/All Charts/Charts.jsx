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
import AreaCharts from "./AreaCharts";
import PieCharts from "./PieCharts";
import "../Default_Home/Default_Home.css";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";
const CustomTooltip = ({ active, payload, label, title }) => {
  if (active && payload && payload.length) {
    return (
      <MuiBox
        className="custom-tooltip"
        sx={{
          backgroundColor: "black",
          opacity: "50%",
          p: 1,
          borderRadius: "10px",
        }}
      >
        <MuiTypography
          className="label"
          sx={{ color: "white", fontSize: "small" }}
        >
          Total {`${title} : ${payload[0].value}`}
        </MuiTypography>
      </MuiBox>
    );
  }
};

const Charts = () => {
  return (
    <div className="container-fluid">
      <ReturnHomeCard>
        <CurrentPage>Charts</CurrentPage>
        <CurrentPage2>Charts</CurrentPage2>
      </ReturnHomeCard>
      <div className="row">
        {LineData.map((data, i) => {
          return (
            <Grid className="col-md-3 col-sm-6 mb-3 col-xs-12">
              <MuiPaper
                sx={{
                  backgroundColor: `${data.bgcolor}`,
                  borderBottom: `3px solid ${data.bgcolor}`,
                }}
              >
                <MuiBox className="row p-2 pt-4">
                  <div className="d-flex justify-content-between">
                    <MuiTypography
                      className="mb-2 mt-0 col-md-6 d-flex float-left bar-chart-title "
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
                      className="line-chart-total-proft fw-bold col-md-6"
                    >
                      {data.per}
                    </MuiTypography>
                  </div>
                </MuiBox>
                <ResponsiveContainer width="100%" height={150}>
                  <AreaChart
                    layout="horizontal"
                    width="100%"
                    height={300}
                    data={bardata}
                    margin={{ top: 1, right: 0, left: 0, bottom: 0 }}
                  >
                    <Tooltip
                      height={2}
                      content={<CustomTooltip title={data.title} />}
                    />
                    <Area
                      type="monotone"
                      fillOpacity={0.3}
                      dataKey="profit"
                      strokeWidth={3}
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
      <div className="row">
        <Grid className="col-md-7">
          <AreaCharts />
        </Grid>
        <Grid className="col-md-5">
          <PieCharts />
        </Grid>
      </div>
    </div>
  );
};
export default Charts;
