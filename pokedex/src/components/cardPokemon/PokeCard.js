import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { base_url } from "../../constants/Constants"
import PokemonDetail from "../../pages/pokemon-detail/PokemonDetail"
import { Card, ButtonsCard } from "../../styles"

const Img = styled.img`
width: 100%;
height: 200px;
`

const DivImg = styled.div`
  height: 250px;
  width: 100%;
  `;

const PokeCard = ({pokemon})=>{
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [detailRendering, setDetailRendering] = useState(false)
    
    useEffect(()=>{
       getPokemon()
    },[])
    
     const getPokemon = ()=>{
        axios
        .get(pokemon.url)
        .then((res)=>{
            setPokemonDetail(res.data)
        })
        .catch((err)=>[
            console.log('err poke details', err)
        ])

     }

     const seeDetails = ()=>{
        setDetailRendering(!detailRendering)
     }

     const CardPokemon = pokemonDetail.name && <Card>
     <DivImg><Img src={pokemonDetail.sprites.other.dream_world.front_default} /></DivImg>
     <h2>{pokemonDetail.name}</h2>
     <div>
       <ButtonsCard>adicionar a pokedex</ButtonsCard>
       <ButtonsCard onClick={seeDetails}>detalhes</ButtonsCard>
     </div>
     </Card>




    return <>
    {pokemonDetail.name && CardPokemon}
    {detailRendering && <PokemonDetail pokemonDetail={pokemonDetail} seeDetails={seeDetails}/>}
    
    </>  
}

export default PokeCard