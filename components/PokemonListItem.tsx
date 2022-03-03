import { ListItem, Avatar } from "react-native-elements";
import { PokemonDetails } from "../interfaces/pokemonDetails";
import TouchableScale from "react-native-touchable-scale";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import type { RootStackParamList } from "../components/TabNavigator";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Pokemon from "../interfaces/Pokemon";
import { getPokemonAPI } from "../api/pokemonAPI";

interface ListItemProps {
  pokemon: Pokemon;
}

type PokemonDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  "PokemonDetails"
>;

const PokemonListItem = ({ pokemon }: ListItemProps) => {
  const navigation = useNavigation<PokemonDetailsScreenProp>();
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails>();

  useEffect(() => {
    const getPokemonDetails = async () => {
      const json = await getPokemonAPI(pokemon.url);
      setPokemonDetails(json);
    };
    getPokemonDetails();
  }, []);

  return (
    <ListItem
      Component={TouchableScale}
      // @ts-expect-error
      friction={90}
      tension={100}
      activeScale={0.95}
      key={pokemon.name}
      containerStyle={styles.containerStyle}
      onPress={() =>
        navigation.navigate("PokemonDetails", { pokemon: pokemon })
      }
    >
      <Avatar rounded source={{ uri: pokemonDetails?.sprites.front_default }} />
      <ListItem.Content>
        <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
          {pokemonDetails?.name.toUpperCase()}
        </ListItem.Title>
      </ListItem.Content>
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

export default PokemonListItem;
