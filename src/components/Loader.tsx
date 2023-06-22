import React from "react";
import {
  LoaderContainer,
  PokeballLoader,
} from "../styles/components/PokeLoader";

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <PokeballLoader />
    </LoaderContainer>
  );
};

export default Loader;
