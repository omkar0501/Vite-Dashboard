import { Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { AreaChartData, bardata } from "../../../../Data/JsonData/EmployeeData";
import {
  MuiBox,
  MuiDivider,
  MuiPaper,
  MuiTypography,
} from "../../../../MUIComponents/Mui";
import "../../Default_Home/Default_Home.css";
import { Add, Remove } from "@mui/icons-material";
import { getColor } from "../../../../Utils/utils";

function LineChartComponent() {
  const getIcon = (growth) => {
    return growth === "profit" ? (
      <Add fontSize="small" />
    ) : (
      <Remove fontSize="small" />
    );
  };

  return (
    <div>
      <MuiBox sx={{ backgroundColor: "white", p: 3, borderRadius: "20px" }}>
        <MuiTypography className="mb-2 mt-0 fw-bold" variant="h5">
          Popular
        </MuiTypography>
        <MuiPaper className="line-chart-paper">
          <MuiBox className="row p-2 pt-4">
            <MuiTypography
              className="mb-2 mt-0 col-md-6 d-flex float-left bar-chart-title"
              sx={{ fontSize: "smaller" }}
            >
              10% Profit
            </MuiTypography>
            <MuiTypography
              variant="h6"
              className="line-chart-total-profit fw-bold col-md-6"
            >
              ${bardata[bardata.length - 1].profit.toFixed(2)}
            </MuiTypography>
          </MuiBox>
          <ResponsiveContainer width="100%" height={150}>
            <AreaChart
              layout="horizontal"
              width="100%"
              height={300}
              data={bardata}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            >
              <Tooltip height={2} />
              <Area
                type="monotone"
                fillOpacity={0.4}
                dataKey="profit"
                strokeWidth={2}
                stroke="#5e35b1"
                fill="#5e35b1"
              />
            </AreaChart>
          </ResponsiveContainer>
        </MuiPaper>
        {AreaChartData.map((data, i) => (
          <div>
            <MuiBox key={i} className="row m-1 py-2">
              <MuiBox className="col-6">
                <MuiTypography
                  sx={{ fontSize: "small" }}
                  className="d-flex float-left fw-bold"
                >
                  {data.name}
                </MuiTypography>
                <MuiTypography
                  className="growthrate"
                  sx={{ color: getColor(data.growth), fontSize: "small" }}
                >
                  10% {data.growth}
                </MuiTypography>
              </MuiBox>
              <MuiTypography
                className="col-6 fw-bold"
                sx={{ color: getColor(data.growth) }}
              >
                {getIcon(data.growth)}${data.total.toFixed(2)}
              </MuiTypography>
            </MuiBox>
            <MuiDivider sx={{ m: 1 }} />
          </div>
        ))}
      </MuiBox>
    </div>
  );
}

export default LineChartComponent;
