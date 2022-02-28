import { Alert } from "react-native";
import Pokemon from '../interfaces/pokemon'
import { PokemonDetails } from '../interfaces/pokemonDetails'

const GET_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon'

type PokemonsData = {
    results: Array<Pokemon>
}

export const getPokemonsAPI = async (): Promise<PokemonsData> => {
    return await fetchAPI(GET_POKEMONS_URL)
}

export const getPokemonAPI = async (pokemonURL: string): Promise<PokemonDetails> => {
    return await fetchAPI(pokemonURL)
}

const fetchAPI = async (url: string) => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch (e) {
        console.error(e);
        Alert.alert("Error while retrieving data.")
    }
}