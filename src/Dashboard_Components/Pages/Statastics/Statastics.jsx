import {
  AccountBalanceOutlined,
  AccountCircle,
  AnalyticsOutlined,
  BugReportSharp,
  ChevronRight,
  Description,
  Facebook,
  Folder,
  Home,
  LinkedIn,
  Paid,
  ShoppingCart,
  TagFaces,
  ThumbDown,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  MuiBox,
  MuiCard,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "@mui/x-date-pickers";
import { Card, LinearProgress, useTheme } from "@mui/material";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";
const Statastics = () => {
  const theme = useTheme();
  return (
    <div className="container ">
      <div className="row">
        <ReturnHomeCard>
          <CurrentPage>Statastics</CurrentPage>
          <CurrentPage2>Statastics</CurrentPage2>
        </ReturnHomeCard>
      </div>
      <div className="row">
        {Row1stData.map((data, i) => {
          return (
            <div key={i} className="col-md-3 col-sm-6 col-xs-12 mb-3">
              <MuiCard className="text-center p-3 d-flex justify-content-between align-items-center rounded-3">
                <div>
                  <MuiTypography
                    variant="h6"
                    className="fw-bold"
                    color="textPrimary"
                  >
                    {data.count}
                  </MuiTypography>
                  <MuiTypography
                    variant="subtitle2"
                    className="d-flex fw-bold"
                    color="textSecondary"
                  >
                    {data.title}
                  </MuiTypography>
                </div>
                <div>
                  <MuiTypography variant="body2" color="textSecondary">
                    {data.icon}
                  </MuiTypography>
                </div>
              </MuiCard>
            </div>
          );
        })}
      </div>
      <MuiBox className="gap-2 row mb-3 mx-1">
        {row2ndData.map((data, i) => {
          return (
            <MuiPaper
              key={i}
              className=" flex-fill col-md-3 col-sm-12"
              sx={{
                p: 3,
                backgroundColor: `${data.color}`,
                borderRadius: "10px",
              }}
            >
              <MuiBox className="d-flex justify-content-between">
                <MuiBox>
                  <MuiTypography
                    sx={{ fontSize: "medium", fontWeight: "bold" }}
                    className="d-flex c-title"
                  >
                    {data.title}
                  </MuiTypography>
                  <MuiTypography
                    sx={{ fontSize: "large", fontWeight: "bold", my: 1 }}
                    className="d-flex c-title"
                  >
                    {data.count}
                  </MuiTypography>
                  <MuiTypography className="c-title" sx={{ fontSize: "small" }}>
                    {data.amount}
                  </MuiTypography>
                </MuiBox>
                <MuiBox className="d-flex align-items-center mx-auto">
                  {data.icon}
                </MuiBox>
              </MuiBox>
            </MuiPaper>
          );
        })}
      </MuiBox>
      <div className="row">
        {row3rdData.map((data, i) => {
          return (
            <div key={i} className="col-md-3 col-sm-6 col-xs-12 mb-3">
              <MuiCard className="text-center p-3 d-flex justify-content-between align-items-center rounded-3">
                <div>
                  <MuiTypography
                    variant="h6"
                    className="d-flex"
                    color="textPrimary"
                  >
                    {data.icon}
                  </MuiTypography>
                  <MuiTypography
                    variant="subtitle2"
                    className="fw-bold"
                    color="textSecondary"
                  >
                    {data.title}
                  </MuiTypography>
                </div>
                <div>
                  <MuiTypography
                    variant="h6"
                    className="fw-bold"
                    color="textprimary"
                  >
                    {data.amount}
                  </MuiTypography>
                </div>
              </MuiCard>
            </div>
          );
        })}
      </div>
      <div className="row">
        {row4thData.map((data, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
              <MuiCard className="text-center d-flex align-items-center rounded-3 gap-0 border-start border-1 ">
                <div
                  className="col-3 d-flex justify-content-center align-items-center p-4 rounded-end-4 rounded-0"
                  style={{ backgroundColor: `${data.color}` }}
                >
                  <MuiTypography className="">{data.icon}</MuiTypography>
                </div>
                <div className="col-9 p-3">
                  <MuiTypography
                    variant="h6"
                    className="fw-bold d-flex justify-content-center justify-content-lg-start"
                    color="textPrimary"
                  >
                    {data.amount}
                  </MuiTypography>
                  <MuiTypography
                    variant="subtitle2"
                    className="d-flex justify-content-center justify-content-lg-start"
                    color="textSecondary"
                  >
                    {data.title}
                  </MuiTypography>
                </div>
              </MuiCard>
            </div>
          );
        })}
      </div>
      <div className="row">
        {row5thData.map((data, i) => {
          return (
            <div key={i} className="col-md-3 col-sm-6 col-xs-12 mb-3">
              <MuiCard className="text-center d-flex justify-content-center align-items-center rounded-3 p-3 ">
                <div className="">
                  <MuiTypography
                    variant="body2"
                    className="fw-bolder d-flex justify-content-center mb-2"
                    color="textSecondary"
                  >
                    {data.title}
                  </MuiTypography>

                  <MuiTypography
                    variant="h6"
                    className="fw-bold d-flex justify-content-center mb-2"
                    color="textPrimary"
                  >
                    {data.amount}
                  </MuiTypography>
                  <MuiTypography
                    variant="subtitle2"
                    className="d-flex justify-content-center"
                    color="textSecondary"
                  >
                    {data.change}
                  </MuiTypography>
                </div>
              </MuiCard>
            </div>
          );
        })}
      </div>
      <div className="row">
        {row6thData.map((data, i) => {
          return (
            <div key={i} className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3">
              <MuiCard
                className="text-center p-4 d-flex justify-content-between align-items-center rounded-3 social-icon-statistics-card"
                sx={{
                  background: `linear-gradient(to right,${data.color},${data.color2})`,
                }}
              >
                <div>
                  <MuiTypography
                    sx={{
                      color: "white",
                    }}
                    variant="h6"
                    className="fw-bold d-flex"
                    color="textPrimary"
                  >
                    {data.count}+
                  </MuiTypography>
                  <MuiTypography
                    variant="subtitle2"
                    className="d-flex "
                    color="textSecondary"
                    sx={{
                      color: "white",
                      [theme.breakpoints.down("md")]: {
                        fontSize: "small",
                      },
                    }}
                  >
                    {data.title}
                  </MuiTypography>
                </div>
                <div>
                  <MuiTypography
                    variant="body2"
                    className="social-icon-statistics"
                  >
                    {data.icon}
                  </MuiTypography>
                </div>
              </MuiCard>
            </div>
          );
        })}
      </div>
      <div className="">
        <MuiCard className="text-center p-3 rounded-3 row">
          {row7thData.map((data, i) => {
            return (
              <div
                key={i}
                className="col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-3"
              >
                <div className="">
                  <MuiTypography
                    variant="subtitle2"
                    className=" d-flex mb-2"
                    color="textSecondary"
                  >
                    {data.title}
                  </MuiTypography>
                  <MuiTypography
                    variant="h5"
                    className="d-flex fw-bold mb-1"
                    color="textprimary"
                  >
                    {data.count}
                  </MuiTypography>
                  <LinearProgress
                    variant="determinate"
                    value={data.count / 20}
                    color={data.color}
                  />
                </div>
              </div>
            );
          })}
        </MuiCard>
      </div>
    </div>
  );
};
export default Statastics;

const Row1stData = [
  {
    title: "All Earnings",
    count: "$30200",
    icon: <AnalyticsOutlined sx={{ color: "rgb(103, 58, 183)" }} />,
  },
  {
    title: "Task",
    count: 145,
    icon: <CalendarIcon sx={{ color: "rgb(30, 136, 229)" }} />,
  },
  {
    title: "Page Views",
    count: "290+",
    icon: <Description sx={{ color: "rgb(0, 200, 83)" }} />,
  },
  {
    title: "Downloads",
    count: 500,
    icon: <ThumbDown sx={{ color: "rgb(244, 67, 54)" }} />,
  },
];

const row2ndData = [
  {
    title: "Revenue",
    count: "$42,562",
    amount: "$50,032 Last Month",
    icon: <Paid sx={{ fontSize: "xxx-large", color: "rgb(193, 168, 243)" }} />,
    color: "#5e35b1",
  },
  {
    title: "Orders Received",
    count: 486,
    amount: "20% Increase",
    icon: (
      <AccountCircle
        sx={{ fontSize: "xxx-large", color: "rgba(135, 192, 241, 0.99)" }}
      />
    ),
    color: "rgb(30, 136, 229)",
  },
  {
    title: "Total Sales",
    count: 1641,
    amount: "$1,055 Revenue Generated",
    icon: (
      <CalendarIcon
        sx={{ fontSize: "xxx-large", color: "rgb(236, 153, 127)" }}
      />
    ),
    color: "rgb(216, 67, 21)",
  },
];

const row3rdData = [
  {
    title: "Visitors",
    amount: 6035,
    icon: <AccountCircle sx={{ color: "rgb(30, 136, 229)" }} />,
  },
  {
    title: "Invoices",
    amount: 19,
    icon: <Description sx={{ color: "rgb(0, 200, 83)" }} />,
  },
  {
    title: "Issues",
    amount: 63,
    icon: <BugReportSharp sx={{ color: "rgb(244, 67, 54)" }} />,
  },
  {
    title: "Projects",
    amount: "95%",
    icon: <Folder sx={{ color: "rgb(103, 58, 183)" }} />,
  },
];

const row4thData = [
  {
    title: "Last week users",
    amount: 2672,
    icon: <AccountCircle sx={{ color: "rgb(210, 188, 248)" }} />,
    color: "rgb(103, 58, 183)",
  },
  {
    title: "Total earning",
    amount: 6391,
    icon: <AccountBalanceOutlined sx={{ color: "rgb(198, 226, 250)" }} />,
    color: "rgb(30, 136, 229)",
  },
  {
    title: "Today visitors",
    amount: 9276,
    icon: <TagFaces sx={{ color: "rgb(188, 245, 212)" }} />,
    color: "rgb(0, 200, 83)",
  },
  {
    title: "New order",
    amount: 3619,
    icon: <ShoppingCart sx={{ color: "rgb(248, 202, 199)" }} />,
    color: "rgb(244, 67, 54)",
  },
];

const row5thData = [
  {
    title: "Total Paid Users",
    amount: 7652,
    change: "-8% from last 3 months",
  },
  {
    title: "Order Status",
    amount: 625,
    change: "+6% from last 3 months",
  },
  {
    title: "Unique Visitors",
    amount: 6522,
    change: "+10% from last 6 months",
  },
  {
    title: "Monthly Earnings",
    amount: 5963,
    change: "+36% from last 6 months",
  },
];

const row6thData = [
  {
    title: "Facebook Users",
    count: 1165,
    icon: <Facebook />,
    color: "rgb(33, 71, 153)",
    color2: "rgb(59, 89, 152)",
  },
  {
    title: "Twitter Users",
    count: 780,
    icon: <Twitter />,
    color: "rgb(7, 126, 253)",
    color2: "rgb(40, 137, 240)",
  },
  {
    title: "Linked In Users",
    count: 998,
    icon: <LinkedIn />,
    color: "rgb(11, 42, 59)",
    color2: "rgb(8, 48, 68)",
  },
  {
    title: "Youtube Videos",
    count: 650,
    icon: <YouTube />,
    color: "rgb(255, 10, 10)",
    color2: "rgb(253, 58, 58)",
  },
];
const row7thData = [
  {
    title: "Published Project",
    count: 532,
    color: "primary",
  },
  {
    title: "Completed Task",
    count: 1569,
    color: "secondary",
  },
  {
    title: "Pending Task",
    count: 1005,
    color: "warning",
  },
  {
    title: "Issues",
    count: 365,
    color: "error",
  },
];
