import styled from "styled-components";

// Contenedor de la navbar
export const NavbarContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  border-bottom: 2px solid black;
  position: sticky;
  width: 100%;
  top: 0;
`;

// Contenedor de la imagen
export const ImageNavbar = styled.img`
  width: 6em;

  &:hover {
    transform: rotate(360deg);
    transition: all 0.75s ease;
  }
`;

// Contenedor de la searchbar
export const SearchBarContainer = styled.div`
  & form {
    display: flex;
    position: absolute;
    align-items: center;
    left: 88em;
    top: 1.2em;
  }
`;

// Input de búsqueda
export const SearchInput = styled.input`
  flex: 1;
  padding: 0em 0em 0em 2em;
  border: 2px solid black;
  border-radius: 10em;
  background-color: white;
  /*   text-align: center; */
  width: 25em;
  height: 2.75em;
  font-size: 1em;
  font-weight: 600;

  &::placeholder {
    font-size: inherit;
    font-weight: inherit;
    color: black;
  }

  &:focus {
    outline: none;
  }

  &:focus::placeholder {
    opacity: 0;
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
  background-color: #fb1b1b;
  border: 5px solid #000000;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.75s ease;

  &:hover {
    background-color: #e01111;
    & svg {
      transform: rotate(360deg);
      transition: all 0.75s ease-out;
    }
  }
  & svg {
    color: white;
    font-size: 1.5em;
  }
`;
