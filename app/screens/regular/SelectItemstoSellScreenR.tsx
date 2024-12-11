import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For Back and Cross icons (Install expo icons if needed)

const SelectProductScreen = ({ navigation }: any) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxToggle = () => {
    setIsSelected(!isSelected);
  };

  const handleContinue = () => {
    if (isSelected) {
      navigation.navigate('SellingCriteriaS1');
    } else {
      alert('Please select the product with the warranty information.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Select a product</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Product Box */}
      <View style={styles.productBox}>
        <View style={styles.productDetails}>
          <View>
            <Text style={styles.productName}>Airbook Ultra</Text>
            <Text style={styles.subText}>John's laptop</Text>
            <Text style={styles.subText}>Purchased: 10 Jun 2020</Text>
            <Text style={styles.subText}>Expected SP: $1200</Text>
            <View style={styles.warrantyBox}>
              <Text style={styles.warrantyText}>
                Warranty expires in: <Text style={styles.highlight}>18 months</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Checkbox */}
        <TouchableOpacity
          style={[styles.checkbox, isSelected && styles.checkboxSelected]}
          onPress={handleCheckboxToggle}
        />
      </View>

      {/* Continue Button */}
      <TouchableOpacity
        style={[styles.continueButton, !isSelected && styles.continueButtonDisabled]}
        onPress={handleContinue}
        disabled={!isSelected}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 16 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 20,
  },
  title: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', flex: 1 },
  productBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  productDetails: { flex: 1, justifyContent: 'space-between' },
  productName: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  subText: { fontSize: 14, color: '#666', marginBottom: 4 },
  warrantyBox: {
    marginTop: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    backgroundColor: '#dff5d8',
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  warrantyText: { fontSize: 14, color: '#333' },
  highlight: { color: '#34a853', fontWeight: 'bold' },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#666',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: '#000',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  continueButtonDisabled: {
    backgroundColor: '#ccc',
  },
  continueText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default SelectProductScreen;