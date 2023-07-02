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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.5); */
  border-radius: 1.5em;
  position: relative;
  top: 1.5em;
  height: 50em;
`;

export const PokemonNumber = styled.span`
  font-size: 2.5em;
  font-weight: 600;
  color: var(--color-grass);
  position: absolute;
  top: 0.5em;
  left: 0.75em;
`;

// Contenedor de la info
export const MainPokemonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  gap: 2.5em;
  & h1 {
    color: #fff;
    font-size: 2.5rem;
  }
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  & img {
    width: 15em;
  }
`;

// Contenedor de la descripción
export const PokemonDescription = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 5em;
  align-items: center;

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
  & svg {
    color: white;
    font-size: 1.5em;
  }
`;

// Contenedor de las estadísticas
export const GeneralStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  gap: 0.75em;
  & h1 {
    color: var(--color-grass);
    font-size: 1.5em;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  gap: 1em;
  /* flex-direction: column; */
  flex-direction: column;
`;

export const StatGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.25em;
  & span {
    color: #fff;
  }
`;

// ProgressBar
interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 0.75em;
  width: ${(props) => props.progress}px;
  background-color: var(--color-primary);
  border-radius: 1em;
`;

export const FilledProgressBar = styled.div`
  height: 0.75em;
  width: 275px;
  border-radius: 1em;
  background-color: var(--color-normal);
`;

export const CounterStat = styled.span``;
