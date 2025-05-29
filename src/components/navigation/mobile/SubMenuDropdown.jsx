import { Link } from "react-router-dom";

const SubMenuDropdown = ({ links }) => {
  const renderLinks = () => {
    return links.map((link) => {
      return (
        <Link key={link.text} className="link-wrapper" to="#">
          {link.text}
        </Link>
      );
    });
  };

  return <div className="sub-menu-dropdown-container">{renderLinks()}</div>;
};

export default SubMenuDropdown;
