import * as React from 'react';
import { Text, View, StyleSheet, Image,SafeAreaView,ScrollView } from 'react-native';
import HeaderTab from "./HeaderTab"
import Search from "./Search"
import Categories from "./Categories"
export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{backgroundColor:"white"}}>
     <HeaderTab />
     <Search />
    </View>
    <View>
    <Categories />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
});
