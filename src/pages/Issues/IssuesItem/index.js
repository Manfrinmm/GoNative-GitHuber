import React, { Component } from "react";

import { View, Image, Text, TouchableOpacity, Linking } from "react-native";

import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

export default class IssuesItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.SubContainer}>
          <Image style={styles.avatar} source={{ uri: item.user.avatar_url }} />
          <View style={styles.info}>
            <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
              {item.title}
            </Text>
            <Text style={styles.login}>{item.user.login}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(item.html_url)}
        >
          <Icon name="angle-right" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}
