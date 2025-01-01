import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import * as yup from "yup";
import LoginIcon from "@mui/icons-material/Login";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const validationSchema = yup.object({
  Username: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  pass: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      navigate("/displayusers");
    }
  }, [navigate]);

  const formik = useFormik({
    initialValues: {
      Username: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values);
    },
  });

  function login(values) {
    setErrorMessage("");
    axios
      .post("http://localhost:8081/api/login", {
        username: values.Username,
        password: values.pass,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          alert("LogIn Successfull");
          localStorage.setItem("Token", response.data.access);
          localStorage.setItem("RefreshToken", response.data.refresh);
          localStorage.setItem("Email", values.Username);
          if (localStorage.getItem("Token")) {
            navigate("/displayusers");
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          setErrorMessage(error.response.data.message || "Login failed !");
        } else {
          setErrorMessage("Login failed");
        }
      });
  }

  return (
    <>
      <Box>
        <Card sx={{ p: 5 }}>
          <form onSubmit={formik.handleSubmit}>
            <Typography
              variant="h4"
              sx={{
                m: 3,
                fontWeight: "bold",
                fontFamily: "cursive",
                letterSpacing: "3px",
              }}
            >
              LOGIN
            </Typography>
            {errorMessage && (
              <Typography color="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Typography>
            )}
            <CardContent>
              <TextField
                sx={{ mb: 2 }}
                fullWidth
                id="Username"
                name="Username"
                label="Username"
                value={formik.values.Username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.Username && Boolean(formik.errors.Username)
                }
                helperText={formik.touched.Username && formik.errors.Username}
              />
              <br />
              <TextField
                fullWidth
                id="pass"
                name="pass"
                label="Password"
                type="password"
                value={formik.values.pass}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.pass && Boolean(formik.errors.pass)}
                helperText={formik.touched.pass && formik.errors.pass}
              />
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                sx={{ fontWeight: "bold", letterSpacing: "2px" }}
                variant="outlined"
              >
                <LoginIcon />
                Login
              </Button>
            </CardActions>
            <Typography
              as={NavLink}
              to="/registration"
              sx={{ mt: 1, fontSize: "small" }}
            >
              Don&lsquo;t have an account?
            </Typography>
            <br />
            <Typography
              as={NavLink}
              to="/forgotpassword"
              sx={{ mt: 1, fontSize: "small" }}
            >
              Forgot Password?
            </Typography>
          </form>
        </Card>
      </Box>
    </>
  );
};
export default Login;
