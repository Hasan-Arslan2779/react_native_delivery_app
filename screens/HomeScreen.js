import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
// hero icons
import {
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassCircleIcon,
} from "react-native-heroicons/solid";
import { MagnifyingGlassIcon, UserIcon } from "react-native-heroicons/micro";
import Categories from "../components/Categories";
export default function HomeScreen({ navigation }) {
  //
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className=" mt-10 bg-white pt-5">
      {/* Header */}
      <View className=" flex-row pb-3  items-center mx-4 space-x-2 ">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-7 w-7 rounded-full bg-gray-300 p-4"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Delivery Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color={"#00CCBB"} />
          </Text>
        </View>
        <UserIcon size={35} color={"#00CCBB"} />
      </View>
      {/* Search */}

      <View className=" flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 rounded-full space-x-2 bg-gray-200  p-3">
          <MagnifyingGlassIcon size={25} color={"gray"} />
          <TextInput placeholder="Search" />
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB" />
      </View>
      {/* Body */}
      <ScrollView className="bg-gray-100 ">
        {/* Categories */}
        <Categories />
        {/*Featured rows  */}
      </ScrollView>
    </SafeAreaView>
  );
}
