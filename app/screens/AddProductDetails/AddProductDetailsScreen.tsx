import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from "react-native-element-dropdown";

const AddProductDetailsScreen: React.FC = () => {
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
    router.dismissTo("/screens/MainDashboard");
  };

  const currencyData = [
    { label: "USD", value: "USD" },
    { label: "INR", value: "INR" },
  ];

  const categoryData = [
    { label: "Laptops", value: "Laptops" },
    { label: "Mobiles", value: "Mobiles" },
  ];

  const brandData = [
    { label: "Green apple", value: "Green apple" },
    { label: "Other", value: "Other" },
  ];

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.purchasePrice !== "" &&
      formData.productCategory !== "" &&
      formData.productName !== "" &&
      formData.brandName !== "" &&
      formData.serialNumber !== "" &&
      formData.modelNumber !== ""
    );
  };

  useEffect(() => {
    // Re-enable or disable continue button when form data changes
  }, [formData]);

  return (
    <SafeAreaView className="flex-1 bg-[#EDEDED]">
      {/* Header */}
      <LinearGradient
        colors={["#00F0FF", "#FFEE00"]}
        start={{ x: 0.5, y: 0.9 }}
        className="py-2 border-b-2"
      >
        <View className="flex-row items-center justify-between px-8 py-6 mt-2">
          <Ionicons
            name="arrow-back-sharp"
            size={25}
            color="#000"
            onPress={navigateToDashboard}
          />
          <Text className="text-[18px] sm:text-[16px] font-[Poppins-SemiBold] text-black">
            Product Details
          </Text>
          <Ionicons
            name="close-sharp"
            size={25}
            color="#000"
            onPress={navigateToDashboard}
          />
        </View>
      </LinearGradient>

      {/* Form wrapped with KeyboardAvoidingView */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1"
      >
        <ScrollView className="flex-1 overflow-hidden px-10">
          <View className="mt-4 self-center">
            {/* Purchase Price */}
            <Text className="text-center text-[14px] font-[PoppinsSemiBold] text-black mb-1">
              Purchase Price
            </Text>
            <View className="flex-row items-center justify-center mx-16 border-b-2 border-black mb-8 self-center">
              <TextInput
                className="flex-1 text-[20px] text-black font-[PoppinsMedium] text-center"
                placeholder="2000.00"
                keyboardType="numeric"
                value={formData.purchasePrice}
                onChangeText={(text) => handleInputChange("purchasePrice", text)}
              />
              <View className="flex-1 text-[14px]">
                <Dropdown
                  data={currencyData}
                  labelField="label"
                  valueField="value"
                  value={formData.currency}
                  onChange={(item) =>
                    handleInputChange("currency", item.value)
                  }
                  style={{
                    width: 70,
                    backgroundColor: "transparent",
                    top: -3,
                  }}
                  placeholder="Select Currency"
                />
              </View>
            </View>

            {/* Other Fields */}
            <Text className="text-[12px] font-[PoppinsSemiBold] text-black mb-2">
              Product Category
            </Text>
            <View className="bg-white mb-6 border-2 border-black rounded-sm">
              <Dropdown
                data={categoryData}
                labelField="label"
                valueField="value"
                value={formData.productCategory}
                onChange={(item) =>
                  handleInputChange("productCategory", item.value)
                }
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  backgroundColor: 'white',
                }}
                placeholder="Select Category"
              />
            </View>

            <Text className="text-[12px] font-[PoppinsSemiBold] text-black mb-2">
              Product Name
            </Text>
            <TextInput
              className="border-2 border-black rounded-[2px] px-4 py-4 mb-6 bg-white text-[14px] font-[PoppinsMedium]"
              placeholder="Enter product name"
              value={formData.productName}
              onChangeText={(text) => handleInputChange("productName", text)}
            />

            <Text className="text-[12px] font-[PoppinsSemiBold] text-black mb-2">
              Brand Name
            </Text>
            <View className="bg-white mb-6 border-2 border-black rounded-[2px]">
              <Dropdown
                data={brandData}
                labelField="label"
                valueField="value"
                value={formData.brandName}
                onChange={(item) =>
                  handleInputChange("brandName", item.value)
                }
                style={{
                  paddingHorizontal: 16,
                  paddingVertical: 14,
                  backgroundColor: 'white',
                }}
                placeholder="Select Brand"
              />
            </View>

            <Text className="text-[12px] font-[PoppinsSemiBold] text-black mb-2">
              Serial Number
            </Text>
            <View className="flex-row items-center border-2 border-black rounded-[2px] mb-6 bg-white">
              <TextInput
                className="flex-1 border-none px-4 py-4 text-[14px] font-[Poppins-Medium]"
                placeholder="Enter serial number"
                value={formData.serialNumber}
                onChangeText={(text) => handleInputChange("serialNumber", text)}
              />
              <MaterialIcons name="edit" size={18} color="#BDBDBD" className="mr-5"/>
            </View>

            <Text className="text-[12px] font-[PoppinsSemiBold] text-black mb-2">
              Model Number
            </Text>
            <View className="flex-row items-center border-2 border-black rounded-[2px] mb-4 bg-white">
              <TextInput
                className="flex-1 border-none px-4 py-4 text-[14px] font-[Poppins-Medium]"
                placeholder="Enter model number"
                value={formData.modelNumber}
                onChangeText={(text) => handleInputChange("modelNumber", text)}
              />
              <MaterialIcons name="edit" size={18} color="#BDBDBD" className="mr-5"/>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Footer */}
      <View className="flex px-4 py-4 mt-1 mb-1">
        <TouchableOpacity
          className={`bg-[#0F0F0F] py-4 border-[1.5px] rounded-[2px] items-center w-[90%] self-center ${!isFormValid() ? 'bg-gray-700 opacity-50' : ''}`}
          onPress={() => router.replace("/screens/AddProductDetails/AdditionalDetailsScreen")}
          disabled={!isFormValid()}
        >
          <Text className="text-white text-[13px] font-[Poppins-SemiBold]">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddProductDetailsScreen;
