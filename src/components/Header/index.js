import React, { Component } from "react";
import { withNavigation } from "react-navigation"; //faz isso quando um componente não é "uma chamada de pagina"
import PropTypes from "proptypes";

import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

class Header extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,

    navigation: PropTypes.shape({
      navigate: PropTypes.func
    }).isRequired
  };

  signOut = async () => {
    const { navigation } = this.props;

    await AsyncStorage.clear();

    navigation.navigate("Welcome");
  };

  render() {
    const { title } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.left} />
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity onPress={this.signOut}>
          <Icon name="exchange" size={16} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  }
}

// faz com que Header tenha acesso as propriedades  de navegação
export default withNavigation(Header);
