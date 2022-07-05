import axios from "axios"
import { useEffect, useState } from "react"
import { base_url } from "../constants/Constants"
import { PokemonsContext } from "./Context"

const GlobalState = (props) =>{
    const [pokemonsList, setPokemonsList ] = useState([])
    const [pokemonsListIsLoading, setPokemonsListIsloading] = useState(true)
    const [pokemonsInPokedex, setPokemonsInPokedex] = useState([])
    
    useEffect(()=>{
        axios
        .get(`${base_url}pokemon`)
        .then((res)=>{
            setPokemonsList(res.data.results)
            setPokemonsListIsloading(false)
        })
        .catch((err)=>{
            console.log('error in request pokemons list', err)
            setPokemonsListIsloading(false)
        })
    }
    ,[])

    const addPokemonToPokedex = (pokemon) =>{
        const newPokemonList = pokemonsList.filter((poke)=>{
            return poke.name !== pokemon.name
        })

        const Array = [...pokemonsInPokedex, pokemon]

        setPokemonsInPokedex(Array)
        setPokemonsList(newPokemonList)
    }

    const removeFromPokedex = (pokemon) =>{
        const newPokemonListPokedex= pokemonsInPokedex.filter((poke)=>{
            return poke.name !== pokemon.name
        })

        setPokemonsInPokedex(newPokemonListPokedex)
    }

    const states = {pokemonsList, pokemonsListIsLoading, pokemonsInPokedex}
    const setters = {setPokemonsList}
    const methods = {addPokemonToPokedex, removeFromPokedex}

    return <PokemonsContext.Provider value={{states, setters, methods}}>
        {props.children}
    </PokemonsContext.Provider>
}

export default GlobalState