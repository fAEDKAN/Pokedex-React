import styled from "styled-components";

// Contenedor de toda la página del Pokémon
export const StyledPokemonPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
`;

// Contenedor de la info y los stats
export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(0, 0, 0, 0.9);
  position: relative;
  top: 1.5em;
  width: 50%;
  height: 80vh;
`;

export const PokemonNumber = styled.span`
  font-size: 7em;
  font-weight: 600;
  color: var(--color-grass);
  position: absolute;
  top: 0em;
  left: 0.2em;
`;

// Contenedor de la info
export const MainPokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em 0em;
  width: 40em;
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

// Contenedor de la descripción
export const PokemonDescription = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 5em;
  text-align: center;
  align-items: flex-end;

  & h1 {
    color: #fff;
  }
  & p,
  span {
    color: #fff;
  }
`;

export const PokemonTypes = styled.div`
  display: flex;
  gap: 0.75em;
  margin: 0.75em 0em;
  justify-content: flex-end;
  & span {
    font-size: 0.9em;
    padding: 0.3em 1.2em;
    border-radius: 1em;
    color: #fff;
  }
`;

export const HeightWeight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const HeightWeightGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  & p {
    font-weight: bold;
  }
`;

// Contenedor de las estadísticas
export const GeneralStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 15em;
  height: 100%;
  gap: 0.75em;
  & h1 {
    color: #fff;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-direction: column;
`;

export const StatGroup = styled.div`
  display: flex;
  gap: 0.25em;
  flex-direction: column;
  & span {
    color: #fff;
  }
`;

interface ProgressBarProps {
  progress: number;
}
export const ProgressBar = styled.div<ProgressBarProps>`
  height: 1.25em;
  width: ${(props: { progress: any }) => props.progress}px;
  background-color: #fff;
  border-radius: 1em;
`;

export const CounterStat = styled.span``;
