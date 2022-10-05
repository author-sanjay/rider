import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Travel",
    image:
      "https://img.freepik.com/free-vector/young-guy-travelling-by-taxi-around-city-marker-destination-baggage-flat-vector-illustration-transportation-urban-lifestyle_74855-8724.jpg",
    screen: "Home",
  },
  {
    id: "2",
    title: "Delivery",
    image:
      "https://img.freepik.com/free-vector/delivery-service-with-masks-concept_23-2148497067.jpg",
    screen: "Home",
  },
];
const NavOptions = () => {
    const navigation= useNavigation();
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity

        onPress={()=>navigation.navigate(item.screen)}
          style={{ paddingBottom: 8, paddingTop: 30, paddingLeft: 15 }}
        >
          <View>
            <Image
              style={{ width: 150, height: 150, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text
              style={{ alignSelf: "center", fontSize: 15, fontWeight: "300" }}
            >
              {item.title}
            </Text>
            <Icon
              style={{ backgroundColor:"black",borderRadius:40,paddingTop:2,width:35,height:30,alignSelf:"center",marginTop:10 }}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
