import React from "react";
import { PokemonData } from "../interfaces/PokemonData";
import { capitalizedLetter } from "../helpers/CapitalizedLetter";
import {
  CardInfo,
  ImageCard,
  OnePokemonLink,
  PokemonCardTypes,
} from "../styles/components/OnePokemon";
import "../styles/components/PokemonTypes.css";

interface CardPokemonProps {
  pokemon: PokemonData;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <OnePokemonLink to={`/pokemon/${pokemon.id}`}>
      <ImageCard>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </ImageCard>
      <CardInfo>
        {pokemon && <h3>{capitalizedLetter(pokemon.name)}</h3>}
        <PokemonCardTypes>
          {pokemon.abilities.map((ability) => (
            <h4 key={ability.ability.name} className={ability.ability.name}>
              {ability.ability.name}
            </h4>
          ))}
        </PokemonCardTypes>
        <h4>{pokemon.weight} Kg</h4>
        <PokemonCardTypes>
          {pokemon.types.map((type) => (
            <span key={type.type.name} className={type.type.name}>
              {type.type.name}
            </span>
          ))}
        </PokemonCardTypes>
      </CardInfo>
    </OnePokemonLink>
  );
};
export default CardPokemon;
