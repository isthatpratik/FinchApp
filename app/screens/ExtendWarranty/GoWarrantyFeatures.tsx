import * as React from "react";
import { View, Image, Text, TouchableOpacity, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { useRouter } from 'expo-router';

interface PriceProps {
  amount: number;
  suffix: string;
  onPress: () => void;
}

const PriceSection: React.FC<PriceProps> = ({ amount, suffix, onPress }) => (
  <Pressable
    onPress={onPress}
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

const GoWarrantyFeatures: React.FC = () => {
    const router = useRouter();

  const features = [
    "Extends your manufacturer's warranty to make your air conditioner last longer.",
    "Extended warranty for all brands purchased in India.",
    "Covers malfunctions & breakdowns.",
    "Free at-home service.",
    "Repair or replacement guaranteed. If we cannot repair it in time, you get a free replacement.",
  ];

  const handleBuyNow = () => {
    router.navigate("/screens/ExtendWarranty/OrderSummary");
  }

  const handlePricePress = React.useCallback(() => {
    // Handle price section press
  }, []);

  return (
    <View className="flex overflow-hidden flex-col h-full w-full bg-[#EDEDED]">
      {/* Header with Linear Gradient */}
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.92 }}
        className="py-2 border-b-2"
      >
        <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
          {/* Back Button */}
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] text-center font-[PoppinsSemiBold] text-black">
            GoWarranty Features
          </Text>
          {/* Menu Button */}
          <TouchableOpacity onPress={() => router.dismissTo("/screens/MainDashboard")}>
            <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Main Content */}
      <View className="flex flex-col px-8 mt-8 w-full">
        {/* Feature list with square bullets aligned to the left */}
        <View className="space-y-2">
          {features.map((feature, index) => (
            <View
              key={index}
              className="flex mt-1 px-2 mb-2 flex-row items-start"
            >
              <Text className="text-[14px] leading-tight text-black">
                {"\u25A0"}
              </Text>
              <Text className="text-[14px] font-[PoppinsMedium] leading-tight text-black ml-2 pr-6">
                {feature}
              </Text>
            </View>
          ))}
        </View>

        <Image
          source={require("@/app/assets/images/go-warranty-features.png")}
          style={{
            width: "90%",
            height: "auto",
            aspectRatio: 1, // Ensures the image maintains its aspect ratio
            alignSelf: "center",
            marginVertical: 32, // Adds consistent spacing above and below
          }}
          accessible={true}
          accessibilityLabel="Warranty illustration"
          resizeMode="contain"
        />

        <View
          className="self-center mt-2 text-center text-stone-950"
          accessible={true}
          accessibilityRole="text"
        >
          <Text className="text-center text-[12px] px-14 font-[PoppinsMedium]">
            The plan only covers Laptop purchased on or after 29-Dec-2019
          </Text>
        </View>

        
      </View>
      <View className="flex px-8 mt-5 flex-row w-full" accessible={true}>
          <PriceSection
            amount={380}
            suffix="/ - Only"
            onPress={handlePricePress}
          />
          <TouchableOpacity
            onPress={handleBuyNow}
            accessible={true}
            accessibilityLabel="Buy now button"
            accessibilityRole="button"
            className="py-4 flex-1 bg-black"
          >
            <Text className="text-white font-[PoppinsSemiBold] text-center text-[13px]">
              Buy now
            </Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

export default GoWarrantyFeatures;
