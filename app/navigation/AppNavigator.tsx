import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TermsAndConditionsScreen from '../screens/TermsAndConditionsScreen';
import MainDashboardScreen from '../screens/MainDashboard';
import ProfilePage from '../screens/Profile'; // Add other screens as needed

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

// Stack Navigation: Terms and Conditions -> Dashboard
const AppNavigator = () => (
  <Stack.Navigator initialRouteName="TermsAndConditions">
    <Stack.Screen
      name="TermsAndConditions"
      component={TermsAndConditionsScreen}
      options={{ headerShown: false }} // Hide header for Terms screen
    />
    <Stack.Screen
      name="Dashboard"
      component={DashboardDrawer}
      options={{ headerShown: false }} // Hide header for the Dashboard
    />
  </Stack.Navigator>
);

export default AppNavigator;
