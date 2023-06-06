import React from "react";
import { LoaderContainer, PokeballLoader } from "../styles/components/pokeLoader";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <PokeballLoader />
    </LoaderContainer>
  );
};

export default Loader;
