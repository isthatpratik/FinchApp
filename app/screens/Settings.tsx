import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Settings = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showCurrencyPicker, setShowCurrencyPicker] = useState(false);
  const router = useRouter();

  const toggleSection = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <View className="flex-1">
      {/* Top Section */}
      <View className="bg-[#8FFF00] px-8 py-6">
        <View className="flex-row justify-between mt-4 items-center">
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Ionicons name="help-circle" size={28} color="black" />
        </View>
        <View className="items-center mt-6">
          <Image
            source={require("@/app/assets/images/finch-logo.png")}
            className="w-28 h-28 mb-6"
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Content Section */}
      <ScrollView className="flex-1">
        {/* First Four Rows */}
        <View className="bg-[#FFFFFF]">
          {/* Primary Currency */}
          <View className="flex-row items-center justify-between py-6 border-b-[1.5px] border-[#E0E0E0] px-8">
            <Text className="text-[15px] font-[PoppinsMedium] text-black">
              Primary Currency
            </Text>
            <TouchableOpacity
              onPress={() => setShowCurrencyPicker(!showCurrencyPicker)}
              className="flex-row items-center"
            >
              <Text
                className="text-[16px] font-[PoppinsSemiBold] text-black pr-2"
                style={{ paddingRight: 8 }} // Adds space between text and dropdown icon
              >
                {selectedCurrency}
              </Text>
              <Ionicons name="chevron-down" size={16} color="black" />
            </TouchableOpacity>
          </View>
          {/* Currency Picker Dropdown */}
          {showCurrencyPicker && (
            <View className="bg-gray-100 border-b border-[#E0E0E0] px-8 py-2">
              {["USD", "INR", "EUR"].map((currency, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedCurrency(currency);
                    setShowCurrencyPicker(false);
                  }}
                  className="py-2"
                >
                  <Text
                    className={`text-[15px] font-[PoppinsMedium] ${
                      selectedCurrency === currency
                        ? "text-black font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {currency}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          {/* Expandable Settings */}
          {[
            {
              label: "App permission settings",
              subSettings: ["Camera Access", "Location Access"],
            },
            {
              label: "Profile settings",
              subSettings: ["Edit Profile", "Change Password"],
            },
            {
              label: "Notification settings",
              subSettings: ["Email Alerts", "Push Notifications"],
            },
          ].map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                onPress={() => toggleSection(index)}
                className="flex-row justify-between items-center py-6 border-b-[1.5px] border-[#E0E0E0] px-8"
              >
                <Text className="text-[15px] font-[PoppinsMedium] text-black">
                  {item.label}
                </Text>
                <Ionicons
                  name={expanded === index ? "chevron-up" : "chevron-forward"}
                  size={16}
                  color="black"
                />
              </TouchableOpacity>

              {/* Subsettings */}
              {expanded === index && (
                <View className=" bg-gray-100">
                  {item.subSettings.map((subItem, subIndex) => (
                    <TouchableOpacity
                      key={subIndex}
                      className="py-6 px-8 border-b-[1.5px] border-gray-200"
                    >
                      <Text className="text-[15px] font-[PoppinsMedium] text-gray-700">
                        {subItem}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Bottom Four Rows */}
        <View className="bg-[#F5F5F5]">
          {[
            "About",
            "Provide Feedback",
            "Privacy Policy",
            "Terms & Conditions",
          ].map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => console.log(`${item} pressed`)}
              className="flex-row justify-between items-center py-6 border-b-[1.5px] border-[#E0E0E0] px-8"
            >
              <Text className="text-[15px] font-[PoppinsMedium] text-black">
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer */}
        <Text className="text-center text-gray-500 text-[12px] font-[PoppinsMedium] flex align-middle justify-between mt-2 py-6">
          Finch version 1.0 © 2020 Finch LLC.
        </Text>
      </ScrollView>
    </View>
  );
};

export default Settings;
