import React from 'react'
import HeaderPokedex from '../../components/headerPokedex/HeaderPokedex'
import { goToPokemonDetail } from '../../coordinator/Coordinator'
import { useNavigate } from "react-router-dom";

const Pokedex = () => {
  const navigate = useNavigate()
  return (
    <div>
      <HeaderPokedex/>
      <h1>Pokedex</h1>
      <button onClick={() => goToPokemonDetail(navigate)}>Detalhe</button>
    </div>
  )
}

export default Pokedex