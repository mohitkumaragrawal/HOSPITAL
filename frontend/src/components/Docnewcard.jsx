import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Container } from "@mui/material";

const Docnewcard = ({
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
    // backgroundColor: "#17275F",
    backgroundColor: "red",
    marginTop: "29px",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing(1, 1, 1, 1),
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 1, 1),
      width: "35%",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  return (
    <>
      <CustomContainer>
        <Box
          onClick={handleOpen}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Avatar
            style={{
              marginRight: "1rem",
            }}
            size="md"
            cursor={"pointer"}
            name="Dr.Batra"
            sx={{ width: "150px", height: "150px" }}
            src={image}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "start",
            gap: "1rem",
            marginLeft: "0rem",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "20px" }}>
            Name:{name}
          </Typography>
          <Box sx={{ inlineSize: "300px", overflowWrap: "break-word" }}>
            <Typography fontSize="xs" sx={{ color: "white", fontSize: "20px" }}>
              Qualification:{qual}
            </Typography>
          </Box>
          <Box sx={{ inlineSize: "300px", overflowWrap: "break-word" }}>
            <Typography fontSize="xs" sx={{ color: "white", fontSize: "20px" }}>
              Hospital:{Hospital_Name}
            </Typography>
          </Box>

          <Box sx={{ inlineSize: "300px", overflowWrap: "break-word" }}>
            <Typography
              fontSize="md"
              sx={{ wordBreak: "break-all", color: "white", fontSize: "20px" }}
            >
              Address:{Adress}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "2rem",
            display: "flex",
            flex: "1",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <Typography fontSize="xs" sx={{ color: "white", fontSize: "30px" }}>
            <b>{spec}</b>
          </Typography>

          <Typography sx={{ color: "white", fontSize: "30px" }}>
            Distance:{distance}
          </Typography>
        </Box>
      </CustomContainer>
    </>
  );
};

export default Docnewcard;
