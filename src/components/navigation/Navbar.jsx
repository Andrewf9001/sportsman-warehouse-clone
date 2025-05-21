import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faLocationDot,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../assets/smw-logo.svg";
import { navbarData } from "../../helpers/navbarData";
import NavItem from "./NavItem";
import MegaMenu from "./MegaMenu";
import SearchBar from "../ui/SearchBar";

const Navbar = () => {
  // const [isMenu]
  return (
    <nav className="navbar-container">
      <div className="shipping-statement-wrapper">
        <Link to="#">Get Free Shipping on Orders over $49</Link>
      </div>

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
          <SearchBar />

          <FontAwesomeIcon icon={faLocationDot} />

          <div className="account-wrapper">
            <FontAwesomeIcon icon={faUser} />
            <div>My Account</div>
          </div>

          <div className="my-cart-wrapper">
            <div className="count">0</div>
            <FontAwesomeIcon icon={faCartShopping} />
            <NavLink>My Cart</NavLink>
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
