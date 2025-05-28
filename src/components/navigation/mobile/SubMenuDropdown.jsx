const SubMenuDropdown = ({ links }) => {
  const renderLinks = () => {
    return links.map((link) => {
      return (
        <div className="link-wrapper" key={link.text}>
          <div>{link.text}</div>
        </div>
      );
    });
  };

  return <div className="sub-menu-dropdown-container">{renderLinks()}</div>;
};

export default SubMenuDropdown;
