import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther,
    paddingBottom: metrics.basePadding,
    justifyContent: "center"
    // alignItems: "stretch"
  },
  loading: {
    marginTop: metrics.baseMargin * 2
  },

  form: {
    marginTop: metrics.baseMargin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: metrics.basePadding
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    color: colors.darker,
    flex: 1,
    fontSize: 14,
    marginRight: metrics.baseMargin,
    padding: metrics.basePadding / 2
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

  error: {
    color: colors.danger,
    textAlign: "center",
    marginTop: metrics.baseMargin
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
