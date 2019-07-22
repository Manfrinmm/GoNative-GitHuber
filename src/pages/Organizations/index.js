import React, { Component } from "react";
import api from "../../services/api";

import { View, FlatList, ActivityIndicator, AsyncStorage } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

import Header from "../../components/Header";
import OrganizationItem from "./OrganizationItem";

export default class Organizations extends Component {
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
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const useranme = await AsyncStorage.getItem("@githuber:username");

    const { data } = await api.get(`/users/${useranme}/orgs`);

    this.setState({
      data,
      loading: false,
      refreshing: false
    });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Organizações" />
        {loading ? (
          <ActivityIndicator style={styles.loading} />
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}
