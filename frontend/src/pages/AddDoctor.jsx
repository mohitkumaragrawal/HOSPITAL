import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomButton from "@/components/CustomButton";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Navbar2 from "@/components/Navbar2";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Nav3 from "@/components/Nav3";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
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

const AddDoctor = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
      //console.log(token)
      let l = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/hospital/displayName`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      l = await l.json();
      //console.log(l[0].name)
      if (l[0] == undefined) {
        alert("you are not authorized to access this page");
        router.push("./Tabs-Hospital");
        return;
      }
    })();
  }, []);

  const handleSubmit = async (event) => {
    const token = localStorage.getItem("token");
    event.preventDefault();
    /*const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });*/

    if (
      !fname ||
      !lname ||
      !qualifications ||
      !email ||
      !specialization ||
      !image
    ) {
      alert("please fill all the fields");
      return;
    }

    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!email.match(regex)) {
      alert("enter valid email format");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", fname + " " + lname);
    formData.append("qualifications", qualifications);
    formData.append("email", email);
    formData.append("speciality", specialization);

    let ans = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/hospital/addDoctor/register`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          auth: token,
        },
      }
    );
    //ans=await ans.json()
    console.log(ans);
  };

  return (
    <ThemeProvider theme={theme}>
      <Nav3 />
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
            <AddIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Doctor
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  onChange={(e) => setFname(e.target.value)}
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  onChange={(e) => setLname(e.target.value)}
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setQualifications(e.target.value)}
                  id="qualifications"
                  label="Qualifications"
                  name="qualifications"
                  autoComplete="qualifications"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  label="E-Mail"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {/* <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="yoe"
                  label="Years of Experiance"
                  type="number"
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                  autoComplete="yoe"
                />
              </Grid> */}

              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Specialization
                  </InputLabel>
                  <Select
                    labelId="Specialization"
                    id="Specialization"
                    onChange={(e) => setSpecialization(e.target.value)}
                    // value={age}
                    label="Specialization"
                    // onChange={handleChange}
                  >
                    <MenuItem value="orthopedics">Orthopedics</MenuItem>
                    <MenuItem value="general surgery">General Surgery</MenuItem>
                    <MenuItem value="pathology">Pathology</MenuItem>
                    <MenuItem value="general physician">
                      General Physician
                    </MenuItem>
                    {/* <MenuItem value={20}>General Surgery</MenuItem> */}
                    {/* <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
              <Grid item xs={12}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "nowrap",
                    gap: "0.3em",
                  }}
                >
                  <Typography>Upload Profile</Typography>
                  <input
                    type="file"
                    id="file-input"
                    name="ImageStyle"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2, backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Add
            </Button>
            {/* <CustomButton></CustomButton> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/Login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};

export default AddDoctor;
