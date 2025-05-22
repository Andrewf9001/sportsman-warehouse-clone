import { useState } from "react";

import MobileNavMenu from "./MobileNavMenu";
import SearchBar from "./SearchBar";

const MobileNavbar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);

  const handleToggleSearch = (action) => {
    setToggleSearch(action);
  };

  return (
    <div className="mobile-navbar-container">
      {!toggleSearch ? (
        <MobileNavMenu handleToggleSearch={handleToggleSearch} />
      ) : (
        <SearchBar handleToggleSearch={handleToggleSearch} />
      )}
    </div>
  );
};

export default MobileNavbar;
