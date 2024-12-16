import { Grid } from "@mui/material";
import AreaCharts from "../All Charts/AreaCharts";
import LatestCustomer from "./LatestCustomer";
import {
  MuiBox,
  MuiIconButton,
  MuiPaper,
  MuiTextField,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { AccountCircle, Paid, Share } from "@mui/icons-material";

const BoxData = [
  {
    icon: <Share />,
    title: "SHARE",
    total: 1000,
  },
  {
    icon: <Share />,
    title: "NETWORK",
    total: 600,
  },
  {
    icon: <Share />,
    title: "RETURNS",
    total: 3550,
  },
  {
    icon: <Share />,
    title: "ORDER",
    total: "100%",
  },
];

const Analytics = () => {
  return (
    <MuiBox sx={{ width: "160vh" }} className="row">
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
              >
                {/* <MuiPaper className=""> */}
                <MuiBox className="d-flex justify-content-between p-4 mx-0">
                  <MuiBox>
                    <MuiIconButton>{data.icon}</MuiIconButton>
                  </MuiBox>
                  <MuiBox>
                    <MuiTypography>{data.total}</MuiTypography>
                    <MuiTypography>{data.title}</MuiTypography>
                  </MuiBox>
                </MuiBox>
              </MuiPaper>
              //   </Grid>
            );
          })}
        </div>
      </Grid>
    </MuiBox>
  );
};
export default Analytics;
