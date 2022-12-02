import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center">
      <Animatable.Image source={require("../assets/new-loader.gif")} />
      <Animatable.Text className="text-green-600 text-md font-semibold">
        Waiting for the Restaurant to accept your order!
      </Animatable.Text>
      <Progress.CircleSnail color={["red", "green", "blue"]} />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
