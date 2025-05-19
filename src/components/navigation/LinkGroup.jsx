import { NavLink } from "react-router-dom";

const LinkGroup = ({ links }) => {
  return (
    <ul className="link-group-container">
      {links.map((link) => (
        <li key={link.text}>
          <NavLink to={link.link}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default LinkGroup;
