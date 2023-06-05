import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CheckboxOptions } from "../interfaces/CheckboxOption";
import { GroupType } from "../styles/components/FilterBar";

const options: CheckboxOptions[] = [
  { name: "Grass", id: "grass" },
  { name: "Fire", id: "fire" },
  { name: "Bug", id: "bug" },
  { name: "Fairy", id: "fairy" },
  { name: "Dragon", id: "dragon" },
  { name: "Ghost", id: "ghost" },
  { name: "Ground", id: "ground" },
  { name: "Normal", id: "normal" },
  { name: "Psychic", id: "psychic" },
  { name: "Steel", id: "steel" },
  { name: "Siniestro", id: "dark" },
  { name: "Electric", id: "electric" },
  { name: "Fighting", id: "fighting" },
  { name: "Flying", id: "flying" },
  { name: "Poison", id: "poison" },
  { name: "Ice", id: "ice" },
  { name: "Rock", id: "rock" },
  { name: "Water", id: "water" },
];

options.sort((a, b) => a.name.localeCompare(b.name));

function generateCheckbox() {
  const { handleCheckbox } = useContext(PokemonContext);

  return options.map((option) => (
    <GroupType>
      <input
        type="checkbox"
        onChange={handleCheckbox}
        name={option.id}
        id={option.id}
      />
      <label htmlFor={option.id}>{option.name}</label>
    </GroupType>
  ));
}

export default generateCheckbox;
