import { ScrollView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { sanityClient, urlFor } from "../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
    >
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imageUrl={urlFor(category.image).width(300).url()}
          title={category.name}
        />
      ))}
      {/* category card */}
    </ScrollView>
  );
};

export default Categories;
