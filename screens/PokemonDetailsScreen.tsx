import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { Component, Context } from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../components/TabNavigator';
import { PokemonDetailsState } from '../interfaces/pokemonDetails';
import ToggleSwitch from 'toggle-switch-react-native';
import { Ionicons } from '@expo/vector-icons';
import { getPokemonAPI } from '../api/pokemonAPI';
import context, { InitialContextType } from '../state/context';
import { FontAwesome } from '@expo/vector-icons';


type Props = StackScreenProps<RootStackParamList, 'PokemonDetails'>

// function asdf(t: number) {
//     return new Promise((res) => setTimeout(res, t))
// }

export class PokemonDetailsScreen extends Component<Props, PokemonDetailsState> {

    static contextType: Context<InitialContextType> = context;

    state: PokemonDetailsState = {
        pokemonDetails: null,
        isShiny: false,
        isFavouritePokemon: false
    }

    async componentDidMount() {
        const getPokemonDetails = async () => {
            const json = await getPokemonAPI(this.props.route.params.pokemon.url)
            this.setState({
                pokemonDetails: json
            })
            this.setIsFavouritePokemon()
        }
        getPokemonDetails()
    }

    setIsFavouritePokemon = () => {
        this.setState({
            isFavouritePokemon: this.context.isFavouritePokemon(this.state.pokemonDetails?.id)
        })
    }

    toggleFavouritePokemon = () => {
        this.state.isFavouritePokemon ? this.context.removeFavouritePokemon(this.state.pokemonDetails?.id) : this.context.addFavouritePokemon(this.state.pokemonDetails)
        this.setState({
            isFavouritePokemon: !this.state.isFavouritePokemon
        })
    }

    render() {
        const { pokemonDetails, isShiny, isFavouritePokemon } = this.state
        if (pokemonDetails) {
            return (
                <ScrollView style={styles.container} bounces={false} contentContainerStyle={{ alignItems: 'center', paddingTop: 10 }}>
                    <View
                        style={styles.toggleSwitchContainer}
                    >
                        <ToggleSwitch
                            isOn={isShiny}
                            onColor="green"
                            offColor="gray"
                            label="Shiny"
                            labelStyle={{ color: "black", fontWeight: "300" }}
                            size="small"
                            onToggle={() => {
                                this.setState({
                                    isShiny: !isShiny
                                })
                            }
                            }
                        />
                    </View>
                    <Image
                        style={styles.mainImage}
                        source={{
                            uri: isShiny ? pokemonDetails.sprites.front_shiny : pokemonDetails.sprites.front_default
                        }}
                    />
                    <View style={styles.detailsList}>
                        <Text style={styles.name}>
                            {pokemonDetails.name.toUpperCase()}
                        </Text>

                        <FontAwesome name={isFavouritePokemon ? "star" : "star-o"} color="#CCCC00" size={30} onPress={this.toggleFavouritePokemon} />

                        <Text style={styles.header}>
                            Abilities
                        </Text>
                        <View>
                            {
                                pokemonDetails.abilities.map((item) =>
                                    <View
                                        style={styles.abilityItem}
                                        key={item.ability.name}
                                    >
                                        <Ionicons style={{ paddingRight: 5 }} name="arrow-forward-sharp" size={12} color="black" />
                                        <Text> {item.ability.name}</Text>
                                    </View>
                                )
                            }
                        </View>

                        <Text style={styles.header}>
                            Stats
                        </Text>
                        <View style={styles.statsContainer}>
                            {
                                pokemonDetails.stats.map((item) => (
                                    <View
                                        style={styles.statsItem}
                                        key={item.stat.name}>
                                        <Text style={{ backgroundColor: 'white', width: '100%', textAlign: 'center' }}>{item.stat.name}</Text>
                                        <Text>{item.base_stat}</Text>
                                    </View>
                                ))
                            }
                        </View>

                    </View>
                </ScrollView>

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
        backgroundColor: "#eee",
    },
    name: {
        fontSize: 25,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    mainImage: {
        width: 200,
        height: 200,
    },

    toggleSwitchContainer: {
        position: 'absolute',
        right: '5%',
        top: '2%'
    },
    header: {
        paddingVertical: 5,
        fontWeight: '500',
        fontSize: 20
    },

    abilityItem: {
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    statsItem: {
        width: '40%',
        margin: 2,
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: "#bbb",
    },
    detailsList: {
        alignItems: 'center'
    }
});

export default PokemonDetailsScreen