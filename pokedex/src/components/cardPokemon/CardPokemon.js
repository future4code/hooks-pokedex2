import { useContext } from "react";
import PokeCard from "./PokeCard";
import {PokemonsContext} from '../../GlobalStateContext/Context'

const CardPokemon = ({pokemonsOnScreen}) =>{

    const {states}= useContext(PokemonsContext);

    const { pokemonsListIsLoading} = states;

    // cards dos pokemon exibidos na home
    const pokeCard = pokemonsOnScreen && pokemonsOnScreen.map((poke, i)=>{
        return <PokeCard key={i} pokemon={poke} page={'Home'} />
    })

    return <>
    {pokemonsListIsLoading && <p>carregando...</p>} 
    {!pokemonsListIsLoading && pokeCard}
    </>
}

export default CardPokemon
