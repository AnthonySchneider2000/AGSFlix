import { createContext, useContext, useState } from "react";

const ShowDataContext = createContext();

export const useShowDataContext = () => {
  return useContext(ShowDataContext);
};

export const ShowDataContextProvider = ({ children }) => {
    //store json about current show
    const [currentShow, setCurrentShow] = useState(null);
    const [showTitle, setShowTitle] = useState(null);
    
    //update current show
    const updateCurrentShow = (show) => {
        setCurrentShow(show);
    }

    //update show title
    const updateShowTitle = (title) => {
        setShowTitle(title);
    }



  // You can define more functions as needed to modify show data

  return (
    <ShowDataContext.Provider
      value={{
        currentShow,
        updateCurrentShow,
        showTitle,
        updateShowTitle,
        // You can add other functions and state variables here
      }}
    >
      {children}
    </ShowDataContext.Provider>
  );
};
