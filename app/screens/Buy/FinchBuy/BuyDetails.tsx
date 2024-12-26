import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, ScrollView} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Slider } from "@miblanchard/react-native-slider";
import { Ionicons } from "@expo/vector-icons";
import MapView, { Circle, Marker } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import FinchBuyPopup from "@/app/components/FinchBuyPopup";

const BuyDetails = () => {
  const [status, setStatus] = useState("In Warranty");
  const [selectedCategory, setSelectedCategory] = useState("Electronics");
  const [selectedBrand, setSelectedBrand] = useState("Samsung");
  const [priceValues, setPriceValues] = useState([250, 1100]);
  const [distanceValues, setDistanceValues] = useState([10, 50]);
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [productIcon, setProductIcon] = useState(null); 
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Example: Fetch product icon based on category or brand (this can be dynamic)
    if (selectedCategory === 'Electronics') {
      setProductIcon(require('@/app/assets/images/icons/tv.png'));
    } else {
      setProductIcon(require('@/app/assets/images/icons/tv.png'));
    }
  }, [selectedCategory]);

  const handlePopupToggle = () => setShowPopup(!showPopup);

  useEffect(() => {
    // Request location permission and fetch current location
    Geolocation.requestAuthorization("whenInUse").then((permission) => {
      if (permission === "granted") {
        Geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentLocation((prev) => ({
              ...prev,
              latitude,
              longitude,
            }));
          },
          (error) => {
            Alert.alert("Location Error", error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        Alert.alert(
          "Permission Denied",
          "Allow location access to use this feature."
        );
      }
    });
  }, []);

  const handlePriceChange = (values: number[]) => {
    setPriceValues(values);
  };

  const handleDistanceChange = (values: number[]) => {
    setDistanceValues(values);
  };

  return (
    <View className="flex-1 bg-[#F5F5F5] px-8 mb-1">
      {/* Header */}
      <View className="flex-row justify-between py-6 mt-4 mb-2 items-center">
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Form */}
      <ScrollView className="flex-1 mb-2" showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
        {/* Product Category */}
        <Text className="text-[14px] font-[PoppinsMedium] mb-1">Product Category</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedCategory}
            onValueChange={(itemValue) => setSelectedCategory(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Electronics" value="Electronics" />
            <Picker.Item label="Appliances" value="Appliances" />
            <Picker.Item label="Furniture" value="Furniture" />
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
        <View style={{ position: "relative", }}>
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
            className={`border-[1.5px] rounded-[2px] flex-1 p-4 ${
              status === "In Warranty" ? "bg-white" : "bg-transparent border-[#BDBDBD]"
            }`}
            onPress={() => setStatus("In Warranty")}
          >
            <Text className="text-black text-center text-[14px] font-[PoppinsMedium]">
              In Warranty
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`border-[1.5px] rounded-[2px] flex-1 p-4 ${
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
        <View style={{ position: "relative", }}>
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

        {/* Map View */}
        <View className="h-[180px] overflow-hidden rounded-[2px] mt-8 border-[1.5px]">
          <MapView
            style={styles.map}
            region={currentLocation}
          >
            <Marker style={styles.customMarker} coordinate={currentLocation} image={require("@/app/assets/images/Marker.png")} />
            <Circle
              center={currentLocation}
              radius={distanceValues[1] * 1609.34} // Convert miles to meters
              fillColor="rgba(143, 255, 0, 0.2)"
              strokeColor="rgba(143, 255, 0, 0.5)"
            />
          </MapView>
        </View>
      </ScrollView>

      {/* Button */}
      <TouchableOpacity className="bg-black p-4 border-[1.5px] mt-2 mb-3 rounded-[2px]" onPress={handlePopupToggle}>
        <Text className="text-white text-center text-[13px] font-[PoppinsSemiBold]">Ready to Buy</Text>
      </TouchableOpacity>

      {/* FinchBuyPopup Modal */}
      <FinchBuyPopup
        isVisible={showPopup}
        onClose={handlePopupToggle}
        productIcon={productIcon}
        category={selectedCategory}
        brand={selectedBrand}
        priceRange={priceValues}
        distance={distanceValues}
      />
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
    height: 50,
    color: "#000",
    fontSize: 14,
    fontFamily: 'PoppinsMedium',
  },
  trackStyle: {
    height: 10,
    borderRadius: 0,
    borderWidth: 1.5,
    backgroundColor: "#BDBDBD",
  },
  thumbStyle: {
    height: 18,
    width: 18,
    backgroundColor: "white",
    borderRadius: 1,
    borderWidth: 1.5,
    elevation: 2,
  },
  thumbValueText: {
    fontSize: 12,
    fontFamily: "PoppinsMedium",
  },
  thumbValue: {
    position: "absolute",
    top: 25,
    left: 2,
    alignSelf: "center",
    fontSize: 10,
    fontFamily: "PoppinsSemiBold",
    color: "#000",
    width: 50,
  },
  mapContainer: {
    height: 160, // Ensure the height matches placeholder
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  customMarker: {
    width: 15,
    height: 15,
  }
});

export default BuyDetails;