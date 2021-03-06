export interface PokemonDetails {
  name: string;
  weight: number;
  sprites: Sprite;
  abilities: [Ability];
  stats: [Stat];
  id: number;
}

interface Sprite {
  front_default: string;
  front_shiny: string;
}

export interface Ability {
  ability: AbilityDetails;
}

interface AbilityDetails {
  name: string;
}

export interface Stat {
  base_stat: number;
  stat: StatName;
}

interface StatName {
  name: string;
}

export interface PokemonDetailsState {
  pokemonDetails: PokemonDetails | null;
  isShiny: boolean;
  isFavouritePokemon: boolean;
}

export interface FavouritePokemonsState {
  favouritePokemons: Array<PokemonDetails>;
}
