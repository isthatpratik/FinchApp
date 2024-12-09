import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Slider } from "@miblanchard/react-native-slider";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Checkbox } from "expo-checkbox";

const AdditionalDetailsScreen: React.FC = () => {
  const router = useRouter();
  const [additionalDetails, setAdditionalDetails] = useState({
    storeName: "",
    purchaseDate: "",
    warrantyDuration: 18,
    additionalWarranty: false,
    additionalWarrantyDuration: "",
    warrantyProvider: "",
    label: "",
    warrantyOption: "noWarranty", // Default to "noWarranty"
    additionalWarrantyOption: false,
  });

  const handleInputChange = (key: string, value: any) => {
    setAdditionalDetails({ ...additionalDetails, [key]: value });
  };

  const handleDateChange = (date: Date) => {
    setAdditionalDetails({
      ...additionalDetails,
      purchaseDate: date.toLocaleDateString(),
    });
  };

  const handleDatePickerConfirm = (date: Date) => {
    handleDateChange(date);
    setDatePickerVisible(false);
  };

  const handleDatePickerCancel = () => {
    setDatePickerVisible(false);
  };

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleWarrantyOptionChange = (option: string) => {
    setAdditionalDetails({
      ...additionalDetails,
      warrantyOption: option,
    });
  };

  // Track slider values for display
  const [minSliderValue, setMinSliderValue] = useState(12);
  const [maxSliderValue, setMaxSliderValue] = useState(36);

  const [sliderValue, setSliderValue] = useState(18); // Use a separate state for slider value

  useEffect(() => {
    // Update slider value when warrantyDuration changes
    setSliderValue(additionalDetails.warrantyDuration);
  }, [additionalDetails.warrantyDuration]);

  const handleSliderChange = (value: number | number[]) => {
    const updatedValue = Array.isArray(value) ? value[0] : value;
    setSliderValue(updatedValue);
    handleInputChange("warrantyDuration", updatedValue);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={["#00F0FF", "#FFEE00"]}
        style={styles.headerContainer}
        start={{ x: 0.5, y: 0.9 }}
      >
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color="#000"
            onPress={() => router.push("/screens/AddProductDetailsScreen")}
          />
          <Text style={styles.headerTitle}>Product Details</Text>
          <Ionicons
            name="close-outline"
            size={25}
            color="#000"
            onPress={() => router.push("/screens/MainDashboard")}
          />
        </View>
      </LinearGradient>

      {/* Form */}
      <View style={styles.form}>
        <Text style={styles.label}>Which store did you buy it from?</Text>
        <TextInput
          style={styles.input}
          placeholder="Laptop store"
          value={additionalDetails.storeName}
          onChangeText={(text) => handleInputChange("storeName", text)}
        />

        <Text style={styles.label}>Purchase date</Text>
        <TouchableOpacity onPress={() => setDatePickerVisible(true)}>
          <TextInput
            style={styles.input}
            placeholder="Select Date"
            value={additionalDetails.purchaseDate}
            editable={false}
          />
        </TouchableOpacity>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={new Date()}
          onConfirm={handleDatePickerConfirm}
          onCancel={handleDatePickerCancel}
        />

        {/* Warranty Option: In Warranty / No Warranty Toggle */}
        <Text style={styles.label}>Warranty Status</Text>
        <View style={styles.warrantyOptionContainer}>
          <TouchableOpacity
            style={[
              styles.warrantyButton,
              additionalDetails.warrantyOption === "inWarranty" &&
                styles.selectedButton,
            ]}
            onPress={() => handleWarrantyOptionChange("inWarranty")}
          >
            <Text style={styles.textwarranty}>In Warranty</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.warrantyButton,
              additionalDetails.warrantyOption === "noWarranty" &&
                styles.selectedButton,
            ]}
            onPress={() => handleWarrantyOptionChange("noWarranty")}
          >
            <Text style={styles.textwarranty}>No Warranty</Text>
          </TouchableOpacity>
        </View>

        {/* Warranty Duration */}
        <Text style={styles.label}>Warranty Duration (months)</Text>
        <Slider
          value={sliderValue}
          minimumValue={12}
          maximumValue={36}
          step={2}
          onValueChange={handleSliderChange}
          minimumTrackTintColor="#8FFF00"
          maximumTrackTintColor="#BDBDBD"
          trackStyle={styles.trackStyle}
          thumbStyle={styles.thumbStyle}
          animateTransitions={true}
          animationType="spring"
          disabled={additionalDetails.warrantyOption === "noWarranty"} // Disable slider when "No Warranty" is selected
        />
        <View style={styles.sliderValuesContainer}>
          <Text style={[styles.sliderValue, { color: "#828282" }]}>
            {minSliderValue}
          </Text>
          <Text style={styles.sliderValue}>{sliderValue}</Text>
          <Text style={[styles.sliderValue, { color: "#828282" }]}>
            {maxSliderValue}
          </Text>
        </View>

        {/* Additional Warranty (Yes/No Checkboxes) */}
        <Text style={styles.label}>
          Any additional warranty for the product?
        </Text>
        <View style={styles.checkboxAndInputContainer}>
          <View style={styles.checkboxItem}>
            <Checkbox
              value={additionalDetails.additionalWarrantyOption === false}
              onValueChange={() =>
                handleInputChange("additionalWarrantyOption", false)
              }
              color="black"
            />
            <Text style={styles.checkboxText}>No</Text>
          </View>

          <View style={styles.checkboxItem}>
            <Checkbox
              value={additionalDetails.additionalWarrantyOption === true}
              onValueChange={() =>
                handleInputChange("additionalWarrantyOption", true)
              }
              color="black"
            />
            <Text style={styles.checkboxText}>Yes</Text>
          </View>

          <TextInput
            style={[
              styles.input,
              styles.additionalWarrantyInput,
              { backgroundColor: additionalDetails.additionalWarrantyOption ? "#FFF" : "#F0F0F0" }, // Grey out if "No" is selected
            ]}
            placeholder="Duration"
            value={additionalDetails.additionalWarrantyDuration}
            onChangeText={(text) =>
              handleInputChange("additionalWarrantyDuration", text)
            }
            editable={additionalDetails.additionalWarrantyOption} // Disable if "No" is selected
          />
        </View>

        {/* Warranty Provider */}
        <Text style={styles.label}>Warranty Provider</Text>
        <TextInput
          style={styles.input}
          placeholder="Lorem Ipsum"
          value={additionalDetails.warrantyProvider}
          onChangeText={(text) => handleInputChange("warrantyProvider", text)}
        />

        {/* Label */}
        <Text style={styles.label}>Add Label </Text>
        <TextInput
          style={styles.input}
          placeholder="e.g., Lounge/Bedroom"
          value={additionalDetails.label}
          onChangeText={(text) => handleInputChange("label", text)}
        />

        {/* Confirm Button */}
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push("/screens/MainDashboard")}
        >
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#EDEDED" },

  headerContainer: { paddingTop: 16, borderBottomWidth: 2 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  headerTitle: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: "#000",
  },

  form: {
    padding: 16,
    width: "90%",
    alignSelf: "center",
  },

  label: {
    marginBottom: 4,
    fontSize: 12,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
  },

  input: {
    borderWidth: 1.5,
    padding: 16,
    marginBottom: 8,
    backgroundColor: "#FFF",
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

  checkboxAndInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },

  checkboxText: {
    marginLeft: 8,
    fontFamily: "PoppinsMedium",
    fontSize: 14,
  },

  warrantyOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 16,
  },

  warrantyButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#BDBDBD",
  },

  textwarranty: {
    fontFamily: "PoppinsMedium",
  },

  selectedButton: {
    backgroundColor: "#FFF",
    borderColor: "#000",
  },

  confirmButton: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    alignSelf: "center",
    marginTop: 8,
  },

  confirmButtonText: {
    color: "#FFF",
    fontSize: 13,
    fontFamily: "PoppinsSemiBold",
  },

  additionalWarrantyInput: {
    flex: 0.75,
  },
});

export default AdditionalDetailsScreen;
