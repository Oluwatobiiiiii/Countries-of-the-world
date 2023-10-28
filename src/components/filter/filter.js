import "./filter.css";
import { useState } from "react";

export default function Filter({ selected, setselected }) {
  const [isActive, setIsActive] = useState(false);

  const options = ["Africa", "America", "Asia", "Europe", "Oceanina"];
  return (
    <div className="filters">
      <div className="search-filed">
        <form>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#ffffff" }}
          ></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a country ...."
          />
        </form>
      </div>

      <div className="dropdown">
        <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
          {selected}
          <i
            className="fa-solid fa-caret-down"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
        {isActive && (
          <div className="dropdown-content">
            {options.map((option) => (
              <div
                key={option}
                className="dropdown-item"
                onClick={(e) => {
                  setselected(option);
                  setIsActive(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
