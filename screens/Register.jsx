import React, { useState } from "react";
import { View, Image } from "react-native";
import { Input, Button, Text } from "@rneui/themed";
import registerStyles from "../css/register";

export default function Register({ navigation }) {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    school: "",
    image: null // For storing the selected image
  });

  const handleChange = (name, value) => {
    setRegisterInfo({ ...registerInfo, [name]: value });
  };

  const handleImageUpload = (image) => {
    setRegisterInfo({ ...registerInfo, image });
  };

  const handleRegister = () => {
    // Add your register logic here
    console.log("Registering with:", registerInfo);
    // Example navigation to Login screen after registration
    navigation.navigate("Login");
  };

  return (
    <View style={registerStyles.container}>
      <Input
        style={registerStyles.input}
        name="username"
        placeholder="Username"
        leftIcon={{ type: "font-awesome", name: "user" }}
        onChangeText={(value) => handleChange("username", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
      />
      <Input
        style={registerStyles.input}
        name="email"
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        onChangeText={(value) => handleChange("email", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
        keyboardType="email-address"
      />
      <Input
        style={registerStyles.input}
        name="password"
        placeholder="Password"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        onChangeText={(value) => handleChange("password", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
        secureTextEntry={true}
      />
      <Input
        style={registerStyles.input}
        name="phone"
        placeholder="Phone"
        leftIcon={{ type: "font-awesome", name: "phone" }}
        onChangeText={(value) => handleChange("phone", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
        keyboardType="phone-pad"
      />
      <Input
        style={registerStyles.input}
        name="school"
        placeholder="School"
        leftIcon={{ type: "font-awesome", name: "graduation-cap" }}
        onChangeText={(value) => handleChange("school", value)}
        inputStyle={{ paddingHorizontal: 10, color: "#000" }}
        placeholderTextColor="#000"
      />
      <Button
        title={registerInfo.image ? "Change Image" : "Upload Image"}
        onPress={() => console.log("Upload Image")} // Implement image upload logic here
        buttonStyle={registerStyles.uploadBtn}
      />
      <Button
        size="lg"
        buttonStyle={registerStyles.registerBtn}
        onPress={handleRegister}
        title="Register"
        titleStyle={registerStyles.registerText}
      />
    </View>
  );
}
