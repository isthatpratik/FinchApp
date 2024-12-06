import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as Font from "expo-font";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import ProfilePage from "./Profile";
import CameraScreen from "./CameraScreen";
import AddProductDetailsScreen from "./AddProductDetailsScreen";
import { SafeAreaView } from "react-native-safe-area-context";

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
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <Drawer.Navigator
      initialRouteName="MainDashboard"
      screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="MainDashboard" component={DashboardContent} />
      <Drawer.Screen name="AddProductDetailsScreen" component={AddProductDetailsScreen} />
      <Drawer.Screen name="Specials" component={SpecialsScreen} />
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
    <SafeAreaView style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <LinearGradient
          colors={["#FFEE00", "#00F0FF"]}
          style={styles.bottomGradient}
          start={{ x: 0.5, y: 0.985 }}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              source={require("../assets/images/menu-icon.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.rightHeaderIcons}>
            <TouchableOpacity onPress={() => navigation.navigate("Messages")}>
              <Image
                source={require("../assets/images/message-icon.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
            >
              <Image
                source={require("../assets/images/notification-bell.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cameraSection}>
          <TouchableOpacity onPress={() => navigation.navigate("CameraScreen")}>
            <Image
              source={require("../assets/images/camera-icon.png")}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
          <Image
            source={require("../assets/images/Popup.png")}
            style={styles.popupImage}
          />
        </View>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity
          style={styles.addManuallyButton}
          onPress={() => navigation.navigate("AddProductDetailsScreen")}
        >
          <Text style={styles.addManuallyText}>+ Add manually</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.swipeIndicator} />
        <Text style={styles.productsTitle}>My Products</Text>
        <View style={styles.emptyBox}>
          <Image
            source={require("../assets/images/empty-box.png")}
            style={styles.emptyBoxImage}
          />
          <Text style={styles.emptyBoxText}>
            Gee! Add a product to get started
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CustomDrawerContent = (props: any) => (
  <DrawerContentScrollView {...props}>
    <DrawerItem
      label="Specials"
      onPress={() => props.navigation.navigate("Specials")}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Buy"
      onPress={() => props.navigation.navigate("Buy")}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Sell"
      onPress={() => props.navigation.navigate("Sell")}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Profile"
      onPress={() => props.navigation.navigate("ProfilePage")}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Settings"
      onPress={() => props.navigation.navigate("Settings")}
      labelStyle={styles.drawerItemText}
    />
    <DrawerItem
      label="Help"
      onPress={() => props.navigation.navigate("Help")}
      labelStyle={styles.drawerItemText}
    />
  </DrawerContentScrollView>
);

const SpecialsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Specials Screen</Text>
  </View>
);

const BuyScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Buy Screen</Text>
  </View>
);

const SellScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Sell Screen</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Profile Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Settings Screen</Text>
  </View>
);

const HelpScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenText}>Help Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  loadingText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
  },
  topSection: {
    height: height * 0.6, // 70% of screen
    paddingHorizontal: 32,
    paddingTop: 42,
    position: "relative", // To position the gradient inside the top section
  },
  bottomGradient: {
    position: "absolute", // Absolute to cover the whole top section
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40%",
  },
  rightHeaderIcons: {
    flexDirection: "row",
    gap: 32,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  cameraSection: {
    alignItems: "center",
    marginVertical: 16,
  },
  popupImage: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
  cameraIcon: {
    width: 40,
    height: 30,
    resizeMode: "contain",
  },
  orText: {
    textAlign: "center",
    marginTop: 32,
    fontSize: 14,
    color: "#000000",
    fontFamily: "Poppins-Medium",
  },
  addManuallyButton: {
    marginTop: 8,
    alignSelf: "center",
    padding: 6,
    borderWidth: 1.5,
    borderColor: "#000000",
    borderRadius: 1,
  },
  addManuallyText: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Poppins-Medium",
  },
  bottomSection: {
    height: height * 0.4, // 30% of screen
    backgroundColor: "#F5F5F5",
    padding: 16,
    borderTopWidth: 2,
  },
  swipeIndicator: {
    alignSelf: "center",
    width: 40,
    height: 4,
    backgroundColor: "#CCCCCC",
    borderRadius: 2,
    marginBottom: 12,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "Poppins-SemiBold",
  },
  emptyBox: {
    alignItems: "center",
    marginTop: 16,
  },
  emptyBoxImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  emptyBoxText: {
    marginTop: 16,
    fontSize: 12,
    width: 120,
    textAlign: 'center',
    fontFamily: "Poppins-Medium",
    color: "#A9A9A9",
  },
  drawerItemText: {
    fontSize: 16,
    fontFamily: "Poppins-Medium",
    color: "#000000",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  screenText: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
  },
});

export default MainDashboardScreen;
