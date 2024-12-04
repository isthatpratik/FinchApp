import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import MainDashboardScreen from '../screens/MainDashboard';  // Ensure this import path is correct

const Drawer = createDrawerNavigator();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MainDashboard">
        <Drawer.Screen
          name="MainDashboard"
          component={MainDashboardScreen}
          options={{ headerShown: false }} // Disable header if you have custom header in MainDashboardScreen
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
