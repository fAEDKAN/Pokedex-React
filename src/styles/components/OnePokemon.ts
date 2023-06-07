import { Link } from "react-router-dom";
import styled from "styled-components";

// Carta de Pokémon
export const PokemonContainer = styled.div`
  border: 2px solid black;
  border-radius: 0.75em;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.25);
  background-color: rgba(93, 157, 139, 0.85);
  text-decoration: none;
  color: black;

  :hover {
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.85);
    transition: all 0.5s;
    &:hover p,
    h3,
    a {
      color: white;
      transition: all 0.5s;
    }
  }
  :hover img {
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
  padding: 0.5em;
  & img {
    width: 100%;
    height: 100%;
  }
`;

// Información de la tarjeta
export const CardInfo = styled.div`
  padding: 0.25em 0.75em;

  & h3 {
    text-decoration: none;
    font-size: 1.5rem;
  }

  & p {
    font-size: 1.25rem;
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
    color: black;
    border-radius: 0.5em;
  }
  & p {
    font-size: 0.9rem;
  }
`;
