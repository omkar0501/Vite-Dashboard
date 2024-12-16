import { DataGrid } from "@mui/x-data-grid";
import { MuiAvatar, MuiPaper, MuiTypography } from "../../../MUIComponents/Mui";
import { countryCoustomer } from "../../../Data/JsonData/EmployeeData";

const LatestCustomer = () => {
  return (
    <MuiPaper className="mt-3">
      <MuiTypography sx={{ p: 2, display: "flex", fontWeight: "bold" }}>
        Latest Customers
      </MuiTypography>
      <DataGrid
        columns={[
          {
            field: "flag",
            headerName: "#",
            renderCell: (params) => <MuiAvatar src={params.value} />,
          },
          { field: "Country", headerName: "Country" },
          { field: "Name", headerName: "Name" },
          { field: "Average", headerName: "Average" },
        ]}
        rows={countryCoustomer}
        sx={{
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: "bold",
            fontSize: "medium",
          },
        }}
      />
    </MuiPaper>
  );
};
export default LatestCustomer;
