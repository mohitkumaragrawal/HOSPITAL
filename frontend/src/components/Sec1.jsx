import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import doc from "../media/doc.png";
import lab from "../media/lab.png";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const House = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "29px",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
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
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 0),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  return (
    <>
      <div data-Aos="fade-right" id="Features">
        <CustomBox>
          <CustomContainer>
            <Box>
              <Typography
                sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
              >
                Book an appointment
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#ccc",
                  fontWeight: "500",
                  my: 3,
                }}
              >
                Checkout for nearby doctors.
              </Typography>
              <Link href="/#" style={{ textDecoration: "none" }}>
                <CustomButton
                  backgroundColor="#fff"
                  color="#17275F"
                  buttonText="Checkout"
                  getStartedBtn={true}
                />
              </Link>
            </Box>

            <Box>
              <Image src={doc} style={{ height: "300px", width: "300px" }} />
            </Box>
          </CustomContainer>
        </CustomBox>
      </div>
      <div data-Aos="fade-left">
        <CustomBox>
          <CustomContainer>
            <Box>
              <Image src={lab} />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
              >
                Book a Lab test from home
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#ccc",
                  fontWeight: "500",
                  my: 3,
                }}
              >
                Checkout for nearby labs.
              </Typography>
              <Link href="/coming-soon" style={{ textDecoration: "none" }}>
                <CustomButton
                  backgroundColor="#fff"
                  color="#17275F"
                  buttonText="Coming soon"
                  getStartedBtn={true}
                />
              </Link>
            </Box>
          </CustomContainer>
        </CustomBox>
      </div>
    </>
  );
};

export default House;
