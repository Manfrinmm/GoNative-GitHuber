import { StyleSheet } from "react-native";
import { colors, metrics } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.white,
    padding: metrics.basePadding / 2,
    margin: metrics.baseMargin,
    justifyContent: "space-between",
    flexDirection: "row",
    borderRadius: metrics.baseRadius * 2
  },
  SubContainer: {
    flex: 1,
    flexDirection: "row"
  },

  info: {
    flexDirection: "column",
    alignItems: "flex-start"
  },

  avatar: {
    marginRight: metrics.baseMargin,
    borderRadius: 25,
    height: 50,
    width: 50
  },

  title: {
    // textAlign: "center",
    color: colors.black,
    fontSize: 16,
    fontWeight: "bold"
  },

  login: {
    // textAlign: "center",
    // marginTop: metrics.baseMargin,
    fontSize: 15,
    color: colors.darkTransparent,
    fontWeight: "100"
    // lineHeight: 21
  },

  button: {
    backgroundColor: colors.primary,
    // borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin
  }
});

export default styles;
