import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="shipping-statement-wrapper">
        <Link to="#">Get Free Shipping on Orders over $49</Link>
      </div>

      <div className="navbar-wrapper">
        <div className="logo-address-wrapper">
          <div>Logo</div>

          <div className="address-wrapper">
            <p>
              165 W 7200 S. <br />
              Midvale, UT
            </p>

            <button>Change Store</button>
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
