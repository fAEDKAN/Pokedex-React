import React from "react";
import { PokemonData } from "../interfaces/PokemonData";
import { capitalizedLetter } from "../helpers/CapitalizedLetter";
import {
  CardInfo,
  ImageCard,
  OnePokemonLink,
  PokemonCardTypes,
  PokemonContainer,
} from "../styles/components/OnePokemon";
import "../styles/components/PokemonTypes.css";
import { weightInKg } from "../helpers/WeightInKg";

interface CardPokemonProps {
  pokemon: PokemonData;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <OnePokemonLink to={`/pokemon/${pokemon.id}`}>
      <PokemonContainer>
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
              <p key={ability.ability.name} className={ability.ability.name}>
                {capitalizedLetter(ability.ability.name)}
              </p>
            ))}
          </PokemonCardTypes>
          <a>{weightInKg(pokemon.weight)} Kg</a>
          <PokemonCardTypes>
            {pokemon.types.map((type) => (
              <span key={type.type.name} className={type.type.name}>
                {type.type.name}
              </span>
            ))}
          </PokemonCardTypes>
        </CardInfo>
      </PokemonContainer>
    </OnePokemonLink>
  );
};
export default CardPokemon;
