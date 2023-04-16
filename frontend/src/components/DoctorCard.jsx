import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const DoctorCard = ({ name, qual, spec, handleOpen, image }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //console.log(image);
  return (
    <Box
      cursor="pointer"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      style={{
        backgroundColor: "#E8E8E8",
        borderRadius: "30px",
      }}
      width="100%"
      display={"flex"}
      alignItems={"center"}
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius={"2px"}
      onClick={handleOpen}
    >
      <Avatar
        // marginRight
        style={{
          marginRight: "0.6rem",
        }}
        size="sm"
        cursor={"pointer"}
        name="Dr.Batra"
        src={image}
      />
      <Box>
        <Typography>{name}</Typography>
        <Typography fontSize="xs">
          <b>{spec}</b>
        </Typography>
        <Typography fontSize="xs">{qual}</Typography>
      </Box>
    </Box>
  );
};

export default DoctorCard;
