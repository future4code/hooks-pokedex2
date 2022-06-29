import React from 'react'
import {useNavigate} from "react-router-dom";
import { goToPokedex } from "../../coordinator/Coordinator"

const HeaderHome = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => goToPokedex(navigate)}>Ir para pokedex</button>
        <h1>Lista de Pokémons</h1>
    </div>
  )
}

export default HeaderHome