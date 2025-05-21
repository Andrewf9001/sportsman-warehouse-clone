import { useState } from "react";

import ShippingStatement from "./navigation/ShippingStatement";
import Navbar from "./navigation/Navbar";
import SearchBar from "./ui/SearchBar";

const App = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleToggleSearch = (action) => {
    setIsSearchOpen(action);
  };

  return (
    <div className="app-container">
      <div className="app-navbar-wrapper">
        {isSearchOpen ? (
          <SearchBar handleToggleSearch={handleToggleSearch} />
        ) : (
          <Navbar handleToggleSearch={handleToggleSearch} />
        )}

        <ShippingStatement />
      </div>
    </div>
  );
};

export default App;
