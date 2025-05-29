import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPaperPlane,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const tempLocations = [
  {
    title: "Midvale, UT",
    distance: 0,
    address: "165 W 7200 S",
    city: "Midvale",
    state: "UT",
    phone: "8015671000",
  },
  {
    title: "South Jordan, UT",
    distance: 5.7,
    address: "10462 S River Heights Dr.",
    city: "South Jordan",
    state: "UT",
    phone: "8012545700",
  },
  {
    title: "Saratoga Springs, UT",
    distance: 16.7,
    address: "851 N. Redwood Rd.",
    city: "Saratoga Springs",
    state: "UT",
    phone: "3854488600",
  },
];

const LocationSidePanel = ({ handleLocationPanel }) => {
  const [currentLocation, setCurrentLocation] = useState("Midvale, UT");

  const renderLocations = () => {
    return tempLocations.map((location) => {
      const isCurrent = currentLocation === location.title;

      return (
        <div className="location-item-wrapper" key={location.title}>
          {isCurrent && (
            <div className="current-location">* Currently Shopping</div>
          )}

          <div className="item-header">
            <h1>{location.title}</h1>

            <div className="distance">{location.distance} Miles</div>
          </div>

          <div className="address-wrapper">
            <div className="address">{location.address}</div>

            <div className="city-state">
              {location.city}, {location.city}
            </div>
          </div>

          <div className="phone">{location.phone}</div>

          <div className="open-close-wrapper">Open {"->"} Closes 8:00 PM</div>

          {!isCurrent && (
            <button
              className="select-store-button"
              onClick={() => setCurrentLocation(location.title)}
            >
              Select Store & Continue
            </button>
          )}
        </div>
      );
    });
  };

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

      <div className="locations-wrapper">{renderLocations()}</div>
    </div>
  );
};

export default LocationSidePanel;
