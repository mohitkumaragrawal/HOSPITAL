import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  Avatar,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "@/pages";

import { useRouter } from "next/router";

export const Nav3 = (props) => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };

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
        {[
          { name: "Home", Link: "/Hospital" },
          { name: "Schedule", Link: "/Schedule" },
          { name: "Add Doctor", Link: "/AddDoctor" },
          { name: "Show Appointment", Link: "/ShowAppointment" },
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <HomeIcon />}
                {index === 1 && <FeaturedPlayListIcon />}
                {index === 2 && <MiscellaneousServicesIcon />}
                {index === 3 && <ListAltIcon />}
                {index === 4 && <ContactsIcon />}
              </ListItemIcon>
              <Link href={text.Link} style={{ textDecoration: "none" }}>
                <ListItemText primary={text.name} />
              </Link>
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
          <Link href="/Hospital" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Home</NavLink>
          </Link>
          <Link href="/Schedule" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Schedule</NavLink>
          </Link>
          <Link href="/AddDoctor" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Add Doctor</NavLink>
          </Link>
          <Link href="/ShowAppointment" style={{ textDecoration: "none" }}>
            <NavLink variant="body2">Show Appointment</NavLink>
          </Link>

          <Button
            variant="contained"
            sx={{ borderRadius: "20px", fontWeight: "bold" }}
            onClick={handleLogout}
          >
            LOGOUT
          </Button>
        </NavbarLinksBox>
      </Box>
    </NavbarContainer>
  );
};

export default Nav3;
