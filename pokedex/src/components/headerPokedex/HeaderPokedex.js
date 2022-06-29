import React from 'react'
import {useNavigate} from "react-router-dom";
import { goToHomePage } from '../../coordinator/Coordinator';

const HeaderPokedex = () => {
  const navigate = useNavigate()
    
  return (
    <div>
        <button onClick={()=> goToHomePage(navigate)} >Voltar para lista de pokemons</button>
        <h1>Pokedex!!</h1>
    </div>
  )
}

export default HeaderPokedex