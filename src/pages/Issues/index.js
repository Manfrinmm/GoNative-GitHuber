import React, { Component } from "react";
import api from "../../services/api";

import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity
} from "react-native";

import styles from "./styles";
import IssuesItem from "./IssuesItem";
import Filtro from "../../components/Filtro";
export default class Issues extends Component {
  static navigationOptions = {
    title: "login"
  };

  state = {
    data: [],
    loading: false,
    filtro: "all"
  };
  async componentDidMount() {
    // this.setState({ loading: true });
    // // const response = await api.get(`/repos/${login}/${name}/issues`);
    // const { data } = await api.get(`/repos/rocketseat/unform/issues`);

    // this.setState({
    //   data,
    //   loading: false
    // });
    this.filterIssues();
  }

  renderList = () => {
    const { data } = this.state;

    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
      />
    );
  };

  renderListItem = ({ item }) => <IssuesItem item={item} />;

  filterIssues = async (filter = "all") => {
    this.setState({ loading: true, filtro: filter });
    const login = this.props.navigation.getParam("login");
    const name = this.props.navigation.getParam("name");

    const { data } = await api.get(
      `/repos/${login}/${name}/issues?state=${filter}`
    );

    this.setState({
      data,
      loading: false
    });
  };

  render() {
    const { loading, filtro } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.SubContainer}>
          <View style={styles.aba}>
            <TouchableOpacity onPress={() => this.filterIssues("all")}>
              <Text
                style={filtro !== "all" ? styles.abaText : styles.abaTextActi}
              >
                Todas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.filterIssues("open")}>
              <Text
                style={filtro !== "open" ? styles.abaText : styles.abaTextActi}
              >
                Abertas
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.filterIssues("closed")}>
              <Text
                style={
                  filtro !== "closed" ? styles.abaText : styles.abaTextActi
                }
              >
                Fechadas
              </Text>
            </TouchableOpacity>
          </View>
          {loading ? (
            <ActivityIndicator size={50} style={styles.loading} />
          ) : (
            this.renderList()
          )}
        </View>
      </View>
    );
  }
}
