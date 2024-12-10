import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AddProductDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    purchasePrice: "",
    currency: "USD",
    productCategory: "",
    productName: "",
    brandName: "",
    serialNumber: "",
    modelNumber: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const navigateToDashboard = () => {
    router.push("/screens/MainDashboard");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#EDEDED]">
      {/* Header */}
      <LinearGradient
        colors={["#00F0FF", "#FFEE00"]}
        start={{ x: 0.5, y: 0.9 }}
        className="p-4 border-b-2"
      >
        <View className="flex-row items-center justify-between px-4 py-3">
          <Ionicons
            name="arrow-back"
            size={25}
            color="#000"
            onPress={navigateToDashboard}
          />
          <Text className="text-[20px] sm:text-[16px] font-[Poppins-SemiBold] text-black">
            Product Details
          </Text>
          <Ionicons
            name="close"
            size={25}
            color="#000"
            onPress={navigateToDashboard}
          />
        </View>
      </LinearGradient>

      {/* Form */}
      <ScrollView contentContainerStyle={{ paddingHorizontal: 16 }}>
        <View className="mt-4 w-[90%] self-center">
          {/* Purchase Price */}
          <Text className="text-center text-[14px] sm:text-xs font-[Poppins-SemiBold] text-black mb-1">
            Purchase Price
          </Text>
          <View className="flex-row items-center justify-between border-b-2 border-black mb-6 w-[80%] self-center">
            <TextInput
              className="flex-1 text-[20px] sm:text-base text-black font-[Poppins-SemiBold] text-center"
              placeholder="2000.00"
              keyboardType="numeric"
              value={formData.purchasePrice}
              onChangeText={(text) => handleInputChange("purchasePrice", text)}
            />
            <View className="flex-1 text-[14px]">
              <Picker
                selectedValue={formData.currency}
                style={{ backgroundColor: "transparent", width: "90%" }}
                onValueChange={(itemValue: string) =>
                  handleInputChange("currency", itemValue)
                }
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="INR" value="INR" />
              </Picker>
            </View>
          </View>

          {/* Other Fields */}
          <Text className="text-sm sm:text-xs font-[Poppins-Medium] text-black mb-2">
            Product Category
          </Text>
          <View className="bg-white mb-4 border-2 border-black rounded-sm">
            <Picker
              selectedValue={formData.productCategory}
              onValueChange={(itemValue: string) =>
                handleInputChange("productCategory", itemValue)
              }
            >
              <Picker.Item label="Laptops" value="Laptops" />
              <Picker.Item label="Mobiles" value="Mobiles" />
            </Picker>
          </View>

          <Text className="text-sm sm:text-xs font-[Poppins-Medium] text-black mb-2">
            Product Name
          </Text>
          <TextInput
            className="border-2 border-black rounded-[1] px-4 py-5 mb-4 bg-white text-sm sm:text-xs font-[Poppins-Medium]"
            placeholder="Enter product name"
            value={formData.productName}
            onChangeText={(text) => handleInputChange("productName", text)}
          />

          <Text className="text-sm sm:text-xs font-[Poppins-Medium] text-black mb-2">
            Brand Name
          </Text>
          <View className="bg-white mb-4 border-2 border-black rounded-sm">
            <Picker
              selectedValue={formData.brandName}
              onValueChange={(itemValue: string) =>
                handleInputChange("brandName", itemValue)
              }
            >
              <Picker.Item label="Green apple" value="Green apple" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>

          <Text className="text-sm sm:text-xs font-[Poppins-Medium] text-black mb-2">
            Serial Number
          </Text>
          <TextInput
            className="border-2 border-black rounded-sm px-4 py-5 mb-4 bg-white text-sm sm:text-xs font-[Poppins-Medium]"
            placeholder="Enter serial number"
            value={formData.serialNumber}
            onChangeText={(text) => handleInputChange("serialNumber", text)}
          />

          <Text className="text-sm sm:text-xs font-[Poppins-Medium] text-black mb-2">
            Model Number
          </Text>
          <TextInput
            className="border-2 border-black rounded-[1] px-4 py-5 bg-white text-sm sm:text-xs font-[Poppins-Medium]"
            placeholder="Enter model number"
            value={formData.modelNumber}
            onChangeText={(text) => handleInputChange("modelNumber", text)}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="px-4 py-4 mb-4">
        <TouchableOpacity
          className="bg-[#0F0F0F] py-4 rounded-[1] items-center w-[90%] self-center"
          onPress={() => router.push("/screens/AdditionalDetailsScreen")}
        >
          <Text className="text-white font-bold text-[13px] p-2 sm:text-xs font-[Poppins-SemiBold]">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProductDetailsScreen;
