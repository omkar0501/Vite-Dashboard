import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { MuiBox } from "../../../MUIComponents/Mui";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  MuiAvatar,
  MuiBadge,
  MuiDivider,
  MuiDrawer,
  MuiIconButton,
  MuiMenu,
  MuiMenuItem,
  MuiThemeProvider,
  MuiToolbar,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import { DashboardMain } from "./DashboardMain";
import { Search } from "./Search";
import { Lists } from "./Lists";
import { darkTheme, lightTheme } from "../Theme/Theme";
import { DarkModeSwitch } from "./DarkModeSwitch";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
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
        // width:'100%',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

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

const Dashboard = () => {
  React.useEffect(() => {
    if (!localStorage.getItem("Name")) {
      navigate("/unauthorized");
    }
  }, []);

  function Logout() {
    localStorage.removeItem("Name");
    navigate("/");
  }

  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  // const isMobile = useMediaQuery();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  // React.useEffect(() => {
  //   if (isMobile) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }, [isMobile]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("Mode") || "light"
  );
  const [dashTheme, setDashTheme] = React.useState(lightTheme);
  const toggleDarkMode = () => {
    const newMode = darkMode === "light" ? "dark" : "light";
    setDarkMode(newMode);
    localStorage.setItem("Mode", newMode);
  };

  React.useEffect(() => {
    const storedMode = localStorage.getItem("Mode");
    if (storedMode) {
      setDarkMode(storedMode);
    }
  }, []);
  React.useEffect(() => {
    setDashTheme(darkMode === "dark" ? darkTheme : lightTheme);
  }, [darkMode]);
  return (
    <MuiThemeProvider theme={dashTheme}>
      <MuiBox sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          className="appbar"
          sx={{
            // backgroundColor: `${bgcolor}`,
            // color: "black",
            [theme.breakpoints.down("md")]: { open: { close } },
          }}
          position="fixed"
          open={open}
        >
          <MuiToolbar>
            <MuiIconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  mr: 2,
                },
                open && { display: "none" },
              ]}
            >
              <MenuIcon />
            </MuiIconButton>

            <MuiBox sx={{ flexGrow: 1 }} />

            <DarkModeSwitch
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
            <Search />
            <MuiBox sx={{ display: { xs: "flex", md: "flex" } }}>
              <MuiIconButton size="large" color="gray">
                <MuiBadge color="error">
                  <ChatBubbleOutlineOutlinedIcon />
                </MuiBadge>
              </MuiIconButton>
              <MuiIconButton size="large" color="gray">
                <MuiBadge color="error">
                  <NotificationsOutlinedIcon />
                </MuiBadge>
              </MuiIconButton>
              <MuiIconButton
                size="large"
                edge="end"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <MuiAvatar src="/sanket.jpeg" />
              </MuiIconButton>
              <MuiMenu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MuiMenuItem
                  sx={{ color: "black" }}
                  onClick={handleDrawerClose}
                >
                  {" "}
                  <a href="/dashboard/profile">
                    <MuiTypography sx={{ color: "black" }}>
                      Profile
                    </MuiTypography>
                  </a>
                </MuiMenuItem>
                <MuiMenuItem>Account</MuiMenuItem>
                <MuiMenuItem onClick={Logout}>Log Out</MuiMenuItem>
              </MuiMenu>
            </MuiBox>
          </MuiToolbar>
        </AppBar>
        <MuiDrawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
              color: "gray",
              backgroundColor: "#212636",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <DashboardOutlinedIcon color="#cccccc" className="m-2" size="2vw" />
            <MuiTypography
              as={Link}
              to="/dashboard/main"
              sx={{
                display: "flex",
                mx: "auto",
                fontWeight: "bold",
                letterSpacing: 1,
                color: "#cccccc",
                "&:hover": { color: "white" },
                "&:active": { color: "gray" },
              }}
            >
              My Dashboard
            </MuiTypography>
            <MuiIconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftOutlinedIcon sx={{ color: "white" }} />
              ) : (
                <ChevronRightIcon color="white" />
              )}
            </MuiIconButton>
          </DrawerHeader>
          <MuiDivider sx={{ borderColor: "white" }} />
          <Lists />
        </MuiDrawer>

        <DashboardMain sx={{}} open={open}>
          <Outlet />
        </DashboardMain>
      </MuiBox>
    </MuiThemeProvider>
  );
};
export default Dashboard;
