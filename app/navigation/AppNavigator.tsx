import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import MainDashboardScreen from '../screens/MainDashboard';
import ProfilePage from '../screens/Profile';
import CameraScreen from '../screens/CameraScreen'; // Import CameraScreen
import AddProductDetailsScreen from '../screens/AddProductDetailsScreen';
import AddProductDetailScreen from '../screens/AddProductDetailsScreen';
import AdditionalDetailsScreen from '../screens/AdditionalDetailsScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Main Dashboard with Drawer Navigation
const DashboardDrawer = () => (
  <Drawer.Navigator initialRouteName="MainDashboard">
    <Drawer.Screen name="MainDashboard" component={MainDashboardScreen} />
    <Drawer.Screen name="ProfilePage" component={ProfilePage} />
    {/* Add more drawer links as necessary */}
  </Drawer.Navigator>
);

// Stack Navigation: Terms and Conditions -> Dashboard -> CameraScreen
const AppNavigator = () => (
  <Stack.Navigator initialRouteName="TermsAndConditions">
    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditionsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Dashboard"
      component={DashboardDrawer}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CameraScreen"
      component={CameraScreen} // Make sure this is imported
      options={{ headerShown: false }}
    />
    <Stack.Screen 
      name="AddProductDetailsScreen" 
      component={AddProductDetailsScreen} 
      options={{ headerShown: false }} 
    />
    <Stack.Screen
        name="AdditionalDetailsScreen"
        component={AdditionalDetailsScreen}
        options={{ headerShown: false }}
      />
  </Stack.Navigator>
);

export default AppNavigator;
