import { createContext, useContext, useState } from "react";

const ShowDataContext = createContext();

export const useShowDataContext = () => {
  return useContext(ShowDataContext);
};

export const ShowDataContextProvider = ({ children }) => {
    //store json about current show
    const [currentShow, setCurrentShow] = useState(null);

    //update current show
    const updateCurrentShow = (show) => {
        setCurrentShow(show);
    }


  // You can define more functions as needed to modify show data

  return (
    <ShowDataContext.Provider
      value={{
        currentShow,
        updateCurrentShow,
        // You can add other functions and state variables here
      }}
    >
      {children}
    </ShowDataContext.Provider>
  );
};
