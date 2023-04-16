import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Login from "../components/Login";
import SignUp from "@/components/Sign_up";
import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";

const theme = createTheme({
  palette: {
    primary: { main: "#0F1B4C" },
    secondary: { main: "#1da7e2" },
  },
});

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <TabContext value={value}>
          <Box
            sx={{
              borderBottom: 0,
              borderColor: "divider",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Login" value="1" />
              <Tab label="SignUp" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Login Use="User" />
          </TabPanel>
          <TabPanel value="2">
            <SignUp Use="User" />
          </TabPanel>
        </TabContext>
      </Box>
    </ThemeProvider>
  );
}
