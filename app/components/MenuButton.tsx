import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  MainDashboard: undefined;
  TermsAndConditions: undefined;
};

const MenuButton = () => {
  const navigation = useNavigation<DrawerNavigationProp<RootDrawerParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
      <Image
        source={require('../assets/images/menu-icon.png')}
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default MenuButton;
