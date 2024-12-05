import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

const AddProductDetailsScreen: React.FC = () => {
  const navigation = useNavigation();
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState({
    purchasePrice: '',
    currency: 'USD',
    productCategory: '',
    productName: '',
    brandName: '',
    serialNumber: '',
    modelNumber: '',
  });

  const handleInputChange = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
  };

  const navigateToDashboard = () => {
    navigation.navigate('MainDashboard');
  };

  const renderPageOne = () => (
    <View style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={['#00F0FF', '#FFEE00']}
        style={styles.headerContainer}
        start={{ x: 0.5, y: 0.9 }}
      >
        <View style={styles.header}>
          <Ionicons
            name="arrow-back-outline"
            size={25}
            color="#000"
            onPress={navigateToDashboard}
          />
          <Text style={styles.headerTitle}>Product Details</Text>
          <Ionicons name="close-outline" size={28} color="transparent" />
        </View>
      </LinearGradient>

      {/* Form */}
      <View style={styles.form}>
        {/* Purchase Price */}
        <Text style={styles.purchasePriceLabel}>Purchase Price</Text>
        <View style={styles.purchasePriceSection}>
          <TextInput
            style={styles.purchasePriceInput}
            placeholder="2000.00"
            keyboardType="numeric"
            value={formData.purchasePrice}
            onChangeText={(text) => handleInputChange('purchasePrice', text)}
          />
          <View style={styles.currencyDropdownWrapper}>
            <Picker
              selectedValue={formData.currency}
              style={styles.currencyDropdown}
              onValueChange={(itemValue) =>
                handleInputChange('currency', itemValue)
              }
            >
              <Picker.Item label="USD" value="USD" />
              <Picker.Item label="INR" value="INR" />
            </Picker>
          </View>
        </View>

        {/* Other Fields */}
        <Text style={styles.label}>Product Category</Text>
        <View style={styles.picker}>
            <Picker
            selectedValue={formData.productCategory}
            onValueChange={(itemValue) =>
                handleInputChange('productCategory', itemValue)
            }
            >
            <Picker.Item label="Laptops" value="Laptops" />
            <Picker.Item label="Mobiles" value="Mobiles" />
            </Picker>
        </View>

        <Text style={styles.label}>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product name"
          value={formData.productName}
          onChangeText={(text) => handleInputChange('productName', text)}
        />

        <Text style={styles.label}>Brand Name</Text>
        <View style={styles.picker}>
            <Picker
            selectedValue={formData.brandName}
            onValueChange={(itemValue) =>
                handleInputChange('brandName', itemValue)
            }
            >
            <Picker.Item label="Green apple" value="Green apple" />
            <Picker.Item label="Other" value="Other" />
            </Picker>
        </View>

        <Text style={styles.label}>Serial Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter serial number"
          value={formData.serialNumber}
          onChangeText={(text) => handleInputChange('serialNumber', text)}
        />

        <Text style={styles.label}>Model Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter model number"
          value={formData.modelNumber}
          onChangeText={(text) => handleInputChange('modelNumber', text)}
        />
      </View>

      {/* Footer */}
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => setPage(2)}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );

  return page === 1 ? renderPageOne() : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    fontFamily: 'PoppinsMedium',
  },
  headerContainer: {
    paddingTop: 32,
    borderBottomWidth: 2,
  },
  purchasePriceLabel: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000',
    fontFamily: 'PoppinsMedium',
    textAlign: 'center',
  },
  picker: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderWidth: 1.5,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'PoppinsSemiBold',
    color: '#000',
  },
  form: {
    flex: 1,
    marginTop: 8,
    padding: 32,
    width: '100%',
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: '#000',
    fontFamily: 'PoppinsMedium',
    textAlign: 'left',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 1,
    paddingHorizontal: 16,
    height: 55,
    marginBottom: 16,
    backgroundColor: '#FFF',
    width: '100%',
  },
  purchasePriceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    width: '70%',
    alignSelf: 'center',
    borderBottomWidth: 1.5, // Bottom border for price input and dropdown
    borderColor: '#000',
  },
  purchasePriceInput: {
    flex: 1,
    fontSize: 20,
    color: '#000',
    fontFamily: 'PoppinsSemiBold',
    textAlign: 'center',
  },
  currencyDropdownWrapper: {
    flex: 1,
    textDecorationColor: '#000',
  },
  currencyDropdown: {
    backgroundColor: 'transparent', // Transparent background
    borderWidth: 0,
    fontFamily: 'PoppinsSemiBold',
    borderColor: 'transparent',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 16,
    borderRadius: 1.5,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 32,
    width: '85%',
    alignSelf: 'center',
  },
  continueButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AddProductDetailsScreen;
