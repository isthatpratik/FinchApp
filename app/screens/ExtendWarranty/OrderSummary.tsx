import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { useRouter } from "expo-router";

const dynamicData = {
  device: "Laptop",
  priceRange: "₹ 40001 - 70000",
  planDuration: "2 years",
  amount: "₹ 2500",
};

const OrderSummary = () => {
  const router = useRouter();

  return (
    <View className="flex overflow-hidden">
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.92 }}
        className="py-2 border-b-2"
      >
        <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back-sharp" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[PoppinsSemiBold]">
            Order Summary
          </Text>
          <TouchableOpacity>
            <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View className="px-8 mt-2">
        <Text className="text-[12px] font-[PoppinsMedium] text-[#0F0F0F] mt-6 mb-2 w-[75%]">
          Extended warranty for all brands purchased in India.
        </Text>

        <View className="border overflow-hidden mt-4 rounded-[1px]">
          <View className="flex flex-row border-b">
            <View className="flex-1 p-4 border-r bg-[#00F0FF]">
              <Text className="text-[12px] px-4 font-[PoppinsSemiBold]">Device</Text>
            </View>
            <View className="flex-1 p-4 bg-[#FFEE00]">
              <Text className="text-[12px] px-4 font-[PoppinsMedium]">{dynamicData.device}</Text>
            </View>
          </View>

          <View className="flex flex-row border-b ">
            <View className="flex-1 p-4 border-r bg-[#00F0FF]">
              <Text className="text-[12px] px-4 font-[PoppinsSemiBold]">Price Range</Text>
            </View>
            <View className="flex-1 p-4 bg-[#FFEE00]">
              <Text className="text-[12px] px-4 font-[PoppinsMedium]">{dynamicData.priceRange}</Text>
            </View>
          </View>

          <View className="flex flex-row border-b">
            <View className="flex-1 p-4 border-r bg-[#00F0FF]">
              <Text className="text-[12px] px-4 font-[PoppinsSemiBold]">Plan Duration</Text>
            </View>
            <View className="flex-1 p-4 bg-[#FFEE00]">
              <Text className="text-[12px] px-4 font-[PoppinsMedium]">{dynamicData.planDuration}</Text>
            </View>
          </View>

          <View className="flex flex-row border-b-[0.5px]">
            <View className="flex-1 p-4 border-r bg-[#00F0FF]">
              <Text className="text-[12px] px-4 font-[PoppinsSemiBold]">Amount</Text>
            </View>
            <View className="flex-1 p-4 bg-[#FFEE00]">
              <Text className="text-[12px] px-4 font-[PoppinsMedium]">{dynamicData.amount}</Text>
            </View>
          </View>
        </View>

        <View className="mt-6">
            <Text className="font-[PoppinsSemiBold] text-[14px]">Have a discount coupon?</Text>
            
            <View>
                
            </View>
        </View>
      </View>
    </View>
  );
};

export default OrderSummary;
