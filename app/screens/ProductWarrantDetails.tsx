import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const ProductWarrantyDetails = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        {/* Close Button */}
        <TouchableOpacity style={styles.closeButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>

        {/* Product Details */}
        <View style={styles.productDetails}>
          <View>
            <Text style={styles.productTitle}>Smart TV</Text>
            <Text style={styles.productLocation}>Drawing room</Text>
            <View style={styles.warrantyContainer}>
              <Text style={styles.warrantyText}>Warranty expires in</Text>
              <Text style={styles.warrantyDuration}>18 months</Text>
            </View>
            <View style={styles.modelDetails}>
              <Text style={styles.modelText}>Model: 1856SKNS00</Text>
              <Text style={styles.serialText}>Serial no: 505145663</Text>
            </View>
          </View>
          <View style={styles.likeContainer}>
            <Text style={styles.likeText}>Like this product?</Text>
            <View style={styles.likeIcons}>
              <TouchableOpacity>
                <Ionicons name="thumbs-up-sharp" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.dislikeIcon}>
                <Ionicons name="thumbs-down-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Graph */}
        <View style={styles.graphContainer}>
          <Text style={styles.graphLeftLabel}>You paid</Text>
          <Text style={styles.graphLeftValue}>$2000</Text>
          <LinearGradient
            colors={["#FFEE00", "#FFEE00"]}
            style={styles.graph}
          />
          <Text style={styles.graphRightLabel}>Current value</Text>
          <Text style={styles.graphRightValue}>$1100</Text>
          <Text style={styles.graphCenterText}>Valuation Trend</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <MaterialIcons name="verified-user" size={28} color="#000" />
            <Text style={styles.cardText}>Extend Warranty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <FontAwesome5 name="dollar-sign" size={28} color="#000" />
            <Text style={styles.cardText}>Sell this Product</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <Ionicons name="receipt-outline" size={28} color="#000" />
            <Text style={styles.cardText}>View Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <MaterialIcons name="build" size={28} color="#000" />
            <Text style={styles.cardText}>Repairs & Service</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <Ionicons name="trash-outline" size={20} color="red" />
          <Text style={styles.deleteText}>Delete this product</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  topSection: {
    flex: 0.5,
    backgroundColor: "#FFFFFF",
    padding: 16,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  productLocation: {
    fontSize: 16,
    color: "#888",
    marginBottom: 8,
  },
  warrantyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  warrantyText: {
    fontSize: 14,
    color: "#888",
    marginRight: 4,
  },
  warrantyDuration: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
    backgroundColor: "#DFF6E0",
    paddingHorizontal: 4,
    borderRadius: 4,
  },
  modelDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modelText: {
    fontSize: 14,
    color: "#000",
  },
  serialText: {
    fontSize: 14,
    color: "#000",
  },
  likeContainer: {
    alignItems: "flex-end",
  },
  likeText: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  likeIcons: {
    flexDirection: "row",
  },
  dislikeIcon: {
    marginLeft: 12,
  },
  graphContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  graph: {
    height: 100,
    width: width - 32,
    marginVertical: 16,
    borderRadius: 8,
  },
  graphLeftLabel: {
    position: "absolute",
    left: 16,
    top: 16,
    fontSize: 12,
    color: "#000",
  },
  graphLeftValue: {
    position: "absolute",
    left: 16,
    top: 36,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  graphRightLabel: {
    position: "absolute",
    right: 16,
    top: 16,
    fontSize: 12,
    color: "#000",
  },
  graphRightValue: {
    position: "absolute",
    right: 16,
    top: 36,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  graphCenterText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  bottomSection: {
    flex: 0.5,
    backgroundColor: "#DFF6FF",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  card: {
    width: "48%",
    backgroundColor: "#FFF",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
  },
  deleteButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  deleteText: {
    marginLeft: 8,
    fontSize: 14,
    color: "red",
    fontWeight: "bold",
  },
});

export default ProductWarrantyDetails;
