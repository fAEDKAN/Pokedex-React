import styled from "styled-components";

// Contenedor de la imagen
export const ImageNavbar = styled.img`
  width: 5em;
  margin-right: 5em;
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
  margin-left: 5em;
`;

// Input de búsqueda
export const SearchInput = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

// Botón del input de búsqueda
export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  padding: 8px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;