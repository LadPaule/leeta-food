import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { HomeModernIcon, XCircleIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";

const DevliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-[#00CCBB] flex-1 relative">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XCircleIcon size={35} color={"#fff"} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="mx-1">
              <Text className="text-lg text-gray-500">Estaimated Arrival</Text>
              <Text className="text-4xl font-bold">45 -90 min</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <View className="mr-2 mx-2">
            <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          </View>

          <Text className="my-3 ml-2 text-gray-500">
            Your Order is being delivered!
          </Text>
        </View>
      </SafeAreaView>
      {/* <MapView
        initialRegion={{
          latitude: restaurant?.lat,
          longitude: restaurant?.long,
          latitude: 0.005,
          longitude: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
      >
      <Marker />
      
      </MapView> */}
      <SafeAreaView className="bg-white flex-row items-center space-x-5 absolute bottom-0 w-full h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Sam boda</Text>
          <Text className="text-gray-400">Your Delivery Guy</Text>
        </View>
        <Text className="text-[#00CCBB] text-lg font-bold mr-5"> call</Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
          <HomeModernIcon color="#00ccbb" size={40} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default DevliveryScreen;
