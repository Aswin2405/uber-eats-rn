import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/shopping-bag"),
    text: "Pick-up",
  },
  {
    image: require("../assets/soft-drinks.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../assets/bakery-items"),
    text: "Bakery Items",
  },
  {
    // image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    // image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    // image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    // image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
      }}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map(({image,text}, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}