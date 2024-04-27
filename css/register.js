import { StyleSheet } from "react-native";

const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefee2",
    padding: 20
  },
  input: {
    width: "100%",
    marginBottom: 15
  },
  uploadBtn: {
    backgroundColor: "#FFA500", // Orange color for the upload button
    marginBottom: 15
  },
  registerBtn: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#4169e1",
    marginTop: 20
  },
  registerText: {
    fontSize: 20,
    textAlign: "center" // Center the text within the button
  }
});

export default registerStyles;
