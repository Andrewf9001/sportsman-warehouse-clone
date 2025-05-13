import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../assets/smw-logo.svg";
import { navbarData } from "../../helpers/navbarData";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="shipping-statement-wrapper">
        <Link to="#">Get Free Shipping on Orders over $49</Link>
      </div>

      <div className="navbar-wrapper">
        <div className="logo-address-wrapper">
          <img src={SmwLogo} alt="Sportsman Warehouse Logo" />

          <div className="address-wrapper">
            <p>
              165 W 7200 S. <br />
              Midvale, UT
            </p>

            <button>Change Store</button>
          </div>
        </div>

        <div className="search-bar-wrapper">
          <input type="search" />
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>

        <div className="account-cart-wrapper">
          <div className="account-wrapper">
            <FontAwesomeIcon icon={faUser} />
            <div>My Account</div>
          </div>

          <div className="my-cart-wrapper">
            <div>0</div>
            <FontAwesomeIcon icon={faCartShopping} />
            <div>My Cart</div>
          </div>
        </div>
      </div>

      <div className="nav-links-wrapper">
        {navbarData.map((navItem) => (
          <NavLink key={navItem.link} to="#">
            {navItem.link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
