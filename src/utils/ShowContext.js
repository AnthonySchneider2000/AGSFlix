import { createContext, useContext, useState } from "react";

const ShowDataContext = createContext();

export const useShowDataContext = () => {
  return useContext(ShowDataContext);
};

export const ShowDataContextProvider = ({ children }) => {
    //store json about current show
    const [currentShow, setCurrentShow] = useState(null);
    const [lessInfoShowJson, setLessInfoShowJson] = useState(null);
    
    //update current show
    const updateCurrentShow = (show) => {
        setCurrentShow(show);
    }

    //update less info show json
    const updateLessInfoShowJson = (show) => {
        setLessInfoShowJson(show);
    }


  // You can define more functions as needed to modify show data

  return (
    <ShowDataContext.Provider
      value={{
        currentShow,
        updateCurrentShow,
        lessInfoShowJson,
        updateLessInfoShowJson,
        // You can add other functions and state variables here
      }}
    >
      {children}
    </ShowDataContext.Provider>
  );
};
