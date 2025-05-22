import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../../assets/smw-logo.svg";
import MegaMenu from "../shared/MegaMenu";
import NavItem from "./NavItem";
import { navbarData } from "../../../helpers/navbarData";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left-column-wrapper">
          <img src={SmwLogo} alt="Sportsman Warehouse Logo" />

          <div className="address-wrapper">
            <p className="address">
              165 W 7200 S. <br />
              Midvale, UT
            </p>

            <button>Change Store</button>
          </div>
        </div>

        <div className="right-column-wrapper">
          <div className="search-bar-wrapper">
            <input type="search" placeholder="Search..." />

            <button className="search-icon" label="Search">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>

          <FontAwesomeIcon icon={faLocationDot} />

          <div className="account-wrapper">
            <FontAwesomeIcon icon={faUser} />
            <Link>My Account</Link>
          </div>

          <div className="my-cart-wrapper">
            <div className="count">0</div>
            <FontAwesomeIcon icon={faCartShopping} />
            <Link>My Cart</Link>
          </div>

          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>

      <div className="nav-links-wrapper">
        {navbarData.map((navItem) => (
          <NavItem key={navItem.link} label={navItem.link}>
            <MegaMenu subCategories={navItem.subCategories} />
          </NavItem>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
