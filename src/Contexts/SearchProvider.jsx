import React, { useState } from "react";
import SearchContext from "../Contexts/SearchContext";

export default function SearchProvider({ children }) {
  const [searchItem, setSearchItem] = useState("");

  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
}
