import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CheckboxOptions } from "../interfaces/CheckboxOption";
import { GroupType } from "../styles/components/FilterBar";

const options: CheckboxOptions[] = [
  { name: "GRASS", id: "grass" },
  { name: "FIRE", id: "fire" },
  { name: "BUG", id: "bug" },
  { name: "FAIRY", id: "fairy" },
  { name: "DRAGON", id: "dragon" },
  { name: "GHOST", id: "ghost" },
  { name: "GROUND", id: "ground" },
  { name: "NORMAL", id: "normal" },
  { name: "PSYCHIC", id: "psychic" },
  { name: "STEEL", id: "steel" },
  { name: "DARK", id: "dark" },
  { name: "ELECTRIC", id: "electric" },
  { name: "FIGHTING", id: "fighting" },
  { name: "FLYING", id: "flying" },
  { name: "POISON", id: "poison" },
  { name: "ICE", id: "ice" },
  { name: "ROCK", id: "rock" },
  { name: "WATER", id: "water" },
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
