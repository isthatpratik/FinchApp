import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions } from "react-native";
import { useRouter } from "expo-router"; // For navigation
import Ionicons from "@expo/vector-icons/Ionicons"; // Import Ionicons
import CustomCheckBox from "../components/CustomCheckBox";
import { LinearGradient } from "expo-linear-gradient";

const ProfilePage = () => {
  const { height, width } = Dimensions.get("window"); 
  const [isChecked, setIsChecked] = useState(false);
  const [rating, setRating] = useState(3);
  const router = useRouter();
  const badges = [
    {
      id: 1,
      title: "Go Getter",
      image: require("../assets/images/go-getter-badge.png"),
    },
    {
      id: 2,
      title: "Explorer",
      image: require("../assets/images/explorer-badge.png"),
    },
    {
      id: 3,
      title: "Intern Badge",
      image: require("../assets/images/intern-badge.png"),
    },
    {
      id: 4,
      title: "Deal Broker",
      image: require("../assets/images/upcoming-badge.png"),
    },
  ];

  const isSmallScreen = height < 850;  // You can adjust this threshold based on your needs

  return (
    <View className="flex-1 overflow-hidden">
      {/* Top Section (Green Background) */}
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.97 }}
        className="py-2 border-b-2"
      >
        <View className=" px-10 py-6 mt-2 w-full h-[52%]">
          <View className="flex-row justify-between">
            {/* Profile Info */}
            <View className="flex-row items-center">
              <Image
                source={require("../assets/images/john-profile.png")}
                style={{ width: isSmallScreen ? 60 : 70, height: isSmallScreen ? 60 : 70, marginRight: 16 }}
                resizeMode="contain"
              />
              <View className="flex-col items-start">
                <View className="flex-row">
                  <Text className="text-[20px] font-[PoppinsSemiBold] text-black">
                    Welcome,{" "}
                  </Text>
                  <Text className="text-[20px] font-[PoppinsBold]">John!</Text>
                </View>
                <View className="flex-row items-center mt-1">
                  <Text className="text-[14px] font-[PoppinsMedium] text-black">
                    Log out
                  </Text>
                  <Image
                    source={require("../assets/images/logout.png")}
                    className="w-5 h-5 ml-2"
                  />
                </View>
              </View>
            </View>

            {/* Cross Button */}
            <TouchableOpacity
              className="top-1"
              onPress={() => router.back()}
              accessible
              accessibilityLabel="Close profile and go back to dashboard"
            >
              <Ionicons name="close-sharp" size={28} color="#000" />
            </TouchableOpacity>
          </View>

          {/* Rating Section */}
          <Text className="text-base mt-5 mb-2 text-center font-[PoppinsMedium]">
            Rating
          </Text>
          <View className="flex-row justify-center mb-3">
            <View className="bg-white p-3 flex-row shadow-md rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px]">
              {Array.from({ length: 5 }).map((_, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => setRating(index + 1)}
                  accessible
                  accessibilityLabel={`Rate ${index + 1} star${
                    index === 0 ? "" : "s"
                  }`}
                >
                  <Image
                    source={
                      index < rating
                        ? require("../assets/images/star-filled.png")
                        : require("../assets/images/star-empty.png")
                    }
                    className="w-6 h-6 mr-1"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Statistics Section */}
          <View className="flex-row flex-wrap justify-between">
            {[
              { label: "Products", value: 1 },
              { label: "Current Value", value: "$1200" },
              { label: "Products Sold", value: 1 },
              { label: "Products Bought", value: 1 },
            ].map((stat, idx) => (
              <View
                key={idx}
                className="w-[46%] bg-white px-4 py-3 rounded-[2px] border-[1.5px] border-b-[3.5px] border-r-[3.5px] mb-2 shadow-sm mt-2"
              >
                <Text className="font-[PoppinsMedium] text-[12px]">{stat.label}</Text>
                <Text className="font-[PoppinsSemiBold] text-[20px]">{stat.value}</Text>
              </View>
            ))}
          </View>

          {/* Monthly Report Opt-In */}
          <View className="mt-3 self-center">
            <CustomCheckBox
              title="Opt to get a monthly asset report"
              checked={isChecked}
              onPress={() => setIsChecked(!isChecked)}
            />
          </View>
        </View>
      </LinearGradient>

      {/* Bottom Section (Badges) */}
      <View className="bg-white flex-1">
        <Text className="text-[20px] text-center font-[PoppinsBold] pt-3">Badges</Text>
        <View className="flex-row flex-wrap justify-between px-4">
          {badges.map((badge) => (
            <View
              key={badge.id}
              className="w-[50%] h-[50%] justify-center items-center"
            >
              <Image
                source={badge.image}
                style={{
                  width: isSmallScreen ? 120 : 120, 
                  height: isSmallScreen ? 100 : 110
                }}
                resizeMode="contain"
              />
              <Text className="text-[12px] font-[PoppinsSemiBold] mt-1 text-center">
                {badge.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;
