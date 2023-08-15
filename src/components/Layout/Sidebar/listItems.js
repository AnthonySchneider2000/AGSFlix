import * as React from "react";
import { Link } from "react-router-dom"; // Import the Link component from react-router-dom
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import { ListItem, TextField } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
export const mainListItems = ({
  isDarkMode,
  toggleDarkMode,
}) => (
  <React.Fragment>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button sx={{ maxHeight: "50px" }}>
      <ListItemIcon>
        <SearchIcon />
      </ListItemIcon>
      <TextField
        variant="standard"
        label="Search"
        size="small"
        sx={{ marginBottom: "7px" }}
      />
    </ListItem>
    <ListItem button onClick={toggleDarkMode}>
      <ListItemIcon>
        {isDarkMode ? <Brightness7 /> : <Brightness2 />}
      </ListItemIcon>
      <ListItemText primary={isDarkMode ? "Light Mode" : "Dark Mode"} />
    </ListItem>
  </React.Fragment>
);
