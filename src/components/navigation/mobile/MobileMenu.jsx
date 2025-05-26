import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { navbarData } from "../../../helpers/navbarData";

const MobileMenu = () => {
  return (
    <div className="mobile-menu-container">
      <div className="menu-header-wrapper">
        <NavLink>Sign in / Register</NavLink>

        <FontAwesomeIcon icon={faX} />
      </div>

      <div className="menu-items-wrapper">
        {navbarData.map((item) => (
          <NavLink key={item.link}>{item.link}</NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
