import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative ">
      <Image source={{ uri: imageUrl }} className="h-20 w-20 " />
      <Text className="absolute bottom-0 left-1 text-white text-xs font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
