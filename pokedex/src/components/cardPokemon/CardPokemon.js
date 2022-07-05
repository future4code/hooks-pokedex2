import { useContext } from "react";
import PokeCard from "./PokeCard";
import {PokemonsContext} from '../../GlobalStateContext/Context'

const CardPokemon = () =>{

    const {states}= useContext(PokemonsContext);

    const {pokemonsList, pokemonsListIsLoading} = states;

    

    const pokeCard = pokemonsList && pokemonsList.map((poke, i)=>{
        return <PokeCard key={i} pokemon={poke} page={'Home'} />
    })

    return <>
    {pokemonsListIsLoading && <p>carregando...</p>}
    {!pokemonsListIsLoading && pokeCard}
    </>
}

export default CardPokemon
