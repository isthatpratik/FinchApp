import React from "react";
import { View, Image, Text, TouchableOpacity, ScrollView, Pressable, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const PriceSection: React.FC<{ amount: number; suffix: string }> = ({ amount, suffix }) => (
  <Pressable
    accessible={true}
    accessibilityLabel={`Price ${amount} ${suffix}`}
    accessibilityRole="button"
    className="flex-1 py-3 font-medium text-center bg-[#8FFF00]"
  >
    <View className="flex-row justify-center items-center">
      <Text className="text-[20px] text-black font-[PoppinsMedium]">
        ₹ {amount}
      </Text>
      <Text className="text-[12px] text-black ml-2">{suffix}</Text>
    </View>
  </Pressable>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <View className="flex mt-1 px-2 mb-2 flex-row items-start">
    <Text className="text-[14px] leading-tight text-black">{"\u25A0"}</Text>
    <Text className="text-[14px] font-[PoppinsMedium] leading-tight text-black ml-2 pr-6">
      {text}
    </Text>
  </View>
);

const GoWarrantyFeatures: React.FC = () => {
  const router = useRouter();
  const { height } = Dimensions.get("window");

  const isSmallScreen = height < 850;

  const features = [
    "Extends your manufacturer's warranty to make your air conditioner last longer.",
    "Extended warranty for all brands purchased in India.",
    "Covers malfunctions & breakdowns.",
    "Free at-home service.",
    "Repair or replacement guaranteed. If we cannot repair it in time, you get a free replacement.",
  ];

  const handleBuyNow = () => {
    router.navigate("/screens/ExtendWarranty/OrderSummary");
  };

  return (
    <SafeAreaView className="flex overflow-hidden flex-col h-full w-full bg-[#EDEDED]">
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.92 }}
        className="py-2 border-b-2"
      >
        <View
          className={`flex flex-row justify-between items-center px-8 ${
            isSmallScreen ? "py-4 mt-2" : "py-6 mt-2"
          }`}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] text-center font-[PoppinsSemiBold] text-black">
            GoWarranty Features
          </Text>
          <TouchableOpacity onPress={() => router.dismissTo("/screens/ProductWarrantyDetails")}>
            <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <ScrollView className={`flex-1 px-8 ${isSmallScreen ? "mt-5" : "mt-8"} w-full`}>
        <View className="space-y-2">
          {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
          ))}
        </View>

        <Image
          source={require("@/app/assets/images/go-warranty-features.png")}
          style={{
            width: "90%",
            aspectRatio: "1",
            height: "48%",
            alignSelf: "center",
            marginVertical: 32,
          }}
          accessible={true}
          accessibilityLabel="Warranty illustration"
          resizeMode="contain"
        />

        <Text className="text-center text-[12px] px-14 font-[PoppinsMedium] mt-2 text-stone-950">
          The plan only covers Laptop purchased on or after 29-Dec-2019
        </Text>
      </ScrollView>

      <View
        className={`flex px-8 ${isSmallScreen ? "mt-3 mb-5" : "mt-5 mb-5"} flex-row w-full`}
        accessible={true}
      >
        <PriceSection amount={380} suffix="/ - Only" />
        <TouchableOpacity
          onPress={handleBuyNow}
          className="py-4 flex-1 bg-black"
        >
          <Text className="text-white font-[PoppinsSemiBold] text-center text-[13px]">
            Buy now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default GoWarrantyFeatures;
