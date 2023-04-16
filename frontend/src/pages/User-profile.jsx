import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import logoImg from "../media/logo.png";

import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Image from "next/image";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";

const UserProfile = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#17275F",
    marginTop: "0px",
    height: "85vh",
    borderRadius: "15px",
    display: "flex",
    margin: "1.5rem",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",

    [theme.breakpoints.down("md")]: {
      height: "80vh",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(3, 3, 0, 3),
      width: "90%",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));
  const ProfileBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#17275F",

    height: "auto",
    borderRadius: "15px",
    display: "flex",
    margin: "1rem",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",

    gap: "1rem",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: "blur( 3px )",
    webkitFbackdropFilter: " blur( 3px )",
    borderRadius: "10px",
    border: "1px solid rgba( 255, 255, 255, 0.18 )",

    [theme.breakpoints.down("md")]: {
      height: "50vh",
      flexDirection: "column",
      alignItems: "center",
      padding: theme.spacing(1, 1, 0, 1),
      width: "90%",
      boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: "blur( 3px )",
      webkitFbackdropFilter: " blur( 3px )",
      borderRadius: "10px",
      border: "1px solid rgba( 255, 255, 255, 0.18 )",
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem("token");
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
      user = await user.json();
      if (user[0].name == undefined) {
        alert("you are not authorized to view this page");
        router.push("./Tabs-User");
        return;
      }
      console.log(user[0]);
      setName(user[0].name);
      setEmail(user[0].email);

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
      setImage(URL.createObjectURL(img));

      let bookings = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/mainpage/user/displayBookings`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      );
      bookings = await bookings.json();
      console.log(bookings);
      setAppointments(bookings);
    })();
  }, []);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 3px )",
          webkitFbackdropFilter: " blur( 3px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
        }}
      >
        <AppBar position="sticky">
          <Toolbar
            sx={{
              backgroundColor: "#E6F0FF",
              color: "#4F5361",
              boxShadow: "none",
            }}
          >
            <Link href="/User-homepage">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <ArrowBackIcon />
              </IconButton>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Image src={logoImg} style={{ height: "70px", width: "80px" }} />
            <Box sx={{ flexGrow: 1 }} />

            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                  boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                  backdropFilter: "blur( 3px )",
                  webkitFbackdropFilter: " blur( 3px )",
                  borderRadius: "10px",
                  border: "1px solid rgba( 255, 255, 255, 0.18 )",
                },
              }}
            ></Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
      <Box>
        {/* code starts here.Above is just mui toolbar*/}
        <ProfileBox>
          <Box>
            <Avatar
              style={{
                marginRight: "1rem",
              }}
              cursor={"pointer"}
              name={name}
              sx={{ height: "10rem", width: "10rem" }}
              src={image}
            />
          </Box>
          <Box>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              {`Name: ${name}`}
            </Typography>
            <Typography sx={{ color: "white", fontSize: "25px" }}>
              {`Email: ${email}`}
            </Typography>
            {/*<Typography sx={{ color: "white", fontSize: "25px" }}>
              Address:jkbdfdsgiufgiudsfiudsui
            </Typography>*/}
          </Box>
        </ProfileBox>
        <CustomBox>
          <Box
            sx={{
              display: { md: "flex" },
              flexDirection: { md: "column", lg: "column" },
              justifyContent: { md: "center", lg: "space-between" },
            }}
          >
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              Your current appointments
            </Typography>
            {/*<Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              1
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              3
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              4
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              5
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              6
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              7
          </Typography>*/}
            <ol>
              {appointments.map((item) => (
                <li key={item}>
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: { md: "10px", lg: "25px" },
                    }}
                  >
                    {`id:${item.id} doctor_name:${item.name} hospital_name:${item.hospital_name} address:${item.address} day:${item.day_of_week} start_time:${item.start_time} end_time:${item.end_time}`}
                  </Typography>
                </li>
              ))}
            </ol>
          </Box>
          {/*<Box
            sx={{
              display: { md: "flex" },
              flexDirection: { md: "column", lg: "column" },
              justifyContent: { md: "center", lg: "space-between" },
            }}
          >
            {" "}
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              Your previous appointments
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              1
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              2
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              3
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              4
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              5
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              6
            </Typography>
            <Typography
              sx={{ color: "white", fontSize: { md: "10px", lg: "25px" } }}
            >
              7
            </Typography>
          </Box>*/}
        </CustomBox>
      </Box>
    </>
  );
};
export default UserProfile;
