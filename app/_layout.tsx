import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import SplashScreen from '../app/screens/SplashScreenComponent'; // Import your splash screen

const RootLayout = () => {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    const prepareApp = async () => {
      // Simulate resource loading (e.g., fonts, assets)
      await new Promise(resolve => setTimeout(resolve, 3000)); // Delay for 3 seconds
      setIsAppReady(true);
    };

    prepareApp();
  }, []);

  if (!isAppReady) {
    return <SplashScreen />; // Show SplashScreen while loading
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}

export default RootLayout;