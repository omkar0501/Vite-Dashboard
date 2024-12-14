import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  MuiBox,
  MuiCard,
  MuiDivider,
  MuiTypography,
} from "../../../MUIComponents/Mui";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <MuiBox
        className="custom-tooltip"
        sx={{
          backgroundColor: "white",
          opacity: "90%",
          p: 1,
          borderRadius: "10px",
        }}
      >
        <MuiTypography
          className="label d-flex"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "rgb(103, 58, 183)",
          }}
        >
          Youtube : 1258
        </MuiTypography>
        <MuiTypography
          className="label"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "red",
          }}
        >
          Facebook : 975
        </MuiTypography>
        <MuiTypography
          className="label d-flex"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "rgb(30, 136, 229)",
          }}
        >
          Twitter : 500
        </MuiTypography>
      </MuiBox>
    );
  }
};
const PieCharts = () => {
  const data = [
    {
      name: "YouTube",
      value: 120000,
      fill: "rgb(244, 67, 54)",
    },
    {
      name: "Facebook",
      value: 200000,
      fill: "rgb(30, 136, 229)",
    },
    {
      name: "Twitter",
      value: 80000,
      fill: "rgb(103, 58, 183)",
    },
  ];

  return (
    <MuiCard>
      <MuiTypography
        sx={{ fontWeight: "bold", display: "flex", fontSize: "large", p: 2 }}
      >
        Total Revenue
      </MuiTypography>
      <MuiDivider />
      <ResponsiveContainer width={400} height={200}>
        <PieChart width={350} height={200}>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={50}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <MuiBox>
        <MuiBox>
          <MuiTypography sx={{ fontWeight: "bold", fontSize: "small", p: 1 }}>
            Note: Data represents total revenue from YouTube, Facebook, and
            Twitter
          </MuiTypography>
        </MuiBox>
      </MuiBox>
    </MuiCard>
  );
};

export default PieCharts;
