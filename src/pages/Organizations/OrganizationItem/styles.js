import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: "center",
    maxWidth: (metrics.screenWidth - 60) / 2
  },

  avatar: {
    width: 50,
    height: 50
  },

  title: {
    color: colors.darker,
    fontSize: 14,
    fontWeight: "bold",
    marginTop: metrics.baseMargin
  },

  infoContainer: {
    flexDirection: "row",
    marginTop: metrics.baseMargin
  },

  info: {
    flexDirection: "row",
    marginRight: metrics.baseMargin,
    alignItems: "center"
  },

  infoIcon: {
    color: colors.dark
  },

  infoText: {
    marginLeft: metrics.baseMargin / 2,
    fontSize: 15,
    color: colors.dark
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 44,
    paddingHorizontal: metrics.basePadding
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16
  }
});

export default styles;
