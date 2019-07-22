import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding,
    margin: metrics.baseMargin,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: metrics.baseRadius
  },

  info: {
    flexDirection: "row"
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: metrics.borderRadius
  },

  infoRepo: {
    flexDirection: "column"
  },

  title: {
    textAlign: "center",
    color: colors.white,
    fontSize: 24,
    fontWeight: "bold"
  },

  text: {
    textAlign: "center",
    marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.ligther,
    lineHeight: 21
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin
  }
});

export default styles;
