import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-gifted-charts"; // Use LineChart component

const { width, height } = Dimensions.get("window");

const ProductWarrantyDetails = () => {
  // Dynamic data for the chart (example data)
  const [paidValue, setPaidValue] = useState(2000);
  const [currentValue, setCurrentValue] = useState(1100);

  // Sample dynamic data for the chart
  const chartData = [
    { value: 2000,
      hideDataPoint: false,
      dataPointLabelShiftY: -20,
      dataPointLabelComponent: () => {
        return (
            <View
            style={{
                backgroundColor: 'transparent',
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 4,
            }}>
            <Text style={{color: 'black'}}>$2000</Text>
            </View>
        );
      }
    },
    { value: 1500 },
    { value: 1800 },
    { value: 1400 },
    { value: 1200 },
    { value: 1100,
      hideDataPoint: false,
      dataPointLabelShiftY: -30,
      dataPointLabelComponent: () => {
        return (
            <View
            style={{
                backgroundColor: 'transparent',
                paddingHorizontal: 8,
                paddingVertical: 5,
                borderRadius: 4,
            }}>
            <Text style={{color: 'black'}}>$1100</Text>
            </View>
        );
      }
     },
  ];

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
            <Text style={styles.productTitle}>Airbook Ultra</Text>
            <Text style={styles.productLocation}>John's Laptop</Text>
            <View style={styles.warrantyContainer}>
              <Text style={styles.warrantyText}>Warranty expires in</Text>
              <Text style={styles.warrantyDuration}>18 months</Text>
            </View>

            {/* Model & Serial Details */}
            <View style={styles.modelDetails}>
              <View style={styles.modelRow}>
                <View style={styles.modelDetailColumn}>
                  <Text style={styles.modelLabel}>Model:</Text>
                  <Text style={styles.modelValue}>1856SKNS00</Text>
                </View>
                <View style={styles.modelDetailColumn}>
                  <Text style={styles.modelLabel}>Serial no:</Text>
                  <Text style={styles.modelValue}>505145663</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.likeContainer}>
            <Text style={styles.likeText}>Like this product?</Text>
            <View style={styles.likeIcons}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/icons/like.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.dislikeIcon}>
                <Image
                  source={require('../assets/images/icons/dislike.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Graph */}
        <View style={styles.graphContainer}>

          {/* Curved AreaChart Component */}
          <LineChart
            areaChart
            curved
            data={chartData}
            width={width} // Chart width
            height={150} // Chart height
            color="#000" // Line color (black)
            startFillColor="#FFEE00"
            endFillColor="#FFEE00"
            startOpacity={1}
            endOpacity={1}
            hideYAxisText
            thickness1={4}
            showVerticalLines
            hideRules
            hideAxesAndRules
          />

          <Text style={styles.graphCenterText}>Valuation Trend</Text>
        </View>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/images/icons/warranty.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Extend Warranty</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/images/icons/sell.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Sell this Product</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/images/icons/receipt.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>View Receipt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              source={require('../assets/images/icons/repair.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>Repairs & Service</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.deleteButton}>
          <Image
            source={require('../assets/images/icons/delete.png')}
            style={styles.icon}
          />
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
    fontFamily: "PoppinsMedium",
  },
  topSection: {
    flex: 0.5,
    backgroundColor: "#EDEDED",
    padding: 42,
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: 32,
    right: 16,
  },
  productDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  productTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  productLocation: {
    fontSize: 14,
    color: "#888",
    marginBottom: 8,
  },
  warrantyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  warrantyText: {
    fontSize: 12,
    color: "#000",
    marginRight: 4,
  },
  warrantyDuration: {
    fontSize: 12,
    color: "#000",
    backgroundColor: "#8FFF00",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
  },
  modelDetails: {
    marginTop: 12,
    width: "80%",
  },
  modelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modelDetailColumn: {
    width: "45%",
  },
  modelLabel: {
    fontSize: 12,
    color: "#000",
    marginBottom: 4,
  },
  modelValue: {
    fontSize: 14,
    color: "#828282",
  },
  likeContainer: {
    alignItems: "flex-start",
    marginTop: "25%",
  },
  likeText: {
    fontSize: 14,
    color: "#828282",
    marginBottom: 8,
  },
  likeIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  dislikeIcon: {
    marginLeft: 12,
  },
  graphContainer: {
    alignItems: "center",
    marginTop: 16,
    width: '100%',
  },
  
  graphCenterText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  bottomSection: {
    flex: 0.5,
    backgroundColor: "#00F0FF",
    padding: 16,
    borderTopWidth: 2,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  card: {
    width: "45%",
    backgroundColor: "#FFF",
    padding: 32,
    justifyContent: "center",
    borderRadius: 2,
    borderWidth: 2,
    borderColor: "#000",
  },
  cardText: {
    marginTop: 8,
    fontSize: 14,
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
  },
  icon: {
    width: 24,
    height: 24,
  },
  squareDot: {
    width: 8,
    height: 8,
    backgroundColor: "#000",
    borderRadius: 2,
    position: "absolute",
  },
  chartStyle: {
    borderRadius: 8,
    marginTop: 20,
  },
});

export default ProductWarrantyDetails;
