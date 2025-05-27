import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { navbarData } from "../../../helpers/navbarData";

const MobileMenu = ({ handleMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("main");

  const menuData = useCallback(() => {
    if (activeMenu !== "main") {
      const currentData = navbarData.find(
        (category) => category.link === activeMenu
      );

      return currentData?.subCategories;
    } else {
      return navbarData;
    }
  });

  console.log("menuData", menuData());

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
        {menuData().map((item) => {
          return (
            <div className="nav-link-wrapper" key={item.link}>
              <NavLink onClick={() => setActiveMenu(`${item.link}`)}>
                {item.link}
              </NavLink>

              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          );
        })}
      </div>

      {activeMenu !== "main" && menuData().length > 0 && (
        <div className="subcategory-items-wrapper">
          <button onClick={() => setActiveMenu("main")}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>

          <NavLink>Shop all {activeMenu}</NavLink>

          {menuData().map((item) => {
            return (
              <div className="sub-category-item-wrapper" key={item.title}>
                <NavLink>{item.title}</NavLink>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
