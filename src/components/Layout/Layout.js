import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import CollapseableSidebar from "./Sidebar/CollapseableSidebar";
// import Footer from "./Footer";
import { useThemeContext } from "../../utils/ThemeContext";
import Box from "@mui/material/Box";
import { Scrollbars } from "react-custom-scrollbars-2";


const Layout = ({ children, title, disableScrollbar = false, useCustomScrollbar = false }) => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();

  // if the scrollbar is set to invisible, we disable the custom scrollbar
  // because it would still otherwise show up
  if(disableScrollbar) { 
    useCustomScrollbar = false;
  }

  const mainBoxSx = {
    flexGrow: 1,
    marginTop: "63px", // Height of app bar
    height: "calc(100vh - 63px)",
    overflow: "auto",
  };

  if (disableScrollbar) {
    mainBoxSx.scrollbarWidth = "none";
    mainBoxSx.msOverflowStyle = "none";
    mainBoxSx["&::-webkit-scrollbar"] = {
      display: "none",
    };
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: "flex" }}>
        <AppBarComponent
          open={open}
          toggleDrawer={toggleDrawer}
          title={title}
        />
        <CollapseableSidebar open={open} toggleDrawer={toggleDrawer} />
        <Box
          component="main"
          sx={mainBoxSx}
        >
          {useCustomScrollbar ? (
            <Scrollbars style={{ width: "100%", height: "100%" }} renderThumbVertical={() => <div style={{ backgroundColor: currentTheme.palette.primary.dark }} />}>
              {children}
              {/* <Footer /> */}
            </Scrollbars>
          ) : (
            children
          )}
          {/* <Footer /> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
