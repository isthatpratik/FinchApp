import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const SellingCriteriaScreen = ({ navigation }: any) => {
  const [discount, setDiscount] = useState(45);
  const [sellingPrice, setSellingPrice] = useState(1500);

  const handleContinue = () => {
    navigation.navigate('SellingCriteriaStep2Screen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selling Criteria</Text>
      <View style={styles.productBox}>
        <Text>Airbook Ultra</Text>
        <Text>Purchased: 10 Jun 2020</Text>
        <Text>Expected SP: $1200</Text>
      </View>
      <View style={styles.addPhotoContainer}>
        <Text>Add Product Photos</Text>
        <View style={styles.photoBoxes}>
          <TouchableOpacity style={styles.addPhotoBox}>
            <Text>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addPhotoBox}></TouchableOpacity>
          <TouchableOpacity style={styles.addPhotoBox}></TouchableOpacity>
        </View>
      </View>
      <Text>Recommended Price: $1200</Text>
      <TextInput
        style={styles.input}
        value={`$${sellingPrice}`}
        onChangeText={text => setSellingPrice(Number(text.replace('$', '')))}
      />
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  productBox: { padding: 16, borderWidth: 1, borderRadius: 8, marginBottom: 16 },
  addPhotoContainer: { marginBottom: 16 },
  photoBoxes: { flexDirection: 'row', marginTop: 8 },
  addPhotoBox: { width: 50, height: 50, borderWidth: 1, marginRight: 8, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 16 },
  continueButton: { backgroundColor: '#000', padding: 12, alignItems: 'center', borderRadius: 8 },
  continueText: { color: '#fff', fontSize: 16 },
});

export default SellingCriteriaScreen;
