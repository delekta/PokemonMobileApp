import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>

interface PokemonDetails {
    name: string,
    weight: number
}

interface PokemonDetailsState {
    pokemonDetails: PokemonDetails | null
}

function asdf(t: number) {
    return new Promise((res) => setTimeout(res, t))
}

export class PokemonDetailsScreen extends Component<Props> {

    state: PokemonDetailsState = {
        pokemonDetails: null
    }

    async componentDidMount() {
        await asdf(2000);
        fetch(this.props.route.params.pokemon.url)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                this.setState({
                    pokemonDetails: json
                })
                console.log(this.state.pokemonDetails)
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.pokemonDetails) {
            return (
                <View>
                    <Text>{this.state.pokemonDetails.name} weight {this.state.pokemonDetails.weight}!</Text>
                </View>
            )
        }
        return <View />
    }
}

export default PokemonDetailsScreen