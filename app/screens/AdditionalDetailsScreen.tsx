import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    warrantyOption: null as string | null, // Explicitly define as string | null
    additionalWarrantyOption: false, // Track additional warranty (Yes/No)
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

  const handleWarrantyOptionChange = (option: boolean) => {
    setAdditionalDetails({
      ...additionalDetails,
      additionalWarrantyOption: option,
    });
  };

  const handleWarrantySelectionChange = (option: string | null) => {
    setAdditionalDetails({
      ...additionalDetails,
      warrantyOption: option,
    });
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
              additionalDetails.warrantyOption === "inWarranty" && styles.selectedButton,
            ]}
            onPress={() => handleWarrantySelectionChange("inWarranty")}
          >
            <Text>In Warranty</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.warrantyButton,
              additionalDetails.warrantyOption === "noWarranty" && styles.selectedButton,
            ]}
            onPress={() => handleWarrantySelectionChange("noWarranty")}
          >
            <Text>No Warranty</Text>
          </TouchableOpacity>
        </View>

        {/* Warranty Duration */}
        <Text style={styles.label}>Warranty Duration (months)</Text>
        <Slider
          style={styles.slider}
          minimumValue={6}
          maximumValue={36}
          step={2}
          value={additionalDetails.warrantyDuration}
          onValueChange={(value) => handleInputChange("warrantyDuration", value)}
          thumbImage={require("../assets/images/slider.png")}
          minimumTrackTintColor="#8FFF00"
          maximumTrackTintColor="#BDBDBD"
        />
        <Text style={styles.sliderValue}>
          {additionalDetails.warrantyDuration} months
        </Text>

        {/* Additional Warranty (Yes/No Checkboxes) */}
        <Text style={styles.label}>Any additional warranty for the product?</Text>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={[
              styles.checkboxButton,
              additionalDetails.additionalWarrantyOption === false && styles.selectedButton,
            ]}
            onPress={() => handleWarrantyOptionChange(false)}
          >
            <Text>No</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.checkboxButton,
              additionalDetails.additionalWarrantyOption === true && styles.selectedButton,
            ]}
            onPress={() => handleWarrantyOptionChange(true)}
          >
            <Text>Yes</Text>
          </TouchableOpacity>
        </View>

        {additionalDetails.additionalWarrantyOption && (
          <TextInput
            style={styles.input}
            placeholder="Duration"
            value={additionalDetails.additionalWarrantyDuration}
            onChangeText={(text) =>
              handleInputChange("additionalWarrantyDuration", text)
            }
          />
        )}

        {/* Warranty Provider */}
        <Text style={styles.label}>Warranty Provider</Text>
        <TextInput
          style={styles.input}
          placeholder="Lorem Ipsum"
          value={additionalDetails.warrantyProvider}
          onChangeText={(text) => handleInputChange("warrantyProvider", text)}
        />

        {/* Label */}
        <Text style={styles.label}>Label (e.g., Lounge/Bedroom)</Text>
        <TextInput
          style={styles.input}
          placeholder="Label"
          value={additionalDetails.label}
          onChangeText={(text) => handleInputChange("label", text)}
        />
      </View>

      {/* Confirm Button */}
      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() => router.push("/screens/MainDashboard")}
      >
        <Text style={styles.confirmButtonText}>Confirm</Text>
      </TouchableOpacity>
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
    padding: 32,
  },

  label: {
    marginBottom: 8,
    color: "#000",
    fontFamily: "PoppinsMedium",
  },

  input: {
    borderWidth: 1.5,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#FFF",
  },

  slider: {
    marginVertical: 16,
    height: 5,
  },

  sliderValue: { alignSelf: "flex-end", marginBottom: 16 },

  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  checkboxButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#000",
  },

  selectedButton: {
    backgroundColor: "#FFF",
    borderColor: "#00F0FF",
  },

  warrantyOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  warrantyButton: {
    flex: 1,
    padding: 12,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#000",
  },

  confirmButton: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#000",
  },

  confirmButtonText: { color: "#FFF" },
});

export default AdditionalDetailsScreen;