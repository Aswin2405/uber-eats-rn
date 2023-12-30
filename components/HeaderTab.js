import * as React from 'react';
import { Text, View, StyleSheet, Image,SafeAreaView  } from 'react-native';

export default function HeaderTab() {
  return (
    <SafeAreaView style={{flexDirection:"row",alignItems:"center",marginLeft:"120px"}}>
    <View>
      <Text style={{backgroundColor:"black",color:"white",padding:"10px",borderRadius:90}}>
       Delivery
      </Text>
      </View>
        <View>
     <Text style={{backgroundColor:"white",color:"black",padding:"10px",borderRadius:90}}>
       Pickup
      </Text>
         </View>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
 
});
