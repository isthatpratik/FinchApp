import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

const TermsAndConditionsScreen = () => {
  const router = useRouter();

  const handleAccept = () => {
    console.log("Terms Accepted");
    router.push("/screens/MainDashboard");
  };

  const handleDecline = () => {
    console.log("Terms Declined");
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="w-full h-28 justify-center items-center border-b-[3px] border-black">
        <View className="px-4 py-4 absolute top-0 left-0 w-full h-[95%] bg-[#FFEE00]" />
        <LinearGradient
          colors={["#FFEE00", "#00F0FF"]}
          className="absolute bottom-0 left-0 w-full h-[8%]"
        />
        <Text
          key="terms-header"
          className="font-[PoppinsSemiBold] text-[20px] text-black absolute"
        >
          Terms & Conditions
        </Text>
      </View>

      {/* Content */}
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        className="flex-1 px-10 py-10"
      >
        {[...Array(5)].map((_, index) => (
          <View
            key={index}
            className="flex-row self-center mb-4 gap-2"
          >
            {/* Bullet */}
            <Text className="font-[PoppinsMedium] text-[14px] text-black self-start leading-tight">{"\u25A0"}</Text>
            {/* Text */}
            <Text className="font-[PoppinsMedium] text-[14px] text-black leading-tight">
              Venenatis quam porttitor at ornare scelerisque ac ut enim. Maecenas iaculis arcu, egestas suspendisse porttitor pretium tincidunt sed. Dignissim bibendum malesuada tortor risus lacinia. Consequat morbi id velit quis ut pretium.
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View className="font-[Poppins-Medium] flex-row justify-between items-center px-10 py-6  w-full bg-white absolute bottom-0">
        <TouchableOpacity
          className="flex-1 bg-white border-none py-4 items-center justify-center mr-2"
          onPress={handleDecline}
        >
          <Text className="text-black font-semibold underline">Decline</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-1 bg-[#0F0F0F] py-4 items-center justify-center ml-2 rounded-[2]"
          onPress={handleAccept}
        >
          <Text className="text-white font-semibold">Accept</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TermsAndConditionsScreen;
