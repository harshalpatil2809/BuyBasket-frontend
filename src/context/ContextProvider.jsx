import {  useState } from "react";
import Context from "./Context";


const ContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchbar, setSearchbar] = useState(false)

  return (
    <Context.Provider value={{search, setSearch,mobileOpen,setMobileOpen,searchbar,setSearchbar}}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;