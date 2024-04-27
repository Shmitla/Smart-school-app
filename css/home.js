import { StyleSheet } from "react-native";

const homeStyles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fefee2"
  },
  minText: {
    fontSize: 40,
    color: "#ffffff",
    fontWeight: "bold",
    paddingVertical: 20
  },
  logiBnt: {
    fontSize: 20,
    fontWeight: '600',
    width: 200,
    borderRadius: 20
  }
});

export default homeStyles;
