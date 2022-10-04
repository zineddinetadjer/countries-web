import React from "react";
import { useState } from "react";
import "../selectregion/selectregion.css";

const regions = ["Africa", "Europe", "America", "Asia", "Oceania"];

const SelectRegion = (props) => {
  const [hidden, setHidden] = useState(true);
  const { selectedRegion, setSelectedRegion } = props;

  return (
    <div>
      <div>
        <p
          id="select"
          onClick={() => {
            setHidden(!hidden);
          }}
        >
          {selectedRegion || "Select region"}
        </p>
      </div>
      {!hidden && (
        <div id="region-cont">
          {regions.map((c) => {
            return (
              <ul>
                <li
                  onClick={() => {
                    setSelectedRegion(c);
                    setHidden(true);
                  }}
                >
                  {c}
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectRegion;
