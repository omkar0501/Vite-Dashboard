import {
  Archive,
  FiberSmartRecord,
  FileCopy,
  Lock,
  MoreHoriz,
  PictureAsPdf,
  Storefront,
} from "@mui/icons-material";
import {
  MuiBox,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import BarChartComponent from "./Charts/BarChartComponent";
import LineChartComponent from "./Charts/LineChartComponent";
import DownloadIcon from "@mui/icons-material/Download";
import "./Default_Home.css";
import { useState } from "react";

export default function DefaultHome() {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row gy-1">
          <div className="col-md-4 col-xs-12 mb-0 d-flex paper-bg-page">
            <MuiPaper className="paper-bg1 mb-0">
              <div className="m-1 d-flex justify-content-between">
                <div>
                  <MuiIconButton className="CardIcon1">
                    <FiberSmartRecord />
                  </MuiIconButton>
                </div>
                <div>
                  <MuiIconButton
                    className="CardIcon1"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreHoriz />
                  </MuiIconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <DownloadIcon className="me-1" />
                        Import Card
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <FileCopy className="me-1" />
                        Copy Data
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <PictureAsPdf className="me-1" />
                        Export
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <Archive className="me-1" />
                        Archive File
                      </MuiTypography>
                    </MenuItem>
                  </Menu>
                </div>
              </div>

              <div className="row m-1 my-auto">
                <div className="col-6">
                  <MuiTypography className="text1">$ 502.00</MuiTypography>
                  <MuiTypography className="text2">Total Earning</MuiTypography>
                </div>
              </div>
            </MuiPaper>
          </div>
          <div className="col-md-4 col-xs-12 d-flex mb-0 paper-bg-page">
            <MuiPaper className="paper-bg2 mb-0">
              <div className="m-1 d-flex justify-content-between">
                <div>
                  <MuiIconButton
                    className="CardIcon2"
                    sx={{ borderBottom: "1px solid gray" }}
                  >
                    <Lock />
                  </MuiIconButton>
                </div>
                <div>
                  <MuiIconButton
                    className="CardIcon2"
                    id="basic-button1"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  >
                    <MoreHoriz />
                  </MuiIconButton>
                  <Menu
                    id="basic-menu1"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <DownloadIcon className="me-1" />
                        Import Card
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <FileCopy className="me-1" />
                        Copy Data
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <PictureAsPdf className="me-1" />
                        Export
                      </MuiTypography>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      <MuiTypography>
                        <Archive className="me-1" />
                        Archive File
                      </MuiTypography>
                    </MenuItem>
                  </Menu>
                </div>
              </div>
              <div className="row m-1 my-auto">
                <div className="col-6">
                  <MuiTypography className="text1">$ 361.00</MuiTypography>
                  <MuiTypography className="text2">Total Order</MuiTypography>
                </div>
              </div>
            </MuiPaper>
          </div>
          <div className="col-md-4 col-xs-12 paper-bg-page">
            <div className="row d-flex mx-auto">
              <MuiPaper
                className="paper-bg1"
                sx={{
                  width: "auto",
                  "&.MuiPaper-root": {
                    width: "95%",
                  },
                }}
              >
                <div
                  className=" m-1 d-flex justify-content-between"
                  // style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <MuiIconButton className="CardIcon1">
                    <Storefront />
                  </MuiIconButton>

                  <MuiBox sx={{}}>
                    <MuiTypography className="text1">$ 500.00</MuiTypography>
                    <MuiTypography className="text2">
                      Total Income
                    </MuiTypography>
                  </MuiBox>
                </div>
              </MuiPaper>
            </div>
            <div className="row d-flex mx-auto">
              <MuiPaper
                className="paper-bg2"
                sx={{
                  width: "auto",
                  "&.MuiPaper-root": {
                    width: "95%",
                  },
                }}
              >
                <div
                  className=" m-1 d-flex justify-content-between"
                  // style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <MuiIconButton
                    sx={{ borderBottom: "1px solid gray" }}
                    className="CardIcon2"
                  >
                    <Storefront />
                  </MuiIconButton>

                  <MuiBox sx={{}}>
                    <MuiTypography className="text1">$ 500.00</MuiTypography>
                    <MuiTypography className="text2">
                      Total Income
                    </MuiTypography>
                  </MuiBox>
                </div>
              </MuiPaper>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 d-flex mt-3">
            <BarChartComponent className="flex-fill" />
          </div>
          <div className="col-12 col-md-4 mt-3">
            <LineChartComponent />
          </div>
        </div>
      </div>
    </>
  );
}
