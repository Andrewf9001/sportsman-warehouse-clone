import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPaperPlane,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const LocationSidePanel = ({ handleLocationPanel }) => {
  return (
    <div className="location-side-panel-container">
      <div className="header-wrapper">
        <h1 className="text">Select A Store</h1>

        <FontAwesomeIcon
          icon={faX}
          onClick={() => handleLocationPanel(false)}
        />
      </div>

      <div className="search-wrapper">
        <input type="search" placeholder="City, State, Or Zip Code" />

        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>

      <div className="current-location">
        Use My Current Location <FontAwesomeIcon icon={faPaperPlane} />
      </div>

      <div className="locations-wrapper">Data Here</div>
    </div>
  );
};

export default LocationSidePanel;
