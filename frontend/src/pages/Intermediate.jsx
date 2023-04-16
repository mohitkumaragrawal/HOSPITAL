import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import User from "../media/User.png";
import Admin from "../media/Admin.png";
import CustomButton from "../components/CustomButton";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const House = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "0px",
    height: "60vh",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "80vh",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 10, 0),
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <>
      <Navbar />
      <CustomBox>
        <CustomContainer>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box data-Aos="flip-right">
              <Image src={Admin} height={100} width={100}></Image>
            </Box>
            <Typography
              sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
            >
              For Administrators
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
            >
              You can register your hospital/clinic/Lab here.
            </Typography>
            <Link href="/Tabs-Hospital" style={{ textDecoration: "none" }}>
              <CustomButton
                backgroundColor="#fff"
                color="#17275F"
                buttonText="Login/SignUp"
                getStartedBtn={true}
              />
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box data-Aos="flip-left">
              <Image src={User} height={100} width={100}></Image>
            </Box>
            <Typography
              sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
            >
              For Users
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
            >
              Get access to our facilities.
            </Typography>
            <Link href="/Tabs-User" style={{ textDecoration: "none" }}>
              <CustomButton
                backgroundColor="#fff"
                color="#17275F"
                buttonText="Login/SignUp"
                getStartedBtn={true}
              />
            </Link>
          </Box>
        </CustomContainer>
      </CustomBox>
      <Footer />
    </>
  );
};

export default House;
