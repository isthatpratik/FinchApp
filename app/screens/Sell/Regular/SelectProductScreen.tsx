import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";

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

// Mock product list
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

const SelectProductScreen: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelectedProduct((prev) => (prev === id ? null : id));
  };

  const renderProductCard = ({ item }: { item: Product }) => (
    <TouchableOpacity
      className={`flex-row items-center bg-white rounded-[2px] mb-6 mx-8 py-3.5 px-6 ${
        selectedProduct === item.id
          ? "border-[1.5px] border-r-[3.5px] border-b-[3.5px] border-black"
          : "border border-[#BDBDBD]"
      }`}
      onPress={() => handleSelect(item.id)}
    >
      <Image
        source={item.icon}
        className="w-16 h-16 mr-4"
        resizeMode="contain"
      />
      <View className="flex-1">
        <Text className="text-[14px] font-[PoppinsSemiBold]">{item.title}</Text>
        <Text className="text-gray-600 font-[PoppinsMedium] text-[12px]">
          {item.location}
        </Text>
        <Text className="text-gray-600 font-[PoppinsMedium] text-[12px]">
          Purchased: {item.purchasedDate}
        </Text>
        <Text className="text-gray-600 font-[PoppinsMedium] text-[12px]">
          Expected SP: {item.expectedSP}
        </Text>
        <View className="flex-row items-center mt-1">
          <Text className="font-[PoppinsMedium] text-[12px]">Warranty: </Text>
          <View
            className="px-2 py-1 border"
            style={{ backgroundColor: item.warranty.color }}
          >
            <Text className="text-black font-[PoppinsMedium] text-[12px]">
              {item.warranty.text}
            </Text>
          </View>
        </View>
      </View>

      {/* Ticked Checkbox */}
      {selectedProduct === item.id && (
        <View className="absolute top-2 right-2 p-2">
          <AntDesign name="checksquare" size={24} color="black" />
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      {/* Header */}
      <View className="flex-row justify-between items-center px-8 py-6 mt-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[20px] font-[PoppinsSemiBold]">
          Select a product
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
      />

      {/* Bottom Continue Button */}
      <View className="px-8 py-4">
        <TouchableOpacity
          className={`bg-black py-6 px-16 mt-2 rounded-[2px] ${
            selectedProduct ? "opacity-100" : "opacity-50"
          }`}
          onPress={() =>
            router.push({
              pathname: "/screens/Sell/Regular/SellingCriteria",
              params: { productId: selectedProduct },
            })
          }
          disabled={!selectedProduct}
        >
          <Text className="text-white text-center font-[PoppinsSemiBold] text-[13px]">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectProductScreen;
