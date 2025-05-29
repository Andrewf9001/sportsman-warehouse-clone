import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../../assets/smw-logo.svg";
import MyCart from "../../ui/MyCart";
import MobileMenu from "./MobileMenu";
import LocationSidePanel from "../shared/LocationSidePanel";

const MobileNavMenu = ({ handleToggleSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const handleMenuOpen = (action) => {
    setIsMenuOpen(action);
  };

  const handleLocationPanel = (action) => {
    setIsLocationOpen(action);
  };

  return (
    <div className="mobile-nav-menu-container">
      <div className="left-column-wrapper">
        <Link to="/">
          <img src={SmwLogo} alt="Sportsman Warehouse Logo" />
        </Link>
      </div>

      <div className="right-column-wrapper">
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => handleToggleSearch(true)}
        />

        {/* TODO: Add Animation slide from left */}
        <FontAwesomeIcon
          icon={faLocationDot}
          onClick={() => setIsLocationOpen((prev) => !prev)}
        />

        <MyCart />

        {/* TODO: Add Animation slide from right */}
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
      </div>

      {isMenuOpen && <MobileMenu handleMenuOpen={handleMenuOpen} />}

      {isLocationOpen && (
        <LocationSidePanel handleLocationPanel={handleLocationPanel} />
      )}
    </div>
  );
};

export default MobileNavMenu;
