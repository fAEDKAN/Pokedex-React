import styled from "styled-components";

// Contenedor del filtro
export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  left: 0;
`;

// Icono del filtro
export const IconFilter = styled.div `
  cursor: pointer;
  margin: 0 0.5em 0 0;
  color: white;
  &:hover {
    color: black;
    transition: all 1s ease-out;
  }
`;

// Contenedor del botón
export const LoadMoreBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 20px;
`;

// Botón de cargar más
export const LoadMoreBtn = styled.button`
  padding: 15px 40px;
  font-family: inherit;
  background-color: white;
  color: black;
  font-weight: 600;
  border-radius: 10em;
  border: 5px solid black;
  margin: 1em 0 2em 0;
  cursor: pointer;
  &:hover {
    background-color: var(--color-secondary);
    transition: all 0.5s;
  }
`;

// Barra lateral del filtro
export const LateralFilterBar = styled.div<{ active?: boolean }>`
  ${(props) =>
    props.active &&
    `
  left: 0;
  transition: 1s all;
  `}
  display: flex;
  justify-content: center;
  position: fixed;
  top: 5.2em;
  right: -300px;
  width: 15em;
  color: white;
  background-color: #5D9D8B;
  height: 100%;
  padding-top: 80px;
  transition: 1s all;
`;

export const FilterByType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    font-weight: 700;
    font-size: 22px;
  }
`;

export const GroupType = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;

  label {
    cursor: pointer;
  }
`;
