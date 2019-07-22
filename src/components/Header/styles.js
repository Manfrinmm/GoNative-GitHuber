import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 20 + getStatusBarHeight(),
    // paddingTop: getStatusBarHeight(),

    borderBottomWidth: 1,
    borderBottomColor: colors.ligther,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },

  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: "bold"
  },
  icon: {
    color: colors.darker
  }
});

export default styles;
