import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonData } from "../interfaces/PokemonData";
import { capitalizedLetter } from "../helpers/CapitalizedLetter";
import { StyledPokemonPage } from "../styles/components/PokemonPage";

const PokemonPage: React.FC = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonData | undefined>(undefined);

  const { id } = useParams();

  const fetchPokemon = async (id: string | undefined) => {
    const data = await getPokemonById(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <StyledPokemonPage>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="header-main-pokemon">
            {pokemon && <span className="number-pokemon">#{pokemon.id}</span>}
            <div className="container-img-pokemon">
              {pokemon && (
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              )}
            </div>

            <div className="container-info-pokemon">
              {pokemon && <h1>{capitalizedLetter(pokemon.name)}</h1>}
              {pokemon && (
                <div className="card-types info-pokemon-type">
                  {pokemon.types.map((type) => (
                    <span key={type.type.name} className={`${type.type.name}`}>
                      {type.type.name}
                    </span>
                  ))}
                </div>
              )}
              <div className="info-pokemon">
                <div className="group-info">
                  <p>Height:</p>
                  {pokemon && <span>{pokemon.height} Metros</span>}
                </div>
                <div className="group-info">
                  <p>Weight:</p>
                  {pokemon && <span>{pokemon.weight} Kg</span>}
                </div>
              </div>
            </div>
          </div>

          <div className="container-stats">
            <h1>Stats</h1>
            <div className="stats">
              <div className="stat-group">
                <span>HP</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[0].base_stat}
                  </span>
                )}
              </div>
              <div className="stat-group">
                <span>Attack</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[1].base_stat}
                  </span>
                )}
              </div>
              <div className="stat-group">
                <span>Defense</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[2].base_stat}
                  </span>
                )}
              </div>
              <div className="stat-group">
                <span>Special Attack</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[3].base_stat}
                  </span>
                )}
              </div>
              <div className="stat-group">
                <span>Special Defense</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[4].base_stat}
                  </span>
                )}
              </div>
              <div className="stat-group">
                <span>Speed</span>
                <div className="progress-bar"></div>
                {pokemon && (
                  <span className="counter-stat">
                    {pokemon.stats[5].base_stat}
                  </span>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </StyledPokemonPage>
  );
};

export default PokemonPage;
