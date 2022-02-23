const GET_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon'

export const getPokemonsAPI = async () => {
    return await fetchAPI(GET_POKEMONS_URL)
}

export const getPokemonAPI = async (pokemonURL: string) => {
    return await fetchAPI(pokemonURL)
}

const fetchAPI = async (url: string) => {
    const response = await fetch(url)
    const json = await response.json()
    return json
}