import { MoreVert } from "@mui/icons-material";
import {
  MuiAvatar,
  MuiCard,
  MuiDivider,
  MuiIconButton,
  MuiTypography,
} from "../../../MUIComponents/Mui";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../Contacts/SearchBar";

const Users = () => {
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("Token");
  useEffect(() => {
    axios
      .get("http://localhost:8081/api/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUsers(response.data);
        console.log(users);
      });
  }, []);
  console.log(users);
  return (
    <div>
      <MuiCard className="p-3">
        <MuiTypography className="d-flex justify-content-between align-items-center mb-1">
          <div className="d-flex align-items-center gap-2">
            <MuiAvatar src="\DashboardImages\male.jpg"></MuiAvatar>
            <MuiTypography>Sanket Gaware</MuiTypography>
          </div>
          <MuiIconButton>
            <MoreVert />
          </MuiIconButton>
        </MuiTypography>
        <div className="d-flex justify-content-center my-3 mx-0">
          <SearchBar />
        </div>
        {users.map((data, i) => {
          return (
            <div kry={i}>
              <div className="d-flex justify-content-between align-items-center mx-2">
                <div className="d-flex gap-2">
                  <MuiAvatar src="\DashboardImages\male.jpg"></MuiAvatar>
                  <MuiTypography className="fw-bold">
                    {data.fullname}
                  </MuiTypography>
                </div>
                <div>
                  <MuiTypography>...</MuiTypography>
                </div>
              </div>
              <MuiDivider
                sx={{
                  my: 2,
                  borderBottom: "1px solid",
                }}
              />
            </div>
          );
        })}
      </MuiCard>
    </div>
  );
};
export default Users;
