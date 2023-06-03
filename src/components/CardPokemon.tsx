import React from "react";
import { PokemonData } from "../interfaces/PokemonData";
import { Link } from "react-router-dom";

interface CardPokemonProps {
  pokemon: PokemonData;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="card-pokemon">
      <div className="card-img">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="card-info">
        {/* <span className='pokemon-id'>N° {pokemon.id}</span> */}
        <h3>{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.abilities.map((ability) => (
            <h4 key={ability.ability.name} className={ability.ability.name}>
              {ability.ability.name}
            </h4>
          ))}
        </div>
        <h4>{pokemon.weight} Kg</h4>
        <div className="card-types">
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
export default CardPokemon;
