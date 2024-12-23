import { Grid, useTheme } from "@mui/material";
import AreaCharts from "../All Charts/AreaCharts";
import LatestCustomer from "./LatestCustomer";
import {
  MuiBox,
  MuiCard,
  MuiDivider,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import {
  AccountCircle,
  ArrowDownward,
  ArrowUpward,
  CalendarTodayOutlined,
  Paid,
  RepeatRounded,
  Share,
  ShareTwoTone,
  WifiTethering,
} from "@mui/icons-material";
import { getColor } from "../../../Utils/utils";
import { Revenue } from "../../../Data/JsonData/EmployeeData";

const BoxData = [
  {
    icon: <Share />,
    title: "SHARE",
    total: 1000,
  },
  {
    icon: <WifiTethering />,
    title: "NETWORK",
    total: 600,
  },
  {
    icon: <RepeatRounded />,
    title: "RETURNS",
    total: 3550,
  },
  {
    icon: <CalendarTodayOutlined />,
    title: "ORDER",
    total: "100%",
  },
];

const Analytics = () => {
  const getIcon = (growth) => {
    return growth === "profit" ? (
      <ArrowUpward fontSize="x-small" />
    ) : (
      <ArrowDownward fontSize="x-small" />
    );
  };
  const theme = useTheme();

  return (
    <MuiBox className="row">
      <Grid className="col-md-7">
        <AreaCharts />
        <MuiBox className="d-flex gap-2 my-2">
          <MuiPaper
            className=" flex-fill"
            sx={{ p: 3, backgroundColor: "#5e35b1", borderRadius: "10px" }}
          >
            <MuiBox className="d-flex justify-content-between">
              <MuiBox>
                <MuiTypography
                  sx={{ fontSize: "medium", fontWeight: "bold" }}
                  className="d-flex c-title"
                >
                  Revenue
                </MuiTypography>
                <MuiTypography
                  sx={{ fontSize: "large", fontWeight: "bold", my: 1 }}
                  className="d-flex c-title"
                >
                  $42,552
                </MuiTypography>
                <MuiTypography className="c-title" sx={{ fontSize: "small" }}>
                  $50,032 Last Month
                </MuiTypography>
              </MuiBox>
              <MuiBox className="d-flex align-items-center mx-auto">
                <Paid
                  sx={{ fontSize: "xxx-large", color: "rgb(193, 168, 243)" }}
                />
              </MuiBox>
            </MuiBox>
          </MuiPaper>
          <MuiPaper
            className=" flex-fill"
            sx={{ p: 3, backgroundColor: "#3698e7", borderRadius: "10px" }}
          >
            <MuiBox className="d-flex justify-content-between">
              <MuiBox>
                <MuiTypography
                  className="d-flex c-title"
                  sx={{ fontSize: "medium", fontWeight: "bold" }}
                >
                  Order Received
                </MuiTypography>
                <MuiTypography
                  sx={{ fontSize: "large", fontWeight: "bold", my: 1 }}
                  className="d-flex c-title"
                >
                  486
                </MuiTypography>
                <MuiTypography
                  className="d-flex c-title"
                  sx={{ fontSize: "small" }}
                >
                  20% increase
                </MuiTypography>
              </MuiBox>
              <MuiBox className="d-flex align-items-center mx-auto">
                <AccountCircle
                  sx={{ fontSize: "xxx-large", color: "#90caf9" }}
                />
              </MuiBox>
            </MuiBox>
          </MuiPaper>
        </MuiBox>
        <LatestCustomer />
      </Grid>
      <Grid className="col-md-5">
        <div className="row mx-0">
          {BoxData.map((data, i) => {
            return (
              <MuiPaper
                as={Grid}
                key={i}
                className="col-md-6 col-xs-12 flex-fill border "
                sx={{
                  [theme.breakpoints.down("md")]: {
                    mt: 1,
                  },
                }}
              >
                {/*<MuiPaper className=""> */}
                <MuiBox className="d-flex justify-content-between p-4 mx-0">
                  <MuiBox>
                    <MuiIconButton
                      sx={{ borderRadius: "10px", backgroundColor: "#e3f2fd" }}
                    >
                      {data.icon}
                    </MuiIconButton>
                  </MuiBox>
                  <MuiBox>
                    <MuiTypography className="fw-bold">
                      {data.total}
                    </MuiTypography>
                    <MuiTypography className="fs-6">{data.title}</MuiTypography>
                  </MuiBox>
                </MuiBox>
              </MuiPaper>
              //   </Grid>
            );
          })}
        </div>
        <MuiPaper className="mt-2">
          <MuiTypography className="p-3 py-4 fw-bold d-flex">
            Total Revenue
          </MuiTypography>
          {Revenue.map((data, i) => {
            return (
              <MuiBox key={i}>
                <MuiDivider sx={{ border: "1px solid gray" }} className="m-0" />
                <MuiBox className="d-flex justify-content-between p-3 ">
                  <MuiBox className="d-flex gap-3">
                    <MuiTypography sx={{ color: getColor(data.growth) }}>
                      {getIcon(data.growth)}
                    </MuiTypography>
                    <MuiTypography sx={{ fontSize: "small" }}>
                      {data.title}
                    </MuiTypography>
                  </MuiBox>
                  <MuiBox>
                    <MuiTypography sx={{ color: getColor(data.growth) }}>
                      {data.total}
                    </MuiTypography>
                  </MuiBox>
                </MuiBox>
              </MuiBox>
            );
          })}
        </MuiPaper>
        <MuiCard
          className="d-flex justify-content-between"
          sx={{
            p: 3,
            backgroundColor: "#5e35b1",
            borderRadius: "10px",
            mt: 2,
          }}
        >
          <AccountCircle
            sx={{
              fontSize: "xxx-large",
              color: "rgb(193, 168, 243)",
            }}
          />
          <MuiBox>
            <MuiTypography sx={{ fontWeight: "bold", color: "white" }}>
              1,658
            </MuiTypography>
            <MuiTypography sx={{ fontWeight: "bold", color: "white" }}>
              Daily Users
            </MuiTypography>
          </MuiBox>
        </MuiCard>
        <MuiCard
          className="d-flex justify-content-between"
          sx={{
            p: 3,
            backgroundColor: "#3698e7",
            borderRadius: "10px",
            mt: 2,
          }}
        >
          <ShareTwoTone
            sx={{
              fontSize: "xxx-large",
              color: "#90caf9",
            }}
          />
          <MuiBox>
            <MuiTypography sx={{ fontWeight: "bold", color: "white" }}>
              1K
            </MuiTypography>
            <MuiTypography sx={{ fontWeight: "bold", color: "white" }}>
              Daily Page view
            </MuiTypography>
          </MuiBox>
        </MuiCard>
      </Grid>
    </MuiBox>
  );
};
export default Analytics;
