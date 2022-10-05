import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
  return (
    <View>
      <SafeAreaView>
        <Text style={{fontSize:20,alignSelf:"center", fontWeight:"300", marginTop:5}}>
          Rider
        </Text>
      </SafeAreaView>
    </View>
  );
};

export default Header;
