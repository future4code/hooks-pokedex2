import React from 'react'
import {useNavigate} from "react-router-dom";
import { goToPokedex, goToHomePage } from "../../coordinator/Coordinator"

const HeaderDetail = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button onClick={() => goToHomePage(navigate)}>Ir para home</button>
        <button onClick={() => goToPokedex(navigate)}>Ir para pokedex</button>
        <h1>HeaderDetail</h1>
    </div>
  )
}

export default HeaderDetail