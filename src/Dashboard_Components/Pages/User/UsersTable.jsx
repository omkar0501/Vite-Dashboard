import { DataGrid } from "@mui/x-data-grid";
import { mockUserJson } from "../../../Data/JsonData/EmployeeData";
import { MuiAvatar, MuiBox, MuiTypography } from "../../../MUIComponents/Mui";
import "../../Css/DashboardAll.css";
const StatusCell = (params) => {
  const status = params.value;
  const statusStyle = {
    active: { backgroundColor: "#b9f6ca", color: "green" },
    inactive: { backgroundColor: "#ffcdd2", color: "red" },
    pending: { backgroundColor: "#fbe9e7", color: "#ff5722" },
  };
  return (
    <MuiBox
      sx={{
        padding: "4px 12px",
        borderRadius: "20px",
        backgroundColor: statusStyle[status]?.backgroundColor,
        color: statusStyle[status]?.color,
        display: "inline-block",
        textAlign: "center",
        // border: "2px solid",
        // borderColor: statusStyle[status]?.color,
      }}
    >
      <MuiTypography variant="body2">{status}</MuiTypography>
    </MuiBox>
  );
};

const UsersTable = () => {
  return (
    <>
      <div className="container-fluid">
        <DataGrid
          columns={[
            { field: "id", headerName: "ID" },
            { field: "name", headerName: "Name", width: 150 },
            { field: "email", headerName: "Email", width: 220 },
            { field: "mobile", headerName: "Mobile No", width: 160 },
            { field: "role", headerName: "Role" },
            {
              field: "image",
              headerName: "Profile",
              // renderCell: (params) => <Avatar src={params.value} />,
              headerAlign: "center",
              renderCell: () => (
                <MuiAvatar
                  sx={{ mx: "auto" }}
                  src="/DashboardImages/defaultuser.png"
                />
              ),
            },
            {
              field: "status",
              headerName: "Status",
              renderCell: StatusCell,
              headerAlign: "center",
            },
          ]}
          rows={mockUserJson}
          className="datagrid-user"
          sx={{
            boxShadow: 2,
            borderRadius: "8px",
            border: "1px solid #ddd",
            height: "10%",
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#1976d2",

              fontSize: "larger",
              borderBottom: "2px solid #ddd",
            },
            "& .MuiDataGrid-cell": {
              borderRight: "1px solid #ddd", // Vertical borders between columns
              borderBottom: "1px solid #ddd", // Border below cells
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #ddd",
            },
          }}
          checkboxSelection
        />
      </div>
    </>
  );
};
export default UsersTable;
