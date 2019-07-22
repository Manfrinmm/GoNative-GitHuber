import React, { Component } from "react";
import api from "../../services/api";

import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  AsyncStorage
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

import Header from "../../components/Header";
import GitIssuesItem from "./GitIssuesItem";

export default class GitIssues extends Component {
  static navigationOptions = {
    header: <Header title="GitIssues" />
  };

  state = {
    repo: "",
    data: [],
    error: false,
    loading: false
  };

  async componentDidMount() {
    // await AsyncStorage.clear();
    const data = JSON.parse(await AsyncStorage.getItem("@githuber:repos"));
    if (!!data) this.setState({ data });
  }
  addRepo = async () => {
    const { repo, data } = this.state;

    this.setState({ loading: true });

    try {
      const response = await api.get(`/repos/${repo}`);

      const { id, name, organization } = response.data;

      const { login, avatar_url } = organization;
      const dados = { id, name, login, avatar_url };

      this.setState({
        data: [...data, dados],
        repo: "",
        loading: false
      });

      await AsyncStorage.setItem(
        "@githuber:repos",
        JSON.stringify([...data, dados])
      );
    } catch (error) {
      this.setState({ loading: false, error: true });
    }
  };

  renderItem = ({ item }) => <GitIssuesItem repo={item} />;

  renderList = () => {
    const { data } = this.state;
    return (
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
      />
    );
  };

  render() {
    const { loading, error, repo } = this.state;
    return (
      <View style={styles.container}>
        {error && <Text style={styles.error}>Repositório não encontrado</Text>}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicionar um novo repositório"
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            value={repo}
            onChangeText={text => this.setState({ repo: text })}
          />

          {loading ? (
            <ActivityIndicator size={20} />
          ) : (
            <TouchableOpacity onPress={this.addRepo}>
              <Icon name="plus" size={20} />
            </TouchableOpacity>
          )}
        </View>
        {this.renderList()}
      </View>
    );
  }
}
