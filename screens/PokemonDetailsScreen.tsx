import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';
import { PokemonDetailsState } from '../interfaces/PokemonDetails';
import ToggleSwitch from 'toggle-switch-react-native';


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
                    <View
                        style={styles.toggleSwitchContainer}
                    >
                        <ToggleSwitch
                            isOn={this.state.isShiny}
                            onColor="green"
                            offColor="gray"
                            label="Shiny"
                            labelStyle={{ color: "black", fontWeight: "300" }}
                            size="small"
                            onToggle={() => this.setState({
                                ...this.state.pokemonDetails,
                                isShiny: !this.state.isShiny
                            })}
                        />
                    </View>
                    <Image
                        style={styles.mainImage}
                        source={{
                            uri: this.state.isShiny ? this.state.pokemonDetails.sprites.front_shiny : this.state.pokemonDetails.sprites.front_default
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
        paddingTop: "15%",
        alignItems: 'center',
        backgroundColor: "#ddd",
        position: 'relative'

    },
    mainImage: {
        width: 200,
        height: 200,
    },

    toggleSwitchContainer: {
        position: 'absolute',
        right: '5%',
        top: '5%'
    }
});

export default PokemonDetailsScreen