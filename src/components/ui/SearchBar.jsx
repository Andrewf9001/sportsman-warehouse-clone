import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

{
  /* 
  Todo:
    - Mobile (only show icon)
      - When icon is clicked, replace navbar with Searchbar component
      - Contains Search Icon (right) input (center) left (cancel button)
    - Tablet + Desktop
      - Search bar is always visible
      - Contains input (right) search button (left)  
*/
}

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
