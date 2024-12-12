import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import ProfilePage from "./Profile";
import CameraScreen from "./CameraScreen";
import AddProductDetailsScreen from "./AddProductDetailsScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import SpecialsScreen from "./Specials";
import SellModal from "../components/SellModal";


const { height } = Dimensions.get("window");
const Drawer = createDrawerNavigator();

const MainDashboardScreen: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
        "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#000" />
        <Text className="text-base font-[Poppins-Medium] mt-2">Loading...</Text>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="MainDashboard"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: Dimensions.get("window").width * 0.4,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          borderRightWidth: 3.5, 
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainDashboard" component={DashboardContent} />
      <Drawer.Screen
        name="AddProductDetailsScreen"
        component={AddProductDetailsScreen}
      />
      <Drawer.Screen name="Specials" component={Specials} />
      <Drawer.Screen name="Buy" component={BuyScreen} />
      <Drawer.Screen name="Sell" component={SellScreen} />
      <Drawer.Screen name="ProfilePage" component={ProfilePage} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      <Drawer.Screen name="CameraScreen" component={CameraScreen} />
    </Drawer.Navigator>
  );
};

const DashboardContent = ({ navigation }: any) => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Top Section */}
      <View className="h-[60%] px-4 pt-10 sm:px-6 md:px-8 relative">
        <LinearGradient
          colors={["#FFEE00", "#00F0FF"]}
          style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
          start={{ x: 0.5, y: 0.985 }}
        />
        <View className="flex-row justify-between items-center p-2 mb-[20%] sm:mb-[30%] md:mb-[40%]">
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/images/menu-icon.png")}
              className="sm:w-5 sm:h-5 w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View className="flex-row gap-10 sm:gap-8">
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
              <Image
                source={require("../assets/images/message-icon.png")}
                className="sm:w-5 sm:h-5 w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                source={require("../assets/images/notification-bell.png")}
                className="sm:w-5 sm:h-5 w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="items-center my-4">
          <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
            <Image
              source={require("../assets/images/camera-icon.png")}
              className="w-10 h-6 sm:w-12 sm:h-8"
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/Popup.png")}
            className="w-[70%] aspect-[3/1] sm:w-[80%]"
            resizeMode="contain"
          />
        </View>
        <Text className="text-center mt-16 sm:mt-8 text-[14px] sm:text-sm text-black font-[Poppins-Medium]">
          or
        </Text>
        <TouchableOpacity
          className="mt-2 self-center px-4 py-2 border-2 border-black rounded-[2]"
          style={{ borderWidth: 1.5 }}
          onPress={() => navigation.navigate("AddProductDetailsScreen")}
        >
          <Text className="text-[14px] sm:text-sm text-black font-[Poppins-Medium]">
            + Add manually
          </Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View className="h-[40%] bg-gray-100 p-3 sm:p-4 border-t-2">
        <View className="self-center w-8 h-1 bg-gray-400 rounded-full mb-3" />
        <Text className="text-center text-[20px] sm:text-[16px] mb-4 font-[Poppins-SemiBold]">
          My Products
        </Text>
        <View className="items-center mt-8 sm:mt-4">
          <Image
            source={require("../assets/images/empty-box.png")}
            className="w-16 h-16 sm:w-14 sm:h-14"
            resizeMode="contain"
          />
          <Text className="mt-4 text-[12px] sm:text-xs w-[120px] sm:w-[100px] text-center text-gray-500 font-[Poppins-Medium]">
            Gee! Add a product to get started
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CustomDrawerContent = (props: any) => {
  const [isSellModalVisible, setSellModalVisible] = useState(false);

  const openSellModal = () => {
    props.navigation.closeDrawer(); // Close the drawer
    setTimeout(() => {
      setSellModalVisible(true); // Open the modal after the drawer is closed
    }, 200); // Delay of 200ms (adjust as needed)
  };
  const closeSellModal = () => setSellModalVisible(false);

  return (
    <>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 32 }}>
    
      <DrawerItem
        icon={() => (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icons/specials.png")}
              resizeMode="contain"
              className="w-8 h-8"
            />
            <Text style={{ fontSize: 14, marginTop: 6, fontFamily: 'Poppins-SemiBold' }}>Specials</Text>
          </View>
        )}
        label="" 
        onPress={() => props.navigation.navigate("Specials")}
        labelStyle={{ display: 'none' }}
      />
      <DrawerItem
        icon={() => (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icons/Buy.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text style={{ fontSize: 14, marginTop: 6, fontFamily: 'Poppins-SemiBold' }}>Buy</Text> 
          </View>
        )}
        label=""
        onPress={() => props.navigation.navigate("Buy")}
        labelStyle={{ display: 'none' }} 
      />
      <DrawerItem
            icon={() => (
              <View style={{ flexDirection: "column", alignItems: "center" }}>
                <Image
                  source={require("../assets/images/icons/$.png")}
                  className="w-8 h-8"
                  resizeMode="contain"
                />
                <Text
                  style={{
                    fontSize: 14,
                    marginTop: 6,
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  Sell
                </Text>
              </View>
            )}
            label=""
            onPress={openSellModal} // Open modal instead of navigating
            labelStyle={{ display: "none" }}
          />
          <SellModal visible={isSellModalVisible} onClose={closeSellModal} />
      <DrawerItem
        icon={() => (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icons/Profile.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text style={{ fontSize: 14, marginTop: 6, fontFamily: 'Poppins-SemiBold' }}>Profile</Text> 
          </View>
        )}
        label="" 
        onPress={() => props.navigation.navigate("ProfilePage")}
        labelStyle={{ display: 'none' }}
      />
      <DrawerItem
        icon={() => (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icons/Settings.png")}
              className="w-8 h-8 aspect-auto"
              resizeMode="contain"
            />
            <Text style={{ fontSize: 14, marginTop: 6, fontFamily: 'Poppins-SemiBold' }}>Settings</Text> 
          </View>
        )}
        label="" 
        onPress={() => props.navigation.navigate("Settings")}
        labelStyle={{ display: 'none' }} 
      />
      <DrawerItem
        icon={() => (
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Image
              source={require("../assets/images/icons/Help.png")}
              className="w-8 h-8"
              resizeMode="contain"
            />
            <Text style={{ fontSize: 14, marginTop: 6, fontFamily: 'Poppins-SemiBold' }}>Help</Text> 
          </View>
        )}
        label="" 
        onPress={() => props.navigation.navigate("Help")}
        labelStyle={{ display: 'none' }} 
      />
    </View>
  </DrawerContentScrollView>
    </>
  )

  
};


const Specials = () => {
  return (
    <SpecialsScreen />
  )
};

const BuyScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-xl font-[Poppins-SemiBold]">Buy Screen</Text>
  </View>
);

const SellScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-xl font-[Poppins-SemiBold]">Sell Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-xl font-[Poppins-SemiBold]">Settings Screen</Text>
  </View>
);

const HelpScreen = () => (
  <View className="flex-1 justify-center items-center">
    <Text className="text-xl font-[Poppins-SemiBold]">Help Screen</Text>
  </View>
);

export default MainDashboardScreen;