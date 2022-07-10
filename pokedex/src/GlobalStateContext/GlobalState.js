import axios from "axios"
import { useEffect, useState } from "react"
import { base_url } from "../constants/Constants"
import { PokemonsContext } from "./Context"

const GlobalState = (props) =>{
    const pokemonsInPokedexLocalStorage = JSON.parse(localStorage.getItem('pokemonsInPokedex'))
    const allPokemonsLocalStorage = JSON.parse(localStorage.getItem('allPokemons'))

    // todos os pokemons
    const [allPokemons, setAllpokemons] =useState(
        allPokemonsLocalStorage?

        allPokemonsLocalStorage
        :
        []
        )

    // pokemons que não estão na peokdex
    const [pokemonsList, setPokemonsList ] = useState([]) 


    const [pokemonsListIsLoading, setPokemonsListIsloading] = useState(true)

    // pokemons que esão na pokedex
    const [pokemonsInPokedex, setPokemonsInPokedex] = useState(
        pokemonsInPokedexLocalStorage?

        pokemonsInPokedexLocalStorage
        :
        []
        )
    
    useEffect(()=>{
        allPokemonsLocalStorage && getPokemons()
    }
    ,[])


    useEffect(()=>{
        const pokemonsInPokedexNames = pokemonsInPokedex.map((poke)=>{
            return poke.name
        })

        const pokemonsNotInPokedex = allPokemons.filter((poke)=>{
            return !pokemonsInPokedexNames.includes(poke.name)
        })

        setPokemonsList(pokemonsNotInPokedex) 
        localStorage.setItem('pokemonsInPokedex', JSON.stringify(pokemonsInPokedex))
    },[pokemonsInPokedex])


    const getPokemons = ()=>{
        axios
        .get(`${base_url}pokemon?limit=100000&offset=0`)
        .then((res)=>{
            const pokemonsInPokedexNames = pokemonsInPokedex.map((poke)=>{
                return poke.name
            })
            const pokemonsNotInPokedex = res.data.results.filter((poke)=>{
                return !pokemonsInPokedexNames.includes(poke.name)
            })

            setAllpokemons(res.data.results)
            localStorage.setItem('allPokemons', JSON.stringify(res.data.results))
            setPokemonsList(pokemonsNotInPokedex)
            setPokemonsListIsloading(false)
        })
        .catch((err)=>{
            console.log('error in request pokemons list', err)
            setPokemonsListIsloading(false)
        })
    }

    const verifyPokemonIsInPokedex = (pokemon) =>{
        const filter = pokemonsInPokedex.filter((poke)=>{
            return poke.name===pokemon.name
        })

        return filter.length>0? true : false
    }

    const addPokemonToPokedex = (pokemon) =>{

        if(!verifyPokemonIsInPokedex(pokemon)){

            const Array = [...pokemonsInPokedex, pokemon]
            
            setPokemonsInPokedex(Array)
        }
    }


    const removeFromPokedex = (pokemon) =>{

        const newPokemonListPokedex= pokemonsInPokedex.filter((poke)=>{
            return poke.name !== pokemon.name
        })

        setPokemonsInPokedex(newPokemonListPokedex)
    }

    const cleanPokedex = ()=>{
        setPokemonsInPokedex([])
    }

    const states = {pokemonsList, pokemonsListIsLoading, pokemonsInPokedex}
    const setters = {setPokemonsList}
    const methods = {addPokemonToPokedex, removeFromPokedex, cleanPokedex}

    return <PokemonsContext.Provider value={{states, setters, methods}}>
        {props.children}
    </PokemonsContext.Provider>
}

export default GlobalState