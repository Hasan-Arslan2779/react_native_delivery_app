import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function CategoryCard({ title, imgUrl }) {
  return (
    <TouchableOpacity className="relative mr-2">
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded" />
      <Text className="mt-2">{title}</Text>
    </TouchableOpacity>
  );
}
