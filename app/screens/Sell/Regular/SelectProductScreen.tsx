import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

type Product = {
  id: string;
  icon: any;
  title: string;
  location: string;
  purchasedDate: string;
  expectedSP: string;
  warranty: {
    text: string;
    color: string;
  };
};

type SelectProductScreenProps = {
  navigation: StackNavigationProp<any, any>;
};

const products: Product[] = [
  {
    id: "1",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Smart TV",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$1200",
    warranty: { text: "18 months", color: "#38A169" },
  },
  {
    id: "2",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Refrigerator",
    location: "Kitchen",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$450",
    warranty: { text: "a week", color: "#DD6B20" },
  },
  {
    id: "3",
    icon: require("app/assets/images/icons/tv.png"),
    title: "Microwave",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$320",
    warranty: { text: "Warranty expired", color: "#E53E3E" },
  },
  {
    id: "4",
    icon: require("app/assets/images/icons/tv.png"),
    title: "HP Printer",
    location: "Living room",
    purchasedDate: "17 Aug 2020",
    expectedSP: "$280",
    warranty: { text: "No warranty", color: "#4A5568" },
  },
];

const SelectProductScreen: React.FC<SelectProductScreenProps> = ({
  navigation,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedProduct((prev) => (prev === id ? null : id)); // Toggle selection
  };

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      className={`flex-row items-center bg-white rounded-2 mb-6 mr-6 ml-6 p-6 shadow ${
        selectedProduct === item.id ? "border-2 border-black" : "border border-gray-200"
      }`}
      onPress={() => handleSelect(item.id)}
    >
      <Image source={item.icon} className="w-12 h-12 mr-4" resizeMode="contain"/>
      <View className="flex-1">
        <Text className="text-lg font-bold">{item.title}</Text>
        <Text className="text-gray-600">{item.location}</Text>
        <Text className="text-gray-600">Purchased: {item.purchasedDate}</Text>
        <Text className="text-gray-600">Expected SP: {item.expectedSP}</Text>
        <View className="flex-row items-center mt-1">
          <Text className="font-semibold">Warranty: </Text>
          <View
            className="rounded px-2 py-1 ml-2"
            style={{ backgroundColor: item.warranty.color }}
          >
            <Text className="text-white text-xs font-bold">{item.warranty.text}</Text>
          </View>
        </View>
      </View>

      {/* Ticked Checkbox at the top right */}
      {selectedProduct === item.id && (
        <View className="absolute top-2 right-2 p-2">
          <AntDesign name="checksquare" size={24} color="black" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <View className="flex-row justify-between items-center px-6 py-10">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-bold">Select a product</Text>
        <TouchableOpacity onPress={() => console.log("Close pressed")}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
      <TouchableOpacity
        className={`bg-black py-4 mx-4 rounded-[1] ${
          selectedProduct ? "opacity-100" : "opacity-50"
        }`}
        onPress={() => navigation.navigate("NextScreen")}
        disabled={!selectedProduct}
      >
        <Text className="text-white text-center">Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelectProductScreen;
