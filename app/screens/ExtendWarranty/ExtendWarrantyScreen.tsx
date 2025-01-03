import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import { LinearGradient } from "expo-linear-gradient"; 
import { Dropdown } from "react-native-element-dropdown"; 

interface CategoryOption {
  id: string;
  label: string;
}

interface DeviceOption {
  id: string;
  name: string;
}

interface PriceRange {
  id: string;
  range: string;
}

interface PlanDuration {
  id: string;
  duration: string;
}

const ExtendWarrantyScreen: React.FC = () => {
  const router = useRouter();

  const [pinCode, setPinCode] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>(""); // Default to empty string
  const [selectedDevice, setSelectedDevice] = useState<string>(""); // Default to empty string
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>(""); // Default to empty string
  const [selectedPlanDuration, setSelectedPlanDuration] = useState<string>(""); // Default to empty string

  const { height } = Dimensions.get("window");

  const isSmallScreen = height < 850;

  const categories: CategoryOption[] = [
    {
      id: "1",
      label: "Gadgets",
    },
    {
      id: "2",
      label: "Electronics",
    },
  ];

  const devices: DeviceOption[] = [
    { id: "1", name: "Laptop" },
    { id: "2", name: "Mobile" },
    { id: "3", name: "Tablet" },
  ];

  const priceRanges: PriceRange[] = [
    { id: "1", range: "₹ 0 - 40000" },
    { id: "2", range: "₹ 40001 - 70000" },
    { id: "3", range: "₹ 70001 - 100000" },
  ];

  const planDurations: PlanDuration[] = [
    { id: "1", duration: "1 year" },
    { id: "2", duration: "2 years" },
    { id: "3", duration: "3 years" },
  ];

  const isFormValid = pinCode.length === 6 && selectedCategory && selectedDevice && selectedPriceRange && selectedPlanDuration;

  return (
    <View className="flex-1 bg-[#EDEDED]">
      <View className="flex-1 overflow-hidden flex-col w-full">
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
            <Text className="text-[18px] font-[PoppinsSemiBold] text-black">
              Extend Warranty
            </Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Ionicons name="close-sharp" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </LinearGradient>

        <ScrollView
          className={`flex-1 ${isSmallScreen ? "mt-5" : "mt-8"} w-full`}
        >
          <View className="flex flex-col w-full px-8 mt-2">
            <Image
              source={require("@/app/assets/images/warranty-logo.png")}
              className="h-16 self-center"
              accessibilityLabel="Warranty logo"
              resizeMode="contain"
            />

            <View className="mt-8">
              <Text className="text-[15px] font-[PoppinsSemiBold]">
                Serviceable Zone
              </Text>
              <Text className="mt-1 pr-4 text-[12px] text-[#828282] font-[PoppinsMedium]">
                Enter your pin code to check the GoWarranty service
                availability.
              </Text>
             
              <View >
                <KeyboardAvoidingView className="flex-row mt-4 mb-1 gap-4">
                  <TextInput
                    value={pinCode}
                    onChangeText={setPinCode}
                    placeholder="Enter a PIN code"
                    keyboardType="number-pad"
                    maxLength={6}
                    className="flex-[1.5] px-4 py-4 bg-white font-[PoppinsSemiBold] rounded-[2px] border-[1.5px] border-black"
                    accessibilityLabel="PIN code input"
                  />
                  <TouchableOpacity className="px-8 flex-1 py-4 bg-stone-950 rounded-[2px]">
                    <Text className="text-white text-[14px] text-center font-[PoppinsSemiBold]">
                      Check
                    </Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
              </View>
            </View>

            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select a category
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={categories}
                  value={selectedCategory}
                  onChange={(item) => setSelectedCategory(item.id)}
                  labelField="label"
                  valueField="id"
                  placeholder="e.g Laptop"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: "white",
                  }}
                  accessibilityLabel="Select category"
                />
              </View>
            </View>

            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select your device
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={devices}
                  value={selectedDevice}
                  onChange={(item) => setSelectedDevice(item.id)}
                  labelField="name"
                  valueField="id"
                  placeholder="Select device"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: "white",
                  }}
                  accessibilityLabel="Select device"
                />
              </View>
            </View>

            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select a price range
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={priceRanges}
                  value={selectedPriceRange}
                  onChange={(item) => setSelectedPriceRange(item.id)}
                  labelField="range"
                  valueField="id"
                  placeholder="Select price range"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: "white",
                    borderColor: "black",
                  }}
                  accessibilityLabel="Select price range"
                />
              </View>
            </View>

            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Plan duration
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={planDurations}
                  value={selectedPlanDuration}
                  onChange={(item) => setSelectedPlanDuration(item.id)}
                  labelField="duration"
                  valueField="id"
                  placeholder="Select plan duration"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: "white",
                  }}
                  accessibilityLabel="Select plan duration"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        className={`flex px-8 ${
          isSmallScreen ? "mt-3 mb-5" : "mt-5 mb-5"
        } flex-row w-full`}
      >
        <TouchableOpacity
          onPress={() =>
            isFormValid && router.navigate("/screens/ExtendWarranty/GoWarrantyFeatures")
          }
          className={`py-4 flex-1 bg-black rounded-[2px] border-[1.5px] ${!isFormValid ? 'opacity-50' : ''}`}
          disabled={!isFormValid}
        >
          <Text className={`text-white text-center text-[13px] font-[PoppinsSemiBold] ${!isFormValid ? 'text-gray-900' : ''}`}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ExtendWarrantyScreen;
