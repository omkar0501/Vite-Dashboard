import { DataGrid } from "@mui/x-data-grid";
import { MuiAvatar, MuiPaper, MuiTypography } from "../../../MUIComponents/Mui";
import { countryCoustomer } from "../../../Data/JsonData/EmployeeData";

const LatestCustomer = () => {
  return (
    <MuiPaper className="mt-3 px-2 py-2">
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
          boxShadow: 2,
          borderRadius: "8px",
          border: "1px solid #ddd",
          width: "100%",
          overflowX: "auto",
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#1976d2",
            fontSize: "larger",
          },
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ddd", // Vertical borders between columns
            borderBottom: "1px solid #ddd", // Border below cells
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "1px solid #ddd",
          },
          overflow: "auto",
        }}
      />
    </MuiPaper>
  );
};
export default LatestCustomer;
