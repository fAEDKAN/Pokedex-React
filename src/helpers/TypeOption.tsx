import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CheckboxOptions } from "../interfaces/CheckboxOption";
import { GroupType } from "../styles/components/FilterBar";

const options: CheckboxOptions[] = [
  { name: "Planta", id: "grass" },
  { name: "Fuego", id: "fire" },
  { name: "Bicho", id: "bug" },
  { name: "Hada", id: "fairy" },
  { name: "Dragón", id: "dragon" },
  { name: "Fantasma", id: "ghost" },
  { name: "Tierra", id: "ground" },
  { name: "Normal", id: "normal" },
  { name: "Psíquico", id: "psychic" },
  { name: "Acero", id: "steel" },
  { name: "Siniestro", id: "dark" },
  { name: "Eléctrico", id: "electric" },
  { name: "Lucha", id: "fighting" },
  { name: "Volador", id: "flying" },
  { name: "Veneno", id: "poison" },
  { name: "Hielo", id: "ice" },
  { name: "Roca", id: "rock" },
  { name: "Agua", id: "water" },
];

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
