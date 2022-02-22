import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigationState } from '@react-navigation/native';

interface Pokemon {
    name: string;
    url: string;
}

type PokemonProp = {
    pokemon: Pokemon;
};

export class PokemonDetailsScreen extends Component<PokemonProp> {
    render() {
        console.log(this.props)
        return (
            <View>
                <Text>{this.props.route.params.pokemon.name} Details!</Text>
            </View>
        )
    }
}

export default PokemonDetailsScreen