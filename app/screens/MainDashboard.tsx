import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import Drawer Navigator
import * as Font from 'expo-font';

const { height } = Dimensions.get('window'); // Get screen height

// Create the Drawer Navigator
const Drawer = createDrawerNavigator();

const MainDashboardScreen: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Load custom fonts
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []); 

  // Show a loading state while fonts are being loaded
  if (!fontLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  return (
    <Drawer.Navigator initialRouteName="MainDashboard" screenOptions={
      {headerShown: false}
    }>
      {/* Define the screens inside the Drawer Navigator */}
      <Drawer.Screen name="MainDashboard" component={DashboardContent}/>
      <Drawer.Screen name="Messages" component={MessagesDrawer} />
      <Drawer.Screen name="Notifications" component={NotificationsDrawer} />
    </Drawer.Navigator>
  );
};

const MessagesDrawer = () => (
  <View style={styles.drawerContainer}>
    <Text style={styles.drawerText}>Messages</Text>
    {/* Additional content for Messages drawer */}
  </View>
);

const NotificationsDrawer = () => (
  <View style={styles.drawerContainer}>
    <Text style={styles.drawerText}>Notifications</Text>
    {/* Additional content for Notifications drawer */}
  </View>
);

// Create the main content of the Dashboard
const DashboardContent = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Top Yellow Section */}
      <View style={styles.topSection}>
        {/* Solid Yellow Background */}
        <View style={styles.yellowBackground} />

        {/* Gradient at Bottom of Top Section */}
        <LinearGradient
          colors={['#FFEE00', '#00F0FF']}
          style={styles.bottomGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />

        {/* Header Icons */}
        <View style={styles.header}>
          <View style={styles.headerIcons}>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={require('../assets/images/menu-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
              <Image
                source={require('../assets/images/notification-bell.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
              <Image
                source={require('../assets/images/message-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Camera Icon with Speech Bubble */}
        <View style={styles.cameraSection}>
          <Image
            source={require('../assets/images/camera-icon.png')}
            style={styles.cameraIcon}
          />
          <Image
            source={require('../assets/images/Popup.png')}
            style={styles.popupImage}
          />
        </View>

        {/* Add Manually Section */}
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={styles.addManuallyButton}>
          <Text style={styles.addManuallyText}>+ Add manually</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <View style={styles.swipeIndicator} />
        <Text style={styles.productsTitle}>My Products</Text>
        <View style={styles.emptyBox}>
          <Image
            source={require('../assets/images/empty-box.png')}
            style={styles.emptyBoxImage}
          />
          <Text style={styles.emptyBoxText}>
            Gee! Add a product to get started
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  // Loading State
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  loadingText: {
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },

  // Top Section
  topSection: {
    height: height * 0.6,
    paddingHorizontal: 32,
    paddingTop: 42,
  },
  yellowBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '120%',
    backgroundColor: '#FFEE00',
  },
  popupImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40%',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 32,
  },
  icon: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
  },

  // Camera Section
  cameraSection: {
    alignItems: 'center',
    marginVertical: 16,
  },
  cameraIcon: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
  },
  orText: {
    textAlign: 'center',
    marginTop: 32,
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },
  addManuallyButton: {
    marginTop: 8,
    alignSelf: 'center',
    padding: 6,
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 1,
  },
  addManuallyText: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'Poppins-Medium',
  },

  // Bottom Gradient Section
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '5%',
  },

  // Bottom Section
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: height * 0.35,
    backgroundColor: '#F5F5F5',
    padding: 16,
    elevation: 5,
    borderTopWidth: 2,
  },
  swipeIndicator: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    backgroundColor: '#CCCCCC',
    borderRadius: 2,
    marginBottom: 12,
  },
  productsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'Poppins-SemiBold',
  },
  emptyBox: {
    alignItems: 'center',
    marginTop: 16,
  },
  emptyBoxImage: {
    width: 60,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  emptyBoxText: {
    fontSize: 14,
    width: 160,
    color: '#828282',
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
  },

  // Drawer styling
  drawerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  drawerText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
    marginBottom: 20,
  },
});

export default MainDashboardScreen;
