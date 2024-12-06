import { useState } from "react";
import {
  MuiBox,
  MuiButton,
  MuiTextField,
  MuiTypography,
} from "../../../MUIComponents/Mui";

export const Child2 = ({ onData }) => {
  const [childData, setChildData] = useState("");
  function SendToParent() {
    console.log(onData);
    onData(childData);
  }
  return (
    <MuiBox>
      <MuiTypography variant="h5" className="fw-bold mb-3">
        Child Component
      </MuiTypography>
      <MuiTypography>
        <MuiTextField
          label="Name"
          placeholder="Enter Name"
          value={childData}
          onChange={(e) => setChildData(e.target.value)}
        />
        <br />
        <MuiButton variant="outlined" className="mt-3" onClick={SendToParent}>
          Send Data
        </MuiButton>
      </MuiTypography>
    </MuiBox>
  );
};
