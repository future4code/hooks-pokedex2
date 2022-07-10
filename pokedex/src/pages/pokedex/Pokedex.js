import React, { useContext, useEffect, useState } from 'react'
import HeaderPokedex from '../../components/headers/headerPokedex/HeaderPokedex'
import { PokemonsContext } from '../../GlobalStateContext/Context';
import PokeCard from '../../components/cardPokemon/PokeCard';
import { DivCard, DivPagination } from '../home/Home';
import PaginationComponent from '../../components/Pagination/PaginationCompomnent';
import styled from 'styled-components';
import broom from '../../images/broom.png'

const DivCleanButton = styled(DivPagination)`
border: 5px 0;
justify-content: flex-end;
button{
  border: none;
  cursor: pointer;
  background-color: transparent;
}
img{
  width: 30px;
  height: 30px;
  margin-right: 30px;
}
`
const Pokedex = () => {
  const {states, methods} = useContext(PokemonsContext)
  const {pokemonsInPokedex} = states;
  const {cleanPokedex} = methods

  const [actualPage, setActualPage] = useState(1)
  const [pages, setPages] = useState(0)
  const [pokePerPage, setPokePerPage] = useState(20)
  const [pokemonsOnScreen, setPokemonsOnScreen] = useState([])



  useEffect(()=>{
    definePages()
  },[pokemonsInPokedex])
  useEffect(()=>{
    definePokemonsOnScreen()
  },[actualPage, pokemonsInPokedex])

  const definePages = ()=>{
    const totalPages = Math.ceil(pokemonsInPokedex.length/pokePerPage)
    setPages(totalPages)
  }

  const definePokemonsOnScreen = ()=>{
    const pokemonsOnScreenAux = pokemonsInPokedex.filter((poke, i)=>{
      return i<pokePerPage*actualPage && i>=pokePerPage*(actualPage-1)
    })

    setPokemonsOnScreen(pokemonsOnScreenAux)

  }


  const pokeCard = pokemonsOnScreen.length>0 && pokemonsOnScreen.map((poke, i)=>{
    return <PokeCard key={i} pokemon={poke} page={'Pokedex'} />
})
  return (
    <div>
      <HeaderPokedex/>

      <DivCleanButton>
        <button onClick={cleanPokedex}><img src={broom} alt='limpar pokedex imagem'/></button>
      </DivCleanButton>

     {pokemonsInPokedex.length>0 && <DivPagination>
        <PaginationComponent paginaAtual={actualPage} setPaginaAtual={setActualPage} paginas={pages}/>
      </DivPagination>}

      <DivCard>
      {pokeCard}
      </DivCard>

      {pokemonsInPokedex.length>0 && <DivPagination>
        <PaginationComponent paginaAtual={actualPage} setPaginaAtual={setActualPage} paginas={pages}/>
      </DivPagination>}
      
    </div>
  )
}

export default Pokedex