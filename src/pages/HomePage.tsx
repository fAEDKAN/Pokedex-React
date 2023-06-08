import React, { useContext, useState } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";
/* import { AiOutlineMenu } from "react-icons/Ai"; */
import {
  FilterContainer,
  IconFilter,
  LoadMoreBtn,
  LoadMoreBtnContainer,
} from "../styles/components/FilterBar";

const HomePage: React.FC = () => {
  const { onClickLoadMore, active, setActive, loading } =
    useContext(PokemonContext);

  return (
    <>
      <FilterContainer>
        <IconFilter
          className={active ? "on" : ""}
          onClick={() => setActive(!active)}
        >
          <div className="hamburguer-bt_stripe hamburguer-bt_stripe_top"></div>
          <div className="hamburguer-bt_stripe hamburguer-bt_stripe_middle"></div>
          <div className="hamburguer-bt_stripe hamburguer-bt_stripe_bottom"></div>
        </IconFilter>
      </FilterContainer>
      <PokemonList />
      <FilterBar />
      {loading ? null : (
        <LoadMoreBtnContainer>
          <LoadMoreBtn onClick={onClickLoadMore}>LOAD MORE POKÉMON</LoadMoreBtn>
        </LoadMoreBtnContainer>
      )}
    </>
  );
};

export default HomePage;
