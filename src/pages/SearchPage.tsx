import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components";

const SearchPage: React.FC = () => {
  const location = useLocation();

  const { globalPokemon } = useContext(PokemonContext);

  const filteredPokemon = globalPokemon.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <p className="p-search">
          {filteredPokemon.length === 1 ? (
            <>
              Se encontró <span>{filteredPokemon.length}</span> resultado:
            </>
          ) : filteredPokemon.length > 1 ? (
            <>
              Se encontraron <span>{filteredPokemon.length}</span> resultados:
            </>
          ) : (
            <>
              <div>
                Ese Pokémon no está en la Pokédex!{" "}
                <img className="trainer-icon" src="/trainer-icon.png" />
              </div>
            </>
          )}
        </p>
        <div className="card-list-pokemon container">
          {filteredPokemon.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchPage;
