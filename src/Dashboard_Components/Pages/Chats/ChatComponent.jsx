import { ChevronRight, Home } from "@mui/icons-material";
import {
  MuiCard,
  MuiIconButton,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import Users from "./Users";

const ChatComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid">
      <MuiCard className="d-flex justify-content-between m-1 p-3 mb-3">
        <MuiTypography sx={{ fontSize: "medium", fontWeight: "bold" }}>
          Chats
        </MuiTypography>
        <MuiTypography sx={{ fontSize: "small", fontWeight: "bold" }}>
          <MuiIconButton onClick={() => navigate("/dashboard/home")}>
            <Home fontSize="small" sx={{ color: "#5e35b1" }} />{" "}
          </MuiIconButton>
          <ChevronRight sx={{ color: "gray" }} /> Chat
        </MuiTypography>
      </MuiCard>
      <div className="row">
        <div className="col-md-4">
          <Users />
        </div>
        <div className="col-md-8"></div>
      </div>
    </div>
  );
};
export default ChatComponent;
