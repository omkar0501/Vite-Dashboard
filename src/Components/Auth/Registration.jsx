import {
  Box,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  TextField,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be 8 characters length")
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi,
      "Password must contain:\n- one Uppercase character\n- one Symbol\n- one Number"
    ),
  confirm_password: yup
    .string("Confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  fname: yup
    .string("Enter your first name")
    .required("First Name is required")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain letters."
    ),
  lname: yup
    .string("Enter your last name")
    .required("Last Name is required")
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      "Name can only contain letters."
    ),
  mobileno: yup
    .string("Enter your mobile number")
    .required("Mobile number is required")
    .matches(/^([0-9]*)$/gi, "Mobile No can only integers.")
    .min(10, "Number must be 10 didgits")
    .max(10, "Number must be 10 didgits"),
  gender: yup.string("Select your gender").required("Gender is required"),
  role: yup.string("Select your role").required("Role is required"),
  image: yup.string("Upload your image").required("Image is required"),
  address: yup.string("Enter your address").required("Address is required"),
});

const Registration = () => {
  const [img, setImg] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file.name);
    }
  };

  function RegisterUser(values) {
    axios
      .post("http://192.168.1.21:8001/api/register/", {
        first_name: values.fname,
        last_name: values.lname,
        email: values.email,
        mobileno: values.mobileno,
        address: values.address,
        gender: values.gender,
        image: img,
        role: values.role,
        password: values.password,
        confirm_password: values.confirm_password,
      })
      .then((response) => console.log(response.data + "..."))
      .catch((error) => console.error("Error:", error));
  }

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      mobileno: "",
      address: "",
      gender: "",
      image: "",
      role: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      RegisterUser(values);
    },
  });

  return (
    <Box>
      <Card sx={{ p: 5 }}>
        <form onSubmit={formik.handleSubmit}>
          <Typography
            sx={{
              mb: 3,
              fontWeight: "bold",
              fontFamily: "cursive",
              letterSpacing: "1px",
            }}
            variant="h4"
          >
            User Registration
          </Typography>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                id="fname"
                name="fname"
                label="First Name"
                value={formik.values.fname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fname && Boolean(formik.errors.fname)}
                helperText={formik.touched.fname && formik.errors.fname}
              />
            </Col>
            <br />

            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                name="lname"
                label="Last Name"
                value={formik.values.lname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.lname && Boolean(formik.errors.lname)}
                helperText={formik.touched.lname && formik.errors.lname}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Col>

            <br />
            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                id="mobileno"
                name="mobileno"
                label="Mobile Number"
                value={formik.values.mobileno}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.mobileno && Boolean(formik.errors.mobileno)
                }
                helperText={formik.touched.mobileno && formik.errors.mobileno}
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                id="address"
                name="address"
                label="Address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </Col>

            <br />
            <Col xs={12} md={6}>
              <FormControl sx={{ width: "100%" }} className="mb-3">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  name="gender"
                  value={formik.values.gender}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.gender && Boolean(formik.errors.gender)}
                  label="Gender"
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                {formik.touched.gender && Boolean(formik.errors.gender) && (
                  <Typography
                    sx={{ fontSize: "smaller", display: "flex" }}
                    color="error"
                  >
                    {formik.errors.gender}
                  </Typography>
                )}
              </FormControl>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <TextField
                sx={{ width: "100%" }}
                className="mb-3"
                id="image"
                name="image"
                type="file"
                onChange={(e) => {
                  formik.handleChange(e);
                  handleFileChange(e);
                }}
                onBlur={formik.handleBlur}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </Col>
            <br />
            <Col xs={12} md={6}>
              <FormControl sx={{ width: "100%" }} className="mb-3">
                <InputLabel id="role-label">Role</InputLabel>
                <Select
                  labelId="role-label"
                  id="role"
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.role && Boolean(formik.errors.role)}
                  label="Role"
                >
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Staff">Staff</MenuItem>
                </Select>
                {formik.touched.role && Boolean(formik.errors.role) && (
                  <Typography
                    sx={{ fontSize: "smaller", display: "flex" }}
                    color="error"
                  >
                    {formik.errors.role}
                  </Typography>
                )}
              </FormControl>
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <TextField
                sx={{
                  ".helperTextMultiline": {
                    whiteSpace: "pre-line",
                    fontSize: "x-small",
                  },
                }}
                className="mb-3"
                id="password"
                name="password"
                label="Password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                FormHelperTextProps={{ className: "helperTextMultiline" }}
              />
            </Col>
            <br />
            <Col xs={12} md={6}>
              <TextField
                className="mb-3"
                id="confirm_password"
                name="confirm_password"
                label="Confirm Password"
                type="password"
                value={formik.values.confirm_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.confirm_password &&
                  Boolean(formik.errors.confirm_password)
                }
                helperText={
                  formik.touched.confirm_password &&
                  formik.errors.confirm_password
                }
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col xs={12} md={6}>
              <Button type="submit" variant="outlined" className="fw-bold">
                Save
              </Button>
            </Col>
            <Col xs={12} md={6}>
              <Button onClick={() => navigate("/")}>Back</Button>
            </Col>
          </Row>
        </form>
      </Card>
    </Box>
  );
};

export default Registration;
