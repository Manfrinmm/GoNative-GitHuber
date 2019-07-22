import React, { Component } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  ActivityIndicator,
  AsyncStorage,
  FlatList
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import Header from "../../components/Header";
import RepositoryItem from "./RepositoryItem";

export default class Repositories extends Component {
  //react navigation vai buscar em cada pagina
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="list-alt" size={20} color={tintColor} />
    )
  };

  state = {
    data: [],
    loading: true,
    refreshing: false
  };

  async componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    this.setState({ refreshing: true });

    const useranme = await AsyncStorage.getItem("@githuber:username");

    const { data } = await api.get(`/users/${useranme}/repos`);

    this.setState({
      data,
      loading: false,
      refreshing: false
    });
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadRepositories}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Repositórios" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
