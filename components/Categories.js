import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
export default function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="testing" />
    </ScrollView>
  );
}
