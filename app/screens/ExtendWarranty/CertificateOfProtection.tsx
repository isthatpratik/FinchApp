import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons
import { LinearGradient } from "expo-linear-gradient"; // Import LinearGradient
import { useRouter } from "expo-router";
import { Dropdown } from "react-native-element-dropdown";

type DropdownItem = {
  id: string;
  range: string;
};

const CertificateOfProtection = () => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const allChecked = isChecked1 && isChecked2 && isChecked3;

  const data: DropdownItem[] = [
    { id: "1", range: "Maharashtra" },
    { id: "2", range: "Gujarat" },
    { id: "3", range: "Karnatka" },
  ];

  const router = useRouter();

  return (
    <View className="flex-1 overflow-hidden">
      <LinearGradient
        colors={["#8FFF00", "#00F0FF"]}
        start={{ x: 0.5, y: 0.92 }}
        className="py-2 border-b-2"
      >
        <View className="flex flex-row justify-between items-center px-8 py-6 mt-2">
          <TouchableOpacity onPress={() => router.dismiss()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[18px] text-center font-[PoppinsSemiBold]">
            Certificate of Protection
          </Text>
          <TouchableOpacity onPress={() => router.dismissTo("/screens/MainDashboard")}>
            <Ionicons name="close-sharp" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View className="mt-2 px-2">
        <View className="flex mt-4 px-8 mb-2">
          <Text className="font-[PoppinsSemiBold] text-[14px]">Name</Text>
          <TextInput
            className="bg-white border-[1.5px] rounded-[2px] font-[PoppinsMedium] px-5 py-4 mt-1"
            placeholder="Enter your full name"
          />
        </View>

        <View className="flex mt-4 px-8 mb-2">
          <Text className="font-[PoppinsSemiBold] text-[14px]">Enter your email</Text>
          <TextInput
            className="bg-white border-[1.5px] rounded-[2px] font-[PoppinsMedium] px-5 py-4 mt-1"
            placeholder="Type your working email address"
          />
        </View>

        <View className="flex mt-4 px-8 mb-2">
          <Text className="font-[PoppinsSemiBold] text-[14px]">Enter your mobile number</Text>
          <TextInput
            className="bg-white border-[1.5px] rounded-[2px] font-[PoppinsMedium] px-5 py-4 mt-1"
            placeholder="e.g. 9876543210"
          />
        </View>

        <View className="flex mt-4 px-8 mb-2">
          <Text className="font-[PoppinsSemiBold] text-[14px]">Select a state</Text>
          <View className="bg-white border-[1.5px] rounded-[2px] mt-1 px-1 font-[PoppinsMedium]">
            <Dropdown
              data={data}
              value={selectedValue}
              onChange={(item) => setSelectedValue(item.id)}
              labelField="range"
              valueField="id"
              placeholder="Select your state"
              style={{
                paddingHorizontal: 16,
                paddingVertical: 16,
                backgroundColor: "white",
              }}
              accessibilityLabel="Select state"
            />
          </View>
        </View>

        {/* Checkboxes Section */}
        <View className="flex flex-col items-start px-8 mt-4 mx-1 mr-12">
          {[isChecked1, isChecked2, isChecked3].map((isChecked, index) => (
            <TouchableOpacity
              key={index}
              className="flex flex-row items-start my-2"
              onPress={() => {
                if (index === 0) setIsChecked1(!isChecked1);
                else if (index === 1) setIsChecked2(!isChecked2);
                else setIsChecked3(!isChecked3);
              }}
            >
              <Ionicons
                name={isChecked ? "checkbox" : "square-outline"}
                size={20}
                color={isChecked ? "black" : "#C4C4C4"}
                style={{ marginRight: 12, marginTop: 4 }}
              />
              <Text className="text-[12px] font-[PoppinsMedium]">
                {index === 0
                  ? "The purchased device is not broken and is in working condition before the plan purchase."
                  : index === 1
                  ? "The Laptop has been purchased on or after 29-Dec-2019."
                  : "By continuing, you agree to the Terms Of Service."}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex-1 align-bottom justify-end">
        <TouchableOpacity
          className={`mt-10 py-4 mx-10 mb-6 border-[1.5px] rounded-[2px] items-center ${
            allChecked ? "bg-stone-950" : "bg-gray-700 opacity-50"
          }`}
          onPress={() => allChecked && router.dismissTo('/screens/MainDashboard')}
          disabled={!allChecked}
        >
          <Text
            className={`font-[PoppinsSemiBold] text-[13px] ${
              allChecked ? "text-white" : "text-gray-900"
            }`}
          >
            Pay Securely
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CertificateOfProtection;
