import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SelectProductScreen = ({ navigation }: any) => {
  const handleContinue = () => {
    navigation.navigate('SellingCriteriaScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a product</Text>
      <View style={styles.productBox}>
        <View style={styles.productDetails}>
          <Image source={require('C:/Users/fusio/Desktop/FinchApp/app/assets/images/icons/Group30.png')} style={styles.productImage} />
          <View>
            <Text style={styles.productName}>Airbook Ultra</Text>
            <Text>John's laptop</Text>
            <Text>Purchased: 10 Jun 2020</Text>
            <Text>Expected SP: $1200</Text>
            <Text style={styles.warranty}>Warranty expires in: <Text style={styles.highlight}>18 months</Text></Text>
          </View>
        </View>
        <TouchableOpacity style={styles.checkbox}></TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 16 },
  productBox: { flexDirection: 'row', borderWidth: 1, padding: 12, borderRadius: 8, marginBottom: 16 },
  productDetails: { flex: 1, flexDirection: 'row' },
  productImage: { width: 50, height: 50, marginRight: 12 },
  productName: { fontSize: 16, fontWeight: 'bold' },
  warranty: { marginTop: 4 },
  highlight: { color: 'green' },
  checkbox: { width: 24, height: 24, borderWidth: 2, borderRadius: 4, alignSelf: 'center' },
  continueButton: { backgroundColor: '#000', padding: 12, alignItems: 'center', borderRadius: 8 },
  continueText: { color: '#fff', fontSize: 16 },
});

export default SelectProductScreen;
