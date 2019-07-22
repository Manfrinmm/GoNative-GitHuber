import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";
import { getStatusBarHeight } from "react-native-status-bar-height";

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    height: 20 + getStatusBarHeight(),

    borderBottomWidth: 1,
    borderBottomColor: colors.ligther,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.basePadding
  },

  aba: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: metrics.basePadding / 2,
    backgroundColor: colors.dark,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin
  },

  abaText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default styles;
