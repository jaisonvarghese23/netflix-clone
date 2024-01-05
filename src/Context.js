import React, { useContext, useState } from "react";
import Instance from "./components/axios";
// import useFetch from "./useFetch";

const AppContext = React.createContext();

/* plz subsribe to thapa technical channel 
          https://www.youtube.com/thapatechnical
         */

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('');
//   const { isLoading, isError, movie } = Instance(`&s=${query}`);

  return (
    <AppContext.Provider value={{ query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };