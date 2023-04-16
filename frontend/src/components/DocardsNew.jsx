import React from "react";
import { styled } from "@mui/material";
import { Container } from "@mui/material";
import { Avatar, Box, Typography } from "@mui/material";

import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DomainAddIcon from "@mui/icons-material/DomainAdd";

import Cmodal from "./Cmodal";

const DocardsNew = ({
  id,
  name,
  qual,
  spec,
  handleOpen,
  distance,
  Hospital_Name,
  Adress,
  image,
}) => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    marginTop: "29px",

    borderRadius: "15px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: theme.spacing(0, 0, 0, 0),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: theme.spacing(1, 1, 1, 1),
      width: "70%",
      gap: "0.5rem",
      fontSize: "2rem",
      // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      // backdropFilter: "blur( 3px )",
      // WebkitFbackdropFilter: " blur( 3px )",
      // borderRadius: "10px",
      // border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));
  const CustomnewContainer = styled(Container)(({ theme }) => ({
    // 42, 50, 88
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    marginTop: "29px",

    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "45%",
    padding: theme.spacing(0, 0, 0, 0),
    gap: "0.5rem",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 0px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",

    transition: "0.2s all",

    overflow: "hidden",
    width: "min-content",

    ":hover": {
      backgroundColor: "rgb(42, 50, 88)",
      transform: "scale(1.05) rotateZ(-1deg)",
      zIndex: 333,
    },

    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(0, 0, 0, 0),
      width: "min-content",
      justifyContent: "center",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      WebkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));
  return (
    <>
      <CustomnewContainer>
        <CustomContainer>
          <Box
            //   onClick={handleFunction}
            // width="500px"
            onClick={handleOpen}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              style={{
                marginRight: "1.5rem",
              }}
              cursor={"pointer"}
              name={name}
              sx={{ height: "5rem", width: "5rem" }}
              src={image}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: "0.5rem",
              md: {
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              },
              position: "reative",
            }}
          >
            <Typography variant="h5">{name}</Typography>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography fontSize="0.8em">{qual}</Typography>
            </Box>
            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography
                fontSize="xs"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <DomainAddIcon /> {Hospital_Name}
              </Typography>
            </Box>

            <Box sx={{ inlineSize: "200px", overflowWrap: "break-word" }}>
              <Typography
                fontSize="md"
                sx={{ wordBreak: "break-all" }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <LocationOnIcon /> {Adress}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flex: "1",
              flexDirection: "column",
              alignItems: "start",
              gap: "0.5rem",
            }}
          >
            <Typography
              fontSize="xs"
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  backgroundColor: "#0b9a79",
                  borderRadius: "492834px",
                  padding: "0 .6rem",
                  fontSize: "0.8em",
                }}
              >
                {spec}
              </span>
              <span
                style={{
                  backgroundColor: "#0b9a79",
                  borderRadius: "492834px",
                  padding: "0 .6rem",
                  fontSize: "0.8em",
                }}
              >
                {distance.toFixed(1)} KM
              </span>
            </Typography>
          </Box>
        </CustomContainer>
        <Box>
          <Cmodal
            id={id}
            name={name}
            qual={qual}
            spec={spec}
            Hospital_Name={Hospital_Name}
            Adress={Adress}
            distance={distance}
            image={image}
          />
        </Box>
      </CustomnewContainer>
    </>
  );
};

export default DocardsNew;
