import { ChevronRight, Home } from "@mui/icons-material";
import {
  MuiCard,
  MuiIconButton,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";

export const ReturnHomeCard = (props) => {
  return (
    <MuiCard
      className="d-flex justify-content-between align-items-center m-1 p-md-2 px-lg-3 px-md-3 p-lg-2 p-2 mb-2 mb-md-3 mb-lg-3"
      {...props}
    >
      {props.children}
    </MuiCard>
  );
};

export const CurrentPage = (props) => {
  return (
    <MuiTypography sx={{ fontSize: "medium", fontWeight: "bold" }} {...props}>
      {props.children}
    </MuiTypography>
  );
};

export const CurrentPage2 = (props) => {
  const navigate = useNavigate();
  return (
    <MuiTypography sx={{ fontSize: "small", fontWeight: "bold" }} {...props}>
      <MuiIconButton onClick={() => navigate("/dashboard/home")}>
        <Home fontSize="small" sx={{ color: "#5e35b1" }} />{" "}
      </MuiIconButton>
      <ChevronRight sx={{ color: "gray" }} />
      {props.children}
    </MuiTypography>
  );
};

ReturnHomeCard.propTypes = {
  children: propTypes.any,
};

CurrentPage.propTypes = {
  children: propTypes.any,
};

CurrentPage2.propTypes = {
  children: propTypes.any,
};
