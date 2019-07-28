import "./config/ReactotronConfig";

import React, { Component } from "react";
import { AsyncStorage } from "react-native";

import createNavigator from "./routes";

import CodePush from "react-native-code-push";
import OneSignal from "react-native-onesignal";

class App extends Component {
  constructor(props) {
    super(props);

    OneSignal.init("b6dc5aee-a10e-4900-b490-991bed198d36");
    OneSignal.addEventListener("received", this.onReceive);
    OneSignal.addEventListener("opened", this.onOpened);
    OneSignal.addEventListener("ids", this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener("received", this.onReceive);
    OneSignal.removeEventListener("opened", this.onOpened);
    OneSignal.removeEventListener("ids", this.onIds);
  }

  //usuario recebe uma notifcação quando a aplicação estiver aberta
  onReceive = data => {
    console.tron.log(data);
  };

  //quando clica na notificação com app fechado
  onOpened = notification => {};

  //quando o usuario faz um registro  no serviço de notificação, geralmente usado para relacionar usuario
  onIds = id => {};

  state = {
    userChecked: false,
    userLogged: false
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem("@githuber:username");

    this.setState({ userChecked: true, userLogged: !!username });
  }

  render() {
    const { userChecked, userLogged } = this.state;

    // if (!userChecked) return null;

    const Routes = createNavigator(userLogged);

    return <Routes />;
  }
}

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME
})(App);
