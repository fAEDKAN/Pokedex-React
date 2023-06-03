import { CheckboxOptions } from "../interfaces/CheckboxOption";

const options: CheckboxOptions[] = [
  { name: "Planta", id: "grass" },
  { name: "Fuego", id: "fire" },
  { name: "Bicho", id: "bug" },
  { name: "Hada", id: "fairy" },
  { name: "Dragón", id: "dragon" },
  { name: "Fantasma", id: "shadow" },
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
  return options.map((option) => (
    <div className="group-type">
      <input type="checkbox" name={option.name} id={option.id} />
      <label htmlFor={option.id}>{option.name}</label>
    </div>
  ));
}

export default generateCheckbox;
