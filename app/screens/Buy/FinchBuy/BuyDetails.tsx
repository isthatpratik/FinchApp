import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import { Ionicons } from "@expo/vector-icons";

const FilterScreen = () => {
  const [status, setStatus] = useState("In Warranty");
  const [selectedCategory, setSelectedCategory] = useState("electronics");
  const [selectedBrand, setSelectedBrand] = useState("samsung");
  const [priceValues, setPriceValues] = useState([250, 1100]);
  const [distanceValues, setDistanceValues] = useState([10, 50]);

  const handlePriceChange = (values: number[]) => {
    setPriceValues(values);
  };

  const handleDistanceChange = (values: number[]) => {
    setDistanceValues(values);
  };

  return (
    <View className="flex-1 bg-[#F5F5F5] px-8 py-6 mt-4 mb-2">
      {/* Header */}
      <View className="flex-row justify-between items-center">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Form */}
      <View className="mt-6">
        {/* Product Category */}
        <Text className="text-[14px] font-[PoppinsMedium] mb-1">Product Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Electronics" value="electronics" />
            <Picker.Item label="Appliances" value="appliances" />
            <Picker.Item label="Furniture" value="furniture" />
          </Picker>
        </View>

        {/* Brand Name */}
        <Text className="text-[14px] font-[PoppinsMedium] mt-4 mb-1">Brand Name</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedBrand}
            onValueChange={(itemValue) => setSelectedBrand(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Samsung" value="samsung" />
            <Picker.Item label="LG" value="lg" />
            <Picker.Item label="Sony" value="sony" />
          </Picker>
        </View>

        {/* Price Range */}
        <Text className="text-[14px] font-[PoppinsMedium] mt-4 mb-1">Price Range</Text>
        <View style={{ position: "relative", marginVertical: 16 }}>
          <Slider
            value={priceValues}
            onValueChange={handlePriceChange}
            minimumValue={0}
            maximumValue={2000}
            step={1}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor="#00F0FF"
            maximumTrackTintColor="#BDBDBD"
            renderThumbComponent={(index) => (
                <View>
                <View style={styles.thumbStyle} />
                <Text style={styles.thumbValue}>
                    {Math.round(priceValues[index])}
                </Text>
                </View>
            )}
          />
        </View>

        {/* Status */}
        <Text className="text-[14px] font-[PoppinsMedium] mt-4 mb-1">Status</Text>
        <View className="flex-row gap-4">
          <TouchableOpacity
            className={`border-[1.5px] rounded-[2px] flex-1 p-5 ${
              status === "In Warranty" ? "bg-white" : "bg-transparent border-[#BDBDBD]"
            }`}
            onPress={() => setStatus("In Warranty")}
          >
            <Text className="text-black text-center text-[14px] font-[PoppinsMedium]">
              In Warranty
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`border-[1.5px] rounded-[2px] flex-1 p-5 ${
              status === "Doesn't Matter" ? "bg-white" : "bg-transparent border-[#BDBDBD]"
            }`}
            onPress={() => setStatus("Doesn't Matter")}
          >
            <Text className="text-black text-center text-[14px] font-[PoppinsMedium]">
              Doesn't Matter
            </Text>
          </TouchableOpacity>
        </View>

        {/* Distance */}
        <Text className="text-[14px] font-[PoppinsMedium] mt-4 mb-2">Distance (in miles)</Text>
        <View style={{ position: "relative", marginVertical: 16 }}>
          <Slider
            value={distanceValues}
            onValueChange={handleDistanceChange}
            minimumValue={0}
            maximumValue={100}
            step={1}
            trackStyle={styles.trackStyle}
            thumbStyle={styles.thumbStyle}
            minimumTrackTintColor="#8FFF00"
            maximumTrackTintColor="#BDBDBD"
            renderThumbComponent={(index) => (
                <View>
                  <View style={styles.thumbStyle} />
                  <Text style={styles.thumbValue}>
                    {Math.round(distanceValues[index])}
                  </Text>
                </View>
            )}
          />
        </View>

        {/* Map Placeholder */}
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>Map Placeholder</Text>
        </View>
      </View>

      {/* Button */}
      <TouchableOpacity className="bg-black py-4 mt-6 rounded">
        <Text className="text-white text-center">Ready to Buy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1.5,
    borderRadius: 2,
    overflow: "hidden",
    backgroundColor: "white",
  },
  picker: {
    height: 55,
    color: "#000",
    fontSize: 14,
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
    elevation: 2,
  },
  thumbValueContainer: {
    position: "absolute",
    top: 35, // Positioned below the slider thumb
    width: 40,
    alignItems: "center",
  },
  thumbValueText: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
  mapPlaceholder: {
    height: 150,
    backgroundColor: "#E0E0E0",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mapPlaceholderText: {
    fontSize: 16,
    color: "#9E9E9E",
  },
  thumbValue: {
    position: "absolute",
    top: 30,
    left: 5,
    alignSelf: "center",
    fontSize: 12,
    fontFamily: "PoppinsMedium",
    color: "#000",
    width: 50,
  },
});

export default FilterScreen;
