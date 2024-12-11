import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useRouter } from "expo-router";

const SpecialsScreen = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons name="filter" size={25} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="bg-white rounded-lg shadow-md overflow-hidden">
        <Image
          source={require("../assets/images/fridge.png")}
          className="w-full h-52"
        />
        <View className="p-4">
          <Text className="text-lg font-bold mb-2">LG Refrigerator</Text>
          <View className="flex-row items-center mb-2">
            <Text className="text-sm text-gray-400 line-through mr-2">$1150</Text>
            <Text className="text-lg font-bold text-black">$850</Text>
          </View>
          <Text className="text-sm text-black mb-1">
            Location: <Text className="font-bold">Mountain View, CA</Text>
          </Text>
          <Text className="text-sm text-black mb-1">
            Discount:{" "}
            <Text className="bg-green-200 text-black px-1 rounded font-bold">
              20% off
            </Text>
          </Text>
          <Text className="text-sm text-black mb-1">
            Condition: <Text className="font-bold">Excellent</Text>
          </Text>
          <Text className="text-sm text-black">
            Listed on: <Text className="font-bold">17 Aug 2020</Text>
          </Text>
        </View>
      </View>

      {/* Footer */}
      <TouchableOpacity className="bg-black py-4 rounded-lg mt-4 items-center">
        <Text className="text-white font-bold text-base">Know more</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-8 rounded-lg w-80">
            <Text className="text-lg font-bold">Filter Options</Text>
            <TouchableOpacity onPress={toggleModal} className="mt-4 p-2 bg-blue-500 rounded-md">
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SpecialsScreen;
