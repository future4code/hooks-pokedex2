import React, { useContext, useEffect, useState }  from "react";
import HeaderHome from "../../components/headers/headerHome/HeaderHome";
import styled from "styled-components";
import CardPokemon from "../../components/cardPokemon/CardPokemon";
import PaginationComponent from '../../components/Pagination/PaginationCompomnent'
import { PokemonsContext } from "../../GlobalStateContext/Context";

export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`

export const DivPagination = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin: 30px 0;
`

const Home = () => {
  const [actualPage, setActualPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [pokePerPage, setPokePerPage] = useState(20)
  const [pokemonsOnScreen, setPokemonsOnScreen] = useState([])

  const {states} = useContext(PokemonsContext)
  const {pokemonsList} = states

  useEffect(()=>{
    definePages()
  },[pokemonsList])
  useEffect(()=>{
    definePokemonsOnScreen()
  },[actualPage, pokemonsList])

  const definePages = ()=>{
    const totalPages = Math.ceil(pokemonsList.length/pokePerPage)
    setPages(totalPages)
  }

  const definePokemonsOnScreen = ()=>{
    const pokemonsOnScreenAux = pokemonsList.filter((poke, i)=>{
      return i<pokePerPage*actualPage && i>=pokePerPage*(actualPage-1)
    })

    setPokemonsOnScreen(pokemonsOnScreenAux)

  }

  return (
    <div>
  
      <HeaderHome />

      {pokemonsList.length>0 && <DivPagination>
        <PaginationComponent paginaAtual={actualPage} setPaginaAtual={setActualPage} paginas={pages}/>
      </DivPagination>}
      
      <DivCard>
        <CardPokemon pokemonsOnScreen={pokemonsOnScreen}/>
      </DivCard>
    
      {pokemonsList.length>0 && <DivPagination>
        <PaginationComponent paginaAtual={actualPage} setPaginaAtual={setActualPage} paginas={pages}/>
      </DivPagination>}
    </div>
  );
};

export default Home;
