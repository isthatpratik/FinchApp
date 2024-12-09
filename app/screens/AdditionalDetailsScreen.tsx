import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";
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
    additionalWarrantyOption: false,
    additionalWarrantyDuration: "",
    warrantyProvider: "",
    label: "",
    warrantyOption: null as string | null,
  });

  const [isDatePickerVisible, setDatePickerVisible] = useState(false);

  const handleInputChange = (key: string, value: any) => {
    setAdditionalDetails({ ...additionalDetails, [key]: value });
  };

  const handleDatePickerConfirm = (date: Date) => {
    setAdditionalDetails({
      ...additionalDetails,
      purchaseDate: date.toLocaleDateString(),
    });
    setDatePickerVisible(false);
  };

  const handleDatePickerCancel = () => {
    setDatePickerVisible(false);
  };

  const handleCheckboxChange = (option: boolean) => {
    setAdditionalDetails({
      ...additionalDetails,
      additionalWarrantyOption: option,
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

        {/* Warranty Option */}
        <Text style={styles.label}>Warranty Status</Text>
        <View style={styles.warrantyOptionContainer}>
          <TouchableOpacity
            style={[
              styles.warrantyButton,
              additionalDetails.warrantyOption === "inWarranty" &&
                styles.selectedButton,
            ]}
            onPress={() =>
              handleInputChange("warrantyOption", "inWarranty")
            }
          >
            <Text>In Warranty</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.warrantyButton,
              additionalDetails.warrantyOption === "noWarranty" &&
                styles.selectedButton,
            ]}
            onPress={() =>
              handleInputChange("warrantyOption", "noWarranty")
            }
          >
            <Text>No Warranty</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Warranty */}
        <Text style={styles.label}>
          Any additional warranty for the product?
        </Text>
        <View style={styles.checkboxWithInput}>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={!additionalDetails.additionalWarrantyOption}
              onValueChange={() => handleCheckboxChange(false)}
            />
            <Text style={styles.checkboxLabel}>No</Text>
          </View>
          <View style={styles.checkboxRow}>
            <CheckBox
              value={additionalDetails.additionalWarrantyOption}
              onValueChange={() => handleCheckboxChange(true)}
            />
            <Text style={styles.checkboxLabel}>Yes</Text>
          </View>
          <TextInput
            style={[styles.input, styles.additionalWarrantyInput]}
            placeholder="Enter duration"
            value={additionalDetails.additionalWarrantyDuration}
            onChangeText={(text) =>
              handleInputChange("additionalWarrantyDuration", text)
            }
          />
        </View>

        {/* Warranty Provider */}
        <Text style={styles.label}>Warranty Provider</Text>
        <TextInput
          style={styles.input}
          placeholder="Lorem Ipsum"
          value={additionalDetails.warrantyProvider}
          onChangeText={(text) =>
            handleInputChange("warrantyProvider", text)
          }
        />

        {/* Label */}
        <Text style={styles.label}>Label (e.g., Lounge/Bedroom)</Text>
        <TextInput
          style={styles.input}
          placeholder="Label"
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
    color: "#000",
    fontFamily: "PoppinsMedium",
  },

  input: {
    borderWidth: 1.5,
    padding: 12,
    marginBottom: 8,
    backgroundColor: "#FFF",
    borderColor: "#BDBDBD",
    borderRadius: 4,
  },

  warrantyOptionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },

  warrantyButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: "#BDBDBD",
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginHorizontal: 4,
  },

  selectedButton: {
    borderColor: "#000",
    backgroundColor: "#EDEDED",
  },

  checkboxWithInput: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },

  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  checkboxLabel: {
    fontSize: 16,
    color: "#000",
    marginHorizontal: 8,
    fontFamily: "PoppinsMedium",
  },

  additionalWarrantyInput: {
    flex: 1,
    marginBottom: 0,
  },

  confirmButton: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    alignSelf: "center",
    marginTop: 8,
    borderRadius: 4,
  },

  confirmButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "PoppinsMedium",
  },
});


export default AdditionalDetailsScreen;
