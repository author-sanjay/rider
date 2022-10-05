import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "./Searchbar/Searchbar";
import Map from "../Map/Map";
import PricingArea from "../Bids/PricingArea";

const Home = () => {
  return (
    <View>
      <View style={{ height: "70%" }}>
        <Map />
      </View>
      <View>
        <PricingArea />
      </View>
    </View>
  );
};

export default Home;
