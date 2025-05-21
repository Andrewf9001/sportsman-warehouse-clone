import { useState } from "react";
import Navbar from "./navigation/Navbar";
import ShippingStatement from "./navigation/ShippingStatement";
import SearchBar from "./ui/SearchBar";

{
  /* 
  Todo:
    - Navbar component to be replaced with search bar component
*/
}

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
