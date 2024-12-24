import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomCheckBox = ({ title, checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
      <Ionicons
        name={checked ? 'checkbox' : 'square-outline'}
        size={24}
        color={checked ? '#000' : '#E0E0E0'}
      />
      <Text style={{ marginLeft: 8, fontSize: 12, fontFamily: 'PoppinsMedium' }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;