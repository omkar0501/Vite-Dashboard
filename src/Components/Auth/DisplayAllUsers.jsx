import { useEffect, useState } from "react";
import { getAccessToken, getAllUsersApi } from "../../APIs/Utils";
import { DataGrid } from "@mui/x-data-grid";
import {
  Alert,
  Avatar,
  Button,
  Card,
  CardContent,
  Divider,
  Modal,
  Table,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  password: yup.string("Enter Password").required("Password is required"),
  new_password: yup
    .string("Enter New Password")
    .required("New Password is Required")
    .min(8, "Password should be 8 characters length")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi,
      "Password must contain:\n- one Uppercase character,Symbol,Number"
    ),
  confirm_new_password: yup
    .string("Enter a Password")
    .required("Password is Required")
    .oneOf([yup.ref("new_password"), null], "Password must Match"),
});
var id = 0;
const ChangePassword = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [errmsg, setErrMsg] = useState("");

  const ChangePassword = (values) => {
    const token = localStorage.getItem("Token");
    // console.log(token);
    setErrMsg("");
    console.log("id={id}");
    values.password === values.new_password
      ? setErrMsg("New password must be different")
      : axios
          .put(
            `http://192.168.1.21:8001/api/changepassword/${id}/`,
            {
              password: values.password,
              new_password: values.new_password,
              confirm_new_password: values.confirm_new_password,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            response.status === 200
              ? // <Alert severity="success">{response.data.message}...</Alert>
                setErrMsg(response.data.message)
              : "";
          })
          .catch((error) => {
            console.log(error.response);
            error.status === 401
              ? setErrMsg(error.response.data.detail)
              : setErrMsg(error.response.statusText);
            error.status === 400
              ? setErrMsg(error.response.data.error)
              : setErrMsg(error.response.statusText);
            error.status === 403
              ? setErrMsg(error.response.statusText)
              : setErrMsg(error.response.statusText);
          });
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      new_password: "",
      confirm_new_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      ChangePassword(values);
    },
  });
  return (
    <>
      <Button
        variant="outlined"
        onClick={handleOpen}
        sx={{ mx: 2, fontWeight: "bold", border: "1px solid" }}
      >
        Change Password
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          {errmsg === "Password changed successfully." ? (
            <Alert sx={{ p: 0, px: 1 }} severity="success">
              {errmsg}
            </Alert>
          ) : (
            ""
          )}
          <Typography
            variant="h4"
            sx={{
              m: 2,
              fontWeight: "bold",
              fontFamily: "fantasy",
              color: "#002999",
              display: "flex",
            }}
          >
            Change Password
          </Typography>
          <Typography
            sx={{
              fontSize: "small",
              mb: 1,
              display: "flex",
              justifyContent: "center",
            }}
            color="error"
          >
            {errmsg === "Password changed successfully." ? "" : errmsg}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <form onSubmit={formik.handleSubmit}>
              <TextField
                className="mb-3"
                variant="outlined"
                label="Current Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <br />
              <TextField
                sx={{
                  ".helperTextMultiline": {
                    whiteSpace: "pre-line",
                    fontSize: "x-small",
                  },
                }}
                className="mb-3"
                variant="outlined"
                label="New Password"
                type="password"
                name="new_password"
                value={formik.values.new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.new_password &&
                  Boolean(formik.errors.new_password)
                }
                helperText={
                  formik.touched.new_password && formik.errors.new_password
                }
                FormHelperTextProps={{ className: "helperTextMultiline" }}
              />
              <br />
              <TextField
                className="mb-3"
                variant="outlined"
                label="Confirm New Password"
                type="password"
                name="confirm_new_password"
                value={formik.values.confirm_new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirm_new_password &&
                  Boolean(formik.errors.confirm_new_password)
                }
                helperText={
                  formik.touched.confirm_new_password &&
                  formik.errors.confirm_new_password
                }
              />
              <br />
              <Button
                sx={{
                  display: "flex",
                  mx: "auto",
                  fontWeight: "bold",
                  border: "1px solid",
                }}
                type="submit"
                variant="outlined"
              >
                Change
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export const DisplayAllUsers = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const lsEmail = localStorage.getItem("Email");
  // const [id, setId] = useState(0);

  const fetchUsers = async () => {
    const user = await getAllUsersApi();
    setUsers(user);
    if (users.status === 401) {
      console.log("..." + users);
      const token = await getAccessToken();
      localStorage.setItem("Token", token.access);
      // console.log(token.access);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, [users]);

  function handlelogout() {
    localStorage.removeItem("Token");
    localStorage.removeItem("RefreshToken");
    confirm("Do you want to logout ?") == true ? navigate("/") : "";
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      sx={{ mt: "60px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleOpen}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handlelogout}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        ></IconButton>
        <p>Logout</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {users.status === 401 ? (
        <Typography
          variant="h5"
          color="error"
          sx={{ fontSize: "medium", m: 1 }}
        >
          Given token not valid for any token type or unauthorized access
        </Typography>
      ) : (
        ""
      )}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              All Users
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Avatar src={""} />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Card>
              <CardContent>
                <CardContent>
                  {Array.isArray(users) &&
                    users.map((user, i) => {
                      if (user.email === lsEmail) {
                        id = user.id;
                        return (
                          <Box
                            sx={{ display: "flex", justifyContent: "left" }}
                            key={i}
                          >
                            <Card
                              as={Col}
                              md={4}
                              sx={{
                                height: "100%",
                                my: "auto",
                                width: "40%",
                                border: "1px solid gray",
                                borderRadius: "20px",
                              }}
                            >
                              <Typography
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {user.image !== null ? (
                                  <img
                                    style={{
                                      borderRadius: "100px",
                                      border: "5px solid #7CB9E8",
                                      marginTop: "10px",
                                    }}
                                    width="35%"
                                    src={user.image}
                                  />
                                ) : (
                                  <img
                                    style={{
                                      borderBottomLeftRadius: "200px",
                                      borderBottomRightRadius: "200px",
                                      border: "5px solid #7CB9E8",
                                      marginTop: "10px",
                                    }}
                                    width="35%"
                                    src="/sanket.jpeg"
                                  />
                                )}
                              </Typography>

                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                  fontSize: "x-large",
                                  fontFamily: "fantasy",
                                  mt: 1,
                                  color: "#002999",

                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                {user.first_name.toLocaleUpperCase()}{" "}
                                {user.last_name.toLocaleUpperCase()}
                              </Typography>
                              <Divider
                                sx={{ backgroundColor: "black", m: 2 }}
                              />
                              <Box sx={{ px: 5, mb: 3 }}>
                                <Row>
                                  <Typography
                                    style={{
                                      fontWeight: "bold",
                                      display: "flex",
                                      float: "left",
                                      fontFamily: "cursive",
                                    }}
                                    md={4}
                                    as={Col}
                                  >
                                    User Id :
                                  </Typography>
                                  <Typography
                                    sx={{
                                      display: "flex",
                                      float: "left",
                                      fontSize: "x-small",
                                      color: "#006666",
                                    }}
                                    md={8}
                                    as={Col}
                                  >
                                    {user.uid}
                                  </Typography>
                                </Row>
                                <Row>
                                  <Typography
                                    as={Col}
                                    md={4}
                                    style={{
                                      fontWeight: "bold",
                                      display: "flex",
                                      float: "left",
                                      fontFamily: "cursive",
                                    }}
                                  >
                                    Role:
                                  </Typography>
                                  <Typography
                                    sx={{
                                      display: "flex",
                                      float: "left",
                                      color: "#006666",
                                    }}
                                    as={Col}
                                    md={8}
                                  >
                                    {user.role}
                                  </Typography>
                                </Row>
                                <Row>
                                  <Typography
                                    as={Col}
                                    md={4}
                                    style={{
                                      fontWeight: "bold",
                                      display: "flex",
                                      float: "left",
                                      fontFamily: "cursive",
                                    }}
                                  >
                                    Email Id :
                                  </Typography>
                                  <Typography
                                    sx={{
                                      display: "flex",
                                      float: "left",
                                      color: "#006666",
                                      fontStyle: "italic",
                                      backgroundColor: "#e6fff7",
                                    }}
                                    as={Col}
                                    md={8}
                                  >
                                    {user.email}
                                  </Typography>
                                </Row>
                              </Box>
                            </Card>
                            <Divider
                              sx={{ border: "1px solid", mx: "30px", my: 2 }}
                            />
                            <Box as={Col} md={8}>
                              <Typography
                                sx={{
                                  fontWeight: "bold",
                                  display: "flex",
                                  float: "left",
                                }}
                              >
                                &nbsp; <ContentCopyIcon /> &nbsp; General
                                Information
                              </Typography>
                              <br />
                              <Divider
                                sx={{
                                  mt: 2,
                                  backgroundColor: "black",
                                  borderColor: "black",
                                }}
                              />
                              <Table>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    ID
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.id}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Email
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.email}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Gender
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.gender}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Mobile Number
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.mobileno}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Date Of Joining
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.date_joined}</TableCell>
                                </TableRow>
                                <TableRow>
                                  <TableCell sx={{ fontWeight: "bold" }}>
                                    Address
                                  </TableCell>
                                  <TableCell>:</TableCell>
                                  <TableCell>{user.address}</TableCell>
                                </TableRow>
                              </Table>
                              <Typography
                                sx={{ display: "flex", mx: "0px", mt: 3 }}
                              >
                                <ChangePassword />
                                <Button variant="outlined" sx={{ mx: 2 }}>
                                  Update Details
                                </Button>
                                <Button variant="outlined" sx={{ mx: 2 }}>
                                  Delete Users
                                </Button>
                              </Typography>
                            </Box>
                          </Box>
                        );
                      }
                    })}
                </CardContent>
              </CardContent>
            </Card>
          </Box>
        </Modal>
      </Box>
      <DataGrid
        columns={[
          { field: "id", headerName: "ID" },
          { field: "date_joined", headerName: "Joined Date" },
          { field: "first_name", headerName: "first Name" },
          { field: "last_name", headerName: "Last Name" },
          { field: "mobileno", headerName: "Mobile No" },
          { field: "email", headerName: "Email", width: 200 },
          { field: "gender", headerName: "Gender" },
          { field: "address", headerName: "Address" },
          {
            field: "image",
            headerName: "Image",
            renderCell: (params) => <Avatar src={params.value} />,
          },
          { field: "role", headerName: "Role" },
          { field: "uid", headerName: "UID" },
        ]}
        rows={users}
      />
    </>
  );
};
