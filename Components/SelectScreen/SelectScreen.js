import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NavOptions from "./NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { SearchBar } from "react-native-elements";
import Searchbar from "../Headers/Searchbar/Searchbar";

const SelectScreen = () => {
  return (
    <SafeAreaView>
      <View>
      
        <Text style={{fontSize:70,fontWeight:"200",marginLeft:50,marginTop:50}}>Rider</Text>
        <Text style={{fontWeight:"300", fontSize:17, marginLeft:50}}>The Rider & Price</Text>
        <Text style={{fontWeight:"300", fontSize:23, marginLeft:50,marginBottom:30}}>YOU CHOOSE</Text>
        <Searchbar text="From"/>
        <NavOptions/>
        
      </View>
    </SafeAreaView>
  );
};

export default SelectScreen;
