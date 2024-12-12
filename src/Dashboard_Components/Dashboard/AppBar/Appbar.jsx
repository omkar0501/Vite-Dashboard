import "../../Css/DashboardAll.css";
import {
  AppBar,
  Menu,
  MenuItem,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  MuiAvatar,
  MuiBadge,
  MuiBox,
  MuiIconButton,
  MuiToolbar,
  MuiDrawer,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import TranslateIcon from "@mui/icons-material/Translate";
import SearchComponent from "./SearchComponent";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  ExitToApp,
  AccountCircleRounded,
  SocialDistance,
  TurnLeft,
} from "@mui/icons-material";
import DrawerList from "../Drawer/DrawerList";
import { useEffect, useState } from "react";

const drawerWidth = 240;
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    paddingTop: 9,
    marginBottom: 7,
  },
}));
const MuiAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        // width: "100%",
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        [theme.breakpoints.down("md")]: {
          marginLeft: "0px",
          width: "100%",
        },
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export const Appbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  // const [close, setClose] = useState(false);
  const isMd = useMediaQuery(theme.breakpoints.up("md"));
  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setOpen(true);
  }, [isMd]);

  const [anchorEl, setAnchorEl] = useState(false);
  const open1 = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <>
      <MuiAppBar
        className="appbar"
        sx={{
          alignItems: "center",
          [theme.breakpoints.down("md")]: { open: { close } },
        }}
        position="fixed"
        open={open}
      >
        <MuiToolbar
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MuiIconButton
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: "#ede7f6",
              borderRadius: "25%",
              width: "5%",
              me: 2,
              display: "none",
              "&:hover": {
                backgroundColor: "#5e35b1",
              },
              [theme.breakpoints.down("md")]: {
                display: "flex",
                float: "left",
              },
              [theme.breakpoints.down("sm")]: {
                width: "12%",
                me: 1,
              },
            }}
          >
            <MenuIcon
              size="small"
              sx={{
                color: "rgb(94, 53, 177)",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          </MuiIconButton>
          <MuiBox sx={{ flex: 1 }}>
            <SearchComponent sx={{ width: "10px" }} />
          </MuiBox>
          <MuiBox sx={{ display: "flex", alignItems: "center" }}>
            <MuiIconButton
              className="AppBarIconBtn1"
              size="medium"
              sx={{
                backgroundColor: "#ede7f6",
                borderRadius: "25%",
                mx: 1,
                "&:hover": {
                  backgroundColor: "#5e35b1",
                },
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
              <MuiBadge>
                <NotificationsNoneIcon
                  className="AppBarIcon1"
                  sx={{
                    color: "rgb(94, 53, 177)",
                    "&:hover": {
                      color: "whitesmoke",
                    },
                  }}
                />
              </MuiBadge>
            </MuiIconButton>
            <MuiIconButton
              className="AppBarIconBtn2"
              size="medium"
              sx={{
                backgroundColor: "#e3f2fd",
                borderRadius: "25%",
                mx: 1,
                "&:hover": {
                  backgroundColor: "#2196f3",
                },
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
              <MuiBadge>
                <TranslateIcon
                  className="AppBarIcon2"
                  sx={{
                    color: "rgb(30, 136, 229)",
                    "&:hover": {
                      color: "whitesmoke",
                    },
                  }}
                />
              </MuiBadge>
            </MuiIconButton>
            <MuiIconButton
              size="medium"
              className="AppBarIconBtn1"
              sx={{
                backgroundColor: "#ede7f6",
                borderRadius: "25%",
                mx: 1,
                "&:hover": {
                  backgroundColor: "#5e35b1",
                },
                [theme.breakpoints.down("sm")]: {
                  display: "none",
                },
              }}
            >
              <WifiTetheringIcon
                className="AppBarIcon1"
                sx={{
                  color: "rgb(94, 53, 177)",
                  "&:hover": {
                    color: "whitesmoke",
                  },
                }}
              />
            </MuiIconButton>
            <MuiIconButton
              className="AppBarIconBtn2"
              size="small"
              color="inherit"
              id="basic-button"
              aria-controls={open1 ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open1 ? "true" : undefined}
              onClick={handleClick}
              sx={{
                borderRadius: "15%",
                backgroundColor: "#e3f2fd",
                mx: 1,
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  backgroundColor: "#2196f3",
                },
              }}
            >
              <MuiAvatar
                sx={{
                  float: "left",
                  p: "5px",
                  [theme.breakpoints.down("sm")]: {
                    p: "0px",
                    float: "right",
                  },
                }}
                src="/sanket.jpg"
              />
              <SettingsOutlinedIcon
                className="AppBarIcon2"
                sx={{
                  mx: 1,
                  my: 0,
                  color: "rgb(100, 136, 229)",
                  "&:hover": {
                    color: "whitesmoke",
                  },
                  [theme.breakpoints.down("sm")]: {
                    // display:'none',
                  },
                }}
              />
            </MuiIconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open1}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{ width: 300 }}
            >
              <MenuItem
                onClick={handleClose}
                sx={{ paddingLeft: 2, paddingRight: 2 }}
              >
                <AccountCircleRounded sx={{ marginRight: 2 }} />
                <MuiTypography>Account Settings</MuiTypography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ paddingLeft: 2, paddingRight: 2 }}
              >
                <SocialDistance sx={{ marginRight: 2 }} />
                <MuiTypography>Social Profile</MuiTypography>
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                sx={{ paddingLeft: 2, paddingRight: 2 }}
              >
                <ExitToApp sx={{ marginRight: 2 }} />
                <MuiTypography>Logout</MuiTypography>
              </MenuItem>
            </Menu>
          </MuiBox>
        </MuiToolbar>
      </MuiAppBar>
      <MuiDrawer
        className="sidebar"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            height: "100%",
            width: drawerWidth,
            boxSizing: "border-box",
            color: "gray",
            backgroundColor: "white",
            border: "none",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{ py: 1, height: "auto" }}>
          <MuiTypography
            sx={{
              display: "flex",
              mx: 2,
              fontWeight: "bolder",
              letterSpacing: 2,
              color: "black",
              "&:active": { color: "black" },
              [theme.breakpoints.down("md")]: {
                // display: "none",
              },
            }}
          >
            <img
              style={{
                borderRadius: "50%",
                width: "17%",
              }}
              src="/DashboardImages/Berry.png"
            />
            <span className="mx-1" />
            BERRY
          </MuiTypography>
          <MuiIconButton
            className="MenuCloseSection"
            onClick={handleDrawerToggle}
            sx={{
              backgroundColor: "#ede7f6",
              borderRadius: "5px",
              width: "auto",
              height: "auto",
              color: "#5e35b1",
              m: 1,
              display: "none",
              "&:hover": {
                backgroundColor: "#5e35b1",
              },
              [theme.breakpoints.down("md")]: {
                display: "flex",
                float: "right",
              },
            }}
          >
            <TurnLeft
              size="small"
              className="MenuCloseIcon"
              sx={{
                color: "#5e35b1",
                "&:hover": {
                  color: "whitesmoke",
                },
              }}
            />
          </MuiIconButton>
        </DrawerHeader>
        <DrawerList />
      </MuiDrawer>
    </>
  );
};
