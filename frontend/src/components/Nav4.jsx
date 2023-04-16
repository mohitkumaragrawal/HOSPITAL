import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";

import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";

function PositionedMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();

    localStorage.removeItem("token");
    router.push("/");
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",

          padding: "0.2rem",
          borderRadius: "5px",

          transition: "0.1s all",

          ":hover": {
            backgroundColor: "rgba(14, 18, 41, 0.402)",

            border: "1px solid #a6b8d4",
          },
        }}
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "#4F5361",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {props.name}
        </Typography>
        <Avatar src={props.image} sx={{ borderWidth: 0 }}></Avatar>
      </Box>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Link
          href="/User-profile"
          style={{
            textDecoration: "none",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export const Nav4 = (props) => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Consult", "Contact"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ListAltIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(7),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>

          <Image src={logoImg} alt="logo" width={100} />
        </Box>

        <NavbarLinksBox>
          <Link href="#" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Home</NavLink>
          </Link>
          <Link href="#" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Find doctors</NavLink>
          </Link>
          <Link href="coming-soon" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">lab-test</NavLink>
          </Link>
        </NavbarLinksBox>

        <PositionedMenu {...props} />

        {/* <Link href="/User-profile" sx={{ textDecoration: "none" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",

              padding: "0.2rem",
              borderRadius: "5px",

              transition: "0.1s all",

              ":hover": {
                backgroundColor: "rgba(14, 18, 41, 0.402)",

                border: "1px solid #a6b8d4",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "#4F5361",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {props.name}
            </Typography>
            {/*<IconButton
              sx={{
                backgroundColor: "#9EABC0",
                color: "#0A1235",
              }}
            >*/}
        {/* <Avatar src={props.image} sx={{ borderWidth: 0 }}></Avatar> */}
        {/*</IconButton>}*/}
        {/* </Box> */}
        {/* </Link>  */}
      </Box>
    </NavbarContainer>
  );
};

export default Nav4;
