import { StyleSheet } from "react-native";
import { colors, metrics } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.ligther
  },
  SubContainer: {
    flex: 1,
    backgroundColor: colors.ligther,
    // paddingBottom: metrics.basePadding,
    margin: metrics.baseMargin * 2
  },
  loading: {
    marginTop: metrics.baseMargin * 5
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
  },

  abaTextActi: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white
  }
});

export default styles;
