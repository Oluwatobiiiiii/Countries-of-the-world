import "./filter.css";
import { useState } from "react";

export default function Filter({ selected, setselected, setSearch }) {
  const [isActive, setIsActive] = useState(false);

  function inputed(e) {
    e.preventDefault();
    // console.log(search);
  }

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  return (
    <div className="filters">
      <div className="search-filed">
        <form onSubmit={inputed}>
          <i
            className="fa-solid fa-magnifying-glass"
            style={{ color: "#ffffff" }}
          ></i>
          <input
            type="text"
            className="search-input"
            placeholder="Search for a country ...."
            onChange={(e) => setSearch(e.target.value)}
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
