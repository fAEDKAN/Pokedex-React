import React from "react";
import { FilterBar, PokemonList } from "../components";

const HomePage: React.FC = () => {
  return (
    <>
      <div className='container-filter container'>
        <span>FILTRAR</span>
      </div>
      <PokemonList />
      <FilterBar/>
    </>
  );
};

export default HomePage;
