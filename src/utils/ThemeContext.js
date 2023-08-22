// ThemeContext.js

import { createContext, useContext, useState } from "react";
import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});


const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeContextProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(darkTheme);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [muted, setMuted] = useState(true); // Track muted state, false = unmuted, true = muted

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      setCurrentTheme(lightTheme);
    } else {
      setCurrentTheme(darkTheme);
    }
  };


  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        isDarkMode,
        toggleDarkMode,
        open,
        toggleDrawer,
        muted,
        setMuted,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
