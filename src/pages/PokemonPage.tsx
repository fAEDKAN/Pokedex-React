import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonData } from "../interfaces/PokemonData";
import { capitalizedLetter } from "../helpers/CapitalizedLetter";
import {
  CounterStat,
  GeneralStatsContainer,
  HeightWeight,
  HeightWeightGroup,
  MainPokemonContainer,
  PokemonCardContainer,
  PokemonDescription,
  PokemonImage,
  PokemonNumber,
  PokemonTypes,
  ProgressBar,
  StatGroup,
  StatsContainer,
  StyledPokemonPage,
} from "../styles/components/PokemonPage";
import { weightAndHeight } from "../helpers/WeightAndHeightConverter";

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
          <PokemonCardContainer>
            <MainPokemonContainer>
              {pokemon && <PokemonNumber># {pokemon.id}</PokemonNumber>}
              <PokemonImage>
                {pokemon && (
                  <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                  />
                )}
              </PokemonImage>

              <PokemonDescription>
                {pokemon && <h1>{capitalizedLetter(pokemon.name)}</h1>}
                {pokemon && (
                  <PokemonTypes>
                    {pokemon.types.map((type) => (
                      <span
                        key={type.type.name}
                        className={`${type.type.name}`}
                      >
                        {type.type.name}
                      </span>
                    ))}
                  </PokemonTypes>
                )}
                <HeightWeight>
                  <HeightWeightGroup>
                    <p>Height:</p>
                    {pokemon && (
                      <span>{weightAndHeight(pokemon.height)} meters</span>
                    )}
                  </HeightWeightGroup>
                  <HeightWeightGroup>
                    <p>Weight:</p>
                    {pokemon && (
                      <span>{weightAndHeight(pokemon.weight)} kilograms</span>
                    )}
                  </HeightWeightGroup>
                </HeightWeight>
              </PokemonDescription>
            </MainPokemonContainer>

            <GeneralStatsContainer>
              <h1>Stats</h1>
              <StatsContainer>
                <StatGroup>
                  <span>HP</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[0].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[0].base_stat}</CounterStat>
                  )}
                </StatGroup>
                <StatGroup>
                  <span>Attack</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[1].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[1].base_stat}</CounterStat>
                  )}
                </StatGroup>
                <StatGroup>
                  <span>Defense</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[2].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[2].base_stat}</CounterStat>
                  )}
                </StatGroup>
                <StatGroup>
                  <span>Special Attack</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[3].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[3].base_stat}</CounterStat>
                  )}
                </StatGroup>
                <StatGroup>
                  <span>Special Defense</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[4].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[4].base_stat}</CounterStat>
                  )}
                </StatGroup>
                <StatGroup>
                  <span>Speed</span>
                  {pokemon && (
                    <ProgressBar
                      progress={(pokemon.stats[5].base_stat / 255) * 200}
                    ></ProgressBar>
                  )}
                  {pokemon && (
                    <CounterStat>{pokemon.stats[5].base_stat}</CounterStat>
                  )}
                </StatGroup>
              </StatsContainer>
            </GeneralStatsContainer>
          </PokemonCardContainer>
        </>
      )}
    </StyledPokemonPage>
  );
};

export default PokemonPage;
