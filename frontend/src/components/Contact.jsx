import { styled, Typography, TextField, Button } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useRef } from "react";

import { Grid } from "@mui/material";

const Contact = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    marginTop: "100px",
    marginBottom: "100px",
    height: "30vh",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    WebkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
      // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1, 0, 1, 0),
    margin: theme.spacing(0, 1, 0, 1),
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",

      padding: theme.spacing(1, 1, 0, 1),
      width: "100%",
    },
  }));

  const emailRef = useRef("");
  const phoneRef = useRef("");
  const queryRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current, phoneRef.current, queryRef.current);
  };

  return (
    <CustomBox>
      <CustomContainer>
        <Box
          sx={{
            width: "100%",
            lg: {
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
              backdropFilter: "blur( 3px )",
              WebkitFbackdropFilter: " blur( 3px )",
              borderRadius: "10px",
              border: "1px solid rgba( 255, 255, 255, 0.18 )",
              padding: "10px",
            },
          }}
        >
          <Typography
            sx={{ fontSize: "30px", color: "black", fontWeight: "700" }}
          >
            Contact us
          </Typography>
          {/* <Typography
            sx={{
              fontSize: "16px",
              color: "primary",
              fontWeight: "500",
              my: 3,
            }}
          >
            we are a team of programmers from nit jamshedpur. we are here to
            build a new platform for the the users to get their Appointments and
            test done without worrying about the crowd and waiting time.
          </Typography> */}

          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  email
                  sx={{
                    color: "",
                  }}
                  onChange={(e) => (emailRef.current = e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="phone"
                  label="Phone"
                  type="phone"
                  id="phone"
                  onChange={(e) => (phoneRef.current = e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  maxRows={4}
                  required
                  placeholder="Your Query?"
                  onChange={(e) => (queryRef.current = e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#0F1B4C", color: "#fff" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </CustomContainer>
    </CustomBox>
  );
};

export default Contact;
