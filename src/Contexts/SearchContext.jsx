
import React, { createContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchItem, setSearchItem] = useState("");

  return (
    <SearchContext.Provider value={{ searchItem, setSearchItem }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
