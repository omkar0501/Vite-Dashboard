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
import PersonPinOutlinedIcon from "@mui/icons-material/PersonPinOutlined";
import HistoryEduOutlinedIcon from "@mui/icons-material/HistoryEduOutlined";
import NotesIcon from "@mui/icons-material/Notes";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { FaHireAHelper } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export const Lists = () => {
  const navigate = useNavigate();
  return (
    <>
      <MuiList
        sx={{
          ".list-item": {
            borderRadius: "20px 0 0 20px",
            margin: "10px 0 10px 0px",
            background: "linear-gradient(to left, #635BFF 50%, #212636 50%)",
            backgroundSize: "200% 100%",
            transition: "all .4s ease-out",
            "&:hover": {
              backgroundColor: "#635BFF",
              color: "white",
              backgroundPosition: "right bottom",
            },
          },
        }}
      >
        <MuiListItem className="list-item" disablePadding>
          <MuiListItemButton as={NavLink} to="/dashboard/home">
            <MuiListItemIcon>
              <HomeOutlinedIcon sx={{ color: "#cccccc" }} size="2vw" />
            </MuiListItemIcon>
            <MuiListItemText>
              <MuiTypography
                sx={{
                  fontWeight: "bold",
                  fontSize: "small",
                  color: "#cccccc",
                }}
              >
                Home
              </MuiTypography>
            </MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
        <MuiDivider sx={{ mx: "15px" }} />
        <MuiListItem className="list-item" disablePadding>
          <MuiListItemButton as={NavLink} to="/dashboard/about">
            <MuiListItemIcon>
              <PersonPinOutlinedIcon sx={{ color: "#cccccc" }} size="2vw" />
            </MuiListItemIcon>
            <MuiListItemText>
              <MuiTypography
                sx={{
                  fontWeight: "bold",
                  fontSize: "small",
                  color: "#cccccc",
                }}
              >
                About
              </MuiTypography>
            </MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
        <MuiDivider sx={{ mx: "15px" }} />
        <MuiListItem className="list-item" disablePadding>
          <MuiListItemButton as={NavLink} to="/dashboard/projects">
            <MuiListItemIcon>
              <HistoryEduOutlinedIcon sx={{ color: "#cccccc" }} size="2vw" />
            </MuiListItemIcon>
            <MuiListItemText>
              <MuiTypography
                sx={{
                  fontWeight: "bold",
                  fontSize: "small",
                  color: "#cccccc",
                }}
              >
                Projects
              </MuiTypography>
            </MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
        <MuiDivider sx={{ mx: "15px" }} />
        <MuiListItem className="list-item" disablePadding>
          <MuiListItemButton as={NavLink} to="/dashboard/notes">
            <MuiListItemIcon>
              <NotesIcon sx={{ color: "#cccccc" }} size="2vw" />
            </MuiListItemIcon>
            <MuiListItemText>
              <MuiTypography
                sx={{
                  fontWeight: "bold",
                  fontSize: "small",
                  color: "#cccccc",
                }}
              >
                Notes
              </MuiTypography>
            </MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
        <MuiDivider sx={{ mx: "15px" }} />
        <MuiListItem className="list-item" disablePadding>
          <MuiListItemButton onClick={() => navigate("/dashboard/users")}>
            <MuiListItemIcon>
              <AccountCircleOutlinedIcon sx={{ color: "#cccccc" }} size="2vw" />
            </MuiListItemIcon>
            <MuiListItemText>
              <MuiTypography
                sx={{
                  fontWeight: "bold",
                  fontSize: "small",
                  color: "#cccccc",
                }}
              >
                Account
              </MuiTypography>
            </MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
      </MuiList>
      <MuiDivider sx={{ borderColor: "white" }} />
      <MuiList
        sx={{
          ".list-item1": {
            background: "linear-gradient(to left, white 35%, #212636 50%)",
            backgroundSize: "200% 100%",
            transition: "all .4s ease-out",
            color: "#cccccc",
            "&:hover": {
              backgroundColor: "#635BFF",
              color: "black",
              backgroundPosition: "right bottom",
              borderRadius: "100px 0 0 100px",
            },
          },
        }}
      >
        <MuiListItem className="list-item1" disablePadding>
          <MuiListItemButton>
            <MuiListItemIcon>
              <FaHireAHelper color="#cccccc" />
            </MuiListItemIcon>
            <MuiListItemText>Hire Me</MuiListItemText>
          </MuiListItemButton>
        </MuiListItem>
      </MuiList>
    </>
  );
};
