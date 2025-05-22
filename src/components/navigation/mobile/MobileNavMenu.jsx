import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faLocationDot,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../../assets/smw-logo.svg";
import MyCart from "../../ui/MyCart";

const MobileNavMenu = ({ handleToggleSearch }) => {
  return (
    <div className="mobile-nav-menu-container">
      <div className="left-column-wrapper">
        <img src={SmwLogo} alt="Sportsman Warehouse Logo" />
      </div>

      <div className="right-column-wrapper">
        <FontAwesomeIcon
          icon={faSearch}
          onClick={() => handleToggleSearch(true)}
        />

        <FontAwesomeIcon icon={faLocationDot} />

        <MyCart />

        <FontAwesomeIcon icon={faBars} />
        {/* Location Icon -> Opens from left for all locations */}
        {/* My Cart -> Import component */}
        {/* Bars -> Opens nav menu from right */}
      </div>
    </div>
  );
};

export default MobileNavMenu;
