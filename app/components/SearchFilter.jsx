import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown"; // Importing Dropdown component
import { BlurView } from "expo-blur";
import { Slider } from "@miblanchard/react-native-slider";
import CustomCheckBox from "./CustomCheckBox"; // Importing CustomCheckBox component
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const SearchFilter = ({ visible, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortTime, setSortTime] = useState("latestToOld"); // 'latestToOld' or 'oldToLatest'
  const [sortPrice, setSortPrice] = useState("highToLow"); // 'highToLow' or 'lowToHigh'
  const [selectedChoice, setSelectedChoice] = useState("inWarranty");

  const handleApply = () => {
    // Apply filter logic here
    console.log("Selected Category:", selectedCategory);
    console.log("Sort Time:", sortTime);
    console.log("Sort Price:", sortPrice);
    console.log("Selected Choice:", selectedChoice);
    onClose();
  };

  const categoryData = [
    { id: "1", name: "Smart TV" },
    { id: "2", name: "Laptop" },
    { id: "3", name: "Phone" },
  ];

  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <BlurView
        intensity={10}
        tint="systemChromeMaterialDark"
        experimentalBlurMethod="dimezisBlurView"
        style={styles.modalOverlay}
      >
        <View style={styles.modalContentWrapper}>
          <Ionicons
            name="filter"
            color="white"
            size={24}
            className="absolute top-[-20] right-5 bottom-0"
            onPress={onClose}
          />
          <ScrollView style={styles.modalContainer}>
            <Text className="text-[18px] font-[PoppinsSemiBold] text-center mb-2">
              Filter By
            </Text>

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
              Product Category
            </Text>
            <View>
              <Dropdown
                data={categoryData}
                value={selectedCategory}
                onChange={(item) => setSelectedCategory(item.name)}
                labelField="name"
                valueField="name"
                placeholder="Select Category"
                style={styles.dropdown}
              />
            </View>

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
              By time
            </Text>
            <CustomCheckBox
              title="Latest to Old"
              checked={sortTime === "latestToOld"}
              onPress={() => setSortTime("latestToOld")}
            />
            <CustomCheckBox
              title="Old to Latest"
              checked={sortTime === "oldToLatest"}
              onPress={() => setSortTime("oldToLatest")}
            />

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
              By price
            </Text>
            <CustomCheckBox
              title="High to Low"
              checked={sortPrice === "highToLow"}
              onPress={() => setSortPrice("highToLow")}
            />
            <CustomCheckBox
              title="Low to High"
              checked={sortPrice === "lowToHigh"}
              onPress={() => setSortPrice("lowToHigh")}
            />

            <Text className="text-[12px] font-[PoppinsSemiBold] mb-2">
              Choose
            </Text>
            <View className="flex-row justify-between mb-5">
              <TouchableOpacity
                className={`flex-1 py-4 px-2 mr-3 border-[1.5px] rounded-[2px] items-center ${
                  selectedChoice === "inWarranty"
                    ? "border-black"
                    : "border-[#BDBDBD]"
                }`}
                style={{ backgroundColor: "transparent" }}
                onPress={() => setSelectedChoice("inWarranty")}
              >
                <Text className="text-[12px] font-[PoppinsMedium]">
                  In-warranty
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 py-4 px-2 mx-1 border-[1.5px] rounded-[2px] items-center ${
                  selectedChoice === "outOfWarranty"
                    ? "border-black"
                    : "border-[#BDBDBD]"
                }`}
                style={{ backgroundColor: "transparent" }}
                onPress={() => setSelectedChoice("outOfWarranty")}
              >
                <Text className="text-[12px] font-[PoppinsMedium]">
                  Doesn't matter
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-between mt-3 gap-2">
              <TouchableOpacity
                className="flex-1 p-4 mx-1 rounded-[2px] items-center"
                onPress={onClose}
              >
                <Text className="text-black font-[PoppinsMedium]">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-1 p-4 mx-1 bg-black rounded-[2px] border-[1.5px] items-center"
                onPress={handleApply}
              >
                <Text className="text-white font-[PoppinsMedium]">Apply</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </BlurView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingTop: "15%",
    paddingRight: "6%",
  },
  modalContentWrapper: {
    width: "90%",
    alignItems: "center",
    padding: 10,
    paddingTop: 16,
    paddingRight: 18,
  },
  modalContainer: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 1.5,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRightWidth: 3.5,
    borderBottomWidth: 3.5,
  },
  dropdown: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "white",
    borderRadius: 2,
    borderWidth: 1.5,
    marginBottom: 20,
    fontFamily: "PoppinsMedium",
    fontSize: 12,
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
});

export default SearchFilter;
