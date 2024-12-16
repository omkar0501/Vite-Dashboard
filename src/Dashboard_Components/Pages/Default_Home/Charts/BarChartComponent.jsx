import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Typography, Paper, Select, MenuItem } from "@mui/material";
import { bardata } from "../../../../Data/JsonData/EmployeeData";
import { MuiBox } from "../../../../MUIComponents/Mui";
import { useState } from "react";
import "../../Default_Home/Default_Home.css";

const BarChartComponent = () => {
  const [growth, setGrowth] = useState("Today");
  return (
    <Paper
      className="MuiDrawer-paper"
      elevation={3}
      sx={{
        width: "100%",
        padding: "20px",
        boxShadow: "none",
        borderRadius: 4,
      }}
    >
      <MuiBox className="row mb-3">
        <MuiBox className="col-md-6" align="left">
          <Typography
            className="bar-chart-title"
            variant="h7"
            align="left"
            gutterBottom
          >
            Total Growth
          </Typography>

          <Typography variant="h6" className="total-growth" align="left">
            ${bardata[bardata.length - 1].profit.toFixed(2)}
          </Typography>
        </MuiBox>
        <MuiBox className="col-md-6" align="right">
          <Select value={growth} onChange={(e) => setGrowth(e.target.value)}>
            <MenuItem value={"Today"}>Today</MenuItem>
            <MenuItem value={"This Month"}>This Month</MenuItem>
            <MenuItem value={"This Year"}>This Year</MenuItem>
          </Select>
        </MuiBox>
      </MuiBox>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={bardata}
          margin={{ top: 2, right: 3, left: 2, bottom: 5 }}
          // barCategoryGap="100%"
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="profit" stackId="a" fill="rgba(103, 58, 183, 0.85)" />
          <Bar
            dataKey="loss"
            stackId="a"
            fill="rgba(30, 136, 229, 0.85)"
            radius={[0, 0, 0, 0]}
          />

          {/*  <Bar
              dataKey="investment"
              stackId="a"
              fill="rgba(144, 202, 249, 0.85)"
            />*/}
          <Bar
            dataKey="maintenance"
            stackId="a"
            fill="rgba(127, 199, 999, 999)"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default BarChartComponent;
