import { Alert } from "react-native";

const GET_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemonsAPI = async () => {
    return await fetchAPI(GET_POKEMONS_URL)
}

export const getPokemonAPI = async (pokemonURL: string) => {
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