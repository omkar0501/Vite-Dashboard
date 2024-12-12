import "./Drawer.css";
import {
  MuiDivider,
  MuiList,
  MuiListItem,
  MuiListItemButton,
  MuiListItemIcon,
  MuiListItemText,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import ContentPasteGoOutlinedIcon from "@mui/icons-material/ContentPasteGoOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ShopOutlinedIcon from "@mui/icons-material/ShopOutlined";
import { Link } from "react-router-dom";

const DrawerList = () => {
  return (
    <>
      <MuiList
        sx={{
          mx: 2,
          "&:hover": {
            backgroundColor: "transparent", // Removes the unwanted hover background
            "& .MuiListItemIcon-root, & .MuiListItemText-root": {
              color: "#364152", // Keeps the text and icon color the same on hover
              fontWeight: "normal", // Ensures font weight does not change
            },
          },
        }}
      >
        <MuiTypography className="list-item-title">Dashboard</MuiTypography>
        {DashboardTabs.map((links, i) => {
          return (
            <TabMenu
              key={i}
              id={links.id}
              icon={links.icon}
              title={links.title}
              path={links.path}
            />
          );
        })}

        <MuiDivider sx={{ my: 1 }} />

        <MuiTypography className="list-item-title">Widget</MuiTypography>
        {WidgetTabs.map((links, i) => {
          return (
            <TabMenu
              key={i}
              id={links.id}
              icon={links.icon}
              title={links.title}
              path={links.path}
            />
          );
        })}

        <MuiDivider sx={{ my: 1 }} />

        <MuiTypography className="list-item-title">Application</MuiTypography>
        {ApplicationTabs.map((links, i) => {
          return (
            <TabMenu
              key={i}
              id={links.id}
              icon={links.icon}
              title={links.title}
              path={links.path}
            />
          );
        })}

        <MuiDivider sx={{ my: 1 }} />
      </MuiList>

      <MuiDivider sx={{ borderColor: "white" }} />
    </>
  );
};

const TabMenu = ({ icon, title, path }) => {
  return (
    <MuiListItem className="list-item" disablePadding>
      <MuiListItemButton as={Link} to={path}>
        <MuiListItemIcon>{icon}</MuiListItemIcon>
        <MuiListItemText>
          <MuiTypography className="list-item-text">{title}</MuiTypography>
        </MuiListItemText>
      </MuiListItemButton>
    </MuiListItem>
  );
};

const DashboardTabs = [
  {
    id: 1,
    title: "Default",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "/dashboard/home",
  },
  {
    id: 2,
    title: "Analytics",
    icon: <AnalyticsOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
];

const WidgetTabs = [
  {
    id: 1,
    title: "Statistics",
    icon: <ContentPasteGoOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 2,
    title: "Data",
    icon: <QueryStatsOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 3,
    title: "Chart",
    icon: <PeopleOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
];

const ApplicationTabs = [
  {
    id: 1,
    title: "User",
    icon: <PeopleOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "/dashboard/user",
  },
  {
    id: 2,
    title: "Customer",
    icon: <ShopOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 3,
    title: "Chat",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 4,
    title: "Kanban",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 5,
    title: "Mail",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 6,
    title: "Calender",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 7,
    title: "Contact",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 8,
    title: "E-commerce",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 9,
    title: "Invoice",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
  {
    id: 10,
    title: "CRM",
    icon: <HomeOutlinedIcon className="list-item-icon" size="2vw" />,
    path: "",
  },
];

export default DrawerList;
