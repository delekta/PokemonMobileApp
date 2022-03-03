import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { FontAwesome } from "@expo/vector-icons";

type FontAwesomeSpinProps = {
    toggleFavouritePokemon: () => void
    isFavouritePokemon: boolean
}

class FontAwesomeSpin extends Component<FontAwesomeSpinProps> {

    spinValue = new Animated.Value(0);

    spin = () => {
        Animated.timing(
            this.spinValue,
            {
                toValue: 1,
                duration: 500,
                easing: Easing.linear,
                useNativeDriver: true
            }
        ).start(() => {
            this.spinValue.setValue(0);
        });

    };

    render() {

        const { toggleFavouritePokemon, isFavouritePokemon } = this.props;
        const rotate = this.spinValue.interpolate({inputRange: [0, 1], outputRange: ['0deg', '360deg']});

        return(
            <Animated.View style={{transform: [{rotate}]}}>
                <FontAwesome
                    name={isFavouritePokemon ? "star" : "star-o"}
                    color="#CCCC00"
                    size={30}
                    onPress={() => {
                        this.spin()
                        toggleFavouritePokemon()
                    }}
            />
            </Animated.View>
        )

    }
}

export default FontAwesomeSpin;