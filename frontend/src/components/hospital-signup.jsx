import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Link from "next/link";
import dynamic from "next/dynamic";

import { useState } from "react";
import axios from "axios";

const LocationPicker = dynamic(
  () => import("./LocationPicker"), // replace '@components/map' with your component's location
  {
    loading: () => <p>Huh??</p>,
    ssr: false,
  }
);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link
        color="inherit"
        href="/"
        style={{ textDecoration: "none", color: "#5C6066" }}
      >
        AllinONE
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

export default function HsignUp() {
  const [hospital, setHospital] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setcnfPassword] = useState("");
  const [image, setImage] = useState("");

  const [coords, setCoords] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // /* const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    //   Name: data.get("name"),
    //   ImageStyle: data.get("imageStyle"),
    //   Cpassword: data.get("Cpassword"),
    // });* /
    if (
      !hospital ||
      !address ||
      !email ||
      !password ||
      !cnfpassword ||
      !image ||
      !coords
    ) {
      alert("enter all credentials");
      return;
    }
    if (password !== cnfpassword) {
      alert("passwords do not match");
      return;
    }
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!email.match(regex)) {
      alert("enter valid email");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", hospital);
    formData.append("address", address);
    formData.append("root_mail", email);
    formData.append("root_pass", password);
    formData.append("lat", coords.lat);
    formData.append("lng", coords.lng);

    console.log("data ok");
    let ans = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/hospital/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 3px )",
          webkitFbackdropFilter: " blur( 3px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0F1B4C" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Admin Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Name"
                  onChange={(e) => setHospital(e.target.value)}
                  required
                  fullWidth
                  id="Name"
                  label="Hospital Name"
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Address"
                  onChange={(e) => setAddress(e.target.value)}
                  label="Hospital Address"
                  type="Address"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Cpassword"
                  onChange={(e) => setcnfPassword(e.target.value)}
                  label="Confirm Password"
                  type="password"
                  autoComplete="new-password"
                />
              </Grid>
              <LocationPicker onLocationChange={(val) => setCoords(val)} />
              <Grid item xs={12}>
                <Box sx={{ display: "flex", gap: "1em" }}>
                  {/* <Typography> Upload profile</Typography> */}

                  <Button variant="contained" component="label">
                    Upload Image
                    <input
                      type="file"
                      id="file-input"
                      name="ImageStyle"
                      hidden
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive updates via email."
                />
              </Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Sign Up
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Tabs-Hospital" style={{ color: "#0F1B4C" }}>
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
