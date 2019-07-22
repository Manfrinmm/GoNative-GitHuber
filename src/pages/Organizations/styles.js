import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther
  },

  loading: {
    marginTop: metrics.baseMargin * 2
  },

  columnWrapper: {
    marginHorizontal: metrics.baseMargin * 2,
    justifyContent: "space-between"
  },

  //n faz parte
  title: {
    // color: colors.white,
    fontSize: 14,
    fontWeight: "bold"
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
