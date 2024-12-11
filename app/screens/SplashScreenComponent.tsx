import React, { useEffect } from "react";
import { View, Image, Text, Animated, Easing } from "react-native";
import * as SplashScreen from "expo-splash-screen";

const SplashScreenComponent: React.FC = () => {
  const logoScale = new Animated.Value(0);
  const textOpacity = new Animated.Value(0);

  useEffect(() => {
    const hideSplash = async () => {
      await SplashScreen.preventAutoHideAsync();

      Animated.timing(logoScale, {
        toValue: 1,
        duration: 800,
        easing: Easing.out(Easing.quad),
        useNativeDriver: true,
      }).start();

      setTimeout(() => {
        Animated.timing(textOpacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();

        SplashScreen.hideAsync();
      }, 800);
    };

    hideSplash();
  }, []);

  return (
    <View className="flex-1 relative">
      {/* Background Image */}
      <Image
        source={require("../assets/images/bg.png")}
        className="absolute top-0 left-0 w-full h-full"
        resizeMode="cover"
      />

      {/* Logo */}
      <Animated.View
        style={{
          transform: [{ scale: logoScale }],
        }}
        className="absolute justify-center items-center inset-0"
      >
        <Image
          source={require("../assets/images/splash-icon.png")}
          className="w-32 h-32"
          resizeMode="contain"
        />
      </Animated.View>

      {/* Text */}
      <Animated.View
        style={{ opacity: textOpacity }}
        className="absolute bottom-10 w-full items-center"
      >
        <Text className="text-sm text-black font-[Poppins] opacity-50">
          okfinch.ai
        </Text>
      </Animated.View>
    </View>
  );
};

export default SplashScreenComponent;
