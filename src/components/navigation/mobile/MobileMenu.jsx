import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faX } from "@fortawesome/free-solid-svg-icons";

import { navbarData } from "../../../helpers/navbarData";

const MobileMenu = ({ handleMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  console.log("activeMenu", activeMenu);

  return (
    <div
      className={`mobile-menu-container ${
        activeMenu === "main" ? "main-active" : "sub-active"
      }`}
    >
      <div className="menu-header-wrapper">
        <NavLink>Sign in / Register</NavLink>

        <FontAwesomeIcon icon={faX} onClick={() => handleMenuOpen(false)} />
      </div>

      <div className="menu-items-wrapper">
        {navbarData.map((item) => {
          return (
            <div className="nav-link-wrapper">
              <NavLink
                key={item.link}
                onClick={() => setActiveMenu(`${item.link}`)}
              >
                {item.link}
              </NavLink>

              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
