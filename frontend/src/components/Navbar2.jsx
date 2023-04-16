import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventNoteIcon from "@mui/icons-material/EventNote";

import AddBoxIcon from "@mui/icons-material/AddBox";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Button, Drawer } from "@mui/material";
import Link from "next/link";

export default function Navbar2() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchor, setAnchor] = React.useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setAnchor(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        <Drawer anchor="left" open={anchor}>
          {/* <Button>Hello</Button
          > */}
          <Box display={"flex"} justifyContent={"space-between"}>
            <IconButton onClick={() => setAnchor(false)}>
              <ArrowBackIcon />
            </IconButton>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"flex-end"}
            >
              <Typography variant="h6">Admin</Typography>
            </Box>
            <div></div>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"20rem"}
            gap="1rem"
            marginTop={"3rem"}
          >
            <Link href="/Schedule" style={{ textDecoration: "none" }}>
              <Button style={{ width: "100%" }} startIcon={<EventNoteIcon />}>
                Schedule
              </Button>
            </Link>
            <Link href="/AddDoctor" style={{ textDecoration: "none" }}>
              <Button style={{ width: "100%" }} startIcon={<AddBoxIcon />}>
                Add Doctor
              </Button>
            </Link>
            <Link href="/AddTest" style={{ textDecoration: "none" }}>
              <Button style={{ width: "100%" }} startIcon={<AddBoxIcon />}>
                Add Test
              </Button>
            </Link>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
}
