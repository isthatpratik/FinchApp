import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const SellingCriteriaStep2Screen = ({ navigation }: any) => {
  const [description, setDescription] = useState("");
  const [sellingOption, setSellingOption] = useState("Pick-up");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isNegotiable, setIsNegotiable] = useState(false);

  const handleListProduct = () => {
    // Proceed to success popup
    navigation.navigate("SuccessPopup");
  };

  return (
    <View style={styles.container}>
      {/* Product Information */}
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>Airbook Ultra</Text>
        <Text>Purchased: 10 Jun 2020</Text>
        <Text>Warranty expires in: 18 months</Text>
      </View>

      {/* Selling Option */}
      <Text style={styles.label}>Choose a selling option</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            sellingOption === "Pick-up" && styles.selectedOption,
          ]}
          onPress={() => setSellingOption("Pick-up")}
        >
          <Text style={sellingOption === "Pick-up" && styles.selectedText}>
            Pick-up
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            sellingOption === "Delivery" && styles.selectedOption,
          ]}
          onPress={() => setSellingOption("Delivery")}
        >
          <Text style={sellingOption === "Delivery" && styles.selectedText}>
            Delivery
          </Text>
        </TouchableOpacity>
      </View>

      {/* Product Description */}
      <Text style={styles.label}>Add a description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
        placeholder="Type a description of your product"
        maxLength={140}
        multiline
      />

      {/* Payment Method */}
      <Text style={styles.label}>Preferred payment method</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            paymentMethod === "Cash" && styles.selectedOption,
          ]}
          onPress={() => setPaymentMethod("Cash")}
        >
          <Text style={paymentMethod === "Cash" && styles.selectedText}>
            Cash
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            paymentMethod === "Bank Transfer" && styles.selectedOption,
          ]}
          onPress={() => setPaymentMethod("Bank Transfer")}
        >
          <Text
            style={paymentMethod === "Bank Transfer" && styles.selectedText}
          >
            Bank Transfer
          </Text>
        </TouchableOpacity>
      </View>

      {/* Negotiability */}
      <Text style={styles.label}>Is the price negotiable?</Text>
      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            isNegotiable && styles.selectedOption,
          ]}
          onPress={() => setIsNegotiable(true)}
        >
          <Text style={isNegotiable && styles.selectedText}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            !isNegotiable && styles.selectedOption,
          ]}
          onPress={() => setIsNegotiable(false)}
        >
          <Text style={!isNegotiable && styles.selectedText}>No</Text>
        </TouchableOpacity>
      </View>

      {/* List Product Button */}
      <TouchableOpacity style={styles.listButton} onPress={handleListProduct}>
        <Text style={styles.listButtonText}>List the product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  productInfo: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  optionButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    alignItems: "center",
    marginRight: 8,
  },
  selectedOption: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    height: 100,
    textAlignVertical: "top",
  },
  listButton: {
    backgroundColor: "#000",
    padding: 16,
    alignItems: "center",
    borderRadius: 8,
    marginTop: 16,
  },
  listButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SellingCriteriaStep2Screen;