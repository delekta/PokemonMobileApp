import React, { Component } from "react";
import { Animated, Easing } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

type FontAwesomeTrashProps = {
  removeFavouritePokemon: (id: number) => void;
  pokemonId: number;
};

export default class FontAwesomeTrash extends Component<FontAwesomeTrashProps> {
  buttonScale = new Animated.Value(1);

  handlePressIn = () => {
    Animated.spring(this.buttonScale, {
      toValue: 1.25,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  render() {
    const { removeFavouritePokemon, pokemonId } = this.props;
    const animatedStyle = {
      transform: [{ scale: this.buttonScale }],
    };
    return (
      <TouchableWithoutFeedback
        onPressIn={this.handlePressIn}
        onPressOut={() => removeFavouritePokemon(pokemonId)}
      >
        <Animated.View style={animatedStyle}>
          <FontAwesome name="trash" color="red" size={25} />
        </Animated.View>
      </TouchableWithoutFeedback>
    );
  }
}
