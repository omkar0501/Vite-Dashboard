import { useTheme } from "@mui/material";
import * as yup from "yup";
import {
  MuiBox,
  MuiButton,
  MuiCard,
  MuiDivider,
  MuiTextField,
  MuiTypography,
} from "../../MUIComponents/Mui";
import "../Css/DashboardAll.css";
import { useFormik } from "formik";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const ForgotPassword = () => {
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      email: "",
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
              letterSpacing: "-1px",
              mb: 1,
            }}
          >
            Forgot Password?
          </MuiTypography>
          <br />
          <MuiTypography
            sx={{ mb: 3, color: "#677586", fontFamily: "sans-serif", mx: 5 }}
          >
            Enter your email address below and we'll send you
            <br /> password reset OTP.
          </MuiTypography>
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
            Send Email
          </MuiButton>
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
              fontWeight: "normal",
              "@media (max-width:430px)": { fontSize: "smaller" },
            }}
          >
            Arleady have an account?
          </MuiTypography>
        </MuiBox>
      </MuiCard>
    </div>
  );
};
export default ForgotPassword;
