import React from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import {
  MuiBox,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import {
  FacebookOutlined,
  TrendingDown,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import { useTheme } from "@mui/material";
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <MuiBox
        className="custom-tooltip"
        sx={{
          backgroundColor: "white",
          opacity: "70%",
          p: 1,
          borderRadius: "10px",
        }}
      >
        {label}
        <MuiTypography
          className="label d-flex"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "rgb(103, 58, 183)",
          }}
        >
          Youtube : {payload[0].value}
        </MuiTypography>
        <MuiTypography
          className="label"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "red",
          }}
        >
          Facebook : {payload[1].value}
        </MuiTypography>
        <MuiTypography
          className="label d-flex"
          sx={{
            fontSize: "small",
            fontWeight: "bold",
            color: "rgb(30, 136, 229)",
          }}
        >
          Twitter : {payload[2].value}
        </MuiTypography>
      </MuiBox>
    );
  }
};
const AreaCharts = () => {
  const lineChartData = [
    { name: "Jan", youtube: 35, facebook: 40, twitter: 25 },
    { name: "Feb", youtube: 30, facebook: 45, twitter: 20 },
    { name: "Mar", youtube: 15, facebook: 25, twitter: 50 },
    { name: "Apr", youtube: 40, facebook: 50, twitter: 5 },
    { name: "May", youtube: 15, facebook: 30, twitter: 25 },
    { name: "Jun", youtube: 55, facebook: 20, twitter: 10 },
    { name: "Jul", youtube: 30, facebook: 50, twitter: 15 },
    { name: "Aug", youtube: 20, facebook: 40, twitter: 35 },
    // { name: "Sep", youtube: 10, facebook: 30, twitter: 1 },
  ];
  const theme = useTheme();
  return (
    <MuiPaper className="mb-1">
      <MuiBox className="px-3 pt-3">
        <MuiBox className="d-flex justify-content-between">
          <MuiBox>
            <MuiTypography
              className="d-flex contacts-cards-data"
              sx={{
                fontSize: "x-large",
                fontWeight: "bold",

                [theme.breakpoints.down("sm")]: {
                  fontSize: "medium",
                },
              }}
            >
              Market Share
            </MuiTypography>
            <MuiTypography className="d-flex" sx={{ fontSize: "smaller" }}>
              Department wise monthly sales report
            </MuiTypography>
          </MuiBox>
          <MuiTypography
            sx={{
              fontSize: "x-large",
              fontWeight: "bold",
              [theme.breakpoints.down("sm")]: {
                fontSize: "medium",
              },
            }}
          >
            <TrendingDown color="error" sx={{ fontSize: "XX-large", mb: 1 }} />{" "}
            27, 695.65
          </MuiTypography>
        </MuiBox>
        <MuiBox className="d-flex mt-2 gap-3">
          <MuiTypography sx={{ fontWeight: "bold" }}>
            <MuiIconButton sx={{ backgroundColor: "rgb(223, 210, 245)" }}>
              <FacebookOutlined sx={{ color: "rgb(103, 58, 183)" }} />
            </MuiIconButton>{" "}
            +45.36%
          </MuiTypography>
          <MuiTypography sx={{ fontWeight: "bold" }}>
            <MuiIconButton sx={{ backgroundColor: "rgb(186, 219, 248)" }}>
              <Twitter sx={{ color: "rgb(30, 136, 229)" }} />
            </MuiIconButton>{" "}
            -50.69%
          </MuiTypography>
          <MuiTypography sx={{ fontWeight: "bold" }}>
            <MuiIconButton sx={{ backgroundColor: "rgb(241, 194, 191)" }}>
              <YouTube sx={{ color: "rgb(244, 67, 54)" }} />
            </MuiIconButton>{" "}
            +16.85%
          </MuiTypography>
        </MuiBox>
      </MuiBox>
      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={lineChartData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="youtubeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(103, 58, 183)"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="rgb(103, 58, 183)"
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="facebookGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(244, 67, 54)"
                stopOpacity={0.3}
              />
              <stop offset="95%" stopColor="rgb(244, 67, 54)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="twitterGradient" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor="rgb(30, 136, 229)"
                stopOpacity={0.3}
              />
              <stop
                offset="95%"
                stopColor="rgb(30, 136, 229)"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="youtube"
            stroke="rgb(103, 58, 183)"
            strokeWidth={2}
            fill="url(#youtubeGradient)"
            fillOpacity={0.8}
          />

          <Area
            type="monotone"
            dataKey="facebook"
            stroke="rgb(244, 67, 54)"
            strokeWidth={2}
            fill="url(#facebookGradient)"
            fillOpacity={0.8}
          />

          <Area
            type="monotone"
            dataKey="twitter"
            stroke="rgb(30, 136, 229)"
            strokeWidth={2}
            fill="url(#twitterGradient)"
            fillOpacity={0.8}
          />
        </AreaChart>
      </ResponsiveContainer>
    </MuiPaper>
  );
};

export default AreaCharts;
