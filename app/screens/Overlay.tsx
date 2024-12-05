import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing back icon from Ionicons

interface OverlayProps {
  onGoBack: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ onGoBack }) => {
  return (
    <View style={styles.overlayContainer}>
      {/* Top section */}
      <View style={styles.topSection}>
        <TouchableOpacity onPress={onGoBack} style={styles.goBackButton}>
          <Ionicons name="arrow-back" size={25} color="#fff" /> {/* Back icon */}
        </TouchableOpacity>
        <Text style={styles.scanText}>Scan the receipt/barcode</Text>

        {/* Sample barcode image centered in the top section */}
        <View style={styles.sampleImageContainer}>
          <Image
            source={require('../assets/images/sample-barcode.png')}
            style={styles.sampleImage}
          />
        </View>
      </View>

      {/* Camera view and overlay */}
      <View style={styles.cameraOverlay}>
        <Image
          source={require('../assets/images/scan-overlay.png')}
          style={styles.scanOverlay}
        />
      </View>
    </View>
  );
};

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
    height: '30%',
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
    left: 36,
    top: 42,
    padding: 10,
    borderRadius: 50, // Round the button
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
    width: 300,  // Adjust the size of the barcode image
    height: 120, // Adjust the size of the barcode image
    resizeMode: 'contain',
  },
  cameraOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanOverlay: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    position: 'absolute',
    zIndex: 1,
    top: '40%',
  },
});

export default Overlay;
