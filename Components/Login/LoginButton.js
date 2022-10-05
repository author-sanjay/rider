import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const LoginButton = (props) => {
  return (
    <>
      <TouchableOpacity
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 10 }}
      >
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: "https://assets.materialup.com/uploads/8738f55d-547d-4667-91f6-2ce758957d10/preview.png",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "200", marginTop: 20 }}>
          Sign In With Google
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginButton;
