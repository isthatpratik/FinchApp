import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

// Define the type for params
type Params = {
  icon: any; // Add the icon to the params
  title: string;
  location: string;
  purchasedDate: string;
  warrantyText: string;
  warrantyColor: string;
  photos?: string[]; // optional array of photos
};

const AdditionalSellingCriteria = () => {
  const router = useRouter();
  const params = useLocalSearchParams<Params>(); // Use the Params type

  // Get the photos, ensuring it's an array
  const photos = Array.isArray(params.photos)
    ? params.photos
    : params.photos
    ? [params.photos]
    : [];

  // State for inputs
  const [sellingOption, setSellingOption] = useState("Pick-up");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isNegotiable, setIsNegotiable] = useState("Yes");
  const [description, setDescription] = useState("");

  // Access product details from params
  const { icon, title, location, purchasedDate, warrantyText, warrantyColor } =
    params;

  return (
    <View className="flex-1 bg-gray-100">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-8 px-8 py-6 mt-6">
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[20px] font-[PoppinsSemiBold]">
          Selling Criteria
        </Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-between">
        {/* Scrollable Content */}
        <ScrollView className="px-8">
          {/* Product Details */}
          <View className="flex-row items-start bg-white rounded-[2px] border-[1.5px] border-r-[3.5px] border-b-[3.5px] p-5 mb-6 shadow-md">
            <Image
              source={icon}
              className="w-14 h-14 mr-5"
              resizeMode="contain"
            />
            <View>
              <Text className="text-[14px] font-[PoppinsSemiBold]">
                {title}
              </Text>
              <Text className="text-[12px] font-[PoppinsMedium]">
                {location}
              </Text>
              <Text className="text-[12px] font-[PoppinsMedium]">
                <Text className="text-[12px] font-[PoppinsMedium]">
                  Purchased:
                </Text>
                <Text className="text-[12px] text-[#828282] font-[PoppinsMedium]">
                  {purchasedDate}
                </Text>
              </Text>
              <View className="flex-row items-center mt-2">
                <Text className="font-semibold">Warranty expires in {" "}</Text>
                <View
                  className="px-3 py-1 rounded-[2px] border-[1.5px]"
                  style={{ backgroundColor: warrantyColor }}
                >
                  <Text className="text-black text-[12px] font-[PoppinsMedium]">
                    {warrantyText}
                  </Text>
                </View>
              </View>
            </View>
          </View>

          {/* Selling Option */}
          <Text className="text-[16px] font-semibold text-gray-900 mb-2">
            Choose a selling option
          </Text>
          <View className="flex-row mb-4">
            {["Pick-up", "Delivery"].map((option) => (
              <TouchableOpacity
                key={option}
                className={`flex-1 p-3 mx-1 rounded-lg border ${
                  sellingOption === option
                    ? "bg-black"
                    : "bg-gray-200 border-gray-300"
                }`}
                onPress={() => setSellingOption(option)}
              >
                <Text
                  className={`text-center ${
                    sellingOption === option ? "text-white" : "text-black"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Add a Description */}
          <Text className="text-[16px] font-semibold text-gray-900 mb-2">
            Add a description (140 words)
          </Text>
          <TextInput
            placeholder="Type a description of your product"
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
            maxLength={140}
            className="border border-gray-300 p-3 rounded-lg bg-white mb-4 text-gray-800"
          />

          {/* Payment Method */}
          <Text className="text-[16px] font-semibold text-gray-900 mb-2">
            Preferred payment method
          </Text>
          <View className="flex-row mb-4">
            {["Cash", "Bank Transfer"].map((method) => (
              <TouchableOpacity
                key={method}
                className={`flex-1 p-3 mx-1 rounded-lg border ${
                  paymentMethod === method
                    ? "bg-black"
                    : "bg-gray-200 border-gray-300"
                }`}
                onPress={() => setPaymentMethod(method)}
              >
                <Text
                  className={`text-center ${
                    paymentMethod === method ? "text-white" : "text-black"
                  }`}
                >
                  {method}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Price Negotiable */}
          <Text className="text-[16px] font-semibold text-gray-900 mb-2">
            Is the price negotiable?
          </Text>
          <View className="flex-row mb-4">
            {["Yes", "No"].map((negotiable) => (
              <TouchableOpacity
                key={negotiable}
                className={`flex-1 p-3 mx-1 rounded-lg border ${
                  isNegotiable === negotiable
                    ? "bg-black"
                    : "bg-gray-200 border-gray-300"
                }`}
                onPress={() => setIsNegotiable(negotiable)}
              >
                <Text
                  className={`text-center ${
                    isNegotiable === negotiable ? "text-white" : "text-black"
                  }`}
                >
                  {negotiable}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Bottom Submit Button */}
        <View className="px-8 pb-4">
          <TouchableOpacity
            className="bg-black py-6 rounded-lg"
            onPress={() => console.log("Continue pressed")}
          >
            <Text className="text-white text-center font-[PoppinsSemiBold] text-[14px]">
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AdditionalSellingCriteria;
