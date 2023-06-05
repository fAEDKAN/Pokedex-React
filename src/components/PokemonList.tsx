import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon, Loader } from "../components";
import { PokemonData } from "../interfaces/PokemonData";
import { AllPokemonCards } from "../styles/components/AllPokemon";

const PokemonList: React.FC = () => {
  const { allPokemon, loading, filteredPokemon } = useContext(PokemonContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <AllPokemonCards>
          {filteredPokemon.length ? (
            <>
              {filteredPokemon.map((pokemon: PokemonData) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          ) : (
            <>
              {allPokemon.map((pokemon: PokemonData) => (
                <CardPokemon pokemon={pokemon} key={pokemon.id} />
              ))}
            </>
          )}
        </AllPokemonCards>
      )}
    </>
  );
};

export default PokemonList;
