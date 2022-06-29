import React from 'react'
import HeaderPokedex from '../../components/headerPokedex/HeaderPokedex'
import { goToPokemonDetail } from '../../coordinator/Coordinator'
import { useNavigate } from "react-router-dom";
import { FluxoryButtons } from '../../styles';

const Pokedex = () => {
  const navigate = useNavigate()
  return (
    <div>
      <HeaderPokedex/>
      <h1>Pokedex</h1>
      <FluxoryButtons onClick={() => goToPokemonDetail(navigate)}>Detalhe</FluxoryButtons>
    </div>
  )
}

export default Pokedex