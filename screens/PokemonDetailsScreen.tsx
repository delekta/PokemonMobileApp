import { Text, View, Image, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>

interface PokemonDetails {
    name: string,
    weight: number,
    sprites: Sprite
}

interface Sprite {
    front_default: string,
    front_shiny: string
}

interface PokemonDetailsState {
    pokemonDetails: PokemonDetails | null
}

// function asdf(t: number) {
//     return new Promise((res) => setTimeout(res, t))
// }

export class PokemonDetailsScreen extends Component<Props> {

    state: PokemonDetailsState = {
        pokemonDetails: null
    }

    async componentDidMount() {
        const getPokemon = async () => {
            const response = await fetch(this.props.route.params.pokemon.url)
            const json = await response.json()
            this.setState({
                pokemonDetails: json
            })
        }
        getPokemon()
    }

    render() {
        if (this.state.pokemonDetails) {
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <Image
                        style={styles.mainImage}
                        source={{
                            uri: this.state.pokemonDetails.sprites.front_default
                        }}
                    />
                    <View>
                        <Text>Name: {this.state.pokemonDetails.name.toUpperCase()}</Text>
                        <Text>Weight: {this.state.pokemonDetails.weight}</Text>
                    </View>
                </View>
            )
        }
        return (
            <View>
                <Text>
                    Loading...
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: '20%',
        marginVertical: '20%',
        backgroundColor: "#ddd",

    },
    mainImage: {
        width: 200,
        height: 200,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
});

export default PokemonDetailsScreen