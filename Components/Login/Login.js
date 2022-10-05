import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginButton from "./LoginButton";

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 45,
            marginTop: 30,
            fontWeight: "600",
          }}
        >
          Rider
        </Text>
        <Text
          style={{
            alignSelf: "center",
            fontSize: 20,
            marginTop: 0,
            fontWeight: "200",
          }}
        >
          The Rider and Price you Choose
        </Text>
        <Image
          style={{ width: 350, height: 350 }}
          source={{
            uri: "https://img.freepik.com/free-vector/carsharing-service-concept-illustration_335657-5363.jpg",
          }}
        />
        <Text
          style={{
            alignSelf: "center",
            fontSize: 35,
            marginTop: 0,
            fontWeight: "200",
          }}
        >
          Sign In
        </Text>
        <LoginButton/>
      </View>
    </SafeAreaView>
  );
};

export default Login;
