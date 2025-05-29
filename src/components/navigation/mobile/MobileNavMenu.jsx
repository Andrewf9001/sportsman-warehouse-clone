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

const MobileNavMenu = ({ handleToggleSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = (action) => {
    setIsMenuOpen(action);
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

        <FontAwesomeIcon icon={faLocationDot} />

        <MyCart />

        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        />
        {/* Location Icon -> Opens from left for all locations */}
      </div>

      {isMenuOpen && <MobileMenu handleMenuOpen={handleMenuOpen} />}
    </div>
  );
};

export default MobileNavMenu;
