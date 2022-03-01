import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import Item from "../interfaces/Item";
import { RootStackParamList } from "./TabNavigator";

interface PokemonItemsListItemProps {
  item: Item;
}

type ItemDetailsScreenProp = StackNavigationProp<
  RootStackParamList,
  "ItemDetails"
>;

const ItemListItem = ({ item }: PokemonItemsListItemProps) => {
  const navigation = useNavigation<ItemDetailsScreenProp>();

  return (
    <ListItem
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      key={item.name}
      containerStyle={styles.containerStyle}
      onPress={() => navigation.navigate("ItemDetails", { item: item })}
    >
      <ListItem.Content>
        <ListItem.Title style={{ color: "black", fontWeight: "bold" }}>
          {item?.name.toUpperCase()}
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

export default ItemListItem;
