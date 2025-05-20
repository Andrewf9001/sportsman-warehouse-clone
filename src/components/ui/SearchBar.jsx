import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <input type="search" />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </div>
  );
};

export default SearchBar;
