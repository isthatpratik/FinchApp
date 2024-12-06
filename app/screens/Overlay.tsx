import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

interface OverlayProps {
  onGoBack: () => void; // Function to handle back navigation
}

const { width, height } = Dimensions.get('window');

const Overlay: React.FC<OverlayProps> = ({ onGoBack }) => {
  return (
    <SafeAreaView style={styles.overlayContainer}>
      {/* Top Section: Includes Back Button, Text and Sample Image */}
      <View style={styles.topSection}>
        <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
          {/* Back Button using Ionicons */}
          <Ionicons name="arrow-back" size={25} color="#fff" accessibilityLabel="Go back" />
        </TouchableOpacity>

        {/* Scan Text */}
        <Text style={styles.scanText}>Scan the receipt/barcode</Text>

        {/* Sample Barcode Image */}
        <View style={styles.sampleImageContainer}>
          <Image
            source={require('../assets/images/sample-barcode.png')}
            style={styles.sampleImage}
            accessibilityLabel="Sample barcode"
          />
        </View>
      </View>

      {/* Camera View and Overlay */}
      <View style={styles.cameraOverlay}>
        <Image
          source={require('../assets/images/scan-overlay.png')}
          style={styles.scanOverlay}
          accessibilityLabel="Scan overlay"
        />
      </View>
    </SafeAreaView>
  );
};

// Styles with dynamic scaling based on screen size
const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'space-between',
  },
  topSection: {
    height: '30%', // Dynamic height based on screen size
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  goBackButton: {
    position: 'absolute',
    left: 32,
    top: 42,
    padding: 16,
  },
  scanText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20, // Add spacing between the text and the image
  },
  sampleImageContainer: {
    marginTop: 20, // Centering the sample image
    justifyContent: 'center',
    alignItems: 'center',
  },
  sampleImage: {
    width: width * 0.8,  // Dynamic width based on screen size
    height: 120, // Adjust the size of the barcode image
    resizeMode: 'contain',
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanOverlay: {
    width: width * 0.9,  // Adjusting the size of the overlay dynamically
    height: width * 0.9, // Maintain a square shape for the overlay
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: '40%',
  },
});

export default Overlay;