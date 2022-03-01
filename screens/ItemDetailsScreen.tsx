import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text } from "react-native";
import { RootStackParamList } from "../components/TabNavigator";

type Props = StackScreenProps<RootStackParamList, "ItemDetails">;

function ItemDetailsScreen({ route, navigation }: Props) {
  const { id, cost } = route.params.item;
  return (
    <View>
      <Text>{`id: ${id}`}</Text>
      <Text>{`cost: ${cost}`}</Text>
    </View>
  );
}

export default ItemDetailsScreen;
