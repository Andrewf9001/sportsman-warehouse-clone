import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import SmwLogo from "../../assets/smw-logo.svg";

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
        <NavLink to="#">Hunting</NavLink>
        <NavLink to="#">Shooting</NavLink>
        <NavLink to="#">Fishing</NavLink>
        <NavLink to="#">Camping</NavLink>
        <NavLink to="#">Boating</NavLink>
        <NavLink to="#">Cooking</NavLink>
        <NavLink to="#">Clothing</NavLink>
        <NavLink to="#">Footwear</NavLink>
        <NavLink to="#">Clearance</NavLink>
        <NavLink to="#">Gift Cards</NavLink>
        <NavLink to="#">Learn</NavLink>
        <NavLink to="#">Personal Protection</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
