import React from "react";

import { View, Image, Text } from "react-native";

import styles from "./styles";

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

export default OrganizationItem;
