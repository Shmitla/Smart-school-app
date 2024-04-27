import React from "react";
import {  ImageBackground, Text, View, Image } from "react-native";
import homeStyles from "../css/home";
import { Button } from "@rneui/themed";
import logo from "../assets/logo.png";

export default function Home({ navigation }) {
  return (
    <ImageBackground style={homeStyles.container}>
      <Image source={logo}></Image>
      <Text style={homeStyles.minText}>Welcome to Schooli for school Management System</Text>
      <Text style={homeStyles.maxText}>Streamline school management, class organization, and student editing in the institute. Seamlessly track attendance, assess performance, provide feedback, access records, view marks, and communicate effortlessly</Text>
      <Button
        size="lg"
        buttonStyle={homeStyles.logiBnt}
        onPress={() => navigation.navigate("Login")}
        titleStyle={{
            fontSize :25,
        }}
      >
        Login
      </Button>
    </ImageBackground>
  );
}
