import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const AddProductDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const [formData, setFormData] = useState({
    purchasePrice: "",
    currency: "USD",
    productCategory: "",
    productName: "",
    brandName: "",
    serialNumber: "",
    modelNumber: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const navigateToDashboard = () => {
    router.push("/screens/MainDashboard");
  };

  return (
    <SafeAreaView style={styles.container}>
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
            onPress={navigateToDashboard}
          />
          <Text style={styles.headerTitle}>Product Details</Text>
          <Ionicons
            name="close-outline"
            size={28}
            onPress={navigateToDashboard}
          />
        </View>
      </LinearGradient>

      {/* Form */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.form}>
          {/* Purchase Price */}
          <Text style={styles.purchasePriceLabel}>Purchase Price</Text>
          <View style={styles.purchasePriceSection}>
            <TextInput
              style={styles.purchasePriceInput}
              placeholder="2000.00"
              keyboardType="numeric"
              value={formData.purchasePrice}
              onChangeText={(text) => handleInputChange("purchasePrice", text)}
            />
            <View style={styles.currencyDropdownWrapper}>
              <Picker
                selectedValue={formData.currency}
                style={styles.currencyDropdown}
                onValueChange={(itemValue: string) =>
                  handleInputChange("currency", itemValue)
                }
              >
                <Picker.Item label="USD" value="USD" />
                <Picker.Item label="INR" value="INR" />
              </Picker>
            </View>
          </View>

          {/* Other Fields */}
          <Text style={styles.label}>Product Category</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={formData.productCategory}
              onValueChange={(itemValue: string) =>
                handleInputChange("productCategory", itemValue)
              }
            >
              <Picker.Item label="Laptops" value="Laptops" />
              <Picker.Item label="Mobiles" value="Mobiles" />
            </Picker>
          </View>

          <Text style={styles.label}>Product Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter product name"
            value={formData.productName}
            onChangeText={(text) => handleInputChange("productName", text)}
          />

          <Text style={styles.label}>Brand Name</Text>
          <View style={styles.picker}>
            <Picker
              selectedValue={formData.brandName}
              onValueChange={(itemValue: string) =>
                handleInputChange("brandName", itemValue)
              }
            >
              <Picker.Item label="Green apple" value="Green apple" />
              <Picker.Item label="Other" value="Other" />
            </Picker>
          </View>

          <Text style={styles.label}>Serial Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter serial number"
            value={formData.serialNumber}
            onChangeText={(text) => handleInputChange("serialNumber", text)}
          />

          <Text style={styles.label}>Model Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter model number"
            value={formData.modelNumber}
            onChangeText={(text) => handleInputChange("modelNumber", text)}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/screens/AdditionalDetailsScreen")}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
  },
  headerContainer: {
    paddingTop: 16,
    borderBottomWidth: 2,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "PoppinsSemiBold",
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  form: {
    marginTop: 8,
    width: '90%',
    alignSelf: 'center',
  },
  purchasePriceLabel: {
    fontSize: 14,
    marginBottom: 2,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
  },
  purchasePriceSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    borderBottomWidth: 1.5,
    borderColor: "#000",
    width: '80%',
    alignSelf: 'center',
  },
  purchasePriceInput: {
    flex: 1,
    fontSize: 20,
    color: "#000",
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
  },
  currencyDropdownWrapper: {
    flex: 1,
    fontFamily: 'PoppinsMedium',
  },
  currencyDropdown: {
    backgroundColor: "transparent",
    width: '90%',
    fontFamily: 'PoppinsMedium',
  },
  picker: {
    backgroundColor: "#FFFFFF",
    marginBottom: 16,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 1,
    fontFamily: 'PoppinsMedium',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: "#000",
    fontFamily: "PoppinsMedium",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 1,
    paddingHorizontal: 16,
    height: 55,
    marginBottom: 16,
    backgroundColor: "#FFF",
    fontFamily: 'PoppinsMedium',
  },
  footer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  continueButton: {
    backgroundColor: "#000",
    paddingVertical: 16,
    borderRadius: 1,
    alignSelf: "center",
    alignItems: 'center',
    width: "90%",
    marginBottom: 16,
  },
  continueButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
    fontFamily: 'PoppinsSemiBold',
  },
});

export default AddProductDetailsScreen;
