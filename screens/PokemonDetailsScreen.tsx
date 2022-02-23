import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';
import { PokemonDetailsState } from '../interfaces/PokemonDetails';


type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>


// function asdf(t: number) {
//     return new Promise((res) => setTimeout(res, t))
// }

export class PokemonDetailsScreen extends Component<Props> {

    state: PokemonDetailsState = {
        pokemonDetails: null,
        isShiny: false
    }

    async componentDidMount() {
        const getPokemonDetails = async () => {
            const response = await fetch(this.props.route.params.pokemon.url)
            const json = await response.json()
            this.setState({
                ...this.state.pokemonDetails,
                pokemonDetails: json
            })
        }
        getPokemonDetails()
    }

    render() {
        if (this.state.pokemonDetails) {
            return (
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => this.setState({
                            ...this.state.pokemonDetails,
                            isShiny: !this.state.isShiny
                        })}
                    >
                        <Image
                            style={styles.mainImage}
                            source={{
                                uri: this.state.isShiny ? this.state.pokemonDetails.sprites.front_shiny : this.state.pokemonDetails.sprites.front_default
                            }}
                        />
                    </TouchableOpacity>
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
        backgroundColor: "#ddd",

    },
    mainImage: {
        width: 200,
        height: 200,
    }
});

export default PokemonDetailsScreen