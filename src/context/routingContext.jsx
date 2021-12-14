import { createContext, useContext, useState, useCallback } from "react";

const RoutingContext = createContext({});

export const RoutingProvider = ({ children }) => {
  const [previousUrl, setPreviousUrl] = useState(() => {
    const url = localStorage.getItem("@meta:previousurl");
    return url ? url : ""
  });

  const setThisUrlAsPrevious = useCallback((url)=>{
    setPreviousUrl(url)
    localStorage.setItem("@meta:previousurl", url);
  },[])
  

  return (
    <RoutingContext.Provider
      value={{ previousUrl, setThisUrlAsPrevious}}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export const useRouting = () => {
  const context = useContext(RoutingContext);
  return context;
};
