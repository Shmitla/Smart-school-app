import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fefee2",
    padding: 20
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    marginBottom: 15
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 15,
    color: "#4169e1",
    fontSize: 16
  },
  loginBtn: {
    width: "100%",
    borderRadius: 20,
    backgroundColor: "#800080",
    marginTop: 20,
    marginBottom: 10
  },
  loginText: {
    fontSize: 20,
    textAlign: "center" // Center the text within the button
  },
  registerText: {
    marginTop: 10,
    textAlign: "center"
  },
  linkText: {
    color: "#4169e1",
    fontSize: 16
  }
});
