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
  MuiTextField,
  MuiTypography,
} from "../../MUIComponents/Mui";
import "../Css/DashboardAll.css";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useFormik } from "formik";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const DontHaveAccount = () => {
  const [showPassword, setShowPassword] = useState(false);

  const theme = useTheme();

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
      fname: "",
      lname: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  });
  return (
    <div>
      <MuiCard
        sx={{
          py: 4,

          borderRadius: "10px",
          boxShadow: "none",
          border: "1px solid white",
        }}
      >
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
            variant="h5"
            sx={{ fontWeight: "bold", letterSpacing: "1px" }}
          >
            <img
              style={{
                borderRadius: "50%",
                width: "7%",
                // "@media (max-width:400px)": { width: "50%" },
              }}
              src="/DashboardImages/Berry.png"
            />
            <span className="mx-1" />
            BERRY
          </MuiTypography>
          <br />
          <MuiTypography
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
            sx={{ mb: 3, color: "#677586", fontFamily: "sans-serif" }}
          >
            Enter your credentials to continue
          </MuiTypography>
          <MuiTypography
            sx={{ mb: 3, color: "black", fontFamily: "sans-serif" }}
          >
            Sign up with Email address
          </MuiTypography>
          <MuiBox>
            <Row className="d-flex justify-content-center">
              <Col className="" md={4} sm={4} xs={12}>
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
                        marginTop: "1rem", // Adjust margin when label is shrunk (focused or filled)
                        paddingLeft: "0.25rem", // Adjust padding when label is shrunk
                        fontSize: "0.95rem", // Ensure the font size remains small when shrunk
                        transform: "translate(14px, -6px) scale(0.75)", // Adjust the transform to move the label correctly
                      },
                    },
                  }}
                  InputProps={{
                    disableUnderline: true, // Disable underline to make it look like outlined variant
                    sx: {
                      fontWeight: "550",
                      fontFamily: "inherit",
                      backgroundColor: "white", // Input background color
                      borderRadius: "10px", // Border radius
                      border: "1px solid rgba(0, 0, 0, 0.23)", // Default border color
                      paddingLeft: "0.3rem", // Padding inside the input
                      "&:hover": {
                        border: "1px solid rgba(0, 0, 0, 0.87)", // Border color on hover
                      },
                      "&.Mui-focused": {
                        border: "2px solid rgb(33, 150, 243)", // Border color on focus
                      },
                    },
                  }}
                  sx={{
                    mb: 2,
                    width: "100%", // Make the text field take the full width of the container
                    maxWidth: "400px", // Limit the maximum width
                    "& .MuiFilledInput-root": {
                      backgroundColor: "rgb(244 245 247)", // Set background color for the filled input
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "rgb(244 245 247)",
                      },
                    },
                    "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                      {
                        display: "none", // Hide the underline for both before and after states
                      },
                  }}
                />
              </Col>
              <Col className="float-left" md={4} sm={4} xs={12}>
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
                        marginTop: "1rem", // Adjust margin when label is shrunk (focused or filled)
                        paddingLeft: "0.25rem", // Adjust padding when label is shrunk
                        fontSize: "0.95rem", // Ensure the font size remains small when shrunk
                        transform: "translate(14px, -6px) scale(0.75)", // Adjust the transform to move the label correctly
                      },
                    },
                  }}
                  InputProps={{
                    disableUnderline: true, // Disable underline to make it look like outlined variant
                    sx: {
                      fontWeight: "550",
                      fontFamily: "inherit",
                      backgroundColor: "white", // Input background color
                      borderRadius: "10px", // Border radius
                      border: "1px solid rgba(0, 0, 0, 0.23)", // Default border color
                      paddingLeft: "0.3rem", // Padding inside the input
                      "&:hover": {
                        border: "1px solid rgba(0, 0, 0, 0.87)", // Border color on hover
                      },
                      "&.Mui-focused": {
                        border: "2px solid rgb(33, 150, 243)", // Border color on focus
                      },
                    },
                  }}
                  sx={{
                    mb: 2,
                    width: "100%", // Make the text field take the full width of the container
                    maxWidth: "400px", // Limit the maximum width
                    "& .MuiFilledInput-root": {
                      backgroundColor: "rgb(244 245 247)", // Set background color for the filled input
                      borderRadius: "10px",
                      "&:hover": {
                        backgroundColor: "rgb(244 245 247)",
                      },
                    },
                    "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                      {
                        display: "none", // Hide the underline for both before and after states
                      },
                  }}
                />
              </Col>
            </Row>
            <MuiTextField
              type="email"
              label="Email Address / Username"
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
                    marginTop: "1rem", // Adjust margin when label is shrunk (focused or filled)
                    paddingLeft: "0.25rem", // Adjust padding when label is shrunk
                    fontSize: "0.95rem", // Ensure the font size remains small when shrunk
                    transform: "translate(14px, -6px) scale(0.75)", // Adjust the transform to move the label correctly
                  },
                },
              }}
              InputProps={{
                disableUnderline: true, // Disable underline to make it look like outlined variant
                sx: {
                  fontWeight: "550",
                  fontFamily: "inherit",
                  backgroundColor: "white", // Input background color
                  borderRadius: "10px", // Border radius
                  border: "1px solid rgba(0, 0, 0, 0.23)", // Default border color
                  paddingLeft: "0.3rem", // Padding inside the input
                  "&:hover": {
                    border: "1px solid rgba(0, 0, 0, 0.87)", // Border color on hover
                  },
                  "&.Mui-focused": {
                    border: "2px solid rgb(33, 150, 243)", // Border color on focus
                  },
                },
              }}
              sx={{
                mb: 2,
                width: "100%", // Make the text field take the full width of the container
                maxWidth: "400px", // Limit the maximum width
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgb(244 245 247)", // Set background color for the filled input
                  borderRadius: "10px",
                  "&:hover": {
                    backgroundColor: "rgb(244 245 247)",
                  },
                },
                "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                  {
                    display: "none", // Hide the underline for both before and after states
                  },
              }}
            />
            <MuiTextField
              type={showPassword ? "text" : "password"}
              label="Password"
              variant="filled"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              InputLabelProps={{
                sx: {
                  fontSize: "0.95rem",
                  "&.MuiInputLabel-shrink": {
                    marginTop: "1rem", // Adjust margin when label is shrunk (focused or filled)
                    paddingLeft: "0.25rem", // Adjust padding when label is shrunk
                    fontSize: "0.95rem", // Ensure the font size remains small when shrunk
                    transform: "translate(14px, -6px) scale(0.75)", // Adjust the transform to move the label correctly
                  },
                },
              }}
              InputProps={{
                disableUnderline: true, // Disable underline to make it look like outlined variant
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
                  backgroundColor: "white", // Input background color
                  borderRadius: "10px", // Border radius
                  border: "1px solid rgba(0, 0, 0, 0.23)", // Default border color
                  paddingLeft: "0.3rem", // Padding inside the input
                  "&:hover": {
                    border: "1px solid rgba(0, 0, 0, 0.87)", // Border color on hover
                  },
                  "&.Mui-focused": {
                    border: "2px solid rgb(33, 150, 243)", // Border color on focus
                  },
                },
              }}
              sx={{
                width: "100%", // Make the text field take the full width of the container
                maxWidth: "400px", // Limit the maximum width
                "& .MuiFilledInput-root": {
                  backgroundColor: "rgb(232, 240, 254)", // Set background color for the filled input
                  borderRadius: "10px",
                  mb: 2,
                  "&:hover": {
                    backgroundColor: "rgb(232, 240, 254)",
                  },
                },
                "& .MuiFilledInput-underline:before, & .MuiFilledInput-underline:after":
                  {
                    display: "none", // Hide the underline for both before and after states
                  },
              }}
            />
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
            <MuiButton
              className="signupButton"
              variant="filled"
              sx={{
                backgroundColor: "#673Ac7",
                width: "65%",
                color: "white",
                fontWeight: "bold",
                p: 1,
                mb: 2,
                "@media (max-width:500px)": { width: "100%" },
              }}
            >
              Sign Up
            </MuiButton>
          </MuiBox>
          <MuiDivider
            sx={{
              mb: 2,
              borderBottom: "1px solid",
              width: "70%",
              mx: "auto",
            }}
          />
          <MuiTypography
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
        </MuiBox>
      </MuiCard>
    </div>
  );
};
export default DontHaveAccount;
