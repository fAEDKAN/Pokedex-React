import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "../components";
import { PokemonData } from "../interfaces/PokemonData";

const PokemonList: React.FC = () => {
  const { allPokemon } = useContext(PokemonContext);

  return (
    <>
      <div className="card-list-pokemon container">
        {allPokemon.map((pokemon: PokemonData) => (
          <CardPokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};

export default PokemonList;
