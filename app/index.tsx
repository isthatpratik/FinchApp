import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen'; // Correct import
import { useFonts } from 'expo-font';
import AppNavigator from './navigation/AppNavigator'; // Import the AppNavigator

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function Index() {
  const [fontsLoaded] = useFonts({
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf'),
  });

  useEffect(() => {
    const hideSplash = async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync(); // Hide splash screen once fonts are loaded
      }
    };

    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing until fonts are loaded
  }

  return (
    <SafeAreaProvider>
      <AppNavigator />  {/* AppNavigator already handles the navigation */}
    </SafeAreaProvider>
  );
}
