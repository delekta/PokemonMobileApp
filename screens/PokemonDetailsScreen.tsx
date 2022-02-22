import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';

type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>

export class PokemonDetailsScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text>{this.props.route.params.pokemon.name} Details!</Text>
            </View>
        )
    }
}

export default PokemonDetailsScreen