import React, { useContext, useEffect, useState } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonData } from "../interfaces/PokemonData";
import { capitalizedLetter } from "../helpers/CapitalizedLetter";
import {
  CounterStat,
  FilledProgressBar,
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
import { IoScaleOutline } from "react-icons/io5";
import { VscSymbolRuler } from "react-icons/vsc";

const PokemonPage: React.FC = () => {
  const { getPokemonById } = useContext(PokemonContext);

  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState<PokemonData | undefined>(undefined);

  const { id } = useParams();

  useEffect(() => {
    const fetchPokemon = async (id: string | undefined) => {
      const data = await getPokemonById(id);
      setPokemon(data);
      setLoading(false);
    };

    fetchPokemon(id);
  }, [getPokemonById, id]);

  return (
    <StyledPokemonPage>
      {loading ? (
        <Loader />
      ) : (
        <>
          <PokemonCardContainer className={pokemon?.types[0].type.name}>
            <MainPokemonContainer>
              {pokemon && (
                <PokemonNumber className={pokemon.types[0].type.name}>
                  # {pokemon.id}
                </PokemonNumber>
              )}
              {pokemon && <h1>{capitalizedLetter(pokemon.name)}</h1>}
              <PokemonImage>
                {pokemon && (
                  <img
                    src={pokemon.sprites.other.home.front_default}
                    alt={`Pokemon ${pokemon?.name}`}
                  />
                )}
              </PokemonImage>
              <PokemonDescription>
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
                      <span>
                        <VscSymbolRuler />
                        {weightAndHeight(pokemon.height)} meters
                      </span>
                    )}
                  </HeightWeightGroup>
                  <HeightWeightGroup>
                    <p>Weight:</p>
                    {pokemon && (
                      <span>
                        <IoScaleOutline />
                        {weightAndHeight(pokemon.weight)} kilograms
                      </span>
                    )}
                  </HeightWeightGroup>
                </HeightWeight>
              </PokemonDescription>
            </MainPokemonContainer>
            <GeneralStatsContainer>
              <h1 className={pokemon?.types[0].type.name}>Stats</h1>
              <StatsContainer>
                {pokemon &&
                  pokemon.stats.map((stat, index) => (
                    <StatGroup key={index}>
                      <span>{stat.stat.name}:</span>
                      <CounterStat>{stat.base_stat}</CounterStat>
                      <FilledProgressBar>
                        <ProgressBar progress={(stat.base_stat / 255) * 275} />
                      </FilledProgressBar>
                    </StatGroup>
                  ))}
              </StatsContainer>
            </GeneralStatsContainer>
          </PokemonCardContainer>
        </>
      )}
    </StyledPokemonPage>
  );
};

export default PokemonPage;
