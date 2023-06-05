import styled from "styled-components";

// Contenedor de la imagen
export const ImageNavbar = styled.img`
  width: 5em;
  margin-right: 10em;
`;

// Contenedor de la navbar
export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
`;

// Contenedor de la searchbar
export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10em;
`;

// Input de búsqueda
export const SearchInput = styled.input`
  flex: 1;
  padding: 1.25em;
  border: 5px solid black;
  border-radius: 10em;
  background-color: white;

  &::placeholder {
    font-size: 0.9em;
    font-weight: 600;
    padding: 1em;
    color: black;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    transition: all 0.5s;
    background-color: lightgray;
  }
`;

// Botón del input de búsqueda
export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.25em;
  padding: 1em;
  background-color: #ff1616;
  color: #fff;
  border: 5px solid black;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.75s ease;

  &:hover {
    background-color: #e01111;
    transform: rotate(360deg);
    transition: all 1s ease;
  }
  & svg {
    color: white;
    font-size: 1.7em;
    font-weight: bold;
  }
`;
