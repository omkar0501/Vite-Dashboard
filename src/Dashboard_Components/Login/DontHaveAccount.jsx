import { useTheme, InputAdornment, Popper } from "@mui/material";
import * as yup from "yup";
import {
  MuiBox,
  MuiButton,
  MuiCard,
  MuiCheckBox,
  MuiDivider,
  MuiFormControlLabel,
  MuiIconButton,
  MuiMenuItem,
  MuiTextField,
  MuiTypography,
} from "../../MUIComponents/Mui";
import "../Css/DashboardAll.css";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const validationSchema = yup.object({
  fname: yup.string("Enter your email").required("First name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const DontHaveAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  function signup(values) {
    setErrorMessage("");
    axios
      .post("https://node-js-view-point.onrender.com/api/auth/signup", {
        fullname: values.fname + " " + values.lname,
        username: values.email,
        gender: values.gender,
        password: values.password,
        confirmPassword: values.confirmPassword,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response);
          toast.success("User Created");
          navigate("dashboard/home");
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setErrorMessage(error.response.data.message || "failed !");
          toast.error(error.response.data.message);
        } else {
          setErrorMessage("User creation failed");
          toast.error("User Creation Failed");
        }
      });
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fname: "",
      lname: "",
      gender: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signup(values);
    },
  });
  return (
    <div className="d-flex justify-content-center align-items-center">
      <MuiCard
        sx={{
          py: 4,
          borderRadius: "10px",
          boxShadow: "none",
          border: "1px solid white",
        }}
      >
        <form onSubmit={formik.handleSubmit}>
          <MuiBox
            sx={{
              [theme.breakpoints.down("sm")]: {
                padding: "20px",
                [theme.breakpoints.down("xs")]: {
                  padding: "10px",
                },
              },
            }}
          >
            <MuiTypography
              className="d-flex justify-content-center align-items-center"
              variant="h5"
              sx={{ fontWeight: "bold", letterSpacing: "1px" }}
            >
              <img
                style={{
                  borderRadius: "50%",
                  width: "6%",
                }}
                src="/DashboardImages/Berry.png"
              />
              <span className="mx-1" />
              View Point
            </MuiTypography>
            <br />
            <MuiTypography
              className="d-flex justify-content-center align-items-center"
              variant="h5"
              sx={{
                fontWeight: "bolder",
                color: "#673Ab7",
                fontFamily: "sans-serif",
                letterSpacing: "1.5px",
                mb: 1,
              }}
            >
              Sign Up
            </MuiTypography>
            <MuiTypography
              className="d-flex justify-content-center align-items-center"
              sx={{ mb: 3, color: "#677586", fontFamily: "sans-serif" }}
            >
              Enter your credentials to continue
            </MuiTypography>
            <MuiTypography
              className="d-flex justify-content-center align-items-center"
              sx={{ mb: 3, color: "black", fontFamily: "sans-serif" }}
            >
              Sign up with Email address
            </MuiTypography>
            {errorMessage && (
              <MuiTypography
                className="d-flex justify-content-center"
                color="error"
                sx={{ mb: 2, fontSize: "small" }}
              >
                {errorMessage}
              </MuiTypography>
            )}

            <MuiBox>
              <Row className="d-flex justify-content-center">
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    type="text"
                    label="First Name"
                    variant="filled"
                    id="fname"
                    name="fname"
                    value={formik.values.fname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.75rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -6px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    type="text"
                    label="Last Name"
                    variant="filled"
                    id="lname"
                    name="lname"
                    value={formik.values.lname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.75rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -6px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Col>
              </Row>

              <Row className="d-flex justify-content-center">
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    type="email"
                    label="Email Address"
                    variant="filled"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.75rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -6px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    select
                    label="Gender"
                    id="gender"
                    name="gender"
                    value={formik.values.gender}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.75rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -15px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          // border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  >
                    <MuiMenuItem value="male">Male</MuiMenuItem>
                    <MuiMenuItem value="female">Female</MuiMenuItem>
                    <MuiMenuItem value="other">Other</MuiMenuItem>
                  </MuiTextField>
                </Col>
              </Row>

              <Row className="d-flex justify-content-center">
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    variant="filled"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.95rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -6px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <MuiIconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </MuiIconButton>
                        </InputAdornment>
                      ),
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Col>
                <Col md={4} sm={4} xs={12}>
                  <MuiTextField
                    type={showPassword ? "text" : "password"}
                    label="Confirm Password"
                    variant="filled"
                    id="password1"
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.confirmPassword &&
                      Boolean(formik.errors.confirmPassword)
                    }
                    helperText={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                    InputLabelProps={{
                      sx: {
                        fontSize: "0.95rem",
                        "&.MuiInputLabel-shrink": {
                          marginTop: "1rem",
                          paddingLeft: "0.25rem",
                          fontSize: "0.95rem",
                          transform: "translate(14px, -6px) scale(0.75)",
                        },
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      endAdornment: (
                        <InputAdornment position="end">
                          <MuiIconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </MuiIconButton>
                        </InputAdornment>
                      ),
                      sx: {
                        fontWeight: "550",
                        fontFamily: "inherit",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        border: "1px solid rgba(0, 0, 0, 0.23)",
                        paddingLeft: "0.3rem",
                        "&:hover": {
                          border: "1px solid rgba(0, 0, 0, 0.87)",
                        },
                        "&.Mui-focused": {
                          border: "2px solid rgb(33, 150, 243)",
                        },
                      },
                    }}
                    sx={{
                      mb: 2,
                      width: "100%",
                      maxWidth: "400px",
                    }}
                  />
                </Col>
              </Row>
            </MuiBox>
          </MuiBox>
          <Popper sx={{ width: "65%", mx: "auto" }} />
          <MuiBox
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 2,
              width: "100%",
              maxWidth: "400px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <MuiBox
              sx={{
                display: "flex",
                alignItems: "center",
                "@media (max-width:430px)": {
                  flexDirection: "row",
                },
              }}
            >
              <MuiFormControlLabel
                control={
                  <MuiCheckBox
                    name="checkedA"
                    color="primary"
                    // onChange={(e) => setRememberMe(e.target.checked)}
                    // checked={rememberMe}
                  />
                }
                label="Agree with Terms & Condition."
                sx={{
                  "& .MuiFormControlLabel-label": {
                    fontSize: "small",
                    fontWeight: "bold",
                    "@media (max-width:430px)": {
                      fontSize: "smaller",
                    },
                  },
                }}
              />
            </MuiBox>
          </MuiBox>
          <div className="d-flex justify-content-center align-items-center">
            <MuiButton
              // onClick={formik.submitForm()}
              type="submit"
              className="signupButton"
              variant="filled"
              sx={{
                backgroundColor: "#673Ac7",
                width: "65%",
                color: "white",
                fontWeight: "bold",
                p: 1,
                mb: 2,
                "@media (max-width:500px)": { width: "90%" },
              }}
            >
              Sign Up
            </MuiButton>
          </div>
          {/* </MuiBox> */}

          <MuiDivider
            sx={{
              mb: 2,
              borderBottom: "1px solid",
              width: "70%",
              mx: "auto",
            }}
          />
          <MuiTypography
            className="d-flex justify-content-center align-items-center text-decoration-none"
            sx={{
              color: "#121226",
              fontWeight: "bold",
              "@media (max-width:430px)": { fontSize: "smaller" },
            }}
            as={Link}
            to="/"
          >
            Already have an account?
          </MuiTypography>
        </form>
      </MuiCard>
    </div>
  );
};
export default DontHaveAccount;
