import React, { Component, useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Item from "../interfaces/Item";

interface ItemModalProps {
  modalVisible: boolean;
  selectedItem: Item;
  onDismiss: () => void;
}

class ItemModal extends Component<ItemModalProps> {
  render() {
    return (
      <View>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.modalVisible}
          onRequestClose={() => {
            this.props.onDismiss();
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                {this.props.selectedItem.name.toUpperCase()}
              </Text>
              <Text>id: {this.props.selectedItem.id}</Text>
              <Text>cost: {this.props.selectedItem.cost}</Text>
              <TouchableOpacity
                style={[styles.buttonClose, styles.button]}
                onPress={() => {
                  this.props.onDismiss();
                }}
              >
                <Text style={styles.textStyle}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ItemModal;
