import React, { useContext } from 'react'
import HeaderPokedex from '../../components/headerPokedex/HeaderPokedex'
import { goToPokemonDetail } from '../../coordinator/Coordinator'
import { useNavigate } from "react-router-dom";
import { FluxoryButtons } from '../../styles';
import { PokemonsContext } from '../../GlobalStateContext/Context';
import PokeCard from '../../components/cardPokemon/PokeCard';
import { DivCard } from '../home/Home';

const Pokedex = () => {
  const {states} = useContext(PokemonsContext)

  const {pokemonsInPokedex} = states;

  const pokeCard = pokemonsInPokedex.length>0 && pokemonsInPokedex.map((poke, i)=>{
    return <PokeCard key={i} pokemon={poke} page={'Pokedex'} />
})
  return (
    <div>
      <HeaderPokedex/>

      <DivCard>
      {pokeCard}
      </DivCard>
      
    </div>
  )
}

export default Pokedex