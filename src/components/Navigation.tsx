import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { AiOutlineSearch } from "react-icons/Ai";
import {
  ImageNavbar,
  NavbarContainer,
  SearchBarContainer,
  SearchButton,
  SearchInput,
} from "../styles/components/SearchBar";
import { FilterContainer, IconFilter } from "../styles/components/FilterBar";
import { PokemonContext } from "../context/PokemonContext";
import { FilterBar } from "../components";

const Navigation: React.FC = () => {
  const { valueSearch, onInputChange, onResetForm } = useForm();
  const { active, setActive } = useContext(PokemonContext);

  const navigate = useNavigate();
  const location = useLocation();

  // Oculta el burguer menu al ingresar a la página de un Pokémon
  const [filterIconVisibility, setFilterIconVisibility] = useState(true);

  useEffect(() => {
    const isPokemonPage = location.pathname.startsWith("/pokemon");
    setFilterIconVisibility(!isPokemonPage);
  }, [location.pathname]);

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };

  return (
    <>
      <NavbarContainer>
        <Link to="/" className="logo">
          <ImageNavbar src="/public/pokeball-navbar.png" alt="Logo Pokedex" />
        </Link>
        <SearchBarContainer>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              type="search"
              name="valueSearch"
              id=""
              value={valueSearch}
              onChange={onInputChange}
              placeholder="Dude, which Pokémon are you looking for?"
            />
            <SearchButton>
              <AiOutlineSearch />
            </SearchButton>
          </form>
        </SearchBarContainer>
        <FilterContainer isVisible={filterIconVisibility}>
          <IconFilter
            className={active ? "on" : ""}
            onClick={() => setActive(!active)}
          >
            <div className="hamburguer-bt_stripe hamburguer-bt_stripe_top"></div>
            <div className="hamburguer-bt_stripe hamburguer-bt_stripe_middle"></div>
            <div className="hamburguer-bt_stripe hamburguer-bt_stripe_bottom"></div>
          </IconFilter>
          <FilterBar />
        </FilterContainer>
      </NavbarContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
