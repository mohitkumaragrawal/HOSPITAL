import React from "react";
import Nav4 from "@/components/Nav4";
import { Box, Button, MenuItem, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DocardsNew from "@/components/DocardsNew";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormControl, InputLabel, Select } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

function User_homepage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [speciality, setSpeciality] = useState([]);
  const [search, setSearch] = useState("");
  const [doctors, setDoctors] = useState([]);
  const router = useRouter();

  async function handleSearch() {
    const token = localStorage.getItem("token");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        let doc = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displayDoctors`,
          {
            method: "post",
            body: JSON.stringify({ speciality: search, lat, lng }),
            headers: {
              "Content-Type": "application/json",
              auth: token,
            },
          }
        );
        doc = await doc.json();
        console.log(doc);
        for (let i in doc) {
          let img = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displayDoctorImage`,
            {
              method: "post",
              body: JSON.stringify({ id: doc[i].doctor_id }),
              headers: {
                "Content-Type": "application/json",
                auth: token,
              },
            }
          );
          img = await img.blob();
          let newObj = { ...doc[i], image: URL.createObjectURL(img) };
          doc[i] = newObj;
        }
        //console.log(doc)
        setDoctors(doc);
      });
    }
  }

  useEffect(() => {
    Aos.init({ duration: 800 });
    (async () => {
      const token = localStorage.getItem("token");
      //const token=localStorage.getItem('token')
      let user = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displayName`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      //console.log(user)
      user = await user.json();
      //console.log(user[0].name)
      if (user[0].name == undefined) {
        alert("you are not authorized to view this page");
        router.push("./Tabs-User");
        return;
      }
      setName(user[0].name);
      let img = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displayProfileImage`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      img = await img.blob();
      //console.log(img)
      setImage(URL.createObjectURL(img));

      let specialities = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displaySpeciality`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      specialities = await specialities.json();
      specialities = specialities.map((item) => item.speciality);
      //console.log(specialities)
      setSpeciality(specialities);
    })();
  }, []);

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "40px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",

      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));
  const CustomnewBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down("md")]: {
      padding: "0",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));
  const CustomContainer = styled(Container)(({ theme }) => ({
    // backgroundColor: "#CBD7FF",
    marginTop: "29px",
    height: "auto",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: "blur( 3px )",
    // webkitFbackdropFilter: " blur( 3px )",
    // borderRadius: "10px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )",

    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
    },
  }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: "#E6F0FF",
            minHeight: "100vh",
            scrollBehavior: "smooth",
          }}
        >
          <Container>
            <Nav4 name={name} image={image} />

            <Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "18px",
                  color: "#687690",
                  fontWeight: "500",
                  mt: 10,
                  mb: 4,
                }}
              >
                {`Welcome ${name}`}
              </Typography>
              <Title variant="h1">
                Always caring about your health, we are here to help you!
              </Title>
              <Typography
                variant="body2"
                sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
              >
                Find the Best Doctors in Your Area with Allisone. Looking for a
                reliable and experienced doctor near you? Look no further than
                Allisone. Our platform makes it easy to find nearby doctors in
                all hospitals, so you can get the care you need, when you need
                it. Whether you're looking for a specialist or a primary care
                physician, our comprehensive directory has you covered. Start
                your search today and discover the best doctors in your area
              </Typography>
            </Box>

            <div id="Consultdoc">
              <CustomContainer>
                <Box
                  sx={{
                    width: "100%",
                    bgcolor: "#E6F0FF",
                    paddingLeft: "3px",
                    marginTop: "5px",
                    borderRadius: "7px",
                    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                    // backdropFilter: "blur( 3px )",
                    webkitFbackdropFilter: " blur( 3px )",
                    borderRadius: "10px",
                    border: "1px solid rgba( 255, 255, 255, 0.18 )",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "30px",
                      color: "black",
                      fontWeight: "700",
                      textAlign: "center",
                      mb: "1rem",
                    }}
                  >
                    CONSULT WITH A DOCTOR
                  </Typography>
                  {/* <div
                    style={{
                      width: "100%",
                      height: "5px",
                      backgroundColor: "#000339",
                      margin: "0 auto",
                      marginBottom: "43px",
                    }}
                  ></div> */}

                  {/*<TextField
                    select
                    fullWidth
                    label="select specialization"
                    value={search}
                    SelectProps={{
                      native: true,
                    }}
                    helperText="  select the speciation of the doctor  "
                    variant="standard"
                  >
                    {speciality.map((option) => (
                      <option key={option} value={option} onClick={()=>setSearch(option)}>
                        {option}
                      </option>
                    ))}
                    </TextField>*/}

                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Specialization
                    </InputLabel>
                    <Select
                      labelId="Specialization"
                      id="Specialization"
                      onChange={(e) => setSearch(e.target.value)}
                      value={search}
                      label="Specialization"
                      // onChange={handleChange}
                    >
                      {speciality.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                      })}
                      {/* <MenuItem value={20}>General Surgery</MenuItem> */}
                      {/* <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>

                  <Button
                    variant="contained"
                    fullWidth
                    endIcon={<SearchIcon />}
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    borderRadius: "5px solid black",
                  }}
                  mt={3}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "30px",
                        color: "Black",
                        fontWeight: "700",
                      }}
                    >
                      DOCTORS NEAR YOU
                    </Typography>
                    {/* <div
                      style={{
                        width: "100%",
                        height: "5px",
                        backgroundColor: "#000339",
                        margin: "0 auto",
                        marginBottom: "43px",
                      }}
                    ></div> */}
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "3px",
                      justifyContent: "center",
                      alignItems: "center",
                      maxWidth: {
                        lg: "100%",
                        md: "100%",
                        sm: "80%",
                        xs: "80%",
                      },
                    }}
                    marginLeft="15px"
                    mt={8}
                    mb={8}
                  >
                    {doctors.map((item) => {
                      return (
                        <DocardsNew
                          key={item.doctor_id}
                          id={item.doctor_id}
                          name={item.doctor_name}
                          qual={item.qualifications}
                          spec={item.speciality}
                          distance={parseFloat(item.distance) / 1000.0}
                          Hospital_Name={item.hospital_name}
                          Adress={item.address}
                          image={item.image}
                        ></DocardsNew>
                      );
                    })}
                    {/* <DocardsNew
                      name="Aditya"
                      qual="MBBS"
                      spec="Physician"
                      distance={4.33}
                      Hospital_Name="TMH NAYSARAY"
                      Adress="SAHFGHASFVJH"
                    /> */}
                  </Box>
                </Box>
              </CustomContainer>
            </div>
            {/* <div id="Booklabtest">
                            <CustomContainer>
                                <Box sx={{ width: "100%", bgcolor: "#E6F0FF", paddingLeft: "3px", marginTop: "5px", borderRadius: "7px" }}>
                                    <Typography
                                        sx={{ fontSize: "30px", color: "black", fontWeight: "700", textAlign: "center" }}
                                    >
                                        BOOK A LAB TEST
                                    </Typography>
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "5px",
                                            backgroundColor: "#000339",
                                            margin: "0 auto",
                                            marginBottom: "43px",
                                        }}
                                    ></div>
                                    <TextField
                                        select
                                        fullWidth
                                        label="select test"
                                        defaultValue="blood test"
                                        SelectProps={{
                                            native: true
                                        }}
                                        variant="standard"
                                    >
                                        {Test.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
                                    </TextField>
                                    <Button variant="contained" fullWidth endIcon={<SearchIcon />}>
                                        Search
                                    </Button>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: "5px solid black" }} mt={3} >
                                    <Box >
                                        <Typography
                                            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
                                        >
                                            LABS NEAR YOU
                                        </Typography>
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "5px",
                                                backgroundColor: "#000339",
                                                margin: "0 auto",
                                                marginBottom: "43px",
                                            }}
                                        ></div>
                                    </Box >
                                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: "3px", justifyContent: "center", alignItems: "center" }} marginLeft="15px" mt={8} mb={8} >
                                        <DocardsNew name="Aditya" qual="Phd in mathematics" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJHASVGHDFJVGSAHDVASJHVDJASHV" />
                                        <DocardsNew name="Aditya" qual="Phd in mathematics" spec="Physician" distance="4km" Hospital_Name="TMH NAYSARAY" Adress="SAHFGHASFVJHASVGHDFJVGSAHDVASJHVDJASHV" />
                                    </Box>
                                </Box>
                            </CustomContainer>
                        </div> */}
          </Container>
        </Box>
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default User_homepage;
