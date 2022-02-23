export interface PokemonDetails {
    name: string,
    weight: number,
    sprites: Sprite
    abilities: [Ability]
    stats: [Stat]
}

export interface Sprite {
    front_default: string,
    front_shiny: string
}

export interface PokemonDetailsState {
    pokemonDetails: PokemonDetails | null
    isShiny: Boolean
}

export interface Ability {
    name: string
}

export interface Stat {
    base_stat: number
    stat: StatName
}

export interface StatName {
    name: string
}