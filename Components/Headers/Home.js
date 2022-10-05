import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./Searchbar/Searchbar";
import Map from "../Map/Map";
import PricingArea from "../Bids/PricingArea";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateTo from "../Bids/NavigateTo";
import tw from "tailwind-react-native-classnames";


const Home = () => {
  const Stack= createStackNavigator();
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
      <Stack.Navigator>
          <Stack.Screen
            name="Navgatecard"
            component={NavigateTo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="To"
            component={NavigateTo}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default Home;
