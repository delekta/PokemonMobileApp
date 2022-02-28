import { ListItem, Avatar } from 'react-native-elements'
import { PokemonDetails } from '../interfaces/pokemonDetails';
import TouchableScale from 'react-native-touchable-scale';
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import context, { InitialContextType } from '../state/context';

interface FavouriteListItemProps {
    pokemonDetails: PokemonDetails
}

const FavouritePokemonListItem = ({ pokemonDetails }: FavouriteListItemProps) => {
    const { removeFavouritePokemon } = useContext<InitialContextType>(context)

    return (
        <ListItem
            Component={TouchableScale}
            friction={90}
            tension={100}
            activeScale={0.95}
            key={pokemonDetails.name}
            containerStyle={styles.containerStyle}
        >
            <Avatar rounded source={{ uri: pokemonDetails?.sprites.front_default }} />
            <ListItem.Content>
                <ListItem.Title
                    style={{ color: 'black', fontWeight: 'bold' }}
                >
                    {pokemonDetails?.name.toUpperCase()}
                </ListItem.Title>
            </ListItem.Content>
            <FontAwesome name="trash" color="red" size={25} onPress={() => removeFavouritePokemon(pokemonDetails.id)} />
        </ListItem>
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 8,
    }
})

export default FavouritePokemonListItem;