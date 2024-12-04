import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation, DrawerActions } from '@react-navigation/native';  // UseDrawerActions
import * as Font from 'expo-font';

const { height } = Dimensions.get('window'); // Get screen height

const MainDashboardScreen: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  // Use navigation hook for DrawerActions
  const navigation = useNavigation();

  // Load the Poppins font
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

  if (!fontLoaded) {
    return <Text>Loading...</Text>; // Loading state while the font is being loaded
  }

  return (
    <View style={styles.container}>
      {/* Top Yellow Section */}
      <View style={styles.topSection}>
        {/* Solid Yellow Background */}
        <View style={styles.yellowBackground} />

        {/* New Gradient Rectangle at Bottom of Top Section */}
        <LinearGradient
          colors={['#FFEE00', '#00F0FF']} // Yellow to a different shade of yellow
          style={styles.bottomGradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />

        {/* Header Icons */}
        <View style={styles.header}>
          {/* Menu Icon */}
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}  // Opening Drawer
          >
            <Image
              source={require('../assets/images/menu-icon.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <View style={styles.rightIcons}>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/message-icon.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/notification-bell.png')}
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
            source={require('../assets/images/Popup.png')} // Replaced speech bubble with Popup.png
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

export default MainDashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    margin: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '40%',
  },
  rightIcons: {
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
    backgroundColor: 'transparent',
    marginBottom: 0,
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
    height: height * 0.38,
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
});
