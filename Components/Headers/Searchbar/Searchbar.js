import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";

const Searchbar = (props) => {
    

    return (
    <View style={{ marginTop: 5,marginLeft:5,marginRight:5, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
    query={{
        key:"AIzaSyDJCKYopkko46InvgiAqP2JiQgwkVqEflA",
        language:"en",
    }}
    onPress={(data,details=null)=>{
        console.log(data);
        console.log(details);
    }}
      nearbyPlacesAPI="GooglePlacesSearch"
      debounce={400}
      
        placeholder={props.text}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
          },
        }}

        
        renderLeftButton={() => (
          <View style={{ marginLeft: 15 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={{marginRight:15}}>
            <Text>Search</Text>
          </View>
        )}
      />
      
    </View>
  );
};

export default Searchbar;
