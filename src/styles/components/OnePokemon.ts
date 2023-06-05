import { Link } from "react-router-dom";
import styled from "styled-components";

// Enlace a descripción del Pokémon
export const OnePokemonLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

// Imagen de la tarjeta
export const ImageCard = styled.div`
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1em;
  height: 15em;
  & img {
    width: 100%;
    height: 100%;
  }
`;

// Información de la tarjeta
export const CardInfo = styled.div`
  padding: 15px;
  & a {
    color: #333;
  }
`;

// Tipo de Pokémon
export const PokemonCardTypes = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  & span {
    font-size: 12px;
    padding: 5px 20px;
    border-radius: 5px;
    color: #fff;
  }
`;
