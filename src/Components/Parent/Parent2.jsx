import { useState } from "react";
import { MuiBox, MuiDivider, MuiTypography } from "../../MUIComponents/Mui";
import { Child2 } from "./Child/Child2";

export const Parent2 = () => {
  const [fromChild, setFromChild] = useState();

  function HandleDataFromChild(data) {
    setFromChild(data);
  }
  return (
    <MuiBox>
      <MuiTypography variant="h4" class="fw-bold">
        Parent Component
      </MuiTypography>
      <MuiTypography>
        My Child is <span className="fw-bold">{fromChild}</span>
      </MuiTypography>
      <MuiDivider sx={{ my: 2, border: "1px solid" }} />
      <Child2 onData={HandleDataFromChild} />
    </MuiBox>
  );
};
