import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SellingCriteriaScreen = ({ navigation }: any) => {
  const [productCondition, setProductCondition] = useState('Good');
  const [sellingPrice, setSellingPrice] = useState(1200);

  const handleContinue = () => {
    navigation.navigate('SellingCriteriaS2');
  };

  return (
    <View style={styles.container}>
      <View style={styles.productBox}>
        <Text>Airbook Ultra</Text>
        <Text>Purchased: 10 Jun 2020</Text>
        <Text>Warranty expires in: 18 months</Text>
      </View>
      <View style={styles.photoSection}>
        <Text>Add Product Photos</Text>
        <View style={styles.photoBoxes}>
          <TouchableOpacity style={styles.photoBox}>
            <Text>+</Text>
          </TouchableOpacity>
          <View style={styles.photoBox} />
          <View style={styles.photoBox} />
        </View>
      </View>
      <Text>Product Condition</Text>
      <TextInput
        style={styles.input}
        value={productCondition}
        onChangeText={setProductCondition}
      />
      <Text>Expected Selling Price</Text>
      <View style={styles.priceRow}>
        <Text>${sellingPrice} (Recommended)</Text>
        <TouchableOpacity>
          <Text style={styles.changeText}>Change</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  productBox: { borderWidth: 1, padding: 16, borderRadius: 8, marginBottom: 16 },
  photoSection: { marginBottom: 16 },
  photoBoxes: { flexDirection: 'row', marginTop: 8 },
  photoBox: { width: 50, height: 50, borderWidth: 1, marginRight: 8, justifyContent: 'center', alignItems: 'center' },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 16 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  changeText: { color: 'blue' },
  continueButton: { backgroundColor: '#000', padding: 12, alignItems: 'center', borderRadius: 8 },
  continueText: { color: '#fff', fontSize: 16 },
});

export default SellingCriteriaScreen;
