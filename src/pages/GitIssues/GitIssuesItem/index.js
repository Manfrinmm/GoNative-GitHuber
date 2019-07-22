import React, { Component } from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

class GitIssuesItem extends Component {
  goToIssues = (login, name) => {
    this.props.navigation.navigate("Issues", { login, name });
  };

  render() {
    const { repo } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image style={styles.avatar} source={{ uri: repo.avatar_url }} />
          <View style={styles.infoRepo}>
            <Text style={styles.name}>{repo.name}</Text>
            <Text style={styles.login}>{repo.login}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.goToIssues(repo.login, repo.name)}
        >
          <Icon name="angle-right" size={25} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(GitIssuesItem);
