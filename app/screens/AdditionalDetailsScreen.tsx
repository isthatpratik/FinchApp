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
  });

  const handleInputChange = (key: string, value: string) => {
    setAdditionalDetails({ ...additionalDetails, [key]: value });
  };

  const handleToggleWarranty = () => {
    setAdditionalDetails({
      ...additionalDetails,
      additionalWarranty: !additionalDetails.additionalWarranty,
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
        <TextInput
          style={styles.input}
          placeholder="10 Jun 2020"
          value={additionalDetails.purchaseDate}
          onChangeText={(text) => handleInputChange("purchaseDate", text)}
        />

        <Text style={styles.label}>Duration (months)</Text>
        <Slider
          style={styles.slider}
          minimumValue={12}
          maximumValue={36}
          step={1}
          value={additionalDetails.warrantyDuration}
          onValueChange={(value) =>
            handleInputChange("warrantyDuration", value.toString())
          }
        />
        <Text style={styles.sliderValue}>
          {additionalDetails.warrantyDuration} months
        </Text>

        <Text style={styles.label}>
          Any additional warranty for the product?
        </Text>
        <Switch
          value={additionalDetails.additionalWarranty}
          onValueChange={handleToggleWarranty}
        />
        {additionalDetails.additionalWarranty && (
          <TextInput
            style={styles.input}
            placeholder="Duration"
            value={additionalDetails.additionalWarrantyDuration}
            onChangeText={(text) =>
              handleInputChange("additionalWarrantyDuration", text)
            }
          />
        )}

        <Text style={styles.label}>Warranty Provider</Text>
        <TextInput
          style={styles.input}
          placeholder="Lorem Ipsum"
          value={additionalDetails.warrantyProvider}
          onChangeText={(text) => handleInputChange("warrantyProvider", text)}
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
  container: { 
    flex: 1, 
    backgroundColor: "#EDEDED" },

  headerContainer: { 
    paddingTop: 32, 
    borderBottomWidth: 2 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
  },

  headerTitle: { 
    fontSize: 20, 
    fontFamily: "PoppinsSemiBold", 
    color: "#000" },

  form: { 
    padding: 32 
  },

  label: { 
    marginBottom: 8, 
    color: "#000", 
    fontFamily: "PoppinsMedium" 
  },
  
  input: {
    borderWidth: 1.5,
    padding: 10,
    marginBottom: 16,
    backgroundColor: "#FFF",
  },
  slider: { marginVertical: 16 },
  sliderValue: { alignSelf: "flex-end", marginBottom: 16 },
  confirmButton: {
    paddingVertical: 16,
    alignItems: "center",
    backgroundColor: "#000",
  },
  confirmButtonText: { color: "#FFF" },
});

export default AdditionalDetailsScreen;
