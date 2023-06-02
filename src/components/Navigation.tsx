import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

const Navigation: React.FC = () => {
  const {} = useContext(PokemonContext) || {};

  return (
    <>
      <header>
        <Link to="/" className="logo">
          <img src="/public/pokedex-logo-trazo.png" alt="imagen" />
        </Link>

        <form>
          <input
            type="search"
            name="searchbar"
            placeholder="Buscar Pokémon por Nombre"
          />
          <button className="btn-search">Buscar</button>
        </form>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
