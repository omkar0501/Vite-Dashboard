import { DataGrid } from "@mui/x-data-grid";
import { mockDataContacts } from "../../../Data/JsonData/EmployeeData";
import { MuiAvatar, MuiBox } from "../../../MUIComponents/Mui";
import { useState, useEffect } from "react";
import {
  CurrentPage,
  CurrentPage2,
  ReturnHomeCard,
} from "../Common/ReturnHome";

const GenderCell = (params) => {
  const [path, setPath] = useState("");
  const gender = params.value;

  useEffect(() => {
    if (gender == "male") {
      setPath("/DashboardImages/male.jpg");
    } else {
      setPath("/DashboardImages/female.jpg");
    }
  }, [gender]);

  return (
    <MuiBox>
      <MuiAvatar sx={{ mx: "auto" }} src={path} />
    </MuiBox>
  );
};

const CustomerTable = () => {
  return (
    <div className="container-fluid ms-2 mt-2">
      <ReturnHomeCard>
        <CurrentPage>Customer Table</CurrentPage>
        <CurrentPage2>Customer</CurrentPage2>
      </ReturnHomeCard>
      <DataGrid
        columns={[
          { field: "id", headerName: "ID" },
          { field: "name", headerName: "Name", width: 150 },
          { field: "email", headerName: "Email", width: 250 },
          { field: "age", headerName: "Age" },
          { field: "gender", headerName: "Gender" },
          { field: "phone", headerName: "Phone No", width: 150 },
          { field: "address", headerName: "Address", width: 300 },
          { field: "city", headerName: "City", width: 150 },
          { field: "zipCode", headerName: "Zip Code" },
          { field: "registrarId", headerName: "Registration ID", width: 150 },
          {
            field: "image",
            headerName: "Image",
            renderCell: GenderCell,
            headerAlign: "center",
          },
        ]}
        rows={mockDataContacts}
        className="datagrid-customer"
        sx={{
          boxShadow: 2,
          borderRadius: "8px",
          border: "1px solid #ddd",
          height: "100%",

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
      />
    </div>
  );
};

export default CustomerTable;
