import React from "react";
import { PokemonData } from "../interfaces/PokemonData";
import { Link } from "react-router-dom";

interface CardPokemonProps {
  pokemon: PokemonData;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <h3>{pokemon.name}</h3>
    </Link>
  );
};
export default CardPokemon;
