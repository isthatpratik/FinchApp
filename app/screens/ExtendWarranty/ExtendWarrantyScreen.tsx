import React, { useState } from "react";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { Dropdown } from 'react-native-element-dropdown'; // Import Dropdown

interface PinCodeInputProps {
  value: string;
  onChange: (value: string) => void;
}

interface CategoryOption {
  id: string;
  label: string;
  icon?: string;
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

const categories: CategoryOption[] = [
  {
    id: "1",
    label: "Gadgets",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e721925b0217249b57c2d6578e8c1e1f03e24f287e8dcf6e86edc054fcf3cf5c?placeholderIfAbsent=true&apiKey=d8aea8d380e243e29c03af727303bd58",
  },
  {
    id: "2",
    label: "Electronics",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e721925b0217249b57c2d6578e8c1e1f03e24f287e8dcf6e86edc054fcf3cf5c?placeholderIfAbsent=true&apiKey=d8aea8d380e243e29c03af727303bd58",
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

const ExtendWarrantyScreen = () => {
  const [pinCode, setPinCode] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("1");
  const [selectedDevice, setSelectedDevice] = useState<string>("1");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("2");
  const [selectedPlanDuration, setSelectedPlanDuration] = useState<string>("1");

  const router = useRouter();

  const handleCheckAvailability = () => {
    if (pinCode.length !== 6) {
      Alert.alert("Invalid PIN Code", "Please enter a valid 6-digit PIN code");
      return;
    }
    Alert.alert("Checking availability for PIN code: " + pinCode);
  };

  const handleContinue = () => {
    router.navigate("/screens/ExtendWarranty/GoWarrantyFeatures");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-200">
      <ScrollView>
        <View className="flex overflow-hidden flex-col w-full bg-[#EDEDED]">
          {/* Header with Linear Gradient */}
          <LinearGradient
            colors={["#8FFF00", "#00F0FF"]}
            start={{ x: 0.5, y: 0.92 }}
            className="py-2 border-b-2"
          >
            <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
              {/* Back Button */}
              <TouchableOpacity>
                <Ionicons
                  name="arrow-back"
                  size={24}
                  color="black"
                  onPress={() => router.back()}
                />
              </TouchableOpacity>
              <Text className="text-[20px] font-[PoppinsSemiBold] text-black">
                Extend Warranty
              </Text>
              {/* Menu Button */}
              <TouchableOpacity>
                <Ionicons
                  name="close-sharp"
                  size={24}
                  color="black"
                  onPress={() => router.back()}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>

          <View className="flex flex-col w-full px-8 mt-8">
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

              <View className="flex-row mt-4 mb-1 gap-4">
                <TextInput
                  value={pinCode}
                  onChangeText={setPinCode}
                  placeholder="Enter a PIN code"
                  keyboardType="number-pad"
                  maxLength={6}
                  className="flex-[1.5] px-4 py-4 bg-white font-[PoppinsSemiBold] rounded-[2px] border-[1.5px] border-black"
                  accessibilityLabel="PIN code input"
                />
                <TouchableOpacity
                  onPress={handleCheckAvailability}
                  className="px-8 flex-1 py-4 bg-stone-950 rounded-[2px]"
                  accessibilityLabel="Check availability"
                >
                  <Text className="text-white text-[14px] text-center font-[PoppinsSemiBold]">
                    Check
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Category Dropdown */}
            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select a category
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={categories}
                  value={selectedCategory}
                  onChange={item => setSelectedCategory(item.id)}
                  labelField="label"
                  valueField="id"
                  placeholder="Select category"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: 'white',
                  }}
                  accessibilityLabel="Select category"
                />
              </View>
            </View>

            {/* Device Dropdown */}
            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select your device
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={devices}
                  value={selectedDevice}
                  onChange={item => setSelectedDevice(item.id)}
                  labelField="name"
                  valueField="id"
                  placeholder="Select device"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: 'white',
                  }}
                  accessibilityLabel="Select device"
                />
              </View>
            </View>

            {/* Price Range Dropdown */}
            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Select a price range
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={priceRanges}
                  value={selectedPriceRange}
                  onChange={item => setSelectedPriceRange(item.id)}
                  labelField="range"
                  valueField="id"
                  placeholder="Select price range"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: 'white',
                    borderColor: 'black',
                  }}
                  accessibilityLabel="Select price range"
                />
              </View>
            </View>

            {/* Plan Duration Dropdown */}
            <View className="mt-4 mb-1">
              <Text className="text-[13px] font-[PoppinsSemiBold] mb-1">
                Plan duration
              </Text>
              <View className="border-[1.5px] border-black rounded-[2px] bg-white">
                <Dropdown
                  data={planDurations}
                  value={selectedPlanDuration}
                  onChange={item => setSelectedPlanDuration(item.id)}
                  labelField="duration"
                  valueField="id"
                  placeholder="Select plan duration"
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 14,
                    backgroundColor: 'white',
                  }}
                  accessibilityLabel="Select plan duration"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity
        onPress={handleContinue}
        className="mt-10 bg-stone-950 py-4 mx-8 mb-8 border-[1.5px] items-center"
        accessibilityLabel="Continue button"
      >
        <Text className="text-white text-[13px] font-[PoppinsSemiBold]">
          Continue
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ExtendWarrantyScreen;
