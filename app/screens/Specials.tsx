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
import { BlurView } from "expo-blur";

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

  // Example product data (to be fetched dynamically in the future)
  const product = {
    name: "LG Refrigerator",
    image: require("../assets/images/fridge.png"),
    originalPrice: 1150,
    discountedPrice: 850,
    location: "Mountain View, CA",
    discount: "20% off",
    condition: "Excellent",
    listedDate: "17 Aug 2020",
  };

  return (
    <View className="flex-1 bg-[#F5F5F5] p-10">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={25} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Ionicons name="filter" size={25} />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View className="bg-white rounded-1 border-2 border-black shadow-md overflow-hidden h-[75%] mt-16">
        <Image
          source={product.image}
          className="min-w-full max-w-full w-full self-center h-[65%]"
        />
        <View className="p-6">
          <View className="flex-row justify-between items-center mb-2 font-[PoppinsMedium]">
            <Text className="font-[PoppinsSemiBold] text-[16px] flex-1">
              {product.name}
            </Text>
            <View className="flex-row items-center">
              <Text className="text-gray-400 line-through mr-4 font-[PoppinsSemiBold] text-[16px]">
                ${product.originalPrice}
              </Text>
              <Text className="font-[PoppinsSemiBold] text-[21px] text-black">
                ${product.discountedPrice}
              </Text>
            </View>
          </View>

          <View className="flex-col mb-2 gap-1">
            <Text className="font-[PoppinsMedium] text-[14px] text-black mb-1">
              Location:{" "}
              <Text className="color-[#828282]">{product.location}</Text>
            </Text>
            <View className="flex-row items-center mb-1">
              <Text className="font-[PoppinsMedium] text-[14px] text-black">
                Discount:{" "}
              </Text>
              <View className="bg-[#8FFF00] text-black border border-black px-2 rounded-1">
                <Text className="text-black text-[14px] font-[PoppinsMedium]">
                  {product.discount}
                </Text>
              </View>
            </View>
            <Text className="font-[PoppinsMedium] text-[14px] text-black">
              Condition:{" "}
              <Text className="color-[#828282]">{product.condition}</Text>
            </Text>
            <Text className="text-[14px] font-[PoppinsMedium] text-black">
              Listed on:{" "}
              <Text className="font-[PoppinsMedium] color-[#828282]">
                {product.listedDate}
              </Text>
            </Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <TouchableOpacity className="bg-black py-4 rounded-[2] mt-4 items-center">
        <Text className="text-white font-bold text-base">Know more</Text>
      </TouchableOpacity>

      {/* Filter Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleModal}
      >
        <BlurView
          intensity={10}
          tint="systemChromeMaterialDark"
          experimentalBlurMethod="dimezisBlurView"
          style={styles.modalOverlay}
        >
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

            <Text style={styles.label}>Discount %</Text>
            <View>
              <Slider
                value={sliderValues}
                minimumValue={30}
                maximumValue={100}
                step={1}
                onValueChange={handleSliderChange}
                minimumTrackTintColor="#00F0FF"
                maximumTrackTintColor="#BDBDBD"
                trackStyle={styles.trackStyle}
                thumbStyle={styles.thumbStyle}
                animateTransitions={true}
                animationType="spring"
                renderThumbComponent={(index) => (
                  <View>
                    <View style={styles.thumbStyle} />
                    <Text style={styles.thumbValue}>
                      {Math.round(sliderValues[index])}
                    </Text>
                  </View>
                )}
              />
              <View style={styles.sliderLabelsContainer}>
                <Text style={styles.minMaxLabel}>30</Text>
                <Text style={styles.minMaxLabel}>100</Text>
              </View>
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
        </BlurView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: "100%",
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
  placeholderText: {
    fontSize: 10, // Decrease the font size here
    color: "#BDBDBD", // Optional: set the color to differentiate from other items
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    overflow: "hidden",
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    fontFamily: "PoppinsMedium",
    marginTop: 100,
    width: width * 0.7,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 2,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    marginBottom: 12,
  },
  label: {
    fontSize: 12,
    fontFamily: "PoppinsSemiBold",
    marginBottom: 8,
  },
  dropdown: {
    fontSize: 12,
    borderWidth: 1.5,
    borderRadius: 1,
    marginBottom: 16,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 8,
  },
  optionButton: {
    flex: 1,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: "#BDBDBD",
    borderRadius: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButton: {
    borderColor: "#000",
  },
  optionText: {
    color: "#000",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  selectedText: {
    color: "#000",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
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
  thumbContainer: {
    position: "absolute",
    bottom: 30, // Position the value below the thumb
    alignItems: "center",
  },
  thumbValue: {
    position: "absolute",
    top: 30, // Position below the thumb
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "PoppinsMedium",
    color: "#000",
  },
  sliderLabelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  minMaxLabel: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
    color: "#BDBDBD",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    gap: 8,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "transparent",
  },
  cancelText: {
    color: "#000",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
  applyButton: {
    backgroundColor: "#000",
  },
  applyText: {
    color: "#fff",
    fontFamily: "PoppinsMedium",
    fontSize: 12,
  },
});

export default SpecialsScreen;
