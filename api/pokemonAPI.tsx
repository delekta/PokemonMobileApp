import { Alert } from "react-native";
import Pokemon from "../interfaces/pokemon";
import { PokemonDetails } from "../interfaces/pokemonDetails";

const GET_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon";

export const POKEMON_COUNT = 1126;

type PokemonsData = {
  results: Array<Pokemon>;
};

const getLimitParameter = (limit: number): string => {
  return `?limit=${limit}`;
};

export const getPokemonsAPI = async (limit: number): Promise<PokemonsData> => {
  return await fetchAPI(GET_POKEMONS_URL + getLimitParameter(limit));
};

export const getPokemonAPI = async (
  pokemonURL: string
): Promise<PokemonDetails> => {
  return await fetchAPI(pokemonURL);
};

const fetchAPI = async (url: string) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (e) {
    console.error(e);
    Alert.alert("Error while retrieving data.");
  }
};
