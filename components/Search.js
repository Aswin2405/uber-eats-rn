import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
export default function Search() {
  return (
 <View style={{ marginTop: 15, flexDirection: "row" }}>
    <GooglePlacesAutocomplete
    styles={{textInput:{
backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
            outline:"none",
            alignItems:"center"
    },textInputContainer:{
backgroundColor: "#eee",
            borderRadius: 50,
 flexDirection: "row",
            alignItems: "center",
            marginRight: 3,
            marginLeft:3
    }}}
    renderLeftButton={()=>(
      <View style={{ marginLeft: 5,marginBottom:-6}} >
       <Ionicons name="location-sharp" size={24} />
      </View>
    )}
    renderRightButton={()=>(
      <View style={{flexDirection:"row",alignItems:"center",backgroundColor:"white",borderRadius:20,padding:10,marginRight:8}}>
        <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
      </View>
    )}
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data.description);
      }}
      query={{
        key: "AIzaSyATiAqIXBARofRD2apZcPQ1eEWZPH4fPV4",
        language: 'en',
      }}
    />
 </View>
  )
}

const styles = StyleSheet.create({
  
});
