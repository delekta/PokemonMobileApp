import { ListItem, Avatar } from "react-native-elements";
import { PokemonDetails } from "../interfaces/pokemonDetails";
import TouchableScale from "react-native-touchable-scale";
import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  PokemonContext,
  InitPokemonContextType,
} from "../context/PokemonContext";
import FontAwesomeTrash from "./FontAwesomeTrash";

interface FavouriteListItemProps {
  pokemonDetails: PokemonDetails;
}

const FavouritePokemonListItem = ({
  pokemonDetails,
}: FavouriteListItemProps) => {
  const { removeFavouritePokemon } =
    useContext<InitPokemonContextType>(PokemonContext);

  return (
    <ListItem
      key={pokemonDetails.name}
      containerStyle={styles.containerStyle}
    >
      <Avatar rounded source={{ uri: pokemonDetails?.sprites.front_default }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
          {pokemonDetails?.name.toUpperCase()}
        </ListItem.Title>
      </ListItem.Content>
      <FontAwesomeTrash removeFavouritePokemon={removeFavouritePokemon} pokemonId={pokemonDetails.id}/>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
});

export default FavouritePokemonListItem;
