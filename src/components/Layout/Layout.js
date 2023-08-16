import React from "react";
import { Toolbar } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppBarComponent from "./AppBarComponent";
import CollapseableSidebar from "./Sidebar/CollapseableSidebar";
// import Footer from "./Footer";
import { useThemeContext } from "../../utils/ThemeContext";
import Box from "@mui/material/Box";
import { Scrollbars } from "react-custom-scrollbars-2";

const Layout = ({ children, title, toolbarHeight }) => {
  const { currentTheme, open, toggleDrawer } = useThemeContext();

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
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            // // disable scrollbar
            // scrollbarWidth: "none",
            // msOverflowStyle: "none",
            // "&::-webkit-scrollbar": {
            //   display: "none",
            // },
          }}
        >
          {/* maybe make this color palette.background.paper */}
          <Scrollbars style={{ width: "100%", height: "100%" }} renderThumbVertical={() => <div style={{ backgroundColor: currentTheme.palette.primary.dark }} />}>
            <Toolbar sx={{ height: toolbarHeight }} />
            {children}
            {/* <Footer /> */}
          </Scrollbars>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
