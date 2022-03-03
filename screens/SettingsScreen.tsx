import { SafeAreaView, Text, StyleSheet, View, Keyboard } from "react-native";
import React, { Component } from "react";
import { TextInput } from "react-native-gesture-handler";

interface SettingsScreenState {
  set1: string;
  set2: string;
  set3: string;
  set4: string;
}

export class SettingsScreen extends Component {
  state: SettingsScreenState = {
    set1: "",
    set2: "",
    set3: "",
    set4: "",
  };

  ref2: React.RefObject<TextInput> = React.createRef();
  ref3: React.RefObject<TextInput> = React.createRef();
  ref4: React.RefObject<TextInput> = React.createRef();

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Settings</Text>
        </View>
        <View>
          <Text style={styles.settingResult}>Setting 1: {this.state.set1}</Text>
          <Text style={styles.settingResult}>Setting 2: {this.state.set2}</Text>
          <Text style={styles.settingResult}>Setting 3: {this.state.set3}</Text>
          <Text style={styles.settingResult}>Setting 4: {this.state.set4}</Text>
        </View>
        <View>
          <View style={styles.inputRow}>
            <Text style={styles.settingResult}>Input 1: </Text>
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => this.setState({ set1: text })}
              autoFocus={true}
              onSubmitEditing={() => this.ref2.current?.focus()}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.settingResult}>Input 2: </Text>
            <TextInput
              ref={this.ref2}
              style={styles.input}
              onChangeText={(text: string) => this.setState({ set2: text })}
              onSubmitEditing={() => this.ref3.current?.focus()}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.settingResult}>Input 3: </Text>
            <TextInput
              ref={this.ref3}
              style={styles.input}
              onChangeText={(text: string) => this.setState({ set3: text })}
              onSubmitEditing={() => this.ref4.current?.focus()}
            />
          </View>
          <View style={styles.inputRow}>
            <Text style={styles.settingResult}>Input 4: </Text>
            <TextInput
              ref={this.ref4}
              style={styles.input}
              onChangeText={(text: string) => this.setState({ set4: text })}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  settingResult: {
    padding: 5,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  input: {
    flex: 1,
    height: 30,
    margin: 6,
    borderWidth: 1,
  },
  inputRow: {
    alignItems: "center",
    flexDirection: "row",
  },
});

export default SettingsScreen;
