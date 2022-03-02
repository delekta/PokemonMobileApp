import { Text, SafeAreaView, FlatList, Modal, View } from "react-native";
import React, { Component, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Item from "../interfaces/Item";
import ItemListItem from "../components/ItemListItem";
import ItemModal from "../modals/ItemModal";

const GET_ITEMS = gql`
  query AllItems {
    pokemon_v2_item(limit: 20) {
      id
      name
      cost
    }
  }
`;

const DEFAULT_ITEM = {
  id: 0,
  name: "ala",
  cost: 0,
};

interface AllItems {
  pokemon_v2_item: Item[];
}

const ItemsScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item>(DEFAULT_ITEM);
  const { loading, error, data } = useQuery<AllItems>(GET_ITEMS);

  const onPressItem = (item: Item) => {
    showModal(item);
  };

  const showModal = (item: Item) => {
    setModalVisible(true);
    setSelectedItem(item);
  };

  const onDismiss = () => {
    setModalVisible(false);
    setSelectedItem(DEFAULT_ITEM);
  };

  return (
    <SafeAreaView>
      <FlatList<Item>
        data={data?.pokemon_v2_item}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemListItem item={item} onPressItem={onPressItem} />
        )}
      />
      <ItemModal
        modalVisible={modalVisible}
        onDismiss={onDismiss}
        selectedItem={selectedItem}
      />
    </SafeAreaView>
  );
};

export default ItemsScreen;
