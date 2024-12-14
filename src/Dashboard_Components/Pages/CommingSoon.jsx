import { MuiCard, MuiTypography } from "../../MUIComponents/Mui";

const CommingSoon = () => {
  return (
    <>
      <MuiCard sx={{ p: 3 }}>
        <MuiTypography variant="h4">Comming Soon</MuiTypography>
        <MuiTypography variant="subtitle1">
          This section is under construction
        </MuiTypography>
      </MuiCard>
    </>
  );
};
