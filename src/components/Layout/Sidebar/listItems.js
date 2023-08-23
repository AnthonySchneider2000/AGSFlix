import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import { Brightness2, Brightness7 } from "@mui/icons-material";
import { ListItem, TextField } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const MainListItems = ({ isDarkMode, toggleDarkMode, handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    if(searchValue === "") return;
    handleSearch(searchValue);
  };

  const handleInputClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent event propagation
    e.nativeEvent.stopImmediatePropagation(); // Prevent event propagation
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {      
      handleSearchClick();
    }
  };

  return (
    <React.Fragment>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button sx={{ maxHeight: "50px" }} onClick={handleSearchClick}>
        <ListItemIcon>
          <SearchIcon />
        </ListItemIcon>
        <TextField
          variant="standard"
          label="Search"
          size="small"
          sx={{ marginBottom: "7px" }}
          value={searchValue}
          onChange={handleChange}
          onClick={handleInputClick}
          onKeyDown={handleKeyDown}
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
};

export default MainListItems;
