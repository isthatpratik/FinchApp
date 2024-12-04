import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'; // Import the splash screen API

const SplashScreenComponent: React.FC = () => {
  // Create animated values for the logo scale and text opacity
  const logoScale = new Animated.Value(0); // Initial scale 0 (invisible)
  const textOpacity = new Animated.Value(0); // Initial opacity 0 for text

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.preventAutoHideAsync(); // Keep splash screen visible until custom one is ready

      // Animate logo scale with a faster zoom and slower easing effect
      Animated.timing(logoScale, {
        toValue: 1, // Scale to original size
        duration: 800, // Faster animation duration (0.8 seconds)
        easing: Easing.out(Easing.quad), // Apply slow ease-in effect
        useNativeDriver: true, // Use native driver for performance
      }).start();

      // Show the text after the logo animation by animating the text opacity
      setTimeout(() => {
        Animated.timing(textOpacity, {
          toValue: 1, // Fade in the text
          duration: 500, // Fade duration (0.5 seconds)
          useNativeDriver: true, // Use native driver for performance
        }).start();

        SplashScreen.hideAsync(); // Hide the splash screen
      }, 800); // Wait for 0.8 seconds (logo animation duration)
    };

    hideSplash();
  }, []);

  return (
    <View style={styles.container}>
      {/* Diagonal background with two intersecting colored areas */}
      <View style={styles.diagonalF2F2F2} />

      {/* Animated logo scaling with easing */}
      <Animated.View
        style={[
          styles.logoContainer,
          {
            transform: [{ scale: logoScale }], // Apply the scale transformation
          },
        ]}
      >
        <Image
          source={require('../assets/images/splash-icon.png')} // Correct image path
          style={styles.logo}
        />
      </Animated.View>

      {/* Text fading in after animation */}
      <Animated.View style={[styles.textContainer, { opacity: textOpacity }]}>
        <Text style={styles.text}>okfinch.ai</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: 'transparent', // Make the background transparent so the diagonals show
  },
  diagonalF2F2F2: {
    position: 'absolute',
    bottom: 2,
    left: -70,
    width: '200%', // Ensure the diagonal covers the full screen width
    height: '200%', // Ensure the diagonal covers the full screen height
    backgroundColor: '#F2F2F2', // F2F2F2 diagonal
    transform: [{ rotate: '-45deg' }], // Rotate to create the diagonal effect from bottom-left to top-right
    zIndex: -1, // Place behind the logo and text
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Keep logo centered even as the text appears
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain', // Make sure logo maintains aspect ratio
  },
  textContainer: {
    position: 'absolute', // Make sure the text stays at the bottom
    bottom: 40, // Adjust the bottom position to ensure the text is positioned correctly
    width: '100%',
    alignItems: 'center', // Center the text horizontally
  },
  text: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins',
    opacity: 0.5,
  },
});

export default SplashScreenComponent;
