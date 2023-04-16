import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material";
import { Container } from "@mui/material";

const Docusercard = ({
  name,
  qual,
  spec,

  Hospital_Name,
  Adress,
}) => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "29px",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: theme.spacing(1, 1, 1, 1),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 1, 1),
      width: "35%",
    },
  }));

  return (
    <>
      <CustomContainer>
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
              sx={{
                wordBreak: "break-all",
                color: "white",
                fontSize: "20px",
              }}
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
        </Box>
      </CustomContainer>
    </>
  );
};

export default Docusercard;
