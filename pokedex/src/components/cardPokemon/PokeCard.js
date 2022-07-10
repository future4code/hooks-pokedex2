import { useContext, useEffect } from "react"
import { useState } from "react"
import { PokemonsContext } from "../../GlobalStateContext/Context"
import PokemonDetail from "../pokemon-detail/PokemonDetail"
import { Card, ButtonsCard } from "../../styles"
import axios from 'axios'
import {defineBgColor, Img, DivImg} from './PokeCardStyle'


const PokeCard = ({pokemon, page})=>{
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [detailRendering, setDetailRendering] = useState(false)
    
    useEffect(()=>{
       getPokemon()
    },[pokemon])

    const getPokemon = () =>{
      axios
      .get(pokemon.url)
      .then((res)=>{
        setPokemonDetail(res.data)
      })
      .catch((err)=>{
        console.log('erro ao pegar detalhes dos pokemon', err)
      })
    } 

    const seeDetails = ()=>{
      setDetailRendering(!detailRendering)
    }
    
     const {methods} = useContext(PokemonsContext)
     const {addPokemonToPokedex, removeFromPokedex} = methods

     const typeColor = defineBgColor(pokemonDetail)

    //  Card específico de cada pokemon (tanto na home quanto na pokedex)
     const CardPokemon = pokemonDetail.name && <Card style={{backgroundColor: `${typeColor}`}}>
     <DivImg><Img src={pokemonDetail.sprites.other.dream_world.front_default} alt={`imagem do ${pokemonDetail.name}`}/></DivImg>
     
      <h2>{pokemonDetail.name}</h2>

     <div>
      {page==='Home'?<ButtonsCard onClick={()=>addPokemonToPokedex(pokemon)}>add a pokedex</ButtonsCard> : <ButtonsCard onClick={()=>removeFromPokedex(pokemon)}>remover da pokedex</ButtonsCard>} 
       <ButtonsCard onClick={()=>seeDetails(setDetailRendering, detailRendering)}>detalhes</ButtonsCard>
     </div>
     </Card>

    return <>
    {pokemonDetail.name && CardPokemon}
    {detailRendering && <PokemonDetail typeColor={typeColor} pokemonDetail={pokemonDetail} seeDetails={seeDetails} />}
    
    </>  
}

export default PokeCard