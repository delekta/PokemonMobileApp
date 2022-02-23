export interface PokemonDetails {
    name: string,
    weight: number,
    sprites: Sprite
}

export interface Sprite {
    front_default: string,
    front_shiny: string
}

export interface PokemonDetailsState {
    pokemonDetails: PokemonDetails | null
}