import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MainListItems from "./listItems";
import { useThemeContext } from "../../../utils/ThemeContext";
import { drawerWidth } from "../../../utils/constants";
import { useNavigate } from "react-router-dom";
import { useShowDataContext } from "../../../utils/ShowContext";

const DrawerContainer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const CollapseableSidebar = ({ open, toggleDrawer }) => {
  const { isDarkMode, toggleDarkMode } = useThemeContext();
  const { updateCurrentShow } = useShowDataContext();
  const navigate = useNavigate();

  const handleSearch = (searchValue) => {
    console.log("searchValue", searchValue);

    const key = process.env.REACT_APP_API_KEY;
    const url = `https://www.omdbapi.com/?apikey=${key}&s=${searchValue}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.Search);
        updateCurrentShow(data.Search[0]);
        navigate("/show", { state: { data } });
      })
      .catch((error) => {
        console.error(`Error fetching show data for ${searchValue}:`, error);
        return null;
      });
  };

  return (
    <DrawerContainer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {MainListItems({
          isDarkMode,
          toggleDarkMode,
          handleSearch,
        })}
      </List>
    </DrawerContainer>
  );
};

export default CollapseableSidebar;
