import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Slider } from "@miblanchard/react-native-slider";
import { Picker } from "@react-native-picker/picker";

const { width } = Dimensions.get("window");

const SpecialsScreen = () => {
  const navigation = useNavigation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [warrantyOption, setWarrantyOption] = useState("doesn't matter");
  const [sliderValues, setSliderValues] = useState([30, 100]);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleSliderChange = (values: number[]) => {
    setSliderValues(values);
  };

  const handleApply = () => {
    toggleModal();
    // Handle apply logic here if needed
  };

  return (
    <View className="flex-1 bg-white p-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons
            name="filter"
            size={25}
            color={isModalVisible ? "#fff" : "#000"}
            style={{ backgroundColor: isModalVisible ? "#000" : "transparent" }}
          />
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
            <Text className="text-sm text-gray-400 line-through mr-2">
              $1150
            </Text>
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
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Title */}
            <Text style={styles.title}>Filter By</Text>

            {/* Product Category Dropdown */}
            <Text style={styles.label}>Product Category</Text>
            <View style={styles.dropdown}>
              <Picker
                selectedValue={selectedCategory}
                onValueChange={(itemValue) => setSelectedCategory(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Select Category" value="" />
                <Picker.Item label="Electronics" value="electronics" />
                <Picker.Item label="Furniture" value="furniture" />
                <Picker.Item label="Appliances" value="appliances" />
                {/* Add more categories as needed */}
              </Picker>
            </View>

            {/* Choose Option */}
            <Text style={styles.label}>Choose</Text>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  warrantyOption === "in-warranty" && styles.selectedButton,
                ]}
                onPress={() => setWarrantyOption("in-warranty")}
              >
                <Text
                  style={[
                    styles.optionText,
                    warrantyOption === "in-warranty" && styles.selectedText,
                  ]}
                >
                  In-Warranty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  warrantyOption === "doesn't matter" && styles.selectedButton,
                ]}
                onPress={() => setWarrantyOption("doesn't matter")}
              >
                <Text
                  style={[
                    styles.optionText,
                    warrantyOption === "doesn't matter" && styles.selectedText,
                  ]}
                >
                  Doesn't Matter
                </Text>
              </TouchableOpacity>
            </View>

            {/* Discount Slider */}
            <Text style={styles.label}>Discount</Text>
            <Slider
              value={sliderValues}
              minimumValue={30}
              maximumValue={100}
              step={1}
              onValueChange={handleSliderChange}
              minimumTrackTintColor="#8FFF00"
              maximumTrackTintColor="#BDBDBD"
              trackStyle={styles.trackStyle}
              thumbStyle={styles.thumbStyle}
              animateTransitions={true}
              animationType="spring"
            />
            <View style={styles.sliderValuesContainer}>
              <Text style={styles.sliderValue}>${sliderValues[0]}</Text>
              <Text style={styles.sliderValue}>${sliderValues[1]}</Text>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.actionButton, styles.cancelButton]}
                onPress={toggleModal}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.actionButton, styles.applyButton]}
                onPress={handleApply}
              >
                <Text style={styles.applyText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: "100%",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
  },
  modalContainer: {
    marginTop: 100,
    width: width * 0.7,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 2,
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#555",
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  optionText: {
    color: "#000",
    fontWeight: "bold",
  },
  selectedText: {
    color: "#fff",
  },
  sliderValuesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  sliderValue: {
    alignSelf: "center",
    marginBottom: 8,
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
  trackStyle: {
    height: 12,
    borderRadius: 0,
    borderWidth: 1.5,
    backgroundColor: "#BDBDBD",
  },
  thumbStyle: {
    height: 20,
    width: 20,
    backgroundColor: "white",
    borderRadius: 1,
    borderWidth: 1.5,
    shadowColor: "#000000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 2,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#f0f0f0",
  },
  cancelText: {
    color: "#000",
    fontWeight: "bold",
  },
  applyButton: {
    backgroundColor: "#000",
  },
  applyText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default SpecialsScreen;
