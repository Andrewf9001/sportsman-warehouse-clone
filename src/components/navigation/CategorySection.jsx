import { NavLink } from "react-router-dom";
import LinkGroup from "./LinkGroup";

const CategorySection = ({ title, links }) => {
  return (
    <div className="category-section-container">
      <NavLink to="#">{title}</NavLink>

      <LinkGroup links={links} />
    </div>
  );
};

export default CategorySection;
