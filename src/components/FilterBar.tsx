import React, { useContext } from "react";
import generateCheckbox from "../helpers/TypeOption";
import { PokemonContext } from "../context/PokemonContext";

const FilterBar: React.FC = () => {
  const checkbox = generateCheckbox();

  const { active } = useContext(PokemonContext);

  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="filter-by-type">
        <span>Tipo</span>
        {checkbox.map((checkbox, index) => (
          <div key={index}>{checkbox}</div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
