import styled, { keyframes } from "styled-components";

// Contenedor del filtro
export const FilterContainer = styled.div<{ isVisible: boolean }>`
  display: flex;
  justify-content: flex-end;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? 1: 0)};
`;

// Icono del filtro
export const IconFilter = styled.div`
  cursor: pointer;
  position: relative;
  width: 60px;
  transition: all 0.2s ease-out;

  &:hover .hamburguer-bt_stripe {
    background: black;
  }

  .hamburguer-bt_stripe {
    width: 100%;
    height: 10px;
    background: white;
    margin: 6px auto;
    transition: all 0.3s;
    backface-visibility: hidden;
  }

  &.on .hamburguer-bt_stripe_top {
    transform: rotate(45deg) translate(10px, 10px);
  }

  &.on .hamburguer-bt_stripe_middle {
    opacity: 0;
  }

  &.on .hamburguer-bt_stripe_bottom {
    transform: rotate(-45deg) translate(10px, -10px);
  }
`;

// Barra lateral del filtro
/* slideIn desplaza la barra para mostrarla */
const slideIn = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
`;
/* sildeOut desplaza la barra para ocultarla */
const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
`;

export const LateralFilterBar = styled.div<{ active?: boolean }>`
  display: flex;
  justify-content: flex-start;
  position: fixed;
  top: 6.3em;
  right: 0;
  width: 10em;
  color: white;
  background-color: rgba(144, 232, 128, 0.7);
  border-left: 2px solid black;
  height: 100%;
  padding-top: 80px;
  animation: ${({ active }) => (active ? slideIn : slideOut)} 0.75s forwards;
`;

export const FilterByType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  span {
    display: flex;
    font-weight: 700;
    font-size: 25px;
    padding: 0 0 0 0.6em;
  }
`;

export const GroupType = styled.div`
  display: flex;
  gap: 10px;
  margin-left: 15px;
  cursor: pointer;

  & input,
  label {
    cursor: pointer;
    font-weight: 600;
    color: black;
  }

  & label:hover {
    color: white;
    transition: 0.5s all;
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
