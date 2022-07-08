import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"
import { PokemonsContext } from "../../GlobalStateContext/Context"
import PokemonDetail from "../../pages/pokemon-detail/PokemonDetail"
import { Card, ButtonsCard } from "../../styles"

const Img = styled.img`
width: 100%;
height: 200px;
filter: drop-shadow(0 0 20px black) ;
`

const DivImg = styled.div`
  height: 250px;
  width: 100%;
  `


const PokeCard = ({pokemon, page})=>{
    const [pokemonDetail, setPokemonDetail] = useState({})
    const [detailRendering, setDetailRendering] = useState(false)
    
    useEffect(()=>{
       getPokemon()
    },[pokemon])
    
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

     const {methods} = useContext(PokemonsContext)
     const {addPokemonToPokedex, removeFromPokedex} = methods

     let typeColor = ''

     const defineBgColor = ()=>{
      if(pokemonDetail.name){ 
        switch (pokemonDetail.types[0].type.name) {
        case 'dark':
          typeColor = '#030404'
          break
        case 'dragon':
          typeColor = '#018A95'
          break;
        case 'eletric':
          typeColor = '#E1E400'
          break
        case 'fairy':
          typeColor = '#B11344'
          break;
        case 'fighting':
          typeColor = '#AF3E1C'
          break
        case 'bug':
          typeColor = '#024A1C'
          break;
        case 'fire':
          typeColor = '#C81A1C'
          break;
        case 'flying':
          typeColor = '#85B3C8'
          break
        case 'ghost':
          typeColor = '#936E90'
          break;
        case 'psychic':
          typeColor = '#bb1d6a'
          break
        case 'poison':
          typeColor = '#6b2991'
          break;
        case 'normal':
          typeColor = '#a58a90'
          break
        case 'ice':
          typeColor = '#4cd4f8'
          break;
        case 'ground':
          typeColor = '#77440f'
          break
        case 'grass':
          typeColor = '#00cc46'
          break
        case 'water':
          typeColor = ' #71a5f7'
          break
        case 'steel':
          typeColor = '#338473'
          break
        case 'rock':
          typeColor = '501204'
          break
        default:
          typeColor = 'pink'
          break;
       }}
    }

    defineBgColor()

     const CardPokemon = pokemonDetail.name && <Card style={{backgroundColor: `${typeColor}`}}>
     <DivImg><Img src={pokemonDetail.sprites.other.dream_world.front_default} alt={`imagem do ${pokemonDetail.name}`}/></DivImg>
     
      <h2>{pokemonDetail.name}</h2>

     <div>
      {page==='Home'?<ButtonsCard onClick={()=>addPokemonToPokedex(pokemon)}>add a pokedex</ButtonsCard> : <ButtonsCard onClick={()=>removeFromPokedex(pokemon)}>remover da pokedex</ButtonsCard>} 
       <ButtonsCard onClick={seeDetails}>detalhes</ButtonsCard>
     </div>
     </Card>




    return <>
    {pokemonDetail.name && CardPokemon}
    {detailRendering && <PokemonDetail typeColor={typeColor} pokemonDetail={pokemonDetail} seeDetails={seeDetails}/>}
    
    </>  
}

export default PokeCard