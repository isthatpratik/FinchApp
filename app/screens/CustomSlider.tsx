import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Slider from "@react-native-community/slider";

interface CustomSliderProps {
  minimumValue: number;
  maximumValue: number;
  value: number;
  step?: number;
  onValueChange: (value: number) => void;
}

const CustomSlider: React.FC<CustomSliderProps> = ({
  minimumValue,
  maximumValue,
  value,
  step = 1,
  onValueChange,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.labelsContainer}>
        <Text style={styles.label}>{minimumValue}</Text>
        <Text style={styles.label}>{maximumValue}</Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={minimumValue}
        maximumValue={maximumValue}
        step={step}
        value={value}
        onValueChange={onValueChange}
        minimumTrackTintColor="#00FF00" // Bright green
        maximumTrackTintColor="#ccc"
        thumbImage={require("../assets/images/slider.png")} // Reference the thumb image
      />
      <Text style={styles.currentValue}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
  },
  labelsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: "#333",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  currentValue: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginTop: 8,
  },
});

export default CustomSlider;
