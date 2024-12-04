import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen'; // Correct import
import { useFonts } from 'expo-font';
import MainDashboardScreen from './screens/MainDashboard';
import ProfilePage from './screens/Profile';
import SignUpScreen from './screens/SignUp';
import ProductWarrantyDetails from './screens/ProductWarrantyDetails';
import TermsAndConditionsScreen from './screens/TermsAndConditionsScreen';

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function Index() {
  const [fontsLoaded] = useFonts({
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
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
      {/* <TermsAndConditionsScreen /> */}
      {/* <MainDashboardScreen /> */}
      {/* <ProfilePage /> */}
      {/* <SignUpScreen /> */}
      <ProductWarrantyDetails />
    </SafeAreaProvider>
  );
}
