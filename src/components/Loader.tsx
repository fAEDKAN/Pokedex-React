import React from "react";
import {
  LoaderContainer,
  PokeballLoader,
} from "../styles/components/PokeLoader.ts";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <PokeballLoader />
    </LoaderContainer>
  );
};

export default Loader;
