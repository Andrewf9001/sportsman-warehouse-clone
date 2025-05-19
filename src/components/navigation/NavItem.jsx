import { useState } from "react";

const NavItem = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="nav-item-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <h1>{label}</h1>

      {isOpen && <div className="test-text">It's {label}!</div>}
    </div>
  );
};

export default NavItem;
