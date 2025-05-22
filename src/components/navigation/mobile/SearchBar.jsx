import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ handleToggleSearch }) => {
  return (
    <div className="search-bar-container">
      <div className="search-input-wrapper">
        <FontAwesomeIcon icon={faMagnifyingGlass} />

        <input type="search" />
      </div>

      <button className="cancel" onClick={() => handleToggleSearch(false)}>
        Cancel
      </button>
    </div>
  );
};

export default SearchBar;
