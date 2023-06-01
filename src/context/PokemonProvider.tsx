import React from "react";
import { PokemonContext } from "./PokemonContext";

interface PokemonProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  return (
    <PokemonContext.Provider value={{ numero: 0 }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
