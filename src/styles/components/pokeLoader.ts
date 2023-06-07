import styled, { keyframes } from "styled-components";

// Keyframes del loader Pokeball
const rollAnimation = keyframes`
from {
    transform: rotate(0);
  }
  90%,
  to {
    transform: rotate(720deg);
  }
`;

const buttonAnimation = keyframes`
  from,
  50%,
  to {
    box-shadow: 0 0 15px -2px #c62828 inset;
  }

  25%,
  75% {
    box-shadow: 0 0 10px -2px #1300ea inset;
  }
`;

// Componente Pokeball Loader
export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const PokeballLoader = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 8px solid black;
  background: white;
  position: relative;
  box-shadow: -20px 0 rgba(0, 0, 0, 0.1) inset;
  animation: ${rollAnimation} 1s ease-in-out infinite;
  background: linear-gradient(
    to bottom,
    #FB1B1B 0%,
    #FB1B1B 50.5%,
    #FFFFFF 50.51%,
    #FFFFFF 100%
  );

  & :after {
    content: "";
    position: absolute;
    top: calc(100px - 3px);
    left: 0;
    width: 200px;
    height: 6px;
    background: #3f3f3f;
  }

  :before {
    content: "";
    position: absolute;
    top: 67px;
    left: 67px;
    width: 54px;
    height: 54px;
    border: solid 6px #3f3f3f;
    border-radius: 50%;
    background: white;
    z-index: 1;
    box-shadow: 0 0 15px -2px #c62828 inset;
    animation: ${buttonAnimation} 3s ease infinite;
  }
`;
