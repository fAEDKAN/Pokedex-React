import { Link } from "react-router-dom";
import styled from "styled-components";
import "../components/PokemonTypes.css";

// Información de la tarjeta
export const CardInfo = styled.div`
  padding: 0.5em 0.75em 0.15em;
  background-color: rgba(255, 255, 255, 0.75);
  border-bottom-right-radius: 0.5em;
  border-bottom-left-radius: 0.5em;

  & h3 {
    text-decoration: none;
    font-size: 1.25rem;
    text-align: center;
  }

  & p {
    font-size: 1.25rem;
  }
`;

// Imagen de la tarjeta
export const ImageCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15em;
  padding: 1.5em;
  & img {
    width: 100%;
    height: 100%;
  }
`;

// Carta de Pokémon
export const PokemonContainer = styled.div`
  border-radius: 0.75em;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  color: black;
  :hover {
    &:hover p,
    h3,
    a {
      color: white;
      transition: all 0.5s;
    }
  }
  &:hover ${CardInfo} {
    background-color: rgba(0, 0, 0, 0.9);
    transition: all 0.5s;
  }
  &:hover ${ImageCard} {
    background-color: rgba(0, 0, 0, 0.2);
    border-top-right-radius: 0.5em;
    border-top-left-radius: 0.5em;
    transition: all 0.5s;
  }
`;

// Enlace a descripción del Pokémon
export const OnePokemonLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

// Tipo de Pokémon
export const PokemonCardTypes = styled.div`
  display: flex;
  gap: 0.75em;
  margin: 0.75em 0em;
  justify-content: center;
  & span {
    font-size: 0.9em;
    padding: 0.3em 1.2em;
    color: black;
    border-radius: 1em;
    border: none;
  }
  & p {
    font-size: 0.9rem;
  }
`;
