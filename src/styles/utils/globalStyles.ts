import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
  --color-normal: #A8A77A;
	--color-fire: #EE8130;
	--color-water: #6390F0;
	--color-electric: #F7D02C;
	--color-grass: #7AC74C;
	--color-ice: #96D9D6;
	--color-fighting: #C22E28;
	--color-poison: #A33EA1;
	--color-ground: #E2BF65;
	--color-flying: #A98FF3;
	--color-psychic: #F95587;
	--color-bug: #A6B91A;
	--color-rock: #B6A136;
	--color-ghost: #735797;
	--color-dragon: #6F35FC;
	--color-dark: #705746;
	--color-steel: #B7B7CE;
	--color-fairy: #D685AD;

  --color-primary: #2FAB8F;
  --color-secondary: #457F8C;
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
/*   background-image: url("/public/pikachu-background-app.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(10px) opacity(5);
  background-attachment: fixed; */
}
`;
