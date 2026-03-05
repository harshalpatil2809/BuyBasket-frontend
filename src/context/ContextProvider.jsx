import { useState } from "react";
import Context from "./Context";

const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchbar, setSearchbar] = useState(false);
  const [Cartitem, setCartitem] = useState([]);

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        mobileOpen,
        setMobileOpen,
        searchbar,
        setSearchbar,
        Cartitem,
        setCartitem,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
