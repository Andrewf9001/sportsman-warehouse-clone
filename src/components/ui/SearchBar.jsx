import { faMagnifyingGlass, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

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

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`search-bar-container ${isExpanded ? "expanded" : ""}`}>
      <input type="search" placeholder="Search..." />

      <button
        className="search-icon"
        label="Toggle search"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        <FontAwesomeIcon icon={isExpanded ? faX : faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
