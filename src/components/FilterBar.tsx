import React, { useContext } from "react";
import generateCheckbox from "../helpers/TypeOption";
import { PokemonContext } from "../context/PokemonContext";
import { FilterByType, LateralFilterBar } from "../styles/components/FilterBar";

const FilterBar: React.FC = () => {
  const checkbox = generateCheckbox();

  const { active } = useContext(PokemonContext);

  return (
    <LateralFilterBar active={active}>
      <FilterByType>
        <span>TYPE:</span>
        {checkbox.map((checkboxItem, index) => (
          <div key={index}>{checkboxItem}</div>
        ))}
      </FilterByType>
    </LateralFilterBar>
  );
};

export default FilterBar;
