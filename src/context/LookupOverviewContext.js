import React, { createContext, useContext, useState } from "react";
import { getItem } from "../utils/storage";

const LookupOverviewContext = createContext();

export function useLookupOverviewContext() {
  return useContext(LookupOverviewContext);
}

export function LookupOverviewProvider({ children }) {
  const [imgs, setImgs] = useState([]);
  const [data, setData] = useState(getItem("posts"));

  const value = {
    imgs,
    setImgs,
    data,
    setData,
  };

  return (
    <LookupOverviewContext.Provider value={value}>
      {children}
    </LookupOverviewContext.Provider>
  );
}
