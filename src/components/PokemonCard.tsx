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

interface CardPokemonProps {
  pokemon: PokemonData;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
  return (
    <OnePokemonLink to={`/pokemon/${pokemon.id}`}>
      <PokemonContainer className={pokemon.types[0].type.name}>
        <ImageCard>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
          />
        </ImageCard>
        <CardInfo>
          {pokemon && <h3>{capitalizedLetter(pokemon.name)}</h3>}
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
