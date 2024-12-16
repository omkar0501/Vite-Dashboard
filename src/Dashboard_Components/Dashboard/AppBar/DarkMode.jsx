import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";
import { MuiBox } from "../../../MUIComponents/Mui";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: 55,
  height: 55,
  m: 0,
  backgroundColor: "transparent",
  borderRadius: "20%",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "& .icon": {
    width: "130%",
    height: "130%",
  },
}));

const DarkMode = ({ darkMode, toggleDarkMode }) => {
  return (
    <StyledIconButton sx={{}} onClick={toggleDarkMode}>
      <MuiBox
        sx={{
          borderRadius: "20%",
          // border: "1px solid #cccccc",
          backgroundColor: "#e3f2fd",
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1.4,
          "&:hover": {
            backgroundColor: "#2196f3",
          },
        }}
      >
        {darkMode === "dark" ? (
          <img src="/sun.svg" alt="Light Mode" className="icon" />
        ) : (
          <img src="/moon.svg" alt="Dark Mode" className="icon" />
        )}
      </MuiBox>
    </StyledIconButton>
  );
};
export default DarkMode;

DarkMode.propTypes = {
  darkMode: PropTypes.string.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
