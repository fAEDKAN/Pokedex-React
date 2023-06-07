import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { AiOutlineSearch } from "react-icons/Ai";
import {
  ImageNavbar,
  NavbarContainer,
  SearchBarContainer,
  SearchButton,
  SearchInput,
} from "../styles/components/SearchBar";

const Navigation: React.FC = () => {
  const { valueSearch, onInputChange, onResetForm } = useForm();

  const navigate = useNavigate();

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
        {
          <SearchBarContainer>
            <form onSubmit={onSearchSubmit}>
              <SearchInput
                type="search"
                name="valueSearch"
                id=""
                value={valueSearch}
                onChange={onInputChange}
                placeholder="Enter Pokémon's Name..."
              />
              <SearchButton>
                <AiOutlineSearch />
              </SearchButton>
            </form>
          </SearchBarContainer>
        }
      </NavbarContainer>

      <Outlet />
    </>
  );
};

export default Navigation;
