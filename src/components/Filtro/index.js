import React, { Component } from "react";

import { View, TouchableOpacity, Text } from "react-native";

import styles from "./styles";

export default class Filtro extends Component {
  render() {
    return (
      <View style={styles.aba}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.abaText}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.abaText}>Abertas</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.abaText}>Fechadas</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
