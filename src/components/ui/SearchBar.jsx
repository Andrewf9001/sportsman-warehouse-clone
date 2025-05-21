import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleToggleSearch }) => {
  return (
    <div className="search-bar-container">
      <FontAwesomeIcon icon={faMagnifyingGlass} />

      <input type="search" />

      <button className="cancel" onClick={() => handleToggleSearch(false)}>
        Cancel
      </button>
    </div>
  );
};

export default SearchBar;
