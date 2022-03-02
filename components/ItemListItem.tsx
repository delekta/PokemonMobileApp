import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import TouchableScale from "react-native-touchable-scale";
import Item from "../interfaces/Item";
import { RootStackParamList } from "./TabNavigator";

interface ItemsListItemProps {
  item: Item;
  onPressItem: (item: Item) => void;
}

const ItemListItem = ({ item, onPressItem }: ItemsListItemProps) => {
  return (
    <ListItem
      Component={TouchableScale}
      // @ts-expect-error
      friction={90}
      tension={100}
      activeScale={0.95}
      key={item.name}
      containerStyle={styles.containerStyle}
      onPress={() => onPressItem(item)}
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
