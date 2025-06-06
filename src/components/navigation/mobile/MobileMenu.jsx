import { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import { navbarData } from "../../../helpers/navbarData";
import SubMenuDropdown from "./SubMenuDropdown";

const MobileMenu = ({ handleMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [subMenu, setSubMenu] = useState({
    name: "",
    isOpen: false,
  });

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

  const checkSubLinks = useCallback((item) => {
    const subCategoryLinks = item?.subCategories[0].links;

    if (subCategoryLinks.length === 0) return false;
    else return true;
  });

  const handleSubMenu = (name) => {
    setSubMenu((prev) => ({
      name,
      isOpen: prev.name !== name ? true : !prev.isOpen,
    }));
  };

  const renderMainMenu = () => {
    return menuData().map((menuItem) => {
      if (!checkSubLinks(menuItem)) {
        return (
          <NavLink key={menuItem.link} className="menu-link" to="#">
            {menuItem.link}
          </NavLink>
        );
      } else {
        return (
          <div
            key={menuItem.link}
            className="menu-link"
            onClick={() => setActiveMenu(`${menuItem.link}`)}
          >
            {menuItem.link}

            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        );
      }
    });
  };

  const renderSubMenu = () => {
    return menuData().map((subMenuItem) => {
      const isOpen = subMenu.name === subMenuItem.title && subMenu.isOpen;

      return (
        <div className="sub-menu-item-wrapper" key={subMenuItem.title}>
          <div className="sub-menu-item">
            <NavLink to="#">{subMenuItem.title}</NavLink>

            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              onClick={() => handleSubMenu(subMenuItem.title)}
            />
          </div>

          {isOpen && <SubMenuDropdown links={subMenuItem.links} />}
        </div>
      );
    });
  };

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

      {activeMenu === "main" && (
        <div className="menu-items-wrapper">{renderMainMenu()}</div>
      )}

      {activeMenu !== "main" && (
        <div className="subcategory-items-wrapper">
          <button className="back-button" onClick={() => setActiveMenu("main")}>
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>

          <NavLink className="shop-all-link" to="#">
            Shop all {activeMenu}
          </NavLink>

          <div className="sub-menu-wrapper">{renderSubMenu()}</div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
