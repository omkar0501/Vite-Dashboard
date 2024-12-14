import { MuiBox, MuiCard, MuiTypography } from "../../MUIComponents/Mui";

const CommingSoon = () => {
  return (
    <MuiBox>
      <MuiCard sx={{ p: 5 }}>
        <MuiTypography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "rgb(16, 34, 175)",
            backgroundColor: "rgb(184, 218, 247)",
            borderRadius: "20px",
            p: 2,
          }}
        >
          Comming Soon
        </MuiTypography>
        <MuiTypography sx={{ color: "gray" }} variant="subtitle1">
          This section is under construction
        </MuiTypography>
      </MuiCard>
    </MuiBox>
  );
};
export default CommingSoon;
