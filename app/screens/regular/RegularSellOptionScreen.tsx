import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing icon library for the cross button

const SellOptionsScreen = ({ navigation }: any) => {
  const router = useRouter();

  const handleRegularSell = () => {
    router.push('/screens/regular/SelectItemstoSellScreenR');
  };

  const handleFastTrackSell = () => {
    alert('Fast-track Sell is not implemented yet.');
  };

  return (
    <View style={styles.container}>
      {/* Popup */}
      <View style={styles.popup}>
        {/* Cross Button */}
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={28} color="#000" />
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Choose an option</Text>

        {/* Regular Sell Option */}
        <TouchableOpacity style={[styles.optionBox, styles.optionBoxRegular]} onPress={handleRegularSell}>
          <Text style={styles.optionTitle}>Regular Sell</Text>
          <Text style={styles.optionDescription}>
            Sell your product through the usual process and set your criteria.
          </Text>
        </TouchableOpacity>

        {/* Fast-track Sell Option */}
        <TouchableOpacity style={[styles.optionBox, styles.optionBoxFastTrack]} onPress={handleFastTrackSell}>
          <Text style={styles.optionTitle}>Fast-track Sell</Text>
          <Text style={styles.optionDescription}>
            Quickly sell your product with fewer steps and faster results.
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dimmed background to focus on the popup
  },
  popup: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 1.5,
    width: '80%', // Adjusted width for better popup size
    alignItems: 'center',
    elevation: 3,
    position: 'relative', // Required for the cross button
  },
  closeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  optionBox: {
    width: '100%',
    padding: 16,
    borderRadius: 1, // Border radius set to 1
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  optionDescription: {
    fontSize: 14,
    color: '#555',
  },
  // Regular Sell Option Styling
  optionBoxRegular: {
    backgroundColor: '#FFCC00', // Yellow color for Regular Sell (matching typical 'regular' style)
  },
  // Fast-track Sell Option Styling
  optionBoxFastTrack: {
    backgroundColor: '#4CAF50', // Green color for Fast-track Sell (indicating quick and efficient)
  },
});

export default SellOptionsScreen;
