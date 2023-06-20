import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --color-normal: #b8b8a8;
	--color-fire: #f89030;
	--color-water: #6898f7;
	--color-electric: #e0e000;
	--color-grass: #90e880;
	--color-ice: #30d8cf;
	--color-fighting: #f87070;
	--color-poison: #e090f8;
	--color-ground: linear-gradient(180deg, #e0e000 50%, #c8a048 50%);
	--color-flying: linear-gradient(180deg, #58c8f0 50%, #b8b8a8 50%);
	--color-psychic: #f838a8;
	--color-bug: #a0c888;
	--color-rock: #c8a048;
	--color-ghost: #a870f8;
  --color-dragon: linear-gradient(180deg, #6898f8 50%, #f87070 50%);
	--color-dark: #908888;
	--color-steel: #b8b8d0;
	--color-fairy: #ff65d5;

  --color-primary: #2FAB8F;
  --color-secondary: #5D9D8B;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

body {
  font-family: 'Ubuntu', sans-serif;
  width: 100%;
  height: 100vh;
  background-image: url("/public/colored-pikachu-background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
`;
