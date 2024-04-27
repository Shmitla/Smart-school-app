import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import loginStyles from "../css/login";

export default function Login({ navigation }) {
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: ""
  });

  const handleChange = (name, value) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleLogin = () => {
    console.log("Logging in with:", loginInfo);
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        style={styles.input}
        name="email"
        placeholder="Enter your Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => handleChange("email", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
        keyboardType="email-address"
      />
      <Input
        style={styles.input}
        name="password"
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => handleChange("password", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
        keyboardType="default"
        secureTextEntry={true}
      />
      <Text style={styles.forgotPassword} onPress={() => console.log("Forgot Password")}>
        Forgot Password?
      </Text>
      <Button
        size="lg"
        buttonStyle={styles.loginBtn}
        onPress={handleLogin}
        title="Login"
        titleStyle={styles.loginText}
      />
      <Text style={styles.registerText}>
        Don't have an account? 
        <Text style={styles.linkText} onPress={() => navigation.navigate("Register")}>
          Register
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
