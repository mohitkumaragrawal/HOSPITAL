import { Avatar, IconButton, styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import mohit from "../media/mohit.jpg";
import Image from "next/image";
import harsh from "../media/harsh.jpg";
import aditya from "../media/aditya.jpeg";
import Link from "next/link";
import arvindh from "../media/Arvindh.jpeg";
const About = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#000336",
    marginTop: "30px",
    height: "fit-content",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
      padding: "10px",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    margin: theme.spacing(0, 1, 0, 1),
    padding: "10px",
    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "95%",
    },
  }));

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{ fontSize: "30px", color: "white", fontWeight: "700" }}
          >
            About us
          </Typography>
          <Typography
            sx={{ fontSize: "16px", color: "#ccc", fontWeight: "500", my: 3 }}
          >
            Allisone is a healthcare Idea coined by Aditya, Mohit, Harsh, and
            Arvindh. As a team, we are passionate about making it easy for
            people to find reliable and experienced doctors in their area. With
            our user-friendly platform, we aim to help patients make informed
            decisions about their healthcare and get the care they need, when
            they need it.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap ",
              flexDirection: {
                md: "row",
                lg: "row",
                xs: "row",
                sm: "row",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#588cd04d;",
                  padding: "10px",
                  borderRadius: "20px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "150px",
                      width: "150px",

                      ":hover": {
                        cursor: "pointer",
                        backgroundColor: "#000336",
                        borderRadius: "30px",
                        transition: "all 0.5s ease",
                      },
                      borderRadius: "10px",
                    }}
                  >
                    {" "}
                    <Image
                      src={mohit}
                      alt="mohit"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Avatar>

                  <Typography color={"white"}>Mohit Agrawal</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Link
                    href={
                      "https://www.linkedin.com/in/mohit-agrawal-02183b23a/"
                    }
                  >
                    <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                      <LinkedInIcon />
                    </IconButton>
                  </Link>
                  <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            {/* <Box>
              <Avatar />
              <Typography color={"white"}>Aditya</Typography>
            </Box> */}

            <Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#588cd04d;",
                  padding: "10px",
                  borderRadius: "20px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "150px",
                      width: "150px",
                      ":hover": {
                        cursor: "pointer",
                        backgroundColor: "#000336",
                        borderRadius: "30px",
                        transition: "all 0.5s ease",
                      },
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src={harsh}
                      alt="mohit"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Avatar>

                  <Typography color={"white"}>Harsh Raj</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Link
                    href={"https://www.linkedin.com/in/harsh-raj-543306204/"}
                  >
                    <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                      <LinkedInIcon />
                    </IconButton>
                  </Link>
                  <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#588cd04d;",
                  padding: "10px",
                  borderRadius: "20px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "150px",
                      width: "150px",

                      ":hover": {
                        cursor: "pointer",
                        backgroundColor: "#000336",
                        borderRadius: "30px",
                        transition: "all 0.5s ease",
                      },
                      borderRadius: "10px",
                    }}
                  >
                    <Image
                      src={arvindh}
                      alt="arvindh"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Avatar>

                  <Typography color={"white"}>Arvindh Iyyer</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#588cd04d;",
                  padding: "10px",
                  borderRadius: "20px",
                  gap: "10px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <Avatar
                    sx={{
                      height: "150px",
                      width: "150px",

                      borderRadius: "10px",
                      ":hover": {
                        cursor: "pointer",
                        backgroundColor: "#000336",
                        borderRadius: "30px",
                        transition: "all 0.5s ease",
                      },
                    }}
                  >
                    <Image
                      src={aditya}
                      alt="mohit"
                      layout="fill"
                      objectFit="contain"
                    />
                  </Avatar>

                  <Typography color={"white"}>Aditya Sinha</Typography>
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <Link
                    href={
                      "https://www.linkedin.com/in/aditya-prasad-sinha-542885229/"
                    }
                  >
                    <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                      <LinkedInIcon />
                    </IconButton>
                  </Link>
                  <IconButton sx={{ bgcolor: "white", color: "blue" }}>
                    <FacebookIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default About;
