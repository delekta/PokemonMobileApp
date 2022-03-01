import { Text, SafeAreaView, FlatList } from "react-native";
import React, { Component } from "react";
import { gql, useQuery } from "@apollo/client";
import Item from "../interfaces/Item";
import ItemListItem from "../components/ItemListItem";

const GET_ITEMS = gql`
  query AllItems {
    pokemon_v2_item(limit: 20) {
      id
      name
      cost
    }
  }
`;

interface AllItems {
  pokemon_v2_item: Item[];
}

const ThirdScreen = () => {
  const { loading, error, data } = useQuery<AllItems>(GET_ITEMS);

  return (
    <SafeAreaView>
      <FlatList<Item>
        data={data?.pokemon_v2_item}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ItemListItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default ThirdScreen;
