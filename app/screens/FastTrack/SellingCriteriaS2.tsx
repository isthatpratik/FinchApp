import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SellingCriteriaStep2Screen = ({ navigation }: any) => {
  const handleListProduct = () => {
    navigation.navigate('SuccessPopupScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selling Criteria</Text>
      <View style={styles.productBox}>
        <Text>Airbook Ultra</Text>
      </View>
      <Text>Choose one</Text>
      <View style={styles.optionRow}>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Pick-up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Delivery</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.input} placeholder="Add a description (40 words)" />
      <Text>Preferred payment method</Text>
      <View style={styles.optionRow}>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Cash</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Bank Transfer</Text>
        </TouchableOpacity>
      </View>
      <Text>Is the price negotiable?</Text>
      <View style={styles.optionRow}>
        <TouchableOpacity style={styles.optionButton}>
          <Text>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text>No</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.listButton} onPress={handleListProduct}>
        <Text style={styles.listText}>List the product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  productBox: { borderWidth: 1, padding: 16, borderRadius: 8, marginBottom: 16 },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 16 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
  optionButton: { borderWidth: 1, padding: 12, borderRadius: 8, flex: 1, marginHorizontal: 4, alignItems: 'center' },
  listButton: { backgroundColor: '#000', padding: 12, borderRadius: 8, alignItems: 'center' },
  listText: { color: '#fff', fontSize: 16 },
});

export default SellingCriteriaStep2Screen;
