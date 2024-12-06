import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const validationSchemaEmail = yup.object({
  email: yup
    .string("Enter a Email")
    .email("Enter a Valid Email")
    .required("Email is required."),
});

const validationSchemaPassword = yup.object({
  newPass: yup
    .string("Enter a Password")
    .required("Password is Required")
    .min(8, "Password should be 8 characters length")
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gi,
      "Password must contain:\n- one Uppercase character\n- one Symbol\n- one Number"
    ),
  confirmPass: yup
    .string("Enter a Password")
    .required("Password is Required")
    .oneOf([yup.ref("newPass"), null], "Password must Match"),
  otp: yup.string("Enter OTP").required("Otp is Required"),
});

export const Opt = () => {
  const [uuid, setUuid] = useState("");
  const [otpMsg, setOtpMsg] = useState("");
  const [otpMsg2, setOtpMsg2] = useState("");
  const navigate = useNavigate();

  function generateOtp(values) {
    setOtpMsg("");
    setOtpMsg2("");
    axios
      .post("http://192.168.1.21:8001/api/generateotp/", {
        email: values.email,
      })
      .then((response) => {
        setUuid(response.data.uuid);
        if (response.status === 200) {
          setOtpMsg("Otp Generated");
        }
      })
      .catch((error) => {
        console.log(error.response);
        setOtpMsg2(error.response.data.error);
      });
  }

  function SetPassword(values) {
    setOtpMsg("");
    setOtpMsg2("");
    axios
      .put("http://192.168.1.21:8001/api/forgotpassword/", {
        new_password1: values.newPass,
        new_password2: values.confirmPass,
        otp: values.otp,
        uid: uuid,
      })
      .then((response) => {
        if (
          response.status === 200 &&
          uuid !== "" &&
          response.data.message === "Sucess"
        ) {
          console.log(response.data.message);
          alert("Password changed successfully");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
        setOtpMsg2(error.response.data.message);
      });
  }

  const formik1 = useFormik({
    initialValues: { email: "" },
    validationSchema: validationSchemaEmail,
    onSubmit: (values) => {
      generateOtp(values);
    },
  });

  const formik = useFormik({
    initialValues: { newPass: "", confirmPass: "", otp: "" },
    validationSchema: validationSchemaPassword,
    onSubmit: (values) => {
      SetPassword(values);
    },
  });

  return (
    <Card sx={{ width: "100%", borderRadius: "10px" }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", color: "#003171", mb: -3, p: 4 }}
      >
        Forgot Password
      </Typography>
      <CardContent>
        <Typography sx={{ fontSize: "small", mb: 1 }} color="success">
          {otpMsg}
        </Typography>
        <Typography sx={{ fontSize: "small", mb: 1 }} color="error">
          {otpMsg2}
        </Typography>
        <Box>
          <form onSubmit={formik1.handleSubmit}>
            <TextField
              type="email"
              className="mb-3"
              id="email"
              name="email"
              label="Email"
              onChange={formik1.handleChange}
              value={formik1.values.email}
              onBlur={formik1.handleBlur}
              error={formik1.touched.email && Boolean(formik1.errors.email)}
              helperText={formik1.touched.email && formik1.errors.email}
            />
            <br />
            <Button sx={{ mb: 0 }} type="submit" variant="outlined">
              Generate OTP
            </Button>
            <br />
            <Button
              className="mt-3"
              sx={{ fontSize: "small", mb: 0 }}
              variant="outlined"
              onClick={() => navigate("/")}
            >
              Back
            </Button>
          </form>
        </Box>
        <br />
        <Divider sx={{ border: "1px solid" }} />
        <br />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            sx={{
              ".helperTextMultiline": {
                whiteSpace: "pre-line",
                fontSize: "x-small",
              },
            }}
            type="password"
            className="mb-3"
            id="newPass"
            name="newPass"
            placeholder="Password"
            label="New Password"
            onChange={formik.handleChange}
            value={formik.values.newPass}
            onBlur={formik.handleBlur}
            error={formik.touched.newPass && Boolean(formik.errors.newPass)}
            helperText={formik.touched.newPass && formik.errors.newPass}
            FormHelperTextProps={{ className: "helperTextMultiline" }}
          />

          <br />
          <TextField
            sx={{ mb: 2 }}
            label="Confirm Password"
            placeholder="Confirm Password"
            type="password"
            name="confirmPass"
            onChange={formik.handleChange}
            value={formik.values.confirmPass}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPass && Boolean(formik.errors.confirmPass)
            }
            helperText={formik.touched.confirmPass && formik.errors.confirmPass}
          />
          <br />
          <TextField
            sx={{ mb: 2 }}
            label="OTP"
            placeholder="Enter OTP"
            type="text"
            name="otp"
            onChange={formik.handleChange}
            value={formik.values.otp}
            onBlur={formik.handleBlur}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
          />
          <br />
          <Button sx={{ m: 1 }} type="submit" variant="outlined">
            Set Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
