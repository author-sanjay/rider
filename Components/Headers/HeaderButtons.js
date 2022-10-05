import { View, Text } from "react-native";
import React, { useState } from "react";
import ButtonHeader from "./ButtonHeader";


const HeaderButtons = () => {
    
  const [activeTab, setactiveTab] = useState("Delivery");
  return (
    <View style={{ flexDirection: "row", alignSelf: "center"}}>
      <ButtonHeader text="Delivery" btncolor="black" textcolor="white" activeTab={activeTab} setactiveTab={setactiveTab} />
      <ButtonHeader text="Travel" btncolor="white" textcolor="black" activeTab={activeTab} setactiveTab={setactiveTab}/>
    </View>
  );
};

export default HeaderButtons;
