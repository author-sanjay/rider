import { View, Text } from 'react-native'
import React from 'react'
import MapView,{Marker} from 'react-native-maps'

const Map = () => {
    // React.useEffect(()=>{
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         console.log(position)
    //     })
    // },[])
  return (
    <View>
        <MapView
        style={{width:"100%",height:"100%"}}
          
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
    <Marker
    coordinate={{
      latitude:37.78825,
     longitude: -122.4324
    }}
    />
  </MapView>
    </View>
  )
}

export default Map