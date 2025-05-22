import CategorySection from "./CategorySection";

const MegaMenu = ({ subCategories }) => {
  return (
    <div className="mega-menu-container">
      {subCategories.map((item) => (
        <CategorySection
          key={item.title}
          title={item.title}
          links={item.links}
        />
      ))}
    </div>
  );
};

export default MegaMenu;
