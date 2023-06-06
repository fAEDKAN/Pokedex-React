import { Link } from "react-router-dom";
import styled from "styled-components";

// Carta de Pokémon
export const PokemonContainer = styled.div`
  border: 2px solid white;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.85);
  text-decoration: none;
  color: white;
  :hover {
    border: 2px solid black;
    background: rgba(255, 255, 255, 0.85);
    transition: all 0.5s;
    &:hover p,
    h3,
    a {
      color: black;
      transition: all 0.5s;
    }
  }
  :hover img {
    border-radius: 1em;
    transition: all 0.5s;
  }
`;

// Enlace a descripción del Pokémon
export const OnePokemonLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

// Imagen de la tarjeta
export const ImageCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 15em;
  & img {
    width: 100%;
    height: 100%;
  }
`;

// Información de la tarjeta
export const CardInfo = styled.div`
  padding: 15px;

  & h3 {
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;
  }

  & p {
    font-size: 1.25rem;
    padding: 0em;
    color: #fff;
  }
`;

// Tipo de Pokémon
export const PokemonCardTypes = styled.div`
  display: flex;
  gap: 0.75em;
  margin: 0.75em 0em;
  justify-content: flex-end;
  & span {
    font-size: 0.9em;
    padding: 0.3em 1.2em;
    border-radius: 1em;
    color: black;
  }
  & p {
    font-size: 0.9rem;
    padding: 0em;
    color: #fff;
  }
`;
