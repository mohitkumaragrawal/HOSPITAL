import React from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Box, Button, styled, Typography } from "@mui/material";

const Coming_soon = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#333036",
    fontWeight: "bold",
    margin: theme.spacing(4, 4, 4, 4),
    ":hover": { color: "#96929F", transition: "ease-out 0.2s" },
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5rem",
          flexDirection: "column",
          backgroundColor: "#a8a3a3",
        }}
      >
        <Box>
          <Title>This feature will be available in the next version</Title>
        </Box>
        <Button
          variant="contained"
          color="primary"
          href="/"
          sx={{
            borderRadius: "30px",
            bgcolor: "#96929F",
            ":hover": {
              bgcolor: "#333036",
              borderRadius: "10px",
              transition: "ease-out 0.2s",
            },
          }}
          startIcon={<ArrowBackIosNewIcon />}
        >
          <h2> GO BACK</h2>
        </Button>
      </div>
    </div>
  );
};

export default Coming_soon;
